// Code Keypad Component Here
import React, { usestate } from "react"


function Keypad() {
    return (<form>
        <input type="password"
         onChange={() => console.log('Entering password...')}/>
        </form>
    )}

export default Keypad;