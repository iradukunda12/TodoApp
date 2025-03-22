FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Ensure we have a clean build
RUN rm -rf .next

RUN npm run build
RUN ls -la

EXPOSE 3000

# Make sure we're using the production start
CMD ["npm", "run", "start"]