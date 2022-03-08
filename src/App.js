// import logo from './logo.svg';
import './App.css';
import NabBar from "./Components/NavBar"
import TextFormater from "./Components/TextFormater"

function App() {
  return (
    <>
      <NabBar title='TextFormater' link_1='Home' link_2='About' />
      <div className="container my-3">
        <TextFormater heading="Enter the Text to Format" />
      </div>
    </>
  );
}

export default App;
