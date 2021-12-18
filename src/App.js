import React, {useState} from 'react';
import Home from './component/Home/Home';
import Login from './component/Login/Login';

const App = () => {

 const [submit, setSubmit] = useState(false);
 const [logout, setLogOut] = useState(true);


const submitData = JSON.parse(localStorage.getItem('submit'));
console.log(submit)
  return (
    <div>
      {
       submitData?<Home setLogOut={setLogOut} setSubmit={setSubmit}/>:<Login setSubmit={setSubmit} />
      }      
    </div>
  )
}

export default App;
