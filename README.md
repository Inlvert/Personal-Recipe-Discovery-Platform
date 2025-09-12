# FlavorAI - Personal Recipe Discovery Platform

---

## Technical Stack

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Nest.js + TypeScript
- Database: PostgreSQL with Sequelize ORM
- Authentication: JWT-based system
- State Management: Redux Toolkit (frontend)

---

## Technologies Used

- Frontend: Next.js, Reduxjs/toolkit, Axios, Formik, Tailwind
- Backend: Node.js, Nest.js, PostgreSQl, Sequelize

## Requirements

To run this project on your machine, you need:

- Node.js (version 22.17.1 or higher)
- PostgreSQl(local installation or a cloud service like Supabase)

## Installation

1. Clone the repository:

```bash
https://github.com/Inlvert/Personal-Recipe-Discovery-Platform
```

2. Navigate to the project directory:

```bash
cd Personal-Recipe-Discovery-Platform
```

3. Install dependencies for the Backend:

```bash
cd server
npm install
npm run start:dev
```

4. Install dependencies for the frontend:

```bash
cd client
npm install
npm run dev
```

## Configure environment variables in .env:

DB_CONNECTION=postgresql://supabase.com:[PORT]/postgres
ACCESS_SECRET=12345test
ACCESS_EXPIRESIN=1min
REFRESH_SECRET=12345test
REFRESH_EXPIRESIN=5d

## Usage

- Open your browser and navigate to http://localhost:3000 to access the application.