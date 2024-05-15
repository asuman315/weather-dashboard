import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('--REQ', req.body);
    if (req.method !== 'POST')
      return res.status(405).send({ message: 'Only POST requests allowed' });

    const {body} = req;
    const {endPoint, method = 'POST', token, data} = body;
  
    await fetch(`https://kampala-events-hub-api.onrender.com/api/${endPoint}`, {
      method: method,
      body: JSON.stringify(data),
      headers: { 
        'Content-Type': 'application/json', 
         Authorization: `Bearer ${token}`
      },
    })
      .then(async (response) => {
        const postResponse = await response.json();
        console.log('Call external api response >>>', postResponse);
        return res.status(response.status).json(postResponse);
      })
      .catch((error) => {
        console.log(error);
        return res.status(405).send({ message: 'Error has happened' });
      });
  }