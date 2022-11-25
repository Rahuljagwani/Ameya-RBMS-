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
      <Button onClick={() => window.location.reload(false)}>Back to Main page</Button>
      <div className="app">
        <div className="login-form">

          <ButtonGroup vertical>
            <Button variant="warning" size="lg" onClick={() => setSafeShow(true)}>List of Safe Water Bodies</Button>
            <Safe
              show={SafeShow}
              onHide={() => setSafeShow(false)}
            />
            <br></br>
            <Button variant="warning" size="lg" onClick={() => setUnsafeShow(true)}>List of Unsafe Water Bodies</Button>
            <Unsafe
              show={UnsafeShow}
              onHide={() => setUnsafeShow(false)}
            />
            <br></br>
            <Button variant="warning" size="lg" onClick={() => setUserInputShow(true)}>Check if water body is Safe or Not</Button>
            <UserInput
              show={UserInputShow}
              onHide={() => setUserInputShow(false)}
            />
          </ButtonGroup>
        </div>
      </div>






      <p>hi</p>
    </>
  );


}
export default Citizen;