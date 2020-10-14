import React from "react";
import "./App.css";
import "./scss/main.scss";
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";
import LogIn from './pages/log-in/log-in.component'
import SignUp from './pages/sign-up/sign-up.component'

import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }

  unsubscribefromAuth = null;

componentDidMount(){
 this.unsubscribefromAuth= auth.onAuthStateChanged(user => {
    this.setState ( {currentUser: user})

  })
}

componentWillUnmount(){
  this.unsubscribefromAuth()
}

  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >     
      { this.props.location.pathname!=='/login' &&
       this.props.location.pathname!== "/signup" ? <Header currentUser= { this.state.currentUser}/>:null  }
<Switch>
        <Route exact path= "/"component= {Homepage} />
        <Route  path= "/login" component= {LogIn} />
        <Route  path= "/signup" component= {SignUp} />
      </Switch>
      </div>
    );
  }
}

export default withRouter( App)
