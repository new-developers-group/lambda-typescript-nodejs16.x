import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log(`debug`, true);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from typescript",
    }),
  };
};
