import './App.css';
import './Components/Controller/ScrollController/ControllerSetConfig'
import { Card1 } from './Components/Card1/Card1';
import { Card2 } from './Components/Card2/Card2';
import { Card3 } from './Components/Card3/Card3';
import { Card4 } from './Components/Card4/Card4';
import { Card5 } from './Components/Card5/Card5';
function App() {

  return (
    <div className="App">
     <Card1></Card1>
     <Card2></Card2>
     <Card3></Card3>
     <Card4></Card4>
     <Card5></Card5>
    </div>
  );
}

export default App;
