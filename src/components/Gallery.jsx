import React from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1679505064703-e7a080939fcc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605144884374-ecbb643615f6?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1443706340763-4b60757a36ce?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543105177-748ceda71741?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592937238247-cd0090e02f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "http://plus.unsplash.com/premium_photo-1678415262915-e50f254ebb3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Gallery() {
  const getGridClasses = (index) => {
    const layouts = [
      "col-span-3 row-span-2", // Large left (6 cells)
      "col-span-2 row-span-1", // Top middle (2 cells) 
      "col-span-1 row-span-2", // Tall right (2 cells)
      "col-span-2 row-span-1", // Second row middle (2 cells)
      "col-span-3 row-span-2", // Large bottom left (6 cells)
      "col-span-3 row-span-1", // Bottom right span (3 cells)
      "col-span-3 row-span-1", // Bottom right span (3 cells)
    ];
    return layouts[index] || "col-span-1 row-span-1";
  };

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#006838] mb-3">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Beauty and elegance of our partner courses
          </p>
        </div>

        {/* Mobile Layout: Single column */}
        <div className="lg:hidden space-y-4 sm:space-y-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-64 sm:h-72"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <img
                loading="lazy"
                src={src}
                alt={`Golf Course ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              <div className="absolute top-3 right-3 z-20">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout: Complex grid */}
        <div className="hidden lg:grid grid-cols-6 grid-rows-4 gap-6 h-[1500px] w-full max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className={`${getGridClasses(index)} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <img
                src={src}
                alt={`Golf Course ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              <div className="absolute top-3 right-3 z-20">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
