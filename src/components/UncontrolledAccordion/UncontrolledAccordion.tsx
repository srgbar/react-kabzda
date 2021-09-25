import React, {useState} from "react";

export type PropsAccordion = {
    titleValue: string
}

type PropsAccordionTitle = {
    title: string
    onClick: () => void
}

export function UncontrolledAccordion(props:PropsAccordion) {

    let[collapsed, setCollapsed] = useState(true)

    return <div>
            <AccordionTitle title={props.titleValue} onClick={ () => { setCollapsed(!collapsed)} }/>
           {/* <button onClick={ () => { setCollapsed(!collapsed)} }>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
}

function AccordionTitle(props:PropsAccordionTitle) {
    return <h3 onClick={ () => {props.onClick()} }>-- {props.title} --</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}