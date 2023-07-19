import Rates from './components/Rates';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Rates name="Безлимитный 300" price="300" speed="10"></Rates>
      <Rates name="Безлимитный 450" price="450" speed="50"></Rates>
      <Rates name="Безлимитный 550" price="550" speed="100"></Rates>
      <Rates name="Безлимитный 1000" price="1000" speed="200"></Rates>
    </div>
  );
}

export default App;
