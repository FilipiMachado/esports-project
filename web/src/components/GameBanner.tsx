function GameBanner() {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src="/game-example.png" alt="" />

      <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block ml-2">
          League of Legends
        </strong>
        <span className="text-zinc-300 text-sm block mt-1 ml-2">
          4 anúncios
        </span>
      </div>
    </a>
  );
}

export default GameBanner;
