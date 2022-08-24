import Link from 'next/link';
import { useState, useEffect } from 'react';
import {isEmpty} from 'lodash';
import { useRouter } from 'next/router';
import useAuth from '../../hooks/useAuth';

const Connect = () => {
  const {triggerEmailLogin, triggerEthereumLogin, wallet, user} = useAuth();
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
    if(!isEmpty(user)) {
      if(user?.id) {
        router.push('/feed');
      } else {
        router.push(`/connect/signup?${wallet ? `address=${wallet[0]}`: 'token=123'}`);
      }
    }
  }, [user])
  
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-blue-600'>
      <section className='flex flex-col items-center justify-center w-5/6 pb-6 bg-gray-400 rounded-lg shadow-lg boarder-2 boarder-gray-600 md:w-3/4 lg:w-1/2 2xl:w-1/3 shadow-black'>
        <Link href='/'><a className='items-center w-1/3 my-12 text-2xl text-center text-white'>SlimChance</a></Link>
        <div className='flex items-center w-3/4 h-16 mb-4'>
          {false && <span className='w-full px-2 py-1 text-red-600 bg-red-200 border-red-600 rounded'>Error: {error.message}</span>}
          {false && <span className='w-full text-center text-green-600 bg-green-200 border-green-600 rounded'>Email Sent!</span>}
        </div>
        <div div className='w-3/4 h-full space-y-6'>
          <form onSubmit={onEmailSubmit} className={`w-full flex flex-col space-y-6 justify-center items-center ${false ? 'invisiable' : ''}`}>
              <input
                className={`w-full bg-gray-200 border-1 border-gray-600 text-gray-600 rounded-lg text-center px-2 py-1`}
                placeholder='example@email.com'
                value={email}
                onChange={onEmailChange}
                disabled={true}
                type="email"
              />

              <input disabled={true || invalidEmail} className='w-2/3 h-6 text-white bg-green-400 rounded-lg text-bold hover:brightness-125 active:scale-75' type="submit" value="Verify" />
            </form>
            
            <div className='flex flex-col items-center justify-center w-full border-gray-600 border-t-1'>
              <button onClick={triggerEthereumLogin} className={`relative flex w-2/3 bg-blue-200 border-1 border-blue-600 rounded-lg text-bold text-white hover:brightness-125 active:scale-75 w-2/3 h-6`} >
                <span className='w-full text-center'>Ethereum</span>
                <div className={`${true ? 'hidden': 'absolute bg-gray-400 opacity-70 w-full h-full z-10'}`} />
              </button>
              <span className='h-4 mt-4 text-red-600'>
              {!(wallet.length > 0) && 'Install an Ethereum Wallet to connect with wallet.'}
              </span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
