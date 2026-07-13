---
layout: page
title: Projects
permalink: /projects/
---
1. **Heston Stochastic Volatility Model — Pricing, Calibration & Market Application:**

Implementation of the Heston (1993) stochastic volatility model for European option pricing and market calibration. This collaborative project was developed with Arindam Bhattacharyya , Ankit Kumar, Ethan Zhou and includes three independent pricing engines, a robust calibration framework, and an application to real TSLA option market data.

This project implements the model end-to-end:

  - Built three independent pricing engines in Python: Monte Carlo simulation, direct numerical integration of the semi-closed-form solution, and the Carr–Madan (1999) FFT method.
  - Cross-validated the pricing engines against one another and benchmarked their computational efficiency.
  - Developed a calibration framework combining a global, derivative-free optimizer (differential evolution) with a local least-squares refinement step to recover model parameters from poor initial guesses.
  - Applied the model to TSLA daily equity options quotes (2019–2022), comparing calibration objectives (price error vs. implied-volatility error) and pricing conventions (bid-ask midpoint vs. depth-weighted   price).

2. **Operator Learning:** DeepONet, FNO and Transformer approach to approximate antiderivative operator.

This project started as a sequel of my oral exam where I studied operator learning. [Slides](/assets/Oral exam.pdf)

