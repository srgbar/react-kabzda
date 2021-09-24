import React from "react";

export type OnOffPropsType = {
    on: boolean
    onSwitch: (on: boolean) => void
}

function OnOff (props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "greenyellow" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "orangered"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "greenyellow" : "orangered"
    };

    return <div>
        <div style={onStyle} onClick={ () => { props.onSwitch(true) } }>ON</div>
        <div style={offStyle} onClick={ () => { props.onSwitch(false) } }>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOff