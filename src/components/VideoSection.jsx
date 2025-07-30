const VideoSection = () => {
  return (
    <div className="bg-green-500 p-8 flex flex-col items-center justify-center space-y-8">
      <div className="text-4xl text-center font-bold text-white">
        The Paradise Experience
      </div>

      <div className="w-full max-w-3xl aspect-video p-3">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/zZ2Ocm_hks8?si=-PTDI0Z3MYrX9Kbr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
