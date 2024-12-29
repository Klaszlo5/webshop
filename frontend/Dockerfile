FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app code
COPY . .

# Build the React app
RUN npm run build

# Expose the port React app will run on (default is 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
