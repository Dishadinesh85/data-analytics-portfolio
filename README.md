![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-blue)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

# Data Analytics Portfolio

A modern full-stack portfolio website for Data Analysts and Data Scientists.

## 🚀 Live Demo

🌐 Portfolio Website:
https://data-analytics-portfolio-jade.vercel.app

## 🌟 Features

- **Modern UI** - Built with React, Tailwind CSS, and Framer Motion animations
- **Dark Mode** - Light/dark theme support
- **Responsive Design** - Mobile-first approach
- **Data Visualization** - Charts and dashboards with Recharts and Chart.js
- **Portfolio Showcase** - Projects, skills, certifications, and blog
- **Contact Form** - Email integration with Nodemailer
- **Authentication** - JWT-based user authentication
- **Database** - PostgreSQL for data persistence

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL (v12+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dishadinesh85/data-analytics-portfolio.git
   cd data-analytics-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - Database credentials
   - JWT secret
   - Email configuration

4. **Setup PostgreSQL Database**
   ```bash
   # Create database
   psql -U postgres -c "CREATE DATABASE portfolio_db;"

   # Initialize schema
   psql -U postgres -d portfolio_db -f server/database/schema.sql
   ```

5. **Start the application**

   **Option A: Separate terminals**
   ```bash
   # Terminal 1: Frontend
   npm run dev

   # Terminal 2: Backend
   npm run server
   ```

   **Option B: Both together**
   ```bash
   npm install --save-dev concurrently
   npm start
   ```

### Access

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api

## 📁 Project Structure

```
data-analytics-portfolio/
├── src/                          # React Frontend
│   ├── components/               # React components
│   ├── pages/                    # Page components
│   ├── styles/                   # CSS files
│   ├── App.jsx                   # Root component
│   └── main.jsx                  # Entry point
├── server/                        # Express Backend
│   ├── routes/                   # API routes
│   ├── controllers/              # Request handlers
│   ├── middleware/               # Custom middleware
│   ├── database/                 # Database setup
│   │   └── schema.sql            # PostgreSQL schema
│   └── index.js                  # Server entry point
├── public/                       # Static assets
├── .env.example                  # Environment template
├── package.json                  # Dependencies
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS config
└── README.md                     # This file
```

## 🛠 Available Scripts

```bash
npm run dev       # Start Vite dev server (Frontend)
npm run build     # Build React app for production
npm run preview   # Preview production build
npm run server    # Start Express backend with nodemon (Auto-reload)
npm run backend   # Start Express backend (Production)
```

## 🗄 Database Schema

The PostgreSQL database includes the following tables:

- **users** - User profiles and authentication
- **projects** - Portfolio projects
- **blog_posts** - Blog articles
- **certifications** - Professional certifications
- **skills** - Technical and soft skills
- **contact_messages** - Contact form submissions

## 🔐 Environment Variables

See `.env.example` for a template. Key variables:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=your_password

# Backend
PORT=3000
NODE_ENV=development
JWT_SECRET=your_secret_key

# Email (Gmail with App Password)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Frontend
VITE_API_URL=http://localhost:3000/api
```

## 📧 Email Setup

1. Enable 2-Factor Authentication on Gmail
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in `.env` as `EMAIL_PASSWORD`

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production build.

### Deploy Frontend

Deploy the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

### Deploy Backend

Deploy the server to:
- Heroku
- Railway
- Render
- AWS EC2
- DigitalOcean

## 🛠 Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Hook Form
- Axios
- Recharts & Chart.js

### Backend
- Express.js
- Node.js
- PostgreSQL
- JWT
- Bcrypt
- Nodemailer

## 📝 License

MIT License - See LICENSE file for details

## 👤 Author

**Dishadinesh85**
- GitHub: [@Dishadinesh85](https://github.com/Dishadinesh85)

## 💬 Support

For issues and questions, please create an issue on GitHub.

---

**Happy coding! 🚀**
