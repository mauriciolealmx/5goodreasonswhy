import { Api, use } from '@serverless-stack/resources';
import StorageStack from './StorageStack';

const ApiStack = ({ stack }) => {
  const { table } = use(StorageStack);
  
  const api = new Api(stack, 'Api', {
    defaults: {
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
    },
    routes: {
      'GET /': 'functions/posts/list.main',
      'GET /posts/{postId}': 'functions/posts/get.main',
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
