import axios from 'axios';
const url = "http://localhost:8000";
export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (err) {
        console.log("Error While Add User", err.message);
    }
}
export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (err) {
        console.log("Error while Getting Users", err.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (err) {
        console.log("Error while calling setCoversation Api ", err.message);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (err) {
        console.log("Error While fetching the Conversation", err.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (err) {
        console.log("error while calling newMessage Api", err.message);
    }
}

export const getMessages = async (id) => {
    try {
       let resp= await axios.get(`${url}/message/get/${id}`);
       
       return resp.data;
    } catch (err) {
        console.log("error while calling newMessage Api", err.message);
    }
}


export const uploadFile=async(data)=>{
    console.log("frontend working ",data.formData);
    console.log("config",data.config);
    try{
             let response= await axios.post(`${url}/file/upload`,data.formData,data.config);   
             console.log(response,"response");
             return response;
             
        }catch(err){
            console.log("error while uploading the file",err.message);
        }
   

    }
    export const userData=async({data,config})=>{
        try{
            let response=await axios.post(`${url}/userData`,data);
            console.log(response);
            return response;
        }catch(err){
            console.log("error while pushing the User Data",err.message)
        }
    }
