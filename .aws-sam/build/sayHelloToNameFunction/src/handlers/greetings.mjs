export const sayHelloToName = async (event) => {
    const name = event.queryStringParameters.name;
    return {
        statusCode: 200,
        body: `Hello ${name}, the time is ${new Date().toTimeString()}`,
    };
};