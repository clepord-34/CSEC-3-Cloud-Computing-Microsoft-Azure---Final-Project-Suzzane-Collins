# Architecture Diagram — Suzanne Collins Fan Site on Azure

**Course:** CSEC 3 – Cloud Computing | **Scenario:** E – Custom Web Application
**Region:** Korea Central (Korea) | **Method:** Method B (GUI)

> This diagram shows the **Baseline Deployment** (left) and **Improved Deployment** (right).
> GitHub renders Mermaid diagrams natively — no extra tools needed.

---

```mermaid
graph LR

%% ─────────────────────────────────────────────
%%  BASELINE DEPLOYMENT
%% ─────────────────────────────────────────────
subgraph BASELINE["  🔵  BASELINE DEPLOYMENT  "]
    direction TB

    U1(["👤 End User"])
    GH1["🐙 GitHub Repo\nnhbenosa/suzzane-collins-site"]

    subgraph AZ1["☁️  Microsoft Azure — Korea Central"]
        subgraph RG1["📁 Resource Group · rg-suzzane-collins"]
            subgraph ASP1["⬜ App Service Plan · asp-suzzane-collins · B1 Basic · Linux"]
                APP1["🌐 App Service\napp-suzzane-collins\nNode.js 22 LTS"]
            end
            SA1[("🗄️ Storage Account\nsasuzzanecollinspawsys\nStandard GPv2 · LRS")]
            BLOB1["📂 Blob Container\nmedia\n(public read)"]
            KV1[["🔑 Key Vault\nkv-suzzane-collins\nStandard SKU"]]
            SEC_WARN["⚠️ Secret stored as\nApp Setting (access key)\n— not ideal"]
        end
    end

    U1      -->|"HTTPS port 443"| APP1
    GH1     -.->|"Manual Deploy\n az webapp deploy"| APP1
    APP1    -->|"REST API · Blob Read"| SA1
    SA1     ---  BLOB1
    APP1    -->|"Access Key ⚠️"| KV1
    KV1     ---  SEC_WARN
end

%% ─────────────────────────────────────────────
%%  IMPROVED DEPLOYMENT
%% ─────────────────────────────────────────────
subgraph IMPROVED["  ✅  IMPROVED DEPLOYMENT  "]
    direction TB

    U2(["👤 End User"])
    GH2["🐙 GitHub Repo\nnhbenosa/suzzane-collins-site"]
    GHA2(["⚙️ GitHub Actions\nCI/CD Pipeline\nazure-deploy.yml\n🔵 Optimization 1"])

    subgraph AZ2["☁️  Microsoft Azure — Korea Central"]
        subgraph RG2["📁 Resource Group · rg-suzzane-collins"]
            subgraph ASP2["⬜ App Service Plan · asp-suzzane-collins · B1 Basic · Linux"]
                APP2["🌐 App Service\napp-suzzane-collins\nNode.js 22 LTS\n🛡️ Managed Identity"]
            end
            SA2[("🗄️ Storage Account\nsasuzzanecollinspawsys\nStandard GPv2 · LRS")]
            BLOB2["📂 Blob Container\nmedia\n(public read)"]
            KV2[["🔑 Key Vault\nkv-suzzane-collins\nStandard SKU\n✅ Passwordless Access"]]
            APPI2{{"📊 Application Insights\nappi-suzzane-collins\nStandard SKU\nMonitoring & Diagnostics\n🔵 Optimization 2"}}
        end
    end

    U2      -->|"HTTPS port 443"| APP2
    APP2    -->|"Telemetry\n(events, traces, metrics)"| APPI2
    APP2    -->|"REST API · Blob Read"| SA2
    SA2     ---  BLOB2
    APP2    -->|"Managed Identity\n✅ Passwordless"| KV2
    GH2     -->|"Push to main\n(triggers pipeline)"| GHA2
    GHA2    -->|"Auto Deploy\nnpm run build → /build"| APP2
end

%% ─────────────────────────────────────────────
%%  STYLES
%% ─────────────────────────────────────────────
classDef azure    fill:#EFF6FC,stroke:#0078D4,color:#004578;
classDef storage  fill:#E8F5E9,stroke:#7FBA00,color:#1B5E20;
classDef keyvault fill:#FFF8E1,stroke:#FFB900,color:#7A4F00;
classDef appi     fill:#F3E5F5,stroke:#7B1FA2,color:#4A148C;
classDef github   fill:#F3F3F3,stroke:#24292E,color:#24292E;
classDef user     fill:#EDE7F6,stroke:#5C2D91,color:#311B92;
classDef mi       fill:#E8F5E9,stroke:#00B294,color:#004D40;
classDef warn     fill:#FFEBEE,stroke:#D13438,color:#B71C1C;
classDef opt      fill:#E3F2FD,stroke:#1565C0,color:#0D47A1;

class APP1 azure;
class APP2 azure;
class SA1 storage;
class SA2 storage;
class BLOB1 storage;
class BLOB2 storage;
class KV1 keyvault;
class KV2 keyvault;
class APPI2 appi;
class GH1 github;
class GH2 github;
class GHA2 opt;
class U1 user;
class U2 user;
class SEC_WARN warn;
```

---

## Cloud Optimizations

| # | Optimization | Category | Description |
|---|-------------|----------|-------------|
| 🔵 1 | **GitHub Actions CI/CD** | DevOps Automation | Every push to `main` automatically builds (`npm run build`) and deploys to Azure App Service. Eliminates manual `az webapp deploy` commands and reduces human error. |
| 🔵 2 | **Application Insights** | Monitoring & Observability | Collects telemetry data from the App Service including request traces, performance metrics, exceptions, and custom events. Enables real-time diagnostics and alerting for application health and performance monitoring. |

## Security Boundary

| Zone | Resources |
|------|-----------|
| 🔓 **Public Internet** | App Service endpoint (`app-suzzane-collins.azurewebsites.net`) |
| 🔒 **Azure Internal** | Key Vault (no public credential exposure), Storage Account (accessed via REST API internally), Managed Identity (system-assigned, no secret stored) |

## Resources Summary

| Service | Resource Name | SKU / Tier | Purpose |
|---------|--------------|------------|---------|
| Resource Group | `rg-suzzane-collins` | — | Container for all resources |
| App Service Plan | `asp-suzzane-collins` | B1 Basic, Linux | Compute tier |
| App Service | `app-suzzane-collins` | Node.js 22 LTS | Hosts the React web app |
| Storage Account | `sasuzzanecollinspawsys` | Standard GPv2, LRS | Stores media assets |
| Blob Container | `media` | Public read (blobs) | Serves images and files |
| Key Vault | `kv-suzzane-collins` | Standard SKU | Stores connection strings securely |
| Managed Identity | System-assigned | — | Passwordless auth to Key Vault |
| Application Insights | `appi-suzzane-collins` | Standard SKU | Monitors app performance and diagnostics |
| GitHub Actions | `azure-deploy.yml` | — | CI/CD auto-deployment pipeline |
