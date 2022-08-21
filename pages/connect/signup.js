import Link from 'next/link';
import { useRouter } from 'next/router';
import {getStytch} from '../../utils/stytch';
import Cookies from 'cookies';

const Signup = ({ error, validationMethod, creditential }) => {
  if (error) {
    return (
      <div>
        <p>{`Error: ${error}`}</p>
        <Link href="/connect">
          <a className="">Click here to start over</a>
        </Link>
      </div>
    );
  }

  return (
    <div className='min-h-screen w-full bg-green-600'></div>
  )
};

export const getServerSideProps = async (context) => {
  // Get the token out of query parameters from the magic link redirect
  const token = context.query.token[1];
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
};

export default Signup;
