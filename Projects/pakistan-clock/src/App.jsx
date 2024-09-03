import Clockheading from "./components/clockheading";
import Clockdescrip from "./components/clockdesc";
import Currenttime from "./components/currenttime";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
<div>
<Clockheading></Clockheading>
<Clockdescrip></Clockdescrip>
<Currenttime></Currenttime>
</div>
  );
}
export default App;
