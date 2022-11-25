import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Safe(props) {
    const [wbName, setwbName] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/listSafe").then((response) => {
            setwbName(response.data);

        })

    }, [wbName]);
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
                        <h1>SAFE WATER BODIES</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div>
                        {wbName.map((item)=>
                        <h5>{item.rivername}</h5>
                        )}
                    </div> */}
                    <div class="safe_body">
                        <div class="safe_wrapper">
                            {/* <h1 class="safe_h1">How to clean your fish tank</h1> */}
                            <ol class="safe_ol" role="list">
                                {wbName.map((item) =>
                                    <li class="safe_li">{item.rivername}</li>
                                )}
                                

                            </ol>
                        </div>
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal> </>);

}
export default Safe;