# Mock Bhai - Technical Interview Platform

Mock Bhai is a real-time technical interview platform that enables seamless coding interviews with video calls, chat, and a collaborative code editor. It connects interviewers and candidates in a unified environment.

## 🚀 Features

-   **Authentication**: Secure login and signup using **Clerk**.
-   **Real-time Video & Audio**: High-quality video calls powered by **GetStream.io**.
-   **Live Chat**: Integrated chat functionality for text communication during interviews.
-   **Code Editor**: A rich code editor (Monaco Editor) for writing and sharing code.
-   **Session Management**: Create, join, and manage interview sessions.
-   **Responsive Design**: Built with **Tailwind CSS v4** for a modern, mobile-friendly UI.

## 🛠️ Tech Stack

### Frontend
-   **React.js** (Vite)
-   **Tailwind CSS v4** (Styling)
-   **Clerk** (Authentication)
-   **Stream Video & Chat SDK** (Real-time communication)
-   **Monaco Editor** (Code Editor)
-   **Axios** (API Requests)

### Backend
-   **Node.js & Express.js**
-   **MongoDB** (Database)
-   **Mongoose** (ODM)
-   **Inngest** (Event-driven background jobs)
-   **Stream Node SDK** (Server-side token generation)

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files.

### Backend (`backend/.env`)

```env
PORT=3000
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Clerk Auth
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stream (Video & Chat)
STREAM_API_KEY=...
STREAM_API_SECRET=...

# Inngest (Optional for local dev)
INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...
```
### FrontEnd
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=...
```

🖥️ Installation & Setup
Follow these steps to set up the project locally.

1. Clone the Repository

```
git clone https://github.com/shaanzeeeee/mock-bhai.git
cd mock-bhai
```

2. Backend Setup
Navigate to the backend folder and install dependencies:
```
cd backend
npm install
```
Start the backend server:
```
npm run start
# Server runs on http://localhost:3000
```
3. Frontend Setup
Open a new terminal, navigate to the frontend folder, and install dependencies:
```
cd frontend
npm install
```
Start the frontend development server:
```
npm run dev
# App runs on http://localhost:5173
```
