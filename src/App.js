import './App.css';
import {Listing} from './Listing/Listing';

function App() {
  return (
    <div className="App">
      <Listing offersArray={require('./Json/offers.json')}/>
    </div>
  );
}

export default App;
