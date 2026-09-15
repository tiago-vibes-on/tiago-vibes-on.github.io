---
order: 1
title: Containers
description: Dockerize a small Quarkus service, then introduce PostgreSQL and a multi-stage JVM image.
series: Hero Association
stack:
  - Java 25
  - Quarkus
  - Docker
  - PostgreSQL
repository: https://github.com/tiago-vibes-on/hands-on/tree/main/1-containers
status: published
---

## Objective

Start with a small stateless service and evolve it into a PostgreSQL-backed API running with Docker Compose.

## What changes

The initial checkpoint exposes a minimal service. The final checkpoint adds hero persistence, PostgreSQL, Docker Compose, and a multi-stage JVM image.

## Run it

```bash
cd 1-containers/final
docker compose up --build
```
