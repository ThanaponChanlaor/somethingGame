# Use an official Node.js runtime as the base image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port that Socket.io will listen on (change this if needed)
EXPOSE 3001

# Start the Node.js application
CMD ["node", "index.js"]
