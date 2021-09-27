import React, {useState} from 'react';
import {SelectHard, SelectPropsType} from "./Select";

export default {
    title: 'Select',
    component: SelectHard,
}

export const SelectOff = () => {
    return <SelectHard titleValue={"What are you studying now?"}
                       onChange={() => {
                       }}
                       items={[]}
    />
}

export const SelectOn = () => {
    return <SelectHard titleValue={"What are you studying now?"}
                       onChange={() => {
                       }}
                       items={[
                           {title: "JS", value: 1},
                           {title: "React", value: 2},
                           {title: "HTML", value: 3},
                           {title: "CSS", value: 4}
                       ]}
    />
}

export const SelectMode = (props: SelectPropsType) => {

    const [value, setValue] = useState(undefined)

    return <SelectHard titleValue={"What are you studying now?"}
                       onChange={() => alert("Change skill")}
                       items={[
                           {title: "JS", value: 1},
                           {title: "React", value: 2},
                           {title: "HTML", value: 3},
                           {title: "CSS", value: 4}
                       ]}
    />
}

