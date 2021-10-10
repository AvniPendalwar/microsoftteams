import React from 'react';
import './index.css';
import Heading1 from './Heading1';
import Para1 from './Para1';
import Image from './Image';
import Assign from './Assign';
import Cal from './Cal';
import Error from './Error';
import {Route, Switch} from 'react-router-dom'
function App()
{
    return(
        <>
          <Switch>
          <Route exact path="/" component={Heading1}/>
          <Route exact path="/activity" component={Para1}/>
          <Route exact path="/teams" component={Image}/>
          <Route exact path="/assignments" component={Assign}/>
          <Route exact path="/calender" component={Cal}/>
          <Route component={Error}/>
          </Switch>
        </>
    );
}

export default App;