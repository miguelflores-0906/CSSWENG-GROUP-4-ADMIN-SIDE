import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminDashboard from './views/AdminDashboard/AdminDashboard'
import OrderTrackerView from './views/OrderTrackerView/OrderTrackerView'
import FinanceTrackerView from './views/FinanceTrackerView/FinanceTrackerView'
import AddExpense from './views/Forms/AddExpense'
import AddRevenue from './views/Forms/AddRevenue'
import AddItem from './views/Forms/AddItem';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={AdminDashboard}/>
          <Route path="/order" exact component={OrderTrackerView}/>
          <Route path="/finance" exact component={FinanceTrackerView}/>
          <Route path="/addExpense" exact component={AddExpense}/>
          <Route path="/addRevenue" exact component={AddRevenue}/>
          <Route path="/addItem" exact component={AddItem}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
