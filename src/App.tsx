import React, {useState} from 'react';
import './App.css';
import UncontrolledOnOff from "./components/UncontrolledOnOFF/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import Accordion from "./components/Accordion/Accordion";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return <div className="App">
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        <UncontrolledAccordion titleValue={"Menu"} />
        <UncontrolledAccordion titleValue={"Users"} />
        <div>
            <UncontrolledRating/>
            <hr/>
            <Rating value={ratingValue} onClickRating={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} }/>
            <hr/>
            <OnOff on={switchOn} onSwitch={setSwitchOn} />
            <OnOff on={switchOn} onSwitch={setSwitchOn} />
        </div>
    </div>
}


export default App;
