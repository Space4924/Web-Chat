import { Box, styled } from '@mui/material'
import { useContext, useState, useEffect, useRef , memo } from 'react';
import { AccountContext } from '../../Context/AccountProvider';
import ChatFooter from './ChatFooter';
import { getMessages, newMessage } from '../../service/api';
import Message from './Message';


const Wrapper = styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%;
`;
const Component = styled(Box)`
position:relative;
height:75vh;
overflow-y:scroll;
`

const ChatMain = ({ person, conversation }) => {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);
  const { account, socket ,setNmessage , Nmessage } = useContext(AccountContext);
  const [value, setValue] = useState('');
  const scrollRef = useRef();
  const [incomingMessage, setIcomingMessage] = useState(null)
  //  const bottomRef=useRef(null);

  useEffect(() => {
    console.log("this is it");
    socket.current.on('getMessage', data => {
      setIcomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  }, [])
  useEffect(() => {
    const getMessageDetails = async () => {
      const Mess = await getMessages(conversation._id);
      console.log(Mess, "Message");
      setData(Mess);
    }
    conversation._id && getMessageDetails();
  }, [conversation._id, person._id, Nmessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [data])

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
      setData(prev => [...prev, incomingMessage]);
  }, [incomingMessage, conversation])

  // console.log(data, "data");


  const sendText = async (e) => {
    const code = e.keycode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }


      socket.current.emit('sendMessage', message);
      await newMessage(message);
      setValue('');
      setNmessage(prev => !prev);
    }
  }
  return (
    <>
      <Wrapper>
        <Component>
          {
            data && data.map((message) => (
              // < ref={scrollRef}>
              <Message message={message} />
              // </>
            ))
          }
          < div ref={scrollRef} style={{position:"aboslute"}} ></div>
        </Component>
      </Wrapper>
      <ChatFooter
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
      />

    </>
  )
}

export default memo(ChatMain)
