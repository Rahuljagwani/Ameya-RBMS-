import Button from "react-bootstrap/esm/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Safe from './CitizensModals/Safe';
import UserInput from './CitizensModals/UserInput';
import Unsafe from './CitizensModals/Unsafe';
import { useState } from "react";
function Citizen() {

  const [SafeShow, setSafeShow] = useState(false);
  const [UnsafeShow, setUnsafeShow] = useState(false);
  const [UserInputShow, setUserInputShow] = useState(false);
  return (
    <>
      <button className="buttonRak" onClick={() => window.location.reload(false)}>Main page</button>
      <div className="app">
        {/* <div className="home_box"> */}
          <div className="box_home">

            <ButtonGroup vertical>
              <Button className="buttonRak"  size="lg" onClick={() => setSafeShow(true)}>Safe Water Bodies</Button>
              <Safe
                show={SafeShow}
                onHide={() => setSafeShow(false)}
              />
              <br></br>
              <Button className="buttonRak"  size="lg" onClick={() => setUnsafeShow(true)}>Unsafe Water Bodies</Button>
              <Unsafe
                show={UnsafeShow}
                onHide={() => setUnsafeShow(false)}
              />
              <br></br>
              <Button className="buttonRak"  size="lg" onClick={() => setUserInputShow(true)}>Send for testing</Button>
              <UserInput
                show={UserInputShow}
                onHide={() => setUserInputShow(false)}
              />
            </ButtonGroup>
          {/* </div> */}
        </div>
      </div>






      <p>hi</p>
    </>
  );


}
export default Citizen;