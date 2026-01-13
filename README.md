# GitLab CI/CD Research Project

## 📋 Project Overview

This is a research and experimental project focusing on **GitLab CI/CD pipelines**, **microservices architecture**, **containerization**, and **Kubernetes deployment**. The project centers on building a complete microservices system with automated CI/CD processes.

## 🎯 Research Topics

### 1. **Microservices Backend** (`/backend`)
The system is divided into independent services:

- **avian_auth** - Authentication and Authorization Service
- **avian_booking** - Booking Management Service
- **avian_concerts** - Concerts/Events Management Service
- **avian_framework** - Shared Framework Library
- **kf_devops_roles** - DevOps Roles and Permissions Management Service

Each service is a standalone Node.js application with:
- API controllers
- Database models & schemas
- Business logic services
- Middleware & validators
- Configuration management

### 2. **GitLab Runner & CI/CD** (`/gitlab_runner`)
- **Docker Compose**: Containerized GitLab Runner configuration
- **Dockerfile**: Runner environment image
- Automated build, test, and deploy pipelines

### 3. **Container & Orchestration**
- **Docker**: Each service has its own Dockerfile for containerization
- **Kubernetes** (`/k8s`): 
  - Deployment configurations
  - Ingress routing
  - Role-based access control

### 4. **Infrastructure as Code**
Uses Kubernetes manifests (`deployment.yaml`, `role.ingress.yaml`) for infrastructure management

## 🏗️ System Architecture

```
┌─────────────────────────────────────────┐
│     GitLab CI/CD Pipeline               │
│  (gitlab_runner)                        │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│    Docker Registry / Container Images   │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│    Kubernetes Cluster (k8s)             │
├─────────────────────────────────────────┤
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ avian_   │ │ avian_   │ │ avian_   │ │
│ │ auth     │ │ booking  │ │ concerts │ │
│ │          │ │          │ │          │ │
│ │ (Pod)    │ │ (Pod)    │ │ (Pod)    │ │
│ └──────────┘ └──────────┘ └──────────┘ │
│                                         │
│ ┌──────────┐ ┌──────────┐              │
│ │ avian_   │ │ kf_devops│              │
│ │framework │ │_roles    │              │
│ │(Shared)  │ │(Pod)     │              │
│ └──────────┘ └──────────┘              │
└─────────────────────────────────────────┘
```

## 🔧 Tech Stack

- **Runtime**: Node.js
- **Container**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitLab CI/CD
- **Build Tool**: Docker Compose
- **Monitoring**: Jaeger (distributed tracing)
- **Caching**: Redis
- **Service Discovery**: Consul
- **Database**: PostgreSQL (implied from database constants)
- **Logging**: Syslog-ng

## 📁 Detailed Directory Structure

```
gitlab_cicd_research/
├── backend/                    # All microservices
│   ├── avian_auth/            # Auth service
│   ├── avian_booking/         # Booking service
│   ├── avian_concerts/        # Concerts service
│   ├── avian_framework/       # Shared framework
│   └── kf_devops_roles/       # DevOps roles service
├── gitlab_runner/             # GitLab Runner configuration
│   ├── docker-compose.yml
│   └── dockerfile
├── k8s/                        # Kubernetes manifests
│   ├── deployment.yaml
│   ├── role.ingress.yaml
│   └── README.md
└── library/                    # Shared libraries
```

## 🚀 Learning Objectives

This project is designed for learning and practicing:

1. ✅ **Microservices Architecture**: Breaking down monoliths into independent services
2. ✅ **GitLab CI/CD Pipelines**: Automating build, test, and deployment
3. ✅ **Docker & Containerization**: Packaging applications in containers
4. ✅ **Kubernetes Orchestration**: Deploying and managing containers at scale
5. ✅ **Distributed Tracing**: Monitoring with Jaeger
6. ✅ **Service Discovery**: Using Consul
7. ✅ **DevOps Best Practices**: Infrastructure as Code, monitoring, and logging
8. ✅ **Microservices Communication**: Service-to-service API calls

## 🎓 Getting Started

### Requirements
- Docker & Docker Compose
- Kubernetes cluster (minikube/kind/cloud)
- Node.js (for development)
- GitLab (for CI/CD pipelines)

### Installation & Running

See detailed documentation in each service:
- [avian_auth README](./backend/avian_auth/README.md)
- [avian_concerts README](./backend/avian_concerts/README.md)
- [Kubernetes README](./k8s/README.md)

## 📝 Notes

This is a **research & learning project**, used for experimenting with patterns and best practices in:
- Cloud-native development
- DevOps practices
- Modern microservices architecture

---

**Last Updated**: January 2026