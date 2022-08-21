import Link from 'next/link';
import { useState, useEffect } from 'react';
import {isEmpty} from 'lodash';
import { useRouter } from 'next/router';
import useAuth from '../../hooks/useAuth';

const Connect = () => {
  const {triggerEmailLogin, triggerEthereumLogin, getWallet, error, isConnected, emailSent, wallet, user} = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(true);

  const isValidEmail = (emailValue) => {
    // Overly simple email address regex
    const regex = /\S+@\S+\.\S+/;
    return regex.test(emailValue);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);

    if (isValidEmail(e.target.value)) {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const onEmailSubmit = async (e) => {
    e.preventDefault();
    triggerEmailLogin(email);
  };

  useEffect(() => {
    getWallet();
  })

  useEffect(() => {
    if(isConnected) {
      if(user.completedProfile) {
        router.push('/feed');
      } else {
        router.push(`/connect/signup?${wallet.length > 0 && !emailSent ? `address=${wallet[0]}`: 'token=123'}`);
      }
    }
  }, [isConnected])
  
  return (
    <div className='bg-blue-600 h-screen w-full flex flex-col justify-center items-center'>
      <section className='flex flex-col justify-center items-center boarder-2 boarder-gray-600 bg-gray-400 rounded-lg w-5/6 md:w-3/4 lg:w-1/2 2xl:w-1/3 pb-6 shadow-lg shadow-black'>
        <Link href='/'><a className='w-1/3 text-2xl text-white text-center my-12 items-center'>SlimChance</a></Link>
        <div className='w-3/4 h-16 flex mb-4 items-center'>
          {!isEmpty(error) && <span className='text-red-600 border-red-600 bg-red-200 rounded w-full px-2 py-1'>Error: {error.message}</span>}
          {emailSent && <span className='text-green-600 border-green-600 bg-green-200 rounded w-full text-center'>Email Sent!</span>}
        </div>
        <div div className='w-3/4 h-full space-y-6'>
          <form onSubmit={onEmailSubmit} className={`w-full flex flex-col space-y-6 justify-center items-center ${emailSent ? 'invisiable' : ''}`}>
              <input
                className={`w-full bg-gray-200 border-1 border-gray-600 text-gray-600 rounded-lg text-center px-2 py-1`}
                placeholder="example@email.com"
                value={email}
                onChange={onEmailChange}
                disabled={emailSent}
                type="email"
              />

              <input disabled={emailSent || invalidEmail} className='bg-green-400 rounded-lg text-bold text-white hover:brightness-125 active:scale-75 w-2/3 h-6' type="submit" value="Verify" />
            </form>
            
            <div className='border-t-1 border-gray-600 w-full flex flex-col justify-center items-center'>
              <button onClick={triggerEthereumLogin} className={`relative flex w-2/3 bg-blue-200 border-1 border-blue-600 rounded-lg text-bold text-white hover:brightness-125 active:scale-75 w-2/3 h-6`} disabled={!(wallet.length > 0) || emailSent}>
                <span className='w-full text-center'>Ethereum</span>
                <div className={`${wallet.length > 0 || emailSent ? 'hidden': 'absolute bg-gray-400 opacity-70 w-full h-full z-10'}`} />
              </button>
              <span className='text-red-600 mt-4 h-4'>
              {!(wallet.length > 0) && 'Install an Ethereum Wallet to connect with wallet.'}
              </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
