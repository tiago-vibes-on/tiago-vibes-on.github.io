---
order: 3
title: Java Native Images
description: Run the Hero Association backend as a JVM application and as an explicit GraalVM native executable.
series: Hero Association
stack:
  - Java 25
  - Quarkus
  - GraalVM
  - Docker
repository: https://github.com/tiago-vibes-on/hands-on/tree/main/hero-association/backend
status: in progress
---

## Objective

Keep the JVM as the default build while adding explicit local and Docker-native
execution paths.

## What changes

The backend will support a host-native executable with Docker PostgreSQL and a
native Docker image built with Mandrel.
