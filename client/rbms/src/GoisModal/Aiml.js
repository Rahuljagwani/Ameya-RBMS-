import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Axios from 'axios';
function Aiml(props) {
    const [wbName, setwbName] = useState("");
    const [wbCat, setwbCat] = useState("");
 
    const [Output, setOutput] = useState([]);

    const [pHvalue, setpHvalue] = useState("");
    const [Hardnessvalue, setHardnessvalue] = useState("");
    const [Solidsvalue, setSolidsvalue] = useState("");
    const [Chloraminesvalue, setChloraminesvalue] = useState("");
    const [Sulfatevalue, setSulfatevalue] = useState("");
    const [Conductivityvalue, setConductivityvalue] = useState("");
    const [OrganicCarbonvalue, setOrganicCarbonvalue] = useState("");
    const [Trihalomethanesvalue, setTrihalomethanesvalue] = useState("");
    const [Turbidityvalue, setTurbidityvalue] = useState("");
    const submitList = () => {
        Axios.post("http://localhost:3001/api/insRlist", {
            wbName: wbName,
            wbCat: wbCat
        }).then((response) => {alert(response.data); })
    };

    const submitValue = () => {

        Axios.post("http://127.0.0.1:5000/predict", {
            pHvalue: pHvalue,
            Hardnessvalue: Hardnessvalue,
            Solidsvalue: Solidsvalue,
            Chloraminesvalue: Chloraminesvalue,
            Sulfatevalue: Sulfatevalue,
            Conductivityvalue: Conductivityvalue,
            OrganicCarbonvalue: OrganicCarbonvalue,
            Trihalomethanesvalue: Trihalomethanesvalue,
            Turbidityvalue: Turbidityvalue
        }).then(() => { })

        Axios.get("http://127.0.0.1:5000/answer").then((response) => {
            setOutput(response.data);
        })

        setwbCat(Output.output);


    };



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
                        <h1>AI/ML</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

<div class="bodyshot">
			<div class="wrapper">
				<div class="inner">
					<form action="">
						<h3 class="heading3">Water Body Test Details</h3>
						<p class="paragraphzee">Please fill the details of the Water body</p>
						<label class="form-group">
							<input type="text" class="form-control" required onChange={(e) => {
								setwbName(e.target.value);
							}}></input>
							<span>Enter Water Body Name</span>
							<span class="border"></span>
						</label>
						<label class="form-group">
							<input type="text" class="form-control" required onChange={(e) => {
								setpHvalue(e.target.value);
							}}></input>
							<span>Enter pH value</span>
							<span class="border"></span>
						</label>
						<label class="form-group">
							<input type="text" class="form-control"  required onChange={(e) => {
								setHardnessvalue(e.target.value);
							}}></input>
							<span for="">Enter Hardness value</span>
							<span class="border"></span>
						</label>
						<label class="form-group" >
							<input name="" id="" class="form-control" required onChange={(e) => {
								setSolidsvalue(e.target.value);
							}}></input>
							<span for="">Enter Solids value</span>
							<span class="border"></span>
						</label>
						<label class="form-group" >
							<input name="" id="" class="form-control" required onChange={(e) => {
								setChloraminesvalue(e.target.value);
							}}></input>
							<span for="">Enter Chloramines value</span>
							<span class="border"></span>
						</label>
						<label class="form-group" >
							<input name="" id="" class="form-control" required onChange={(e) => {
								setSulfatevalue(e.target.value);
							}}></input>
							<span for="">Enter Sulfate value</span>
							<span class="border"></span>
						</label>
						<label class="form-group">
							<input type="text" class="form-control"  required onChange={(e) => {
								setConductivityvalue(e.target.value);
							}}></input>
							<span>Enter Conductivity value</span>
							<span class="border"></span>
						</label>
						<label class="form-group">
							<input type="text" class="form-control"  required onChange={(e) => {
								setOrganicCarbonvalue(e.target.value);
							}}></input>
							<span>Enter Organic Carbon value</span>
							<span class="border"></span>
						</label>
						<label class="form-group">
							<input type="text" class="form-control"  required onChange={(e) => {
								setTrihalomethanesvalue(e.target.value);
							}}></input>
							<span>Enter Trihalomethanes value</span>
							<span class="border"></span>
						</label>
						<label class="form-group">
							<input type="text" class="form-control"  required onChange={(e) => {
								setTurbidityvalue(e.target.value);
							}}></input>
							<span>Enter Turbidity value</span>
							<span class="border"></span>
						</label>
						<Button variant="info" size="sm" onClick={submitValue}>Check</Button>{' '}
                        <Button variant="info" size="sm" onClick={submitList}>Add the following water body to list</Button>{' '}
					</form>
				</div>
			</div>
		 </div>

                   
                    <br></br>
                    <p>{Output.output}</p>
                    <br></br>
                    <br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal> </>);
}

export default Aiml;