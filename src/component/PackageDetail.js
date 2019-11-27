import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const PackageDetail = ({match,data}) => {
  
  const mypackage = data.find(p => p.Package === match.params.Package);
 
  if (!mypackage) return null
  
  return (
    <div className="package-detail">
  
     <h4>Package Name: </h4>{mypackage.Package}
     <h4>Package Depends:</h4>
       {mypackage.Depends?
        [ /[,\\|]/.test( mypackage.Depends) ? mypackage.Depends.replace(/ *\([^)]*\) */g, "").split(/[,\\|]/).map((e,i) => (
              
               <Link className="link-text" key={i} to={`/${e.trim()}`}>{e}</Link>
          )):
          <Link className="link-text" to={`/${mypackage.Depends.trim().replace(/ *\([^)]*\) */g, "")}`}>{mypackage.Depends.replace(/ *\([^)]*\) */g, "")}</Link>
        ]:null} 
     <h4>Package Description: </h4>{mypackage.Description}
    </div>
  );
};
 

export default PackageDetail 
