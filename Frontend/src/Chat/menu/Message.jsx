import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { formatData } from '../../utils/CommonUtils'
import { AccountContext } from '../../Context/AccountProvider'
import { useContext } from 'react'

const Own = styled(Box)`
 background:#dcf8c6;
 max-width:60%;
 width:fit-content;
 margin:5px 10px;
 margin-left:auto;
 display:flex;
 border-radius:5px;
 word-break:break-word;
 padding:5px;
 padding-left:12px;
 
 `
const Opposite = styled(Box)`
 background:#fff;
 max-width:60%;
 width:fit-content;
 margin:5px 10px;
 display:flex;
 border-radius:5px;
 word-break:break-word;
 padding:5px;
 padding-left:12px;
 
 `
const Text = styled(Typography)`
 font-size:14px;
 padding:0 25px 0 5px;
 `
const Time = styled(Typography)`
 font-size:10px;
 color:#919191;
 word-break:keep-all;
 margin-top:auto;
 `
const Message = ({ message }) => {
  const { account } = useContext(AccountContext)
  return (
    <>
      {account.sub === message.senderId ?
        <Own>
          <Text>{message.text}</Text>
          <Time>{formatData(message.createdAt)}</Time>
        </Own>
        :
        <Opposite>
          <Text>{message.text}</Text>
          <Time>{formatData(message.createdAt)}</Time>
        </Opposite>

      }


    </>
  )
}

export default Message
