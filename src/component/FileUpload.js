import React, { useState } from "react";

function File() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const  Container = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    }

    const ImageContainer = {
        display:"flex",
        position:"relative",
        width:"250px",
        height:"250px"
    }

    const input = {
        position: "relative",
        width: "750px",
        height: "20px"
    }

    return (
        <div style={Container}>
            <div style={ImageContainer}>
                <img src={file} />
            </div>
            <div style={input}>
                <input type="file" onChange={handleChange}  />
            </div>

        </div>

    );
}

export default File;
