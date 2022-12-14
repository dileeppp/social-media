import { Box, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center' width='100%' marginTop='150px'>
        <Typography variant='h4' component='div'> Contact Details</Typography>
        <Typography type='email' variant='h6'   component='div'>email:<a href='url'>dileepkumar14212@gmail.com</a></Typography>
        <Typography>Phone:912******7</Typography>
    </Box>
  )
}

export default Contact
