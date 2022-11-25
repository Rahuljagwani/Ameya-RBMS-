import Button from "react-bootstrap/esm/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tobetested from './GoisModal/Tobetested';
import Aiml from './GoisModal/Aiml';
import { useState } from "react";
function Goi() {

  const [TobetestedShow, setTobetestedShow] = useState(false);
  const [AimlShow, setAimlShow] = useState(false);
  //const [UserInputShow, setUserInputShow] = useState(false);
  return (
    <>
      <Button onClick={() => window.location.reload(false)}>Back to Main page</Button>
      <div className="app">
        <div className="login-form">

          <ButtonGroup vertical>
            <Button variant="warning" size="lg" onClick={() => setTobetestedShow(true)}>List of Tobetested Water Bodies</Button>
            <Tobetested
              show={TobetestedShow}
              onHide={() => setTobetestedShow(false)}
            />
            <br></br>
         
            <Button variant="warning" size="lg" onClick={() => setAimlShow(true)}> Aiml </Button>
            <Aiml
              show={AimlShow}
              onHide={() => setAimlShow(false)}
            />
            <br></br>
            </ButtonGroup>
            
        </div>
      </div>






      <p>hi</p>
    </>
  );


}
export default Goi;    