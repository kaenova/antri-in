import React from "react";
import Backgound from "../components/background/backgound";
import Navbar from "../components/header/navbar";
import Createaccount from "../components/create-account/Createaccount";

function CreateAccout(){
    return (
        <div>
            <Navbar/>
            <Backgound/>
            <Createaccount/>
        </div>
    );
}

export default CreateAccout;