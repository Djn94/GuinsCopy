import React from "react";
import "./style.css";

function Card(props) {
    // state = { isClicked: false };
    //maybe I can do this.setstate somewhere
    // handleClick = id => {

    // }
    //render()
    {
        return (
            <div className="card" >
                <div className='img-container'>
                    <img alt={props.name} src={props.image} />
                </div>
                <strong>{props.name}</strong>
                <span className="select" onClick={() => this.props.Handleclick(props.id)}>Select</span>
            </div>
        )
    };
};

export default Card;