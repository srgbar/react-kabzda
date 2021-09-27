import React from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    titleValue: string
    onChange: (value: any) => void
    items: ItemType[]
}

export function SelectHard(props: SelectPropsType) {
    return (
        <div className={s.main}>
            <span >{props.titleValue} </span><button onClick={props.onChange}>^</button>
            <hr/>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}