import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { Button, InputBase, Typography, makeStyles } from '@material-ui/core'
import esLocale from 'date-fns/locale/es'; // Importa la localización en español
import { People } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


const selectionRange = {
    startDate: new Date(2023,10,30),
    endDate: new Date(2023,10,30),
    key: "selection"
}

const DatePicker = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const handleSelect = () => {};

    const handleButtonClick = () => {
      navigate('/services'); // Navega a la ruta '/services'
    };

  return (
    <div className={classes.root}>
         <DateRangePicker 
         ranges={[selectionRange]} 
         locale={esLocale} // Establece la localización en español
         onChange={handleSelect}
         />
         <div className={classes.inputSection}>
            <Typography variant='h5'>Número de Personas</Typography>
            <div className={classes.people}>
                <InputBase placeholder=" "
                inputProps={{className: classes.input}}
                />
                <People/>
            </div>
            <Button onClick={handleButtonClick}>Elegir Citas</Button>

         </div>

    </div>
  )
}


const useStyle = makeStyles((theme) => ({
    root:{
        position: "absolute",
        top: "25vh",
        left: "30vw",
        zIndex: "50",
        [theme.breakpoints.down("sm")]: {
            top:"30vh",
            left: 0,
        } //para pantallas pequeñas
    },
    inputSection:{
       display: "flex",
       flexDirection: "column",
       backgroundColor: "#fff",
       "& h5": {
         textAlign: "center"
       },
       "& button:hover":{
           backgroundColor: "rgba(194, 142, 163, 0.8)",
           color: "#fff",
       }
    },
    people:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    input:{
       width: "2vw",
       border: "1px solid #ccc",
       margin: theme.spacing(1,2,2,0),
       padding: theme.spacing(1,0,1,3),
    },
  }))
  
export default DatePicker
