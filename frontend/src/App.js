import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import profile from './pages/profile';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser, selectCurrentUserFirstName } from './redux/user/user.selectors';


function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact render = {() => 
          props.currentUser ? (<Redirect to='/profile' />): (<SignInAndSignUpPage />)
        } />
        <Route path='/profile' exact component={profile}/>
        
      </Switch>
    </BrowserRouter>
    
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserFirstName
})


export default connect(mapStateToProps, null)( App);
