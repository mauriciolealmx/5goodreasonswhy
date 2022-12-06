import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'posts',
        endpoint: process.env.REACT_APP_API_URL,
        region: process.env.REACT_APP_REGION,
      },
    ],
  },
});
