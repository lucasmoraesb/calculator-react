import classes from "./styles.module.css"

interface IDisplay{
    value: string
}

function Display({value}: IDisplay) {
  return (
    <input className={classes.displayContainer}
        readOnly
        value={value}
    />
    
  )
}

export default Display