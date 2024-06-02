FROM node:alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD ["node", "index.mjs"]