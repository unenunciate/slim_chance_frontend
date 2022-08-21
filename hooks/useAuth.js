import { useEffect, useState, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../contexts/auth';
import { isEmpty } from 'lodash';

import ethers from 'ethers';

const useAuth = (required = false) => {
    const router = useRouter();
    const {user, setUser, stytch} = useContext(AuthContext);

    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        if(required) {
            if(!isConnected) {
                router.push("/connect")
            }
        }
    }, [isConnected])

    
    
    

    


    return { disconnect, user, triggerEthereumLogin, wallet, triggerEmailLogin};
}

export default useAuth;