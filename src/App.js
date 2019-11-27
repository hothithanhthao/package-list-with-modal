import React, { useState, useEffect } from 'react';

import Package from './component/Package'
import axios from 'axios';
import myText from './status.txt';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PackageDetail from './component/PackageDetail';


function App() {
  
  const [myinfo, setMyInfo] = useState([])
  
  // compare function to sort package name alphabetically
  const compare = (a, b) => {
    let comparison = 0;
    if (a.Package > b.Package) {
      comparison = 1;
    } else if (a.Package <b.Package) {
      comparison = -1;
    }
    return comparison;
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(myText,)
     
      result.data.split('\n\n').map(entry => { 
      const obj = {}
      const arr = []

      entry.split('\n').forEach(keyValue => {
        if (keyValue.match(/^[A-Z]/)) {  
          const split = keyValue.split(": ")
          const key = split[0]
          const value = split[1]
          obj[key] = value
        }
        else{
          const value =  ["", keyValue.trim()];
          arr.push(value)
        }      
      })
      const a = arr.join(" ").replace(/,/g, "\n")
      Object.assign(obj, {Description: obj.Description + a })
      myinfo.push(obj)
      myinfo.sort(compare)
   })
    setMyInfo([...myinfo])
    
  };
    fetchData()
  }, []);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`} render={() => (<Package data ={myinfo}/>)} />
          <Route path={`/:Package`} render={(props) => (<PackageDetail data ={myinfo}  {...props}/>)} />                
        </Switch>
      </Router>
    </div>
  );
}

export default App;
