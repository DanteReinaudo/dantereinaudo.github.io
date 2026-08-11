---
lang: en
alt_lang: es
alt_url: /projects/prediccion-danio-terremotos/
permalink: /en/projects/earthquake-damage-prediction/
title: Earthquake Damage Prediction
subtitle: Machine learning model estimating building damage from the 2015 Gorkha earthquake
description: XGBoost model predicting building damage from the 2015 Gorkha earthquake in a DrivenData competition.
tech: [Python, Pandas, Scikit-learn, XGBoost]
image: /assets/images/projects/kaggle.jpg
featured: true
order: 2
links_label: Links
links:
  - label: GitHub repository
    url: https://github.com/DanteReinaudo/EarthquakeDamagePrediction
  - label: Data analysis report
    url: https://github.com/DanteReinaudo/EarthquakeDamagePrediction/blob/main/tp1/Informe%20TP1.pdf
  - label: DrivenData competition
    url: https://www.drivendata.org/competitions/57/nepal-earthquake/
---

## Problem

A DrivenData competition — an organization focused on data science projects with social impact — to predict the level of damage to buildings caused by the 2015 Gorkha earthquake in Nepal, based on location and construction data collected by Kathmandu Living Labs and Nepal's Central Bureau of Statistics. It's one of the largest publicly available post-disaster datasets.

## Solution

Exploratory data analysis identified relevant relationships between features, followed by dataset cleaning and feature engineering to enrich it. Several classification models were trained and compared, settling on an XGBoost model based on its performance predicting damage severity.

## Outcome

The full data analysis and modeling report is available in the project repository.
