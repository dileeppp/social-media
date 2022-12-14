import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';

export default function CheckboxSide() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box width='20%' position='fixed' marginLeft='80%' sx={{display:{xs:'block',sm:'200px'}}}>

    

    <List  dense sx={{ height:'1110px',padding:'10px',borderRadius:'10px', paddingTop:'20px',  bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3,4,5,6,7,8,9,10,11,12,13,1,4,15,16,17,18].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
          key={value}
          secondaryAction={
              <Checkbox
              edge="end"
              onChange={handleToggle(value)}
              checked={checked.indexOf(value) !== -1}
              inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
            >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`User ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
    })}
    </List>
    </Box>
  );
}