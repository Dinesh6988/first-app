import React from "react";
import "./App.css";
// import Dev2Prod from "./TasksDev2Prod/Dev2Prod.js";
import UboraHealth from "./TasksUboraHealth/UboraHealth.js";
// import Number from "./Components/Number.js";
// import Count from "./Components/Count.js";
// import Clients from "./TasksUboraHealth/ClientsPage/Clients.js";
// import ClientReview from "./TasksUboraHealth/ClientsPage/ClientReview.js";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./TasksUboraHealth/Login.js";
import SignUp from "./TasksUboraHealth/SignUp.js";
import Forgot from "./TasksUboraHealth/Forgot.js";
import DashBoard from "./TasksDashBoard/DashBoard.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Table1 from "./TasksDashBoard/Table1.js";
import ExTable from "./TasksDashBoard/ExTable.js";




function App() {
  return (
   <>
   {/* <Table1/> */}
   {/* <ExTable/> */}
   {/* <Tabs1/> */}
   {/* <Welcome/> */}
   {/* <Dummy/> */}
   {/* <Carousel1/> */}
   {/* <DashBoard/> */}
   {/* <ClientReview/> */}
   {/* <Number/> */}
   {/* <Count/> */}
      {/* <Dev2Prod/> */} 
   {/* <UboraHealth/> */}
   <BrowserRouter>
   <Routes>
    <Route path="/" exact element={<UboraHealth/>}/>
    <Route path="/login" exact element={<Login/>}/>
    <Route path="/dash" exact element={<DashBoard/>}/>
    <Route path="/signup" exact element={<SignUp/>}/>
    <Route path="/forgot" exact element={<Forgot/>}/>
   </Routes>
   </BrowserRouter>
     </>
  );
}
export default App;
