import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

const mock = [1,2,3,4,5,6];

const SubscriptionColumn:FC = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "32px 32px"
        }}>
            <Box sx={{
                textAlign: "center",
                padding: "8px 16px"
            }}>
                <Typography>Property</Typography>
            </Box>
            <Box sx={{
                textAlign: "center"
            }}>
                <Typography>Value</Typography>
            </Box>
            <Box sx={{
                textAlign: "center"
            }}>
                <Typography>Value</Typography>
            </Box>
            <Box sx={{
                textAlign: "center"
            }}>
                <Typography>Value</Typography>
            </Box>
        </Box>
    )
}

const SubscriptionsBody = () => {
  return (
    <Box sx={{
        background: "#1B1B25",
    }}>
        {
            mock.map((item) => (
                <SubscriptionColumn/>
            ))
        }
    </Box>
  )
}

export default SubscriptionsBody
