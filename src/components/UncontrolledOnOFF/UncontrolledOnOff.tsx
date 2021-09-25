
import React, {useState} from "react";

export type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export function UncontrolledOnOff (props: PropsType) {
    console.log("OnOff rendering");

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false); // hook

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "greenyellow" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px",
        backgroundColor: on ? "white" : "orangered"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "greenyellow" : "orangered"
    };

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
           <div style={onStyle} onClick={onClicked}>ON</div>
           <div style={offStyle} onClick={offClicked}>OFF</div>
           <div style={indicatorStyle}></div>
    </div>
}