import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MarketFeed from './pages/MarketFeed';
import Liked from './pages/Liked';
import Claimed from './pages/Claimed';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
          </Switch>
       </div>

     </Router>
  );
}

export default App;
