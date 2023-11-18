import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import mockData from '../mockData'
import Banner from './Banner'
import Menu from './Menu'
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
        </div>
        {
          showdates &&  <DatePicker/>
        }
        <Banner/>
        <Grid container className={classes.section} spacing={3}>
          {
            mockData.map(({src, title, description}, index) => (
              <Grid item sm="6" md="4" lg="3">
                 <Menu src={src} 
                     title={title} 
                     description={description} 
                     key={index}/>
              </Grid>
              
             ))
          }
        </Grid>
    </div>
    </>
  )
}
//pasar un objeto con imagenes, y descripcion

const useStyle = makeStyles((theme) => ({
  root:{
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2)
  },
    dates: {
      display: "flex",
      flexDirection: "column", 
      "& button": {
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        color: "rgba(255, 142, 163, 0.8)",
        textTransform: "inherit", 
        fontSize: "1.2rem", 
        fontWeight: "bold",
      },
      "& button:hover": { 
        backgroundColor: "rgba(255, 142, 163, 0.8)",
        color: "#fff",
      }
    },
  }))
  

export default Services
