import React, { useEffect,useState,memo } from 'react'
import { Box } from '@mui/material'
import ChatHeader from './ChatHeader'
import ChatMain from './ChatMain'
import { useContext } from 'react'
import { getConversation } from '../../service/api'
import { AccountContext } from '../../Context/AccountProvider'

const Chatbox = () => {
  const [conversation,setConversation]=useState([]);
  const {person,account}=useContext(AccountContext);
  useEffect(()=>{
    const getConversationDetails=async()=>{
      let data=await getConversation({senderId:account.sub,receiverId:person.sub});
      setConversation(data);
    }
    getConversationDetails();

  },[person.sub]);
  console.log("working not fine");
  return (
    <Box style={{height:"75%"}}>
        <ChatHeader person={person}/>
        <ChatMain person={person} conversation={conversation}/>
    </Box>
  )
}

export default memo(Chatbox)
