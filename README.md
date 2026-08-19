# Cloud Health Services

The business-service layer for the Cloud Health Project. Each microservice owns its persistence model and can be deployed, scaled, tested, and versioned independently.

## About

This repository is part of the ITS 2130 Enterprise Cloud Architecture final project. It will act as a parent Git repository whose three domain-service repositories are attached as Git submodules.

## Components

| Component | Port | Persistence | Repository |
|---|---:|---|---|
| Patient Service | `8081` | PostgreSQL / Cloud SQL | `Cloud-Health-Project-Service-Patient` |
| Diagnostics Service | `8082` | MongoDB Atlas | `Cloud-Health-Project-Service-Diagnostics` |
| File Service | `8083` | Cloud Storage and Firestore | `Cloud-Health-Project-Service-File` |

## Tech Stack

| Technology | Details |
|---|---|
| Java | 25 |
| Spring Boot | 4.1.0 |
| Spring Cloud | 2025.1.2 |
| Spring Data JPA | Relational persistence |
| Spring Data MongoDB | Document persistence |
| Google Cloud Java SDK | Cloud Storage and Firestore integration |
| Eureka and Config Clients | Discovery and external configuration |
| Spring Boot Actuator | Health and readiness endpoints |

## Getting Started

Start Config Server, Discovery Server, and API Gateway before the domain services. Each component README lists its required database or cloud environment variables and validation commands.

## Project Details

| Property | Value |
|---|---|
| Student | Hiruna Dissanayake |
| Student number | `TODO` |
| GCP project | `cloud-health-506015-hiruna` |
| Parent repository | `Cloud-Health-Project-Services` |
