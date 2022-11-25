import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
function UserInput(props) {

    const [wbName, setwbName] = useState("");
    const [wbList, setwbList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/listFull").then((response) => {
            setwbList(response.data);
        })

    }, [wbList]);
    const submitNumber = () => {

        var f=1;
        var cat=-1;
        for(var i=0;i<wbList.length;i++)
        {
            if (wbName === wbList[i].rivername)
            {
                f=0;
                cat=wbList[i].Category;
                console.log(f);
            }
            

        }


        if (f===1) {
            Axios.post("http://localhost:3001/api/insTest", {
                wbName: wbName
            }).then(() => { })
        }
        else
        {
            console.log(cat);

            if(cat===0)
            alert("Unsafe");
            else if(cat===1)
            alert("Safe");
            else
            alert("Sent for testing");

        }

    }



    return (

        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        INSERT INTO TABLES
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