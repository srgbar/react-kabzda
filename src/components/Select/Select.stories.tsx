import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {title: "JS", value: "1"},
                    {title: "React", value: "2"},
                    {title: "HTML", value: "3"},
                    {title: "CSS", value: "4"}
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(undefined)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {title: "JS", value: "1"},
                    {title: "React", value: "2"},
                    {title: "HTML", value: "3"},
                    {title: "CSS", value: "4"}
                ]}/>
    </>
}



