import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react'
import logo from "../Img_proyecto/logo_opalo.png"
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from 'react-router-dom'

const Header = () => {

  const [mobile, setMobile] = useState(true)
  const [draweropen, setDraweropen] = useState(false)
  const classes = useStyle()

  useEffect(() =>{
    const responsiveness = () => window.innerWidth < 600 ? setMobile(true) : setMobile(false)
    responsiveness();
    window.addEventListener("resize", ()=>responsiveness())

  }, [])
  //se utiliza para ejecutar la funcion flecha una sola vez

  const displayMobile = () => {
      const handleDrawerOpen = () => {
        setDraweropen(true)
       }
      const handleDrawerClose = () => {
        setDraweropen(false)
       }

      const headersData = ["Mi cuenta", "Citas anteriores", "Cierra sesión"]

      const getDrawerChoices = () => {
        return headersData.map((data)=>{
          return(
            <List>
                <ListItem>{data}</ListItem>
            </List>
          )
        })
      }
 
    return(
      <Toolbar className={classes.toolbar}>
         <IconButton {...{
            edge: "start", 
            color:"#ccc",
            "aria-label": "menu",
            "aria-haspopup": "true",
            //estos elementos indican que al darle click va a desplegar un submenu
            onClick: handleDrawerOpen,
            }}>
            <MenuIcon fontSize="large"/>
         </IconButton>
         <Drawer {...{
              anchor: "left",
              open: draweropen,
              onClose: handleDrawerClose,

         }}>
          <div>{ getDrawerChoices()}</div>
         </Drawer>
         <Link to="/">
             <img src={logo} className={classes.logo}></img>
         </Link>
         <div className={classes.right}> 
            <Typography>Iniciar Sesión</Typography>
            <Avatar className={classes.avatar}></Avatar>
        </div>
      </Toolbar>
    )}


  const displayDesktop = () =>(
      <Toolbar className={classes.toolbar}>
          <Link to="/">
             <img src={logo} className={classes.logo}></img>
         </Link>
        <div className={classes.center}>
        <InputBase fullWidth placeholder="Busca aquí..."  inputProps={{className: classes.input}}/>
        <SearchIcon/>
        </div>
        <div className={classes.right}> 
            <Typography>Iniciar Sesión</Typography>
            <Avatar className={classes.avatar}></Avatar>
        </div>
      </Toolbar>
    )
    
  return (
    <AppBar className={classes.root}>
      {
       mobile ? displayMobile() : displayDesktop()
      }
    </AppBar>
  )
}

const useStyle = makeStyles((theme) => ({
  root:{
    //hace que el encabezado quede siempre arriba.
     position: "sticky",
     top: 0,
     backgroundColor: "#fff",
     zIndex: 99,
     width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",


  },
  logo: {
    height: "120px",
    margin: theme.spacing(1,0,0,4),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    minWidth: "300px",
    borderRadius: "999px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),

  },
  input: {
    fontSize: "1.2rem",
    padding: theme.spacing(1,5,1,5),
  },
  right: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  
  },
  avatar:{
    marginLeft: theme.spacing(2),
  }
}))

export default Header
