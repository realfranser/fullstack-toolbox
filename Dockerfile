# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR '/app'

# Copy package.json to the working directory
COPY package.json .

# Install any needed packages specified in package.json
RUN yarn

# Copying the rest of the code to the working directory
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Compile with babel
RUN yarn build

# Run index.js when the container launches
CMD ["node", "dist/index.js"]
