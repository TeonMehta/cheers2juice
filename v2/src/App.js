import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>

    </div>
  );
}

export default App;
