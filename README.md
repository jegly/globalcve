<p align="center">
  <img src="docs/assets/globalCVE_V2.png" alt="GlobalCVE Logo" width="300"/>
</p>



**_Global threats. Unified insights._**

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/github/commit-activity/m/globalcve/globalcve?color=orange&label=Commits" />
  <img src="https://img.shields.io/badge/Branch-Stable-green?logo=github&logoColor=white" />
  <img src="https://img.shields.io/github/license/globalcve/globalcve" />
  <img src="https://img.shields.io/badge/Security-CVE%20Tracking-red" />
  <a href="https://globalcve.vercel.app">
    <img src="https://vercelbadge.vercel.app/api/globalcve/globalcve" />
  </a>
</p>

[![Readme Quotes](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dracula)](https://github.com/PiyushSuthar/github-readme-quotes)

## ☕ Support the Project

If you find GlobalCVE useful, consider [buying me a coffee](https://www.buymeacoffee.com/globalcve) to support ongoing development.

## 🏷️ What Sets Us Apart

GlobalCVE isn’t just another vulnerability feed. We’re building a transparent, unified, and open-source backbone for global CVE intelligence.

- **Multi-source aggregation**  
  We pull from public feeds across continents — NVD, CIRCL, JVN, ExploitDB, and more — with full attribution and fallback logic.

- **Open by design**  
  No paywalls, no vendor lock-in. Our code is public, our API is free, and our roadmap is community-driven.

- **Minimalist and scalable**  
  Built with serverless architecture and clean UI logic, GlobalCVE is fast, forkable, and easy to integrate.

- **Security-first ethos**  
  We prioritize clarity, provenance, and responsible data use.
- **Built by builders**  
  This isn’t a product. It’s infrastructure. And it’s yours to use, improve, and extend.

---

<p align="center">
  <a href="https://globalcve.xyz" target="_blank">
    🌐 Visit the live site → <strong>globalcve.xyz</strong>
  </a>
</p>


# 🌐 GlobalCVE



An open-source vulnerability intelligence platform that aggregates CVEs from multiple national and vendor sources — cleanly, transparently, and developer-friendly.

---

## 🏷️ What Sets Us Apart

- **Unified CVE view** — no duplicates, no noise  
- **Custom badges** for source attribution  
- **Minimalist UI** with dark mode and loading states  
- **Serverless architecture** — scalable and fast  
- **Open-source and free forever**

---

## 🌍 Sources We Support

- 🇺🇸 NVD (US National Vulnerability Database)  
- 🇯🇵 JVN (Japan Vulnerability Notes)  
- 🇨🇭 CIRCL (Luxembourg CERT feed)  
- 🧨 ExploitDB (Public exploit repository)  
- 🇨🇳 CNNVD — *in testing repo*
- 🤖 Android Security Bulletins (ASB) — *in testing repo*  
- 🇫🇷 CERT-FR — *in testing repo*
- Testing Repo contains many many many sources.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS  
- **Backend**: Node.js, Express-style API routes  
- **Data**: CSV + JSON parsing, serverless fetch logic  
- **Deployment**: Vercel (coming soon), custom domain support  
- **Optional DBs**: SQLite, Supabase, or flat file cache

---
## Screenshots

Here’s a preview of GlobalCVE’s UI:

### Homepage 
![Homepage Light](screenshots/homepage1.png)

### Homepage 
![Homepage Dark](screenshots/homepage2.png)
![Homepage Dark](screenshots/homepage3_beta_testing.png)


## 📦 Getting Started

### Prerequisites
- Node.js 18+
- **NVD API Key** (optional, but required for NVD source)

### Getting an NVD API Key
1. Visit [https://nvd.nist.gov/developers/request-an-api-key](https://nvd.nist.gov/developers/request-an-api-key)
2. Request a free API key
3. You'll receive it via email

**Note:** If you don't want to use the NVD source, you can skip this step. Other sources like **CISA KEV** cover most critical CVEs and don't require an API key.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jegly/globalcve.git
cd globalcve
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
NVD_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) to view the site.


---

## 🧪 Testing Branch (Beta)

Our **[testing repository](https://github.com/jegly/globalcve-testing)** is now **live and running**! with many new features!  🎉

**New features in testing:**
- 📊 **Advanced visualization charts** for CVE trends and statistics
- 🔍 **Enhanced search functions** with complex query support
- 🌐 **40+ additional sources** including vendor-specific advisories (Cisco, VMware, Oracle, Red Hat, Ubuntu, Debian, SAP, and more)
- 🎨 Improved UI/UX with better filtering and sorting

**⚠️ Status:** Still in beta — expect occasional bugs and breaking changes. We're actively merging stable features into the main branch.

**Want to test cutting-edge features?** Check out [globalcve/testing](https://github.com/jegly/globalcve-testing) and report any issues you find!

---
## 🛠️ Contributing - Dont be Shy !  :)

We welcome PRs, parser improvements, and new source integrations. Whether you're fixing bugs, adding new CVE feeders, or improving the UI — we’d love your help.
Send me a email if you want to get onboard !


---

> Built with clarity, minimalism, and a deep respect for reproducibility.
