import Home from "./modules/home/Home";
import { ICard } from "./commons/types/ICard";
import data from "./commons/constants/data";

function App() {

  return (
    <div>
      <Home data={data}/>
    </div>
  );
}

export default App;
