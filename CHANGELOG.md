# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [Unreleased]

### Added
- Architecture diagram (in progress)

---

## [2026-05-12] – Initial Azure Deployment Setup

### Added
- **Nhel Adam Benosa** – Forked and cloned `nhbenosa/suzzane-collins-site` repository as the base application for custom scenario deployment.
- **Nhel Adam Benosa** – Placeholder files for architecture diagram, deployment documentation, and cost estimate.
- **Vince Clifford Aguilar** – Created Azure Resource Group `rg-suzzane-collins` in the **Korea Central** region to contain all project resources.
- **Vince Clifford Aguilar** – Created Azure Storage Account `sasuzzanecollinspawsys` with LRS redundancy for hosting static media assets.
- **Vince Clifford Aguilar** – Enabled Blob Container `media` on the Storage Account with public read access for blobs.

## [2026-05-13] – App Service & Security Setup

### Added
- **Vince Clifford Aguilar** – Created App Service Plan `asp-suzzane-collins` on **B1 Basic** tier (Linux) in Korea Central.
- **Vince Clifford Aguilar** – Created App Service (Web App) `app-suzzane-collins` using the Node.js 22 LTS runtime stack.
- **Vince Clifford Aguilar** – Created Azure Key Vault `kv-suzzane-collins` in the Korea Central region with Standard SKU.
- **Vince Clifford Aguilar** – Added `StorageConnectionString` as a secret in Key Vault.
- **Vince Clifford Aguilar** – Enabled **System-assigned Managed Identity** on the App Service for secure, passwordless access to Key Vault.
- **Vince Clifford Aguilar** – Assigned **Key Vault Secrets User** role to the App Service Managed Identity via IAM.

---

## [2026-05-14] – Application Insights & CI/CD Setup

### Added
- **Vince Clifford Aguilar** – Created Azure Application Insights resource `appi-suzzane-collins` (Workspace-based) in Korea Central.
- **Vince Clifford Aguilar** – Connected Application Insights to App Service via App Service → Settings → Application Insights.
- **Francisco Verga III** – Created `.github/workflows/azure-deploy.yml` GitHub Actions workflow for automated deployment to App Service on push to `main`.
- **Vince Clifford Aguilar** – Downloaded publish profile from App Service and added `AZURE_WEBAPP_PUBLISH_PROFILE` secret to the GitHub repository.
- **Vince Clifford Aguilar** – Configured App Service startup command: `npx serve -s . -l 8080` under Settings → Configuration → General settings.
- **Nhel Adam Benosa** – Verified CI/CD pipeline: pushed a test commit to `main`, confirmed successful auto-deployment via GitHub Actions.

---

## [2026-05-15] – Bug Fix & Testing

### Fixed
- **Vince Clifford Aguilar** – Fixed 404 error on the live App Service URL. Root cause: GitHub Actions deploys the contents of `/build` directly to `wwwroot`, so the startup command `npx serve -s build -l 8080` was looking for a non-existent subdirectory. Corrected to `npx serve -s . -l 8080` and restarted the App Service.

### Added
- **Nhel Adam Benosa** – Verified live deployment: site accessible at `https://app-suzzane-collins-ahcgdxb3gma7caa8.koreacentral-01.azurewebsites.net/`.

---