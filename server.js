const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// API Routes
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Redwane Aitbrahim",
    title: "Software Engineer",
    email: "redwane.aitbrahim67@gmail.com",
    phone: "+33767336612",
    location: "Palaiseau, France",
    linkedin: "https://linkedin.com/in/redwane-aitbrahim",
    github: "https://github.com/Redwane-stdy",
    description: "Master student in Software Engineering at Télécom SudParis. Eager to design, develop, and deploy scalable, high-quality systems that enhance digital experiences in an innovative environment."
  });
});

app.get('/api/experience', (req, res) => {
  res.json([
    {
      id: 1,
      title: "Software Development Intern",
      company: "INFOSYSCOM France",
      period: "June 2025 – Aug. 2025",
      achievements: [
        "Developed a distributed messaging system handling 10K+ active users with fault tolerance and scalability.",
        "Automated backup workflows with PowerShell & Veeam, improving recovery reliability by 30%."
      ]
    },
    {
      id: 2,
      title: "Operations & Data Analysis Intern",
      company: "SAINT-GOBAIN CEDEO France",
      period: "June 2024 – Aug. 2024",
      achievements: [
        "Built SQL pipelines for datasets (100M+ rows) enabling real-time dashboards with 99.8% accuracy.",
        "Reduced manual reporting workload by 40% via automation and backend optimization."
      ]
    },
    {
      id: 3,
      title: "Vice President",
      company: "KRYPTOSPHERE IMT Telecom SudParis",
      period: "2023 – 2025",
      achievements: [
        "Led a 20+ member blockchain/AI association; increased membership 60% and raised €15K+.",
        "Organized 15+ workshops & conferences (500+ attendees) with industry partnerships."
      ]
    }
  ]);
});

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: "FullStack Task Management WebApp",
      tech: "React, Node.js, PostgreSQL, Docker",
      year: "2025",
      description: "Developed a Trello-like web app with CRUD operations, JWT authentication and REST APIs."
    },
    {
      id: 2,
      title: "Feedback Analyzer",
      tech: "Java, Spring Boot, NLP, MySQL, Postman, Docker",
      year: "2024",
      description: "Built a feedback analysis platform with Java and Spring Boot, enabling scalable processing of user feedback. Implemented RESTful APIs for seamless integration."
    },
    {
      id: 3,
      title: "Voting DApp",
      tech: "Solidity, Web3.js, React",
      year: "2025",
      description: "Built smart contracts with transparent result verification and React-based frontend integration."
    },
    {
      id: 4,
      title: "Distributed Chat System",
      tech: "Java, Maven",
      year: "2024",
      description: "Implemented distributed algorithms (leader election, mutual exclusion, deadlock detection). Designed client-server architecture with Java NIO."
    },
    {
      id: 5,
      title: "Seismic Event Detection - NASA SpaceApps",
      tech: "Python, ML, FFT",
      year: "2024",
      description: "Applied FFT filtering to Mars seismic datasets; trained ML model reducing transmission cost by 50%."
    }
  ]);
});

app.get('/api/skills', (req, res) => {
  res.json({
    languages: ["Python", "Java", "C", "Javascript", "SQL", "C#"],
    frontend: ["React.js", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "Spring Boot", ".NET"],
    databases: ["PostgreSQL", "MongoDB"],
    devops: ["Docker", "Git", "Linux", "CI/CD", "Google Cloud"],
    spokenLanguages: ["French (Native)", "English (Fluent)"]
  });
});

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});