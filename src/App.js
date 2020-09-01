import React, { Component }  from 'react';
import AddDetails from './component/addDetails';
import MainPage from './component/mainPage';
import NotFoundPage from './component/notFoundPage';
import ImageUpload from './component/imageUpload';
import CsvUpload from './component/csvUpload';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/addData" component={AddDetails} />
        <Route exact path="/imageUpload" component={ImageUpload} />
        <Route exact path="/csvUpload" component={CsvUpload} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" /> 
      </Switch>
      </Router>
      // <div className="container">
      //   <div className="row">
      //     <div className="col col-md-4">
      //       <h1>Simple Form</h1>
      //       <hr />
      //       <AddDetails />
      //     </div>
      //   </div>

      // </div>
    );
  }
}

export default App;
