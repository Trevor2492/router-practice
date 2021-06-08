import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Other from "./components/Other";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
        <Route path="/main" render={() => <Main />} />
        <Route path="/other" render={() => <Other />} />
      </div>
    </Router>
  );
}

export default App;
