Severless boilerplate
====================

## To start

This is assuming you have an AWS account setup and [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

Next install serverless:

```
npm install -g serverless
```

More documenation is available for (serverless here)[https://serverless.com/framework/docs/getting-started/]

Install dependencies
```
yarn install
# or npm install
```

To run locally:

```
yarn start
```

To view routes locally:
```
http://localhost:3000/
```

To deploy to AWS
```
sls deploy
```