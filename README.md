# AI Twin Waitlist Application

A full-stack waitlist application built with React, Node.js, Express, and MongoDB. Users can join the AI Twin waitlist by submitting their details through a responsive frontend form. The backend stores the submitted information in MongoDB Atlas.

---

## Features

* Join Waitlist Form
* Full Name Collection
* Email Address Collection
* Brand / Business Information
* Phone Number Collection
* MongoDB Atlas Integration
* REST API with Express.js
* React Frontend
* CORS Enabled
* Environment Variable Configuration
* Cloud Deployment Ready

---

## Tech Stack

### Frontend

* React.js
* Axios

### Backend

* Node.js
* Express.js
* Mongoose

### Database

* MongoDB Atlas

---

## Project Structure

```text
ai-twin-project/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   └── Waitlist.jsx
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Waitlist.js
│   ├── routes/
│   │   └── waitlistRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-twin-project.git

cd ai-twin-project
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

Expected Output:

```bash
MongoDB Connected
Server Running on 5000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Expected Output:

```bash
Local: http://localhost:3000
```

---

## API Endpoint

### Join Waitlist

**POST**

```http
/api/waitlist/join
```

Request Body:

```json
{
  "fullName": "Meenakshi",
  "email": "test@gmail.com",
  "business": "AI Twin",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Joined Waitlist Successfully"
}
```

---

## MongoDB Schema

```javascript
{
  fullName: String,
  email: String,
  business: String,
  phone: String,
  createdAt: Date
}
```

---

## Deployment

### Backend

* Google Cloud Run
* Render
* Railway

### Frontend

* Firebase Hosting
* Vercel
* Netlify

---

## Future Enhancements

* Email Verification
* Duplicate Email Validation
* Admin Dashboard
* Export Waitlist Data
* User Analytics
* SMS Notifications
* Authentication & Authorization

---

## Author

Meenakshi

---

## License

This project is licensed under the MIT License.
