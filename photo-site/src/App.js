import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import EventBinding from './components/EventBinding';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodAsPropsParent';

function App() {
  return (
    <div className="App">
        {/* <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you." name="Stuart." age="You are 34 years old." /> */}
        {/* <StatefulGreeting name="Megan" greeting="I'm a Stateful class component!"/> */}
        {/* <StatefulGreetingWithCallback name="Dorito" greeting="You are fluffy."/> */}
        {/* <StatefulGreetingWithPrevState /> */}
        {/* <EventsClass />
        <EventsFunctional />
        <EventBinding />
        <ConditionalRenderingFunctional connected={false} />
        <ConditionalRenderingClass /> */}
        {/* <NestingComponents /> */}
        <MethodsAsPropsParent />
        <MethodsAsPropsChild />
    </div>
  );
}

export default App;
