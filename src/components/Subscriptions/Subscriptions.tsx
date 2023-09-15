import React from 'react'
import SubscriptionsHeader from './SubscriptionsHeader'
import SubscriptionsBody from './SubscriptionsBody'
import { Box } from '@mui/material'

const Subscriptions = () => {
  return (
    <Box sx={{mb: "248px"}}>
        <SubscriptionsHeader/>
        <SubscriptionsBody/>
    </Box>
  )
}

export default Subscriptions