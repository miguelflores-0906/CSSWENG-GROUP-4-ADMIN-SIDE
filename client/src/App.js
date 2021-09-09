import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminDashboard from './views/AdminDashboard/AdminDashboard'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={AdminDashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
