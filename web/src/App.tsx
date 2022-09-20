import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import GameBanner from "./components/GameBanner";
import CreateAdBanner from "./components/CreateAdBanner";
import { DefaultInput } from "./components/Form/DefaultInput";

import "./styles/main.css";

import logoImg from "./assets/esports-logo.svg";

interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setGames(data[0]);
      });
  }, []);

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
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerURL={game.bannerURL}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2834] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio
            </Dialog.Title>

            <form className="mt-8">
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="game">
                  Qual o game?
                </label>
                <DefaultInput
                  id="game"
                  type="text"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <DefaultInput
                  id="name"
                  type="text"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <DefaultInput
                    id="yearsPlaying"
                    type="number"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div>
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <DefaultInput id="discord" type="text" placeholder="User#0000" />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                </div>
                <div>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div>
                    <DefaultInput id="hourStart" type="time" placeholder="De" />
                    <DefaultInput id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div>
                <DefaultInput id="useVoiceChannel" type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
