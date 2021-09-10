import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminDashboard from './views/AdminDashboard/AdminDashboard'
import OrderTrackerView from './views/OrderTrackerView/OrderTrackerView'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={AdminDashboard}/>
          <Route path="/order" exact component={OrderTrackerView}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
