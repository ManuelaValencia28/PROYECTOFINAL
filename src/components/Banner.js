import { Button,Typography, makeStyles } from '@material-ui/core'
import background_image from "../Img_proyecto/fondo_spa2.jpg"

const Banner = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant='h2'>Reserva una cita...</Typography>
        <Button variant='contained'>Nuestros servicios</Button>
      </div>
    </div>

    
  )
}

const useStyle = makeStyles((theme) => ({
    root: {
      height: "50vh",
      position: "relative",
      backgroundImage: `url(${background_image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    info: {
      backgroundColor: "rgba(54, 39, 45, 0.8)",
      color: "#fff",
      width: "400px",
      padding: theme.spacing(2),
      "& h2":{
        marginBottom: theme.spacing(4),
      },
      "& button": {
        backgroundColor: "rgba(194, 142, 163, 0.8)",
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#fff"
      },
      "& button:hover":{
        backgroundColor: "#fff",
        color: "rgba(194, 142, 163, 0.8)",
      }
    },

}))

export default Banner
