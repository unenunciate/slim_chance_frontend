import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../../hooks/useAuth';
import { getStytch } from '../../utils/stytch';
import axios from 'axios';

const Signup = () => {
  const { user, updateUser } = useAuth();

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
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

  const onSignupSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users`, {email, username, name, pasword: "notusedXXAS", stytches: [user.stytchStrapiId]});
    updateUser(res.data);
  };

  useEffect(() => {
    if(user?.id) {
      router.push('/account/challenges');
    } 
  }, [user])
  
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-blue-600'>
      <section className='flex flex-col items-center justify-center w-5/6 pb-6 bg-gray-400 rounded-lg shadow-lg boarder-2 boarder-gray-600 md:w-3/4 lg:w-1/2 2xl:w-1/3 shadow-black'>
        <Link href='/'><a className='items-center w-1/3 my-12 text-2xl text-center text-white'>SlimChance</a></Link>
        <div className='flex items-center w-3/4 h-16 mb-4'/>
       
        <div div className='w-3/4 h-full space-y-6'>
          <form onSubmit={onSignupSubmit} className={`w-full flex flex-col space-y-12 justify-center items-center ${false ? 'invisiable' : ''}`}>
              <input
                className={`w-full bg-gray-200 border-1 border-gray-600 text-gray-600 rounded-lg text-center px-2 py-1`}
                placeholder="example@email.com"
                value={email}
                onChange={onEmailChange}
                type="email"
              />

              <input
                className={`w-full bg-gray-200 border-1 border-gray-600 text-gray-600 rounded-lg text-center px-2 py-1`}
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />

              <input
                className={`w-full bg-gray-200 border-1 border-gray-600 text-gray-600 rounded-lg text-center px-2 py-1`}
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />

              <input disabled={invalidEmail || name.length < 3 || username.length < 3 || email.length < 6} className='w-2/3 py-2 text-white bg-green-400 rounded-lg text-bold hover:brightness-125 active:scale-75' type="submit" value="Submit" />
            </form>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  // Get the token out of query parameters from the magic link redirect
  /**let token;

  try {
    token = context.query.token[1];
  } catch { }

  const address = context.query?.address;

  // If no token is present, something went wrong. Display an error.
  if (!token && !address) {
    return { props: { error: 'No magic link token or address present.' } };
  }
  if(token) {
        try {
            // Validate the token with Stytch, and create a session.
            const stytch = getStytch();
            const response = await stytch.magicLinks.authenticate(token, {
            session_duration_minutes: 30,
            });

            // Save Stytch session to a cookie
            const cookies = new Cookies(context.req, context.res);
            cookies.set('api_webauthn_session', response.session_token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 30, // 30 minutes
            });

            
            return {
            props: {
                validationMethod: '',
                creditential: ''
            },
            };
        } catch (error) {
            // If authenticate fails display the error.
            return { props: { error: JSON.stringify(error) } };
        }
    } else if(address) {

    }
    */
   return { props: {}}
};

export default Signup;
