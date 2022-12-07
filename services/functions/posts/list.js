import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';
import handler from '../../utils/handler';

const client = new DynamoDBClient();

export const main = handler(async () => {
  // What about all posts from all users?
  const input = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': { S: 'random-id' },
    },
  };

  try {
    const command = new QueryCommand(input);
    const results = await client.send(command);

    return results.Items;
  } catch (err) {
    console.error(err);
  }
});
