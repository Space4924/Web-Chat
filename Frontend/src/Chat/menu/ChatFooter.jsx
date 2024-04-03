import { useEffect } from 'react';
import { Box, styled, InputBase } from '@mui/material'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { uploadFile } from '../../service/api';
import FormData from 'form-data'
const Container = styled(Box)`
height:55px;
background-color:#ededed;
display:flex;
width:100%;
align-items:center;
padding:0px 15px;
&>*{
  margin:5px;
  color:#919191;
}
`

const InputField = styled(InputBase)`
height:30px;
padding:20px;
padding-left:35px;
width:100%;
font-size:14px;
border-radius:10px;
`
const Search = styled(Box)`
background-color:#fff;
border-radius:10px;
width:85%;
`
const ClipIcon = styled(AttachFileIcon)`
transform:rotate(40deg);
`
const ChatFooter = ({ sendText, setValue, value, file, setFile }) => {

  useEffect(() => {
    const getImage = async () => {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      };
      if (file) {

        let formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);
        console.log(formData, "data");
        const imageURL = await uploadFile({ formData, config });
        console.log(imageURL, "imgageURL");
      }
    }
    getImage();
  }, [file])

  const onFileChange = (e) => {
    console.log(e.target.files[0].name);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }
  return (
    <>

      <Container>
        <EmojiEmotionsOutlinedIcon />
        <label htmlFor="htmlfor">
          <ClipIcon />
        </label>
        <input type="file"
          id="htmlfor"
          onChange={(e) => onFileChange(e)}
          style={{ display: "none" }}
        />
        <Search>
          <InputField
            placeholder='Type a message'
            onKeyPress={(e) => sendText(e)}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Search>
        <MicIcon />
      </Container>

    </>
  )
}

export default ChatFooter
