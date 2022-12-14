import { AppBar, Avatar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [mobileOpen,setMobileOpen] = useState(false)
    const navgate = useNavigate()

 
  return (
    <Box sx={{ position:'relative', flexGrow: 1, }}>
        <AppBar  position='fixed' alignItems='center'>
            <Toolbar>

            <IconButton onClick={()=>setMobileOpen(true)}
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}>
                <MenuIcon/>
            </IconButton>
            <Typography variant='h4' edge='start' component='div' sx={{flexGrow: 1}}>

            Social Media
            </Typography>
            <NavLink to='/'  >
                Home

            </NavLink>
            <nav>

            <NavLink to='about'  >
                About

            </NavLink>
            </nav>
            <NavLink to='contact' sx={{color:'white'}} >
                Contact

            </NavLink>
            <Button  color="inherit" onClick={()=> navgate('login')}>Login</Button>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          
                 </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor='left'
          open={mobileOpen}
          onClose={()=>setMobileOpen(false)} width='240px'>
            <Box>
                <Sidebar/>
            </Box>
         
        </Drawer>

    </Box>
  )
}

export default Nav
