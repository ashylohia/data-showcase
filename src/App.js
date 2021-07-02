import './App.css';
import { Switch, Route } from 'react-router-dom'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';



const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Page1} />
      <Route path="/page2" component={Page2} />
    </Switch>
  )
};


export default App;
