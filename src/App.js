import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
         <img src={logo} className="App-logo img-fluid" alt="logo" />
         <h1 className="App-title">Dictionary</h1>
        </header>
        
        <main>
          <Dictionary defaultKeyword="hello"/>
        </main>

        <footer className="App-footer">
          <small>
          This project was coded by Rahaba Motaung  and is {""}
          <a href="https://github.com/Habba101/react-weather-app" target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub
          </a> and is <a href="https://habbas-react-weather-app.netlify.app/">hosted on Netlify</a>
          </small>
        </footer> 

      </div>
    </div>
  );
}
 
