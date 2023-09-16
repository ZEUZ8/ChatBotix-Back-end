# Use an official Node.js runtime as the base image
FROM node:18.12.1-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port the application will listen on
EXPOSE 8080

# Define the command to run the application
CMD ["node", "index.js"]
