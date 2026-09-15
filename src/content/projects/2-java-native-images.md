---
order: 2
title: Java Native Images
description: Run the Hero Association service as a JVM application and as an explicit GraalVM native executable.
series: Hero Association
stack:
  - Java 25
  - Quarkus
  - GraalVM
  - Docker
repository: https://github.com/tiago-vibes-on/hands-on/tree/main/2-java-native-images
status: published
---

## Objective

Keep the JVM as the default build, and make native compilation optional.

## What changes

The final checkpoint supports a host-native executable with Docker PostgreSQL and a native Docker image built with Mandrel.

## Run it

```bash
cd 2-java-native-images/final
docker compose -f compose.yaml -f compose.native.yaml up --build
```
