---
order: 2
title: DDD and Exception Handling
description: Make application boundaries visible through domain, application, API, and repository responsibilities.
series: Hero Association
stack:
  - Java 25
  - Quarkus
  - PostgreSQL
  - Docker
repository: https://github.com/tiago-vibes-on/hands-on/tree/main/hero-association/backend
status: in progress
---

## Objective

Restructure the backend without introducing unnecessary ports, adapters, or
duplicated persistence models.

## What changes

The API is exposed only at `/api/v1/heroes`. Application exceptions are
translated into HTTP responses at the API boundary, including `404 Not Found`
and `409 Conflict`.

## Run it

```bash
cd hero-association/backend
docker compose up --build
```
