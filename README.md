# Suzanne Collins Fan Site — Azure Cloud Deployment

**Course:** CSEC 3 – Cloud Computing (Microsoft Azure)
**Term:** AY 2025–2026, 2nd Semester
**Scenario:** E – Custom Web Application

---

## 👥 Team Members

| Name | GitHub | Email | Role |
|------|--------|-------|------|
| Nhel Adam Benosa | [@nhbenosa](https://github.com/nhbenosa) | nhbenosa@my.cspc.edu.ph | Project Lead & Repository Owner |
| Vince Clifford Aguilar | [@clepord-34](https://github.com/clepord-34) | viaguilar@my.cspc.edu.ph | Azure Deployment Lead |
| Francisco Verga III | [@Francisvrg](https://github.com/Francisvrg) | frverga@my.cspc.edu.ph | Documentation & Architecture Lead |
| John Kenneth Bañares | [@kennethb28](https://github.com/kennethb28) | jobanares@my.cspc.edu.ph | Cost Analysis & Testing Lead |

---

## 📌 Project Overview

This project deploys the **Suzanne Collins Fan Site** — a React + Tailwind CSS web application originally developed for a Human-Computer Interaction course — onto Microsoft Azure as a cloud-hosted, production-grade web application.

The deployment demonstrates:
- Hosting a Node.js/React application on **Azure App Service**
- Storing static media assets on **Azure Blob Storage**
- Securing secrets with **Azure Key Vault**
- Accelerating global delivery via **Azure CDN**
- Automating deployments with **GitHub Actions CI/CD**

---

## 🌐 Live Application

> **App URL:** `https://app-suzzane-collins-ahcgdxb3gma7caa8.koreacentral-01.azurewebsites.net/`

---

## 🏗️ Azure Architecture Summary

| # | Service | Purpose |
|---|---------|---------|
| 1 | **App Service Plan (B1)** | Compute tier for hosting the web app |
| 2 | **Azure App Service** | Hosts the React/Node.js application |
| 3 | **Azure Storage Account** | Blob Storage for images and static media assets |
| 4 | **Azure Key Vault** | Securely stores app secrets and connection strings |
| 5 | **Azure Application Insights** | Monitors and analyzes application performance and usage |

### ☁️ Cloud Optimizations Implemented
1. **CI/CD Pipeline (GitHub Actions)** — Every push to `main` automatically builds and deploys the app to Azure App Service with zero downtime.
2. **Azure CDN** — Static assets (images, CSS, JS bundles) are cached at edge nodes globally, reducing load times for users worldwide.

---

## 📁 Repository Structure

```
/
├── diagram/
│   └── architecture.png          # Azure architecture diagram
├── deployment/
│   ├── screenshots/              # Azure Portal step-by-step screenshots (Method B)
│   └── README.md                 # Full deployment guide
├── report/
│   └── cost-estimate.md          # Azure Pricing Calculator cost report
├── src/                          # React application source code
├── public/                       # Static public assets
├── .github/
│   └── workflows/
│       └── azure-deploy.yml      # GitHub Actions CI/CD workflow
├── CHANGELOG.md                  # Detailed project changelog
├── package.json
└── README.md                     # This file
```

---

## 🚀 Deployment Method

**Method B (GUI)** — Azure Portal screenshots.
See [`deployment/README.md`](./deployment/README.md) for the complete step-by-step guide.

---

## 💰 Cost Estimate

See [`report/cost-estimate.md`](./report/cost-estimate.md) for the full cost breakdown and optimization notes.

---

## 🎬 Video Presentation

> **Video Link:** `https://drive.google.com/file/d/1lRemkbdVanqTo69KjZ_KRj3CEnKS_r8z/view`