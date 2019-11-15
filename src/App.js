import React, { useState, useEffect } from 'react';
import { useModal } from './hook'
import CustomModal from './modal'
import Package from './component/Package'
import axios from 'axios';
import myText from './status.txt';


function App() {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal()
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
      const packageNames = []
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
      <CustomModal
          title="Item Modal"
          isActive={itemModalOpen}
          handleClose={() => setItemModalOpen(false)}
      >
        <h2>Hey Modal</h2>       
      </CustomModal>
      <Package data={myinfo} />
    </div>
  );
}

export default App;
