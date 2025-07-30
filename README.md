# Travel Risk Monitoring Application

A full-stack web application for monitoring travel destinations and assessing risk levels. Built with React frontend and Node.js/Express backend with MongoDB database.

## Features

- **User Authentication**: Secure login/register system with JWT tokens
- **Destination Monitoring**: Track and monitor travel destinations
- **Risk Assessment**: Evaluate travel risks for different locations
- **Real-time Updates**: Get notified about travel advisories
- **Email Notifications**: Receive alerts via email (configured but commented out)

## 🛠️ Tech Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing
- **nodemailer** for email notifications
- **Jest** for testing
- **Supertest** for API testing

### Frontend

- **React 19** with Vite
- **React Router** for navigation
- **Axios** for API calls
- **ESLint** for code linting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd MonkeyAnd-River2025
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

**Configure your `.env` file:**

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8000
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=10h
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=1day
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

**Configure your `.env` file:**

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
NODE_OPTIONS="--max-old-space-size=4096"
```

## 🏃‍♂️ Running the Application

### Development Mode

#### Backend

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:8000`

#### Frontend

```bash
cd frontend
npm run dev
```

The frontend application will start on `http://localhost:5173`

### Production Mode

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd frontend
npm run build
npm run preview
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm test
```

The backend includes tests for:

- Authentication endpoints
- Monitored destination functionality
- API integration tests

### Frontend Tests

Currently, the frontend doesn't have test scripts configured, but you can add testing frameworks like:

- **Vitest** 
- **Jest** with React Testing Library

## 📁 Project Structure

```
MonkeyAnd-River2025/
├── backend/
│   ├── src/
│   │   ├── config/          # Database and app configuration
│   │   ├── controller/      # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── model/          # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── test/           # Test files
│   │   └── app.js          # Express app setup
│   ├── .env                # Environment variables
│   ├── index.js            # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── Components/     # React components
│   │   ├── service/        # API service functions
│   │   ├── assets/         # Static assets
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # React entry point
│   ├── .env                # Environment variables
│   └── package.json
└── README.md
```
## Configuration

### MongoDB Setup

1. **Local MongoDB**: Install MongoDB locally and update the connection string
2. **MongoDB Atlas**: Create a free cluster and use the provided connection string

### Email Configuration (Optional)

To enable email notifications, uncomment and configure the email settings in `backend/.env`:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

**Note**: Use an App Password for Gmail accounts with 2FA enabled.

### CORS Configuration

The backend is configured to accept requests from the frontend. If you need to change the CORS origin, uncomment and modify the `CORS_ORIGIN` variable in `backend/.env`.

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**

   ```bash
   # Kill process using port 8000
   npx kill-port 8000
   ```

2. **MongoDB Connection Issues**

   - Verify your MongoDB URI is correct
   - Check if your IP is whitelisted (for Atlas)
   - Ensure MongoDB service is running (for local installation)

3. **Node Modules Issues**

   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Environment Variables Not Loading**
   - Ensure `.env` files are in the correct directories
   - Check for typos in variable names
   - Restart the development server

### Memory Issues

If you encounter memory issues during development, the frontend is already configured with increased memory allocation in the `.env` file.

## 📝 API Documentation

### Authentication Endpoints

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout

### Destination Endpoints

- `GET /api/v1/destinations` - Get all monitored destinations
- `POST /api/v1/destinations` - Add new destination
- `PUT /api/v1/destinations/:id` - Update destination
- `DELETE /api/v1/destinations/:id` - Remove destination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- **Bernard** - Backend
- **Fiston** - Frontend

## Acknowledgments

- Built for the MonkeyAnd-River2025 Hackathon
- Thanks to all contributors and mentors
