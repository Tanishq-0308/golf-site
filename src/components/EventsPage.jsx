
import React, { useState, useMemo, useEffect } from 'react';
import { FaCalendarAlt, FaSearch, FaChevronDown, FaChevronRight, FaTimes, FaTrophy, FaCoins } from 'react-icons/fa';
import eventsData from '../data/EventsData.json';
import NabarRegular from '../components/NabarRegular';
import FootterSection from './FootterSection';

// --- Helper Components for Rendering Results ---

// Card for displaying a single game's results (e.g., "Quota Game", "Skins")
const GameResultCard = ({ game }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
    <div className="bg-gray-50 p-4 rounded-t-xl border-b border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 flex items-center">
        {game.name.includes("Skins") ? <FaCoins className="mr-3 text-yellow-500" /> : <FaTrophy className="mr-3 text-yellow-500" />}
        {game.name}
      </h3>
      {game.description && <p className="text-sm text-gray-600 mt-1">{game.description}</p>}
    </div>
    <div className="p-4">
      {game.winners && game.winners.map((winner, index) => (
        <div key={index} className="py-3 border-b border-gray-100 last:border-b-0">
          <div className="flex justify-between items-start gap-4">
            <div>
              {winner.place && <p className="font-semibold text-gray-700">{winner.place}</p>}
              {winner.note && <p className="font-semibold text-gray-700">{winner.note}</p>}
              {winner.players && winner.players.length > 0 && (
                <p className="text-sm text-gray-600 mt-1">{winner.players.join(', ')}</p>
              )}
            </div>
            <div className="text-right flex-shrink-0">
              {winner.score && <p className="font-bold text-lg text-blue-600">{winner.score}</p>}
              {winner.prize && <p className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">{winner.prize}</p>}
            </div>
          </div>
        </div>
      ))}
      {game.scores && <AllScoresTable scores={game.scores} />}
    </div>
  </div>
);

// Table for "All Team Scores"
const AllScoresTable = ({ scores }) => (
  <div className="flow-root">
    <div className="-mx-4 -my-2 overflow-x-auto">
      <div className="inline-block min-w-full py-2 align-middle px-4">
        <div className="flex border-b border-gray-300 pb-2 text-sm font-semibold text-gray-600">
          <div className="w-12 text-center">#</div>
          <div className="flex-grow pl-2">Team Members</div>
          <div className="w-20 text-right">Gross</div>
          <div className="w-20 text-right">Net</div>
        </div>
        <div>
          {scores.map((score, index) => (
            <div key={index} className="flex items-center border-b border-gray-100 py-3 text-sm">
              <div className="w-12 text-center font-semibold text-gray-700">{score.rank}</div>
              <div className="flex-grow text-gray-800 pl-2">{score.players.join(' + ')}</div>
              <div className="w-20 text-right font-bold text-gray-800">{score.gross}</div>
              <div className="w-20 text-right font-bold text-blue-600">{score.net}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


// --- Main Modal Component ---

const ResultsModal = ({ event, onClose }) => {
  if (!event) return null;

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300" onClick={onClose}>
      <div className="bg-[#F7F4EC] rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-5 border-b border-gray-200 flex justify-between items-start rounded-t-xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{formattedDate}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors p-1">
            <FaTimes size={22} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {event.results && event.results.games ? (
            event.results.games.map((game, index) => (
              <GameResultCard key={index} game={game} />
            ))
          ) : (
            <div className="text-center text-gray-600 py-12">
              <p className="font-semibold">No detailed results available for this event.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable component for each event item in the list
const EventItem = ({ event, onSelectEvent }) => {
  const { id, name, date } = event;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div onClick={() => onSelectEvent(event)} className="block group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex justify-between items-center transition-shadow duration-200 group-hover:shadow-md cursor-pointer">
        <div>
          <p className="font-bold text-gray-800">{name}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <FaCalendarAlt className="mr-2" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 group-hover:bg-gray-200 p-2 rounded-full transition-colors">
            <FaChevronRight className="text-gray-500 h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    return eventsData
      .filter(event => {
        const eventYear = new Date(event.date).getFullYear().toString();
        if (selectedYear !== 'All Years' && eventYear !== selectedYear) {
          return false;
        }
        if (searchTerm && !event.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false;
        }
        return true;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchTerm, selectedYear]);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(eventsData.map(event => new Date(event.date).getFullYear().toString()))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedEvent]);

  return (
    <div>
      <NabarRegular />
      <div className="min-h-screen bg-gray-100 font-sans">
        <header className="bg-gray-800 text-white text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1700667315305-ef2a027f9078?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="bg-black bg-opacity-50 py-10">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl font-extrabold mb-2">Event Pairings & Results</h1>
              <p className="text-lg text-gray-300">Browse through all past tournament results, pairings, and event outcomes from Paradise Golf events.</p>
            </div>
          </div>
        </header>

        <main className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:w-2/3">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="relative w-full sm:w-1/3">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <EventItem key={event.id} event={event} onSelectEvent={setSelectedEvent} />
                ))
              ) : (
                <div className="text-center text-gray-500 py-10">
                  <p>No events found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </main>

        <ResultsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </div>
      <FootterSection/>
    </div>
  );
}
