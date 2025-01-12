import type { APIGatewayEvent, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayEvent, context) => {
  return context.logStreamName;
};
