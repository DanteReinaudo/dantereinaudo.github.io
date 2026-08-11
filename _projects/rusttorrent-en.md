---
lang: en
alt_lang: es
alt_url: /projects/rusttorrent/
permalink: /en/projects/rusttorrent/
title: BitTorrent Client in Rust
subtitle: From-scratch implementation of the BitTorrent protocol with concurrent downloads
description: BitTorrent client implemented from scratch in Rust, with concurrent downloads from multiple peers.
tech: [Rust]
image: /assets/images/projects/bittorrent.jpg
featured: true
order: 3
links_label: Links
links:
  - label: Assignment statement
    url: https://taller-1-fiuba-rust.github.io/proyecto/22C1/proyecto.html
  - label: Project report
    url: https://github.com/DanteReinaudo/RustTorrent/blob/main/Documentation/doc/INFORME%20-%20BITTORRENT.pdf
  - label: GitHub repository
    url: https://github.com/DanteReinaudo/RustTorrent
---

## Problem

Built during the first semester of 2022 for the Programming Workshop I course (Faculty of Engineering, UBA), in a team of four. The goal was to implement a BitTorrent client in Rust capable of downloading more than one file per run, covering everything from parsing the `.torrent` file to communicating with the tracker and peers.

## Solution

The client implements the BitTorrent protocol end to end: `.torrent` file parsing, tracker communication, concurrent piece downloads from multiple peers, download storage, external configuration, event logging, and a graphical interface.

## Engineering decisions

The project's non-functional requirements included automated unit testing, explicit error handling, version control, and documentation of functions and data types. Rust made it possible to handle concurrency across multiple peers safely, relying on the compiler's guarantees.

## Outcome

The full technical report covers the protocol design and implementation decisions; the code is publicly available on GitHub.
