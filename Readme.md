# OpenStack

> **The open source platform for building modern applications.**
>
> Authentication. Database. Storage. Realtime. Functions. AI.
> Everything you need to build, ship, and scale from a single platform.

---

## Overview

OpenStack is a modern, open source Backend as a Service platform built for developers who want to move fast without sacrificing flexibility or control.

Designed with a scalable monorepo architecture, OpenStack combines a powerful NestJS backend with a high performance Next.js dashboard to deliver an exceptional developer experience. From authentication and databases to realtime APIs, object storage, serverless functions, AI integrations, background jobs, and observability, OpenStack provides the complete backend foundation for modern applications.

Whether you are building a SaaS product, AI application, startup, enterprise platform, or internal tooling, OpenStack lets you focus on building products instead of backend infrastructure.

---

## ✨ Features

### 🔐 Authentication

* Email and password authentication
* Social login providers
* Multi Factor Authentication
* Session management
* Role Based Access Control
* Organization support

### 🗄️ Database

* Managed PostgreSQL
* Automatic migrations
* Connection pooling
* Row Level Security
* SQL editor
* Backup and restore

### 📦 Storage

* Object storage
* Secure file uploads
* Public and private buckets
* Image optimization
* CDN ready delivery

### ⚡ Realtime

* Live subscriptions
* WebSocket support
* Event broadcasting
* Presence
* Channels

### ☁️ Functions

* Serverless functions
* Scheduled jobs
* Background workers
* Webhooks
* Event driven workflows

### 🤖 AI Platform

* AI SDK
* Embeddings
* Vector search
* Retrieval pipelines
* Model integrations
* AI workflows

### 📊 Developer Experience

* Beautiful dashboard
* CLI
* SDKs
* REST API
* GraphQL
* OpenAPI documentation
* Local development
* Self hosting
* Cloud deployment

---

## 🏗️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* NestJS
* TypeScript
* PostgreSQL
* Redis
* Docker

### Infrastructure

* Turborepo
* pnpm
* Prisma
* BullMQ
* WebSockets

---

## 📁 Repository Structure

```text
openstack/
│
├── apps/
│   ├── dashboard/
│   ├── api/
│   ├── docs/
│   └── website/
│
├── packages/
│   ├── sdk/
│   ├── ui/
│   ├── cli/
│   ├── auth/
│   ├── database/
│   ├── storage/
│   ├── realtime/
│   ├── ai/
│   ├── shared/
│   └── config/
│
├── docker/
├── scripts/
└── turbo.json
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/openstack.git
```

```bash
cd openstack
```

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

```bash
cp .env.example .env
```

### Start development

```bash
pnpm dev
```

---

## 📦 Packages

OpenStack is built as a modular ecosystem.

| Package               | Description             |
| --------------------- | ----------------------- |
| `@openstack/sdk`      | Official JavaScript SDK |
| `@openstack/cli`      | Command Line Interface  |
| `@openstack/auth`     | Authentication library  |
| `@openstack/database` | Database toolkit        |
| `@openstack/storage`  | Object storage client   |
| `@openstack/realtime` | Realtime client         |
| `@openstack/ai`       | AI SDK                  |
| `@openstack/ui`       | React component library |

---

## 🎯 Philosophy

OpenStack is built around a few simple principles.

* Developer experience comes first.
* Open source by default.
* Production ready from day one.
* Modular architecture.
* Secure by design.
* Built to scale.
* Works locally and in the cloud.

---

## 🛣️ Roadmap

* Authentication
* PostgreSQL
* Object Storage
* Realtime
* Serverless Functions
* Background Jobs
* AI Platform
* SDKs
* CLI
* Dashboard
* Kubernetes Support
* Multi Region Deployment
* Edge Runtime
* Marketplace
* Enterprise Features

---

## 🤝 Contributing

We welcome contributions of every size.

* Report bugs
* Suggest new features
* Improve documentation
* Submit pull requests
* Build plugins
* Help improve the ecosystem

---

## 📄 License

Licensed under the MIT License.

---

## 🌟 Support the Project

If OpenStack helps you build amazing products, consider giving the repository a ⭐ on GitHub and sharing it with the community.

Together, we can build an open, developer first backend platform for everyone.
