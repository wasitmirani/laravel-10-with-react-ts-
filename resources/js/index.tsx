import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from './App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

   <Router>
   <Routes>
    
     <Route path="/*" element={<App />} />
   </Routes>
 </Router>

);

