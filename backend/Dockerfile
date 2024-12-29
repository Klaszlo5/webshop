# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port 3000, as this is the port our backend will listen on
EXPOSE 3000

# Run the application (with `dev` for development using ts-node-dev)
CMD ["npm", "run", "dev"]