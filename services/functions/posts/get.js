import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';

import handler from '../../utils/handler';

const client = new DynamoDBClient();

export const main = handler(async (event) => {
  const input = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: { S: 'random-id' },
      postId: { S: 'random-post-0' },
    },
  };

  try {
    const command = new GetItemCommand(input);
    const response = await client.send(command);
    return response.Item;
  } catch (error) {
    console.log(error);
  }
});
