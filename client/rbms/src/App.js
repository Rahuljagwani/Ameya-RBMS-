import { useState } from 'react'
import './App.css';
import Landingpage from './Landingpage';
import Citizen from './Citizen';
import Goi from './Goi';


function App() {
  const [showCitizen, setshowCitizen] = useState(false);
  const [showGoi,setshowGoi] = useState(false);
  if(showCitizen===true)
  return(<><Citizen />
  </>);
  else if(showGoi===true)
  return(<Goi />)
  else
  return (
<>
<div className='heading'>River Body Management System </div>
<Landingpage  
funShowCitizen={setshowCitizen}
funShowGoi={setshowGoi}
 />

</>
  );
}

export default App;
