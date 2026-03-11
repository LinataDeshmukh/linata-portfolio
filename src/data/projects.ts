export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  /** CSS gradient derived from the cover image's dominant colors */
  gradient: string;
  description: string;
  techStack: string[];
  overview: string;
  challenge: string;
  impact: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "neu-chatbot",
    title: "RAG Application: Chat with Northeastern Curriculum",
    shortTitle: "NEU Curriculum Chatbot",
    date: "Feb 2024 – Apr 2024",
    category: "AI & Machine Learning",
    featured: true,
    image: "/images/neu-chatbot.png",
    gradient: "linear-gradient(135deg, #1a0008 0%, #4a0018 50%, #6b0020 100%)",
    description:
      "Conversational RAG application that enables real-time curriculum queries using GPT, with automated embedding ingestion and improved answer relevance through LangChain pipelines.",
    techStack: ["Python", "Airflow", "Streamlit", "Docker", "LangChain", "OpenAI", "Pinecone"],
    overview:
      "A retrieval-augmented generation (RAG) application that allows Northeastern University students to query the course catalog and curriculum in natural language. Built with LangChain and OpenAI, the system automatically ingests and indexes course descriptions into Pinecone, then uses a semantic retrieval pipeline to generate accurate, context-grounded answers via a Streamlit chat interface.",
    challenge:
      "Course catalog data is semi-structured and changes every semester. The challenge was to build an automated ingestion pipeline that could detect new or updated course descriptions, re-embed them, and refresh the vector store — without manual intervention — so the chatbot always reflected the current curriculum.",
    impact: [
      "Built conversational RAG application using object-oriented Python components",
      "Automated embedding ingestion with Airflow DAGs, reducing update effort by 60%",
      "Improved answer relevance by 30% via LangChain pipelines with OpenAI embeddings",
      "Delivered user-facing chat interface using Streamlit and Docker",
      "Implemented vector database integration with Pinecone for semantic search",
    ],
    githubUrl: "https://github.com/LinataDeshmukh/neu-student-assistance-chatbot",
  },
  {
    slug: "formula1",
    title: "Formula 1 Race Data Analysis Pipeline",
    shortTitle: "Formula 1 Pipeline",
    date: "2024",
    category: "Data Engineering Pipeline",
    featured: true,
    image: "/images/formula1-dashboard.png",
    gradient: "linear-gradient(135deg, #0d0c0f 0%, #1a0d16 45%, #0d1f1b 100%)",
    description:
      "Azure Databricks + Delta Lake pipeline for ingesting, modeling, and analyzing Formula 1 race data with PySpark and Power BI dashboards.",
    techStack: ["Databricks", "Delta Lake", "PySpark", "ADLS Gen2", "Power BI", "Python", "SQL"],
    overview:
      "A cloud-native data engineering pipeline built on Azure Databricks that ingests raw Formula 1 race data from the Ergast API, applies Medallion Architecture (Bronze → Silver → Gold) using Delta Lake, and delivers race performance dashboards in Power BI. The pipeline handles incremental loads, schema evolution, and time-travel queries.",
    challenge:
      "The Ergast API returns nested JSON payloads with complex race result hierarchies. Building a reliable incremental ingestion layer while maintaining historical accuracy across 70+ years of race data required careful schema design and partitioning strategies in Delta Lake.",
    impact: [
      "Built a full Medallion Architecture pipeline on Azure Databricks",
      "Ingested and modeled 70+ years of F1 race data using Delta Lake",
      "Leveraged PySpark transformations for high-performance data modeling",
      "Delivered Power BI dashboards with race standings, lap analysis, and driver comparisons",
      "Enabled time-travel queries for historical race performance analysis",
    ],
    githubUrl: "https://github.com/LinataDeshmukh",
  },
  {
    slug: "sap-migration",
    title: "SAP S/4HANA Master Data Migration & Quality Framework",
    shortTitle: "SAP Data Migration",
    date: "Sep 2025 – Nov 2025",
    category: "Data Engineering",
    featured: true,
    image: "/images/sap-migration.png",
    gradient: "linear-gradient(135deg, #020b18 0%, #041a4a 50%, #072d9e 100%)",
    description:
      "End-to-end master data migration framework with bronze ingestion pipeline for 28 files, 386K rows across 7 functional domains with comprehensive data quality framework.",
    techStack: [
      "Python", "MySQL", "dbt", "Power BI", "Apache Airflow",
      "Docker", "SQL", "ETL", "Data Warehousing", "Medallion Architecture",
    ],
    overview:
      "A production-grade master data migration framework designed for SAP S/4HANA migration projects. The platform ingests 28 source files containing 386K rows spanning 7 SAP functional domains (Materials, Vendors, Customers, GL Accounts, Cost Centers, Profit Centers, Assets), profiles data quality at each layer, and surfaces critical issues in a Power BI control tower before migration execution.",
    challenge:
      "SAP migrations fail most often due to data quality surprises discovered mid-flight. The challenge was to build a pre-migration assessment layer that could automatically classify data quality issues by severity, domain, and remediation owner — reducing the dependency on manual spreadsheet audits that teams were spending weeks on.",
    impact: [
      "Ingested 150K+ records from 10 source files across 4 SAP master data domains",
      "Built dbt transformation models with SQL-based data profiling routines",
      "Surfaced 100+ critical data issues, reducing manual assessment effort by 60%",
      "Designed gold layer star schema for Power BI dashboard reporting",
      "Orchestrated full pipeline using Apache Airflow DAGs in Docker",
    ],
    githubUrl: "https://github.com/LinataDeshmukh",
  },
  {
    slug: "insurance-claims",
    title: "Insurance Claims Analytics Platform",
    shortTitle: "Insurance Claims Analytics",
    date: "2025",
    category: "Data Analytics Platform",
    featured: false,
    image: "/images/insurance-claims-dashboard.png",
    gradient: "linear-gradient(135deg, #180404 0%, #420808 50%, #7a1010 100%)",
    description:
      "Comprehensive insurance claims analytics platform with end-to-end data processing and visualization for claims analysis, fraud detection, and reporting.",
    techStack: ["Python", "Power BI", "SQL", "pandas", "ETL", "DAX", "Data Modeling"],
    overview:
      "An enterprise insurance claims analytics platform built for P&C insurance operations. The platform processes claims data end-to-end — from raw ingestion through transformation to interactive dashboards — supporting underwriting analytics, fraud detection signals, and executive reporting.",
    challenge:
      "Insurance claims data is sensitive, highly relational, and loaded with domain-specific rules. Building a clean analytical layer that accurately calculated loss ratios, frequency, and severity metrics while flagging anomalous claims patterns required deep collaboration with actuarial teams and strict data governance.",
    impact: [
      "Designed and implemented end-to-end claims data processing pipeline",
      "Built interactive Power BI dashboards for claims analysis and reporting",
      "Developed SQL queries for complex claims aggregation and trend analysis",
      "Created data models for fraud detection and risk assessment",
      "Reduced manual reporting effort by standardizing DAX measures across all reports",
    ],
    githubUrl: "https://github.com/LinataDeshmukh",
  },
  {
    slug: "motor-vehicle-collisions",
    title: "Motor Vehicle Collisions Analytics",
    shortTitle: "Motor Vehicle Collisions",
    date: "2024",
    category: "Data Analytics Platform",
    featured: true,
    image: "/images/motor-vehicle-collisions-dashboard.png",
    gradient: "linear-gradient(135deg, #3b0000 0%, #2a1800 40%, #001a00 100%)",
    description:
      "ETL + analytics platform processing 500K+ collision records across NYC, Chicago, and Austin with Tableau and Power BI hotspot dashboards.",
    techStack: [
      "Talend", "Alteryx", "YData", "Tableau", "Power BI",
      "SQL", "Python", "Excel", "Data Profiling", "ETL",
    ],
    overview:
      "An end-to-end ETL and analytics platform that ingests, cleans, and visualizes over 500,000 motor vehicle collision records from three major US cities — NYC, Chicago, and Austin. The platform surfaces geospatial hotspot patterns and temporal trends through interactive Tableau and Power BI dashboards, enabling traffic safety teams to prioritize interventions.",
    challenge:
      "The source data came from three different city portals with inconsistent schemas, duplicate records, and missing geolocation fields. The challenge was to unify these datasets into a single clean analytical layer without losing record fidelity, while automating the profiling process so any future data drops could be validated instantly.",
    impact: [
      "Processed 500K+ collision records from 3 source datasets",
      "Built Alteryx workflows that eliminated 8+ hours of manual consolidation",
      "Automated data validation and profiling — improved data integrity by 35%",
      "Identified 5 key causal factors, leading to 8 actionable safety recommendations",
      "Created Tableau and Power BI hotspot dashboards used by safety analysts",
    ],
    githubUrl: "https://github.com/LinataDeshmukh",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
