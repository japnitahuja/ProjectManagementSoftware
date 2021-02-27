import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={SignInAndSignUpPage} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
