import "./styles/main.css";

import logoImg from './assets/esports-logo.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="main-logo" />
    </div>
  );
}

export default App;
