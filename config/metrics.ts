export interface MetricItem {
  title: string;
  points: string[];
}

export interface TechnicalMetricCategory {
  category: string;
  items: MetricItem[];
}

export const technicalMetrics: TechnicalMetricCategory[] = [
  {
    category: "System Performance",
    items: [
      {
        title: "Optimizing REST & Firestore APIs",
        points: [
          "Reduced API response times by up to 50% with smart query and structure changes",
          "Simplified Firestore collection structure to lower read/write costs",
          "Improved real-time sync performance noticeably in production apps",
        ],
      },
      {
        title: "Edge Caching & Speed Tuning",
        points: [
          "Used Cloudflare edge caching to serve content faster globally",
          "Switched from SSR to SSG on frontend to boost page load speed",
          "Implemented API throttling to handle spikes more smoothly",
        ],
      },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      {
        title: "Firebase Hosting + Functions",
        points: [
          "Built scalable serverless backend systems using Firebase Functions",
          "Automated versioning and deployment for smoother updates",
          "Reduced runtime errors in production by around 70%",
        ],
      },
      {
        title: "CI/CD & Build Workflows",
        points: [
          "Set up GitHub Actions to automate testing and builds",
          "Integrated frontend + backend deployment pipelines",
          "Improved code quality by running full test suites on every PR",
        ],
      },
    ],
  },
  {
    category: "Development & Growth",
    items: [
      {
        title: "Code Quality & Project Structure",
        points: [
          "Always focus on clear file architecture for long-term maintainability",
          "Migrated projects to TypeScript for better reliability",
          "Used comments and docs to help teams understand and contribute",
        ],
      },
      {
        title: "Community & Mentorship",
        points: [
          "Mentored classmates on backend development basics",
          "Published small open-source tools on GitHub",
          "Took the backend lead role in student hackathons and improved teamwork skills",
        ],
      },
    ],
  },
];
