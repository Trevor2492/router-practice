import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import Other from "./components/Other";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(false);

  return (
    <Router>
      <div className="App">
        <Route
          path="/login"
          render={() => <Login user={user} setUser={setUser} />}
        />
        {user && <Route path="/main" render={() => <Main />} />}
        <Route path="/other" render={() => <Other />} />
      </div>
    </Router>
  );
}

export default App;
