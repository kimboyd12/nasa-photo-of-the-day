import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoComponent from "./photoComponent";

function PhotoData() {

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=8B0NcS1ytHuhFsmMmkJpeXjq8zMUDtcYcH6DB34R')
            .then(response => {
                console.log(response.data);
                setPhoto(response.data);
            })
            .catch(err => {
                console.log(err)
            })}, []);

    return (
        <div className="photoCard">
            <PhotoComponent
            title = {photo.title}
            date = {photo.date}
            explanation = {photo.explanation}
            picture = {photo.url}
            />
        </div>
    )
}

export default PhotoData;