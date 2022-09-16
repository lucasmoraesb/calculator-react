import { useState } from "react";
import classes from "./styles.module.css"

interface IButton{
    text: string
    insertDisplay: (e: any) => void
}

const Button = ({text, insertDisplay}:IButton) => {
  return (
    <button className={classes.buttonContainer} onClick={insertDisplay}>
       {text}
    </button>
  )
}

export default Button