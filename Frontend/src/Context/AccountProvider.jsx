import { createContext ,useState , useRef,useEffect} from 'react'
import {io} from 'socket.io-client';
export const AccountContext=createContext(null);


const AccountProvider = ({children}) => {
    const [account,setAccount]=useState();
    const [person,setPerson]=useState({});
    const [activeUser,setActiveUsers]=useState([]);
    const [Nmessage, setNmessage] = useState(false);
    const socket=useRef(null);
    useEffect(()=>{
      socket.current=io('ws://localhost:8000');
      return () => {
        socket.disconnect();
      };
    },[]);

  return (
    <div>
      <AccountContext.Provider value={{
         account,setAccount
         ,person,setPerson,socket,
         activeUser,setActiveUsers,Nmessage,setNmessage
      }}>
        {children}
        </AccountContext.Provider>
    </div>
  )
}

export default AccountProvider;
