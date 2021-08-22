exports.handler = function (event) {
  console.log("req: ", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hey, CDK! You have hit ${event.path} successfully \n`,
  };
};
