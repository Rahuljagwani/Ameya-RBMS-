import React from "react";
// import Goi from "./images/Goi.jpg"
// import Citizen from "./images/Citizen.jpg"

class Landingpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCitizen:true,
            showGoi:true
        };
      

    }
    render(){
        return(<>
        
        <div class="flex">
                <button className="LpButton" id="Goi-button" onClick={()=>{this.props.funShowGoi(this.state.showGoi);
                this.props.funShowCitizen(false);
                }}>
                    <h2>Goi</h2>
                    {/* <img src="" className="Button-image"></img> */}
                </button>
                <button className="LpButton" id="Citizen-button" onClick={()=>{this.props.funShowCitizen(this.state.showCitizen);
                this.props.funShowGoi(false);
                }}>
                <h2>Citizen</h2>
                {/* <img src={Citizen} className="Button-image"></img> */}
            
                </button>
            
        </div>
        
        
        
        
        
        
        </>);
        
        
    }
}

export default Landingpage;