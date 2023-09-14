# calculator-service
A simple web service for a calculator with the specified endpoints using TypeScript and Nodejs running on Docker:

# 1. Project Structure
Start by creating a directory structure for your project:
calculator-service/
|-- index.mjs          // 
|-- Dockerfile         // Docker configuration
|-- package.json
|-- tsconfig.json
|-- README.md
|-- tests
|--     Unit Tests
|--     Intergration Tests

# 2. Install Dependencies
Initialize a Node.js project and install necessary dependencies:
bash
npm init -y
npm install express body-parser morgan
npm install --save-dev typescript @types/express @types/node ts-node

# 3.TypeScript Configuration
Create a tsconfig.json file for TypeScript configuration:

{
  "compilerOptions": {
    "target": "ES2021",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

# Run using Docker:
docker build -t calculator-service:latest .
docker run --name calculator-container -p 3000:3000 calculator-service:latest


# Deployment Strategy
To deploy to a cloud provider like AWS, we can consider using AWS Lambda for serverless execution and AWS API Gateway to expose your API.
Package your service as a Lambda function.
Create an API Gateway with the necessary routes (e.g., /calculus and /calculus/history) and integrate them with your Lambda function.
Deploy your API to a stage.
Set up any required environment variables, security, and permissions.
Monitor and scale your service as needed using AWS tools like CloudWatch.

# Continuous Integration and Deployment (CI/CD)
Implement a CI/CD pipeline using services like AWS CodePipeline, GitHub Actions, or Jenkins to automate your deployment process whenever you make changes to your code.
