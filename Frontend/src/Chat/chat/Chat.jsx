import React from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Search from './Search'
import Conversations from './Conversations'
import { useState } from 'react'

const Chat = () => {
  const [text,setText]=useState('');
  return (
    <Box>
      <Header/>
      <Search setText={setText}/>
      <Conversations text={text}/>
    </Box>
  )
}

export default Chat
