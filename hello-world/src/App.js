// import logo from './logo.svg';
import './App.css';
// import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
// import ClassClick from './components/ClassClick';
// import FunctionClick from './components/FunctionClick';
// import Counter from './components/Counter';
// import Greet from "./components/Greet"
// import Welcome from "./components/Welcome"
// import Message from "./components/Message"

function App() {
  return (
    <div className="App">
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Greet name="Ali" heroName="DeadMeat"><p>This is children props</p></Greet> */}
      {/* <Greet name="Mast" heroName="Caged"><button>Actions</button></Greet> */}
      {/* <Greet name="Reza" heroName="Hmm"></Greet> */}
      {/* <FunctionClick /> */}
      {/* <Welcome name="Ali" heroName="DeadMeat" /> */}
      {/* <Welcome name="Mast" heroName="Caged" /> */}
      {/* <Welcome name="Reza" heroName="Hmm" /> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
