---
order: 3
title: DDD and Exception Handling
description: Make application boundaries visible through domain, application, API, and repository responsibilities.
series: Hero Association
stack:
  - Java 25
  - Quarkus
  - PostgreSQL
  - Docker
repository: https://github.com/tiago-vibes-on/hands-on/tree/main/3-ddd-and-exception-handling
status: in progress
---

## Objective

Restructure the service without introducing unnecessary ports, adapters, or duplicated persistence models.

## What changes

The final checkpoint introduces the `/api/v1/heroes` contract. Application exceptions are translated into HTTP responses at the API boundary, including `404 Not Found` and `409 Conflict`.

## Run it

```bash
cd 3-ddd-and-exception-handling/final
docker compose up --build
```
