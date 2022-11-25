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
      <Button  className="buttonRak" onClick={() => window.location.reload(false)}>Main page</Button>
      <div className="app">
        <div className="box_home">

          <ButtonGroup vertical>
            <Button className="buttonRak" size="lg" onClick={() => setTobetestedShow(true)}>To be tested</Button>
            <Tobetested
              show={TobetestedShow}
              onHide={() => setTobetestedShow(false)}
            />
            <br></br>
         
            <Button className="buttonRak" size="lg" onClick={() => setAimlShow(true)}> AI/ML Model </Button>
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