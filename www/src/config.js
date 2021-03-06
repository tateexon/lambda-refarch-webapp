// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_cognito_region": "us-west-2",
  "aws_user_pools_id": "",                           // CognitoID
  "aws_user_pools_web_client_id": "",     // CognitoClientID
  "api_base_url": "",                                     // TodoFunctionApi
  "coginto_hosted_domain": "",                   // CognitoDomainName
  "redirect_url": ""                                      // AmplifyURL
};

export default config;
