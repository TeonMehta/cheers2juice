import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import ShopProduct from "./pages/ShopProduct";
import Authentication from "./pages/Authentication";
import { auth, createUserProfileDocument } from './firebase/utils'
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {


    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/shop/:productId' component={ShopProduct} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signin' component={Authentication} />
        </Switch>

      </div>
    );
  }

}

export default App;
