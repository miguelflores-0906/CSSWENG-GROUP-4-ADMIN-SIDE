import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdminDashboard from './views/AdminDashboard/AdminDashboard'
import OrderTrackerView from './views/OrderTrackerView/OrderTrackerView'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }
  
    useEffect(() => {
      getData()
    }, [])


  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={AdminDashboard}/>
          <Route path="/order" exact component={OrderTrackerView}/>
        </Switch>
      </div>

      <div>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
      </div>

    </Router>
  );
}

export default App;
