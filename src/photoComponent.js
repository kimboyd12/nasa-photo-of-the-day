import React from "react";

const PhotoComponent = props => {
    return (
        <div className="card">
            <h1>Nasa Photo of the Day</h1>
            <img src={props.picture} alt="photo" />
            <h3>Date: {props.date}</h3>
            <p>Title: {props.title}</p>
            <p>{props.explanation}</p>
        </div>
    )
}

export default PhotoComponent;