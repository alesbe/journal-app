import { Box, Toolbar } from "@mui/material"
/*
Importación sin archivo de barril:
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";*/

// Con archivo de barril:
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx = {{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

        <NavBar drawerWidth={ drawerWidth }/>

        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component = 'main'
            sx = {{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>

            { children }
        </Box>
    </Box>
  )
}
