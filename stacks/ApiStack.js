import { Api } from '@serverless-stack/resources';

const ApiStack = ({ stack }) => {
  const api = new Api(stack, 'Api', {
    routes: {
      'GET /': 'functions/posts/list.main',
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
};

export default ApiStack;
