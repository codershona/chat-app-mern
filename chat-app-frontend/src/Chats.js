import './main.css';

import { Card, CardContent, Typography } from '@mui/material';
import React, { forwardRef } from 'react';

const Chats = forwardRef(({ postMessage, userAccount }, ref) => {
  var isUserAccount = userAccount === postMessage.userAccount;
  return (
    <div className={`postMessage ${isUserAccount && 'postMessage_user'}`} ref={ref}>
      <Card className={isUserAccount ? "chatRoom_Card" : "chatRoom_guestCard"}>
          <CardContent>
            <Typography 
             sx={{ fontSize: 25 }} 
             variant='h5'
             component='h2'
             color="text.secondary" 
             className="chat_text"
             gutterBottom>
              {!isUserAccount && `${postMessage.userAccount || 'Anonymous User'}: speaks to `}: {postMessage.postsMessage}
            </Typography>
          </CardContent>
       </Card>
    </div>
  )
})

export default Chats;
