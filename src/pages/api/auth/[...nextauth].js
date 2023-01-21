import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter"

const config = {
    credentials: {
      accessKeyId: "AKIAXPCM264NL6X7CJSV",
      secretAccessKey: "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",
    },
    region: "eu-west-2",
    tableName: 'rouge-email-users'
  };
  
  const client = DynamoDBDocument.from(new DynamoDB(config), {
    marshallOptions: {
      convertEmptyValues: true,
      removeUndefinedValues: true,
      convertClassInstanceToMap: true,
    },
  })

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: DynamoDBAdapter(client),
})