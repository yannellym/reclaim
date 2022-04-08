import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import MarketFeed from './pages/marketFeed/marketFeed';
import Liked from './pages/liked/Liked';
import Claimed from './pages/claimed/Claimed';
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react"
import AddBatch from './pages/addBatch/addBatch.js'


function App() {

  return (
    <Router>
  
       <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/marketfeed" component={MarketFeed} />
            <Route exact path="/liked" component={Liked} />
            <Route exact path="/claimed" component={Claimed} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/addbatch" component={AddBatch} />
          </Switch>
       </div>

     </Router>
  );
}

export default App;
