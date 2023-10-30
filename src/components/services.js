import { Button, CssBaseline, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Banner from './Banner'
import RoomCard from './RoomCard'
import DatePicker from './DatePicker'


const Services = () => {
  const classes= useStyle()
  const [showdates, setShowdates] = useState(false)
  return (
    <>
    <CssBaseline/>
    <div className={classes.root}>
       <div className={classes.root}>
          <Button onClick={() => setShowdates(!showdates)}>
           {
            showdates ? "Ocultar" : " Buscar Citas"
           }
          </Button>
          {
            showdates &&  <DatePicker/>
          }
        </div>
        <Banner/>
        <div className={classes.section}>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
        </div>
    </div>
    </>
  )
}


const useStyle = makeStyles((theme) => ({
  root:{
    display: "flex",
    flexDirection: "column",

  },
  dates: {
    display: "flex",
    flexDirection: "column", 
    "& button": {
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      color: "rgba(194, 142, 163, 0.8)",
    }
  }
}))

export default Services
