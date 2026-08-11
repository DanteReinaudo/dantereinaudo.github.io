---
lang: en
alt_lang: es
alt_url: /projects/fiufit/
permalink: /en/projects/fiufit/
title: FiuFit
subtitle: Web and mobile application for real-time workout monitoring
description: Web and mobile workout-monitoring app built on a microservices architecture with Python/FastAPI and Node.js.
tech: [Python, FastAPI, React, React Native, Node.js, MongoDB, PostgreSQL]
image: /assets/images/projects/fiufit.jpg
featured: true
order: 1
links_label: Links
links:
  - label: Assignment statement
    url: https://taller-de-programacion-2.github.io/tasks/statement/2023/1/enunciado/
  - label: GitHub repository
    url: https://github.com/fiufit-grupo-4
  - label: Project documentation
    url: https://befitting-attention-607.notion.site/FiuFit-Documentaci-n-general-5a17ec0566684fa3a5d723574eb02fd2
  - label: Video walkthrough (YouTube)
    url: https://www.youtube.com/watch?v=5QWYGgnuDyI
---

## Problem

Built during the first semester of 2023 for the Programming Workshop II course (Faculty of Engineering, UBA), in a team of six. The goal was to build a platform for users to log workouts, monitor their physical activity, and track progress over time, while connecting users with trainers. The spec required, among other things, registration and login (email or Google), notifications, messaging, following other users, creating workouts and personal goals, and a web admin panel to moderate users and content.

## Architecture

The team defined a microservices architecture with an API Gateway as the central communication point, separating the User, Goals, Workouts, and Metrics services so each could operate independently and efficiently.

## Engineering decisions

The spec required two different languages and two different databases in the backend. Most services were built in Python with FastAPI, and the API Gateway in Node.js; data was split between MongoDB and PostgreSQL based on each service's needs. On the frontend, React Native with Expo powered the mobile app and React the web backoffice, sharing a significant portion of the codebase between both platforms to keep the experience consistent.

## Outcome

The application met the spec's functional and non-functional requirements, delivering a consistent experience across the mobile app and the web admin console.
