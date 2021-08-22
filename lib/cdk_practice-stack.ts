import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
export class CdkPracticeStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("lambda"), //  handler function is loaded from the lambda folder which we mentioned lambda function
      handler: "hello.handler",
    });

    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello, // this the lambda function name
    });
  }
}
