import React from 'react';
import ThLayout from "./Container/TheLayout";

/* Imp Bootstrap 5 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
/* End Bootstrap 5 */

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import './App.scss';


const store = createStore(reducer);


function App() {


  return (
    <>    
      <Provider store={store}>
    
        <ThLayout />
        </Provider>
    </>
    
  );
}


export default App;