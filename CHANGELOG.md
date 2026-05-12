# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/).

---

## [Unreleased]

### Added
- Architecture diagram (in progress)

---

## [2025-05-12] – Initial Azure Deployment Setup

### Added
- **Nhel Adam Benosa** – Forked and cloned `nhbenosa/suzzane-collins-site` repository as the base application for custom scenario deployment.
- **Nhel Adam Benosa** – Placeholder files for architecture diagram, deployment documentation, and cost estimate.
- **Vince Clifford Aguilar** – Created Azure Resource Group `rg-suzzane-collins` in the **Korea Central** region to contain all project resources.
- **Vince Clifford Aguilar** – Created Azure Storage Account `sasuzzanecollinspawsys` with LRS redundancy for hosting static media assets.
- **Vince Clifford Aguilar** – Enabled Blob Container `media` on the Storage Account with public read access for blobs.
---