---
order: 1
title: Containers
description: Build the Hero Association backend with PostgreSQL, Docker Compose, and a multi-stage JVM image.
series: Hero Association
stack:
  - Java 25
  - Quarkus
  - Docker
  - PostgreSQL
repository: https://github.com/tiago-vibes-on/hands-on/tree/main/hero-association/backend
status: in progress
---

## Objective

Establish the PostgreSQL-backed Hero Association backend and its default JVM
container workflow.

## What changes

The backend persists heroes in PostgreSQL, runs with Docker Compose, and uses a
multi-stage JVM image by default.

## Run it

```bash
cd hero-association/backend
docker compose up --build
```
