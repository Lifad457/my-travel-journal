import React from "react"

function Travel(props) {
    return (
        <div className="travel">
            <img src={props.imageUrl} alt="travel image" className="travel--image" />
            <div>
                <div className="travel--infos">
                    <h4 className="travel--location">{props.location}</h4>
                    <a href={props.googleMapsUrl} className="travel--gmap">View on Google Maps</a>
                </div> 
                <p className="travel--title">{props.title}</p>
                <p className="travel--date">{props.startDate} - {props.endDate}</p>
                <p className="travel--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Travel