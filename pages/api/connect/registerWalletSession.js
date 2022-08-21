import {getStytch} from '../../../utils/stytch';

async function handler(req, res) {

  if (req.method === 'POST') { 
    const data = JSON.parse(req.body);

    try {
      const list = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users-permissions/findFromStytchId`, {method: 'GET', url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users-permissions/findFromStytchId`, data: {...data}})
      if(list?.length) {
        list = list.find((item)=> {
            return item.stytchId === data.stytchId;
        })
      }
      list.sessionWithWallet = true;
      res.body = JSON.stringify({list})   
      return res.status(200).end();
    } catch (error) {
      const errorString = JSON.stringify(error);
      console.log(errorString);
      return res.status(400).json({ message: errorString });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default handler;