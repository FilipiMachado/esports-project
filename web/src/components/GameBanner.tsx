interface GameBannerProps {
  bannerURL: string;
  title: string;
  adsCount: number;
}

function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerURL} alt="" />
      <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block ml-2">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm block mt-1 ml-2">
          {props.adsCount} ad(s)
        </span>
      </div>
    </a>
  );
}

export default GameBanner;
