import './App.css';
// import Messenger from './Components/Messenger';
import Messenger from './Components/Messenger';
// import { OnError } from '@react-oauth/google';
// import LoginDialog from './Components/Accounts/LoginDialog';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext, useContext } from 'react';
import AccountProvider from './Context/AccountProvider';
// import './index.css'

function App() {
  console.log("APPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
  const ClientId = "265855327283-pg0o8bppirppv3ork4lf796c8f2k0j8j.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
