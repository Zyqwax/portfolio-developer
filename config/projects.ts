export interface Project {
  title: string;
  description: string;
  details: string[];
  tech: string[];
}

export const systemArchitectureProjects: Project[] = [
  {
    title: "Fullstack E-Commerce Platform",
    description:
      "Developed a user-friendly e-commerce app with a dynamic frontend and robust backend for product management",
    details: [
      "Built responsive UI with React",
      "Created RESTful APIs using Django REST Framework",
      "Implemented JWT-based user authentication",
      "Managed products and orders with PostgreSQL",
      "Containerized the application using Docker",
    ],
    tech: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "JWT",
    ],
  },
  {
    title: "Real-Time Chat Application with Python & React",
    description:
      "Built a real-time messaging app enabling instant communication between users via WebSockets",
    details: [
      "Developed frontend with React",
      "Implemented backend with FastAPI supporting WebSockets",
      "Used Redis for message caching and pub/sub",
      "Secured connections and user sessions with JWT",
    ],
    tech: ["React", "FastAPI", "WebSocket", "Redis", "JWT", "Python"],
  },
  {
    title: "Personal Finance Dashboard",
    description:
      "Created an interactive dashboard to track expenses, income, and savings with data visualization",
    details: [
      "Frontend built with React and Chart.js for visualizations",
      "Backend REST API developed using Flask",
      "Implemented user authentication with OAuth2",
      "Persisted data with SQLite and SQLAlchemy ORM",
    ],
    tech: ["React", "Flask", "Chart.js", "SQLite", "SQLAlchemy", "OAuth2"],
  },
];
