---
lang: es
alt_lang: en
alt_url: /en/projects/rusttorrent/
permalink: /projects/rusttorrent/
title: Cliente BitTorrent en Rust
subtitle: Implementación desde cero del protocolo BitTorrent con descargas concurrentes
description: Cliente BitTorrent implementado desde cero en Rust, con descargas concurrentes desde múltiples peers.
tech: [Rust]
image: /assets/images/projects/bittorrent.jpg
featured: true
order: 3
links_label: Enlaces
links:
  - label: Enunciado
    url: https://taller-1-fiuba-rust.github.io/proyecto/22C1/proyecto.html
  - label: Informe del proyecto
    url: https://github.com/DanteReinaudo/RustTorrent/blob/main/Documentation/doc/INFORME%20-%20BITTORRENT.pdf
  - label: Repositorio de GitHub
    url: https://github.com/DanteReinaudo/RustTorrent
---

## Problema

Desarrollado durante el primer semestre de 2022 en la materia Taller de Programación I (Facultad de Ingeniería, UBA), en un equipo de cuatro personas. El objetivo era implementar un cliente BitTorrent en Rust capaz de descargar más de un archivo por ejecución, cubriendo desde el procesamiento del archivo `.torrent` hasta la comunicación con el tracker y los peers.

## Solución

El cliente implementa el protocolo BitTorrent de punta a punta: parseo del archivo `.torrent`, comunicación con el tracker, descarga concurrente de piezas desde múltiples peers, almacenamiento de la descarga, configuración externa y registro de eventos mediante logs, además de una interfaz gráfica.

## Decisiones de ingeniería

El proyecto incorporó testing unitario automatizado, manejo explícito de errores, control de versiones y documentación de funciones y tipos de datos como requisitos no funcionales. Rust permitió manejar la concurrencia entre múltiples peers de forma segura, aprovechando las garantías del compilador.

## Resultado

El informe técnico completo describe el diseño del protocolo y las decisiones de implementación; el código está disponible públicamente en GitHub.
