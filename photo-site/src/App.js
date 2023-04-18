import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you." name="Stuart." age="You are 34 years old." />
    </div>
  );
}

export default App;
