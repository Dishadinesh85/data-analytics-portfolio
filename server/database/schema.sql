-- Portfolio Database Schema
-- PostgreSQL/MySQL

-- Create database
-- CREATE DATABASE portfolio_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  bio TEXT,
  avatar_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50),
  technologies VARCHAR(255),
  github_url VARCHAR(255),
  demo_url VARCHAR(255),
  image_url VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT,
  category VARCHAR(100),
  tags VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certifications table
CREATE TABLE IF NOT EXISTS certifications (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  issuer VARCHAR(255),
  date_earned DATE,
  certificate_url VARCHAR(255),
  skills VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  skill_name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  proficiency_level INT (1-100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_blog_posts_user_id ON blog_posts(user_id);
CREATE INDEX idx_certifications_user_id ON certifications(user_id);
CREATE INDEX idx_skills_user_id ON skills(user_id);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at);
