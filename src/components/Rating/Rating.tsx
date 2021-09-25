import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    value: RatingValueType
    onClickRating: (value: RatingValueType) => void
}
type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClickStar: (value: RatingValueType) => void

}

function Rating(props: RatingPropsType) {
    return <div>
        <Star selected={ props.value > 0 } onClickStar={props.onClickRating} value={1}/>
        <Star selected={ props.value > 1 } onClickStar={props.onClickRating} value={2}/>
        <Star selected={ props.value > 2 } onClickStar={props.onClickRating} value={3}/>
        <Star selected={ props.value > 3 } onClickStar={props.onClickRating} value={4}/>
        <Star selected={ props.value > 4 } onClickStar={props.onClickRating} value={5}/>
    </div>
}

function Star(props: StarPropsType) {
    return <span onClick={ () => { props.onClickStar(props.value) } }>
            {props.selected ? <b>star </b> : "star "}
        </span>
}

export default Rating