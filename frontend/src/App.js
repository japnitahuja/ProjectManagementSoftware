import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser, selectCurrentUserFirstName } from './redux/user/user.selectors';
import AllProjects from './pages/all-projects/all-projects';
import Project from './pages/project/project.page';



function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact render = {() => 
          props.currentUser ? (<Redirect to='/all-projects' />): (<SignInAndSignUpPage />)
        } />
        <Route path='/all-projects' exact component={AllProjects} />
        <Route path='/project/:projectId' exact component={Project}/>
        
      </Switch>
    </BrowserRouter>
    
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserFirstName
})


export default connect(mapStateToProps, null)( App);
