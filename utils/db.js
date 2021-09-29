import AWS from "aws-sdk";

// Update AWS config
AWS.config.update({
  accessKeyId: process.env.DB_ACCESS_KEY_ID,
  secretAccessKey: process.env.DB_SECRET_ACCESS_KEY , // Do NOT HARD-CODE your secret credentials here
  region: "us-west-2",
});

// Create DynamoDB service object
const dynamo = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

export default dynamo;