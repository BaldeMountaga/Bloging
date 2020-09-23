import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import LoginPage from './component/LoginPage';
import Register from './component/Register';
import HomePage from './component/HomePage';


  
function App (){

  return (
   <div>
     <BrowserRouter>
        {/* <Link to='/'> Home </Link>
        <Link to='/register'> Register </Link>
        <Link to='/login'> Log In </Link> */}

        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/Register' component={ Register} />
          <Route exact path='/LoginPage' component={ LoginPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App; 