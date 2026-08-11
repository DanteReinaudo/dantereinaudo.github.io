---
lang: es
alt_lang: en
alt_url: /en/projects/fiufit/
permalink: /projects/fiufit/
title: FiuFit
subtitle: Aplicación web y móvil para el monitoreo de entrenamientos en tiempo real
description: Aplicación web y móvil para el monitoreo de entrenamientos en tiempo real, con arquitectura de microservicios en Python/FastAPI y Node.js.
tech: [Python, FastAPI, React, React Native, Node.js, MongoDB, PostgreSQL]
image: /assets/images/projects/fiufit.jpg
featured: true
order: 1
links_label: Enlaces
links:
  - label: Enunciado
    url: https://taller-de-programacion-2.github.io/tasks/statement/2023/1/enunciado/
  - label: Repositorio de GitHub
    url: https://github.com/fiufit-grupo-4
  - label: Documentación del proyecto
    url: https://befitting-attention-607.notion.site/FiuFit-Documentaci-n-general-5a17ec0566684fa3a5d723574eb02fd2
  - label: Video tutorial (YouTube)
    url: https://www.youtube.com/watch?v=5QWYGgnuDyI
---

## Problema

Desarrollado durante el primer semestre de 2023 en la materia Taller de Programación II (Facultad de Ingeniería, UBA), en un equipo de seis personas. El objetivo era construir una plataforma que permitiera a los usuarios registrar entrenamientos, monitorear su actividad física y seguir su progreso, conectando además a usuarios con entrenadores. El enunciado exigía, entre otros puntos, registro e inicio de sesión (con email o Google), notificaciones, mensajería, seguimiento entre usuarios, creación de entrenamientos y objetivos, y un panel web de administración para moderar usuarios y contenido.

## Arquitectura

El equipo definió una arquitectura de microservicios con un API Gateway como punto central de comunicación, separando los servicios de Usuarios, Objetivos, Entrenamientos y Métricas para que operaran de forma independiente y eficiente.

## Decisiones de ingeniería

El enunciado exigía usar dos lenguajes y dos bases de datos distintas en el backend. La mayoría de los servicios se implementaron en Python con FastAPI, y el API Gateway en Node.js; los datos se distribuyeron entre MongoDB y PostgreSQL según las necesidades de cada servicio. En el frontend se usó React Native con Expo para la app móvil y React para el backoffice web, compartiendo una parte significativa del código entre ambas plataformas para mantener una experiencia consistente.

## Resultado

La aplicación cumplió con los requisitos funcionales y no funcionales del enunciado, ofreciendo una experiencia coherente entre la app móvil y la versión web de administración.
