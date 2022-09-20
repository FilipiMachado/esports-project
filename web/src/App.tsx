import "./styles/main.css";

import logoImg from "./assets/esports-logo.svg";
import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="main-logo" />

      <h1 className="text-5xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerURL="./game-example.png"
          title="League of Legends"
          adsCount={4}
        />
        <GameBanner
          bannerURL="./game-example.png"
          title="League of Legends"
          adsCount={4}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
