import { Table } from '@serverless-stack/resources';

const StorageStack = ({ stack }) => {
  const table = new Table(stack, 'Posts', {
    fields: {
      userId: 'string',
      postId: 'string',
      title: 'string',
      content: 'string',
      createdAt: 'string',
    },
    primaryIndex: { partitionKey: 'userId', sortKey: 'postId' },
  });

  return {
    table,
  };
};

export default StorageStack;
