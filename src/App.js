import React from "react";
import FirstSchedular from "./Components/FirstSchedular";
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.less';
import SecondScheduler from "./Components/SecondScheduler";

import './App.css';
import NewScheduler from "./Components/NewScheduler";
import TestSchedulers from "./Components/TestSchedulers";

function App() {
  return (
    <div className="App">
     {/* <SecondScheduler/> */}
     {/* <FirstSchedular/> */}
     {/* <NewScheduler/> */}
     <TestSchedulers/>
    </div>
  );
}

export default App;
