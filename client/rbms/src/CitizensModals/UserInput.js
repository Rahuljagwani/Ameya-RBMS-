import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
function UserInput(props) {

    const [wbName, setwbName] = useState("");
    const [wbList, setwbList] = useState([]);
    const [wbCat, setwbCat] = useState("");
   
    const submitNumber = () => {
        Axios.post("http://localhost:3001/api/insTest", {
                wbName: wbName
            }).then((response) => {
                console.log(response);
                alert(response.data+"       Already in To be tested list"); })
    }
    return (

        <>

            <Modal className="my-modal"
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>SEND FOR TESTING</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="bodyshot">	
			<div class="wrapper">
				<div class="inner">
					<form action="">
						<h3 class="heading3">To-Test Requests</h3>
						<p class="paragraphzee">Please fill this form if the water body has not been tested yet</p>
						<label class="form-group">
							<input type="text" class="form-control"  required onChange={(e) => {
								setwbName(e.target.value);
							}}></input>
							<span>Name of the Water body</span>
							<span class="border"></span>
						</label>
					</form>
                    <Button variant="info" size="sm" onClick={submitNumber}>Check</Button>{' '}
				</div>
			</div>
		</div>

                    {/* <Button variant="info" size="sm" onClick={submitNumber}>Check</Button>{' '} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal> </>);

}
export default UserInput;