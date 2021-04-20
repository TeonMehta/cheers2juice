import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from "react-router-dom";
import ShopProduct from "./pages/ShopProduct";
import SpecificProduct from "./pages/SpecificProduct";
import Product from './components/product'
import Authentication from "./pages/Authentication";
import { auth, createUserProfileDocument } from './firebase/utils'
import React, { Component } from 'react';
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {


    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/shop/:productId' component={SpecificProduct} />
          <Route exact path='/about' component={About} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Authentication />)} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
