---
layout: page
title: Projects
permalink: /projects/
---
1. **Heston Stochastic Volatility Model — Pricing, Calibration & Market Application:** The Black–Scholes model assumes constant volatility, which fails to reproduce the volatility "smile" observed in real option markets. The Heston model treats variance itself as a mean-reverting stochastic process correlated with the underlying asset's returns, giving it the flexibility to fit market-observed smiles.

This project implements the model end-to-end:

Three independent pricing engines — Monte Carlo simulation, direct numerical integration of the semi-closed-form solution, and the Carr–Madan (1999) FFT method — cross-validated against each other and benchmarked for speed.
A robust calibration framework that combines a global, derivative-free optimizer (differential evolution) with a local gradient-based polish (least squares) to recover model parameters reliably, even from poor initial guesses.
Application to real market data — TSLA daily equity options quotes (2019–2022) — comparing calibration objectives (price error vs. implied-volatility error) and pricing input conventions (bid-ask midpoint vs. depth-weighted price).

2. **Operator Learning:** DeepONet, FNO and Transformer approach to approximate antiderivative operator.

This project started as a sequel of my oral exam where I studied operator learning. [Slides](/assets/Oral exam.pdf)

