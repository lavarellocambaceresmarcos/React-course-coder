import { useState } from "react";
// useState es un hook de React
import './Style.css'

const ItemCount = () => {

    // state toma el valor de correinte, setState es una función que lo modifica, y useState genera el valor inicial
    const [state, setState] = useState("User name");
    const UserName = "Marcos";


    const LogIn = () => {

        console.log("log")
        console.log(state)

        if (state == "User name") {
            setState (UserName)
            document.getElementsByClassName('log-in-button')[0].innerHTML = "Sing-off";
           
        }else if(state != "User name"){
            setState ("User name")
            document.getElementsByClassName('log-in-button')[0].innerHTML = "log-in";
        }
    }


    return(
        <div className="login-button-container">
            <div>
                <i className="fa-solid fa-user"></i>
                <p>
                    {state}
                </p>
            </div>
            <button onClick={LogIn} className="log-in-button btn btn-secondary">
                Log-in
            </button>
           
        </div>
    )
}

export default ItemCount