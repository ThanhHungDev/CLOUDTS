import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    console.log(event);
    try {
        response = {
            statusCode: 200,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                message: 'phải chạy: npm run watch để re-build',
            }),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            headers: {
                'Content-Type': 'text/html',
            },
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }

    return response;
};
