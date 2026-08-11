---
lang: es
alt_lang: en
alt_url: /en/projects/earthquake-damage-prediction/
permalink: /projects/prediccion-danio-terremotos/
title: Predicción de Daño por Terremotos
subtitle: Modelo de Machine Learning para estimar el daño edilicio del terremoto de Gorkha (2015)
description: Modelo XGBoost para predecir el daño edilicio del terremoto de Gorkha (2015) en una competencia de DrivenData.
tech: [Python, Pandas, Scikit-learn, XGBoost]
image: /assets/images/projects/kaggle.jpg
featured: true
order: 2
links_label: Enlaces
links:
  - label: Repositorio de GitHub
    url: https://github.com/DanteReinaudo/EarthquakeDamagePrediction
  - label: Informe del análisis de datos
    url: https://github.com/DanteReinaudo/EarthquakeDamagePrediction/blob/main/tp1/Informe%20TP1.pdf
  - label: Competencia en DrivenData
    url: https://www.drivendata.org/competitions/57/nepal-earthquake/
---

## Problema

Competencia de DrivenData — organización enfocada en proyectos de ciencia de datos con impacto social — para predecir el nivel de daño en edificios causado por el terremoto de Gorkha de 2015 en Nepal, a partir de datos de ubicación y construcción relevados por Kathmandu Living Labs y la Oficina Central de Estadísticas de Nepal. Es uno de los datasets post-desastre más grandes disponibles públicamente.

## Solución

Se realizó un análisis exploratorio de los datos para identificar relaciones relevantes entre variables, seguido de limpieza del dataset y feature engineering para enriquecerlo. Se entrenaron y compararon distintos modelos de clasificación, seleccionando finalmente un modelo XGBoost según su desempeño en la predicción del grado de daño.

## Resultado

El informe completo del análisis de datos y del proceso de modelado está disponible en el repositorio del proyecto.
