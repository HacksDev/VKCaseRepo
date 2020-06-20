import React from 'react'


const labelStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "25px"
}

const Label = ({ icon, textColor, text}) => {

    return (
        <div style={labelStyle}>
             <div>{icon}</div>
             <p style={{color: textColor, marginLeft: "7px"}}>{text}</p>
        </div>
    )
}


export default Label

