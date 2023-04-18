import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you." name="Stuart." age="You are 34 years old." />
        {/* <StatefulGreeting name="Megan" greeting="I'm a Stateful class component!"/> */}
        {/* <StatefulGreetingWithCallback name="Dorito" greeting="You are fluffy."/> */}
        <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
