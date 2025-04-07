# Collaborative Coding Platform

A full-stack application for collaborative coding and development.

## Project Structure

- **Frontend**: React application built with Vite
- **Backend**: Node.js/Express API with MongoDB database

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   REDIS_PASSWORD=your_redis_password
   ```

4. Start the server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Features

- User authentication
- Real-time collaboration
- Code sharing and version control

## Technologies Used

- React
- Node.js
- Express
- MongoDB
- Redis
- Tailwind CSS
