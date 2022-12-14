import { Box} from '@mui/material'
import React from 'react'
import Home from './Home'
import RightBar from './RightBar'
import Side from './Side'

const Feed = () => {
  return (
    <Box sx={{display:'flex', paddingTop:'65px'}}>
      <Home/>
      <RightBar/>
      <Side/>
    </Box>
  )
}

export default Feed
