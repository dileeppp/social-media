import { Diversity2, Drafts, Home, ModeNight, Send, Settings, Storefront, Woman } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'

const Sidebar = () => {

  return (
    <Box position='fixed' sx={{width:'20%',height:'100%',backgroundColor:'white',color:'inherit' ,display:{xs:'none',sm:'block'} }} flex={1} p={2}>

    <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Drafts/>
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Diversity2/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Woman/>
            </ListItemIcon>
            <ListItemText primary="Girls" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>
            <Switch/>
          </ListItemButton>
        </ListItem>


        </List>
     </Box>
  
  )
}

export default Sidebar
