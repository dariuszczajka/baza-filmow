import './App.css';
import TopBar from "./components/top-bar";
import Content from "./components/content.jsx";
import Footer from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
