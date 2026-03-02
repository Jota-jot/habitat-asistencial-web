#!/usr/bin/env python3
"""
NÉMESIS-CARE v5.0.1 – Demo completa del Titán Inmortal
Integrado con Hábitat Asistencial: Radares Hub + Biovita + Ecosistema
"""

import numpy as np
import json
from pathlib import Path
from nemesis_care.core import NemesisTitanCoreV5_0_1

SEPARATOR = "=" * 70


def run_demo():
    print(SEPARATOR)
    print("  NÉMESIS-CARE v5.0.1 – DEMO COMPLETA DEL TITÁN INMORTAL")
    print("  Hábitat Asistencial · Radares Hub · Biovita · Ecosistema")
    print(SEPARATOR)
    print()

    # ── Inicializar Titán ────────────────────────────────────────
    titan = NemesisTitanCoreV5_0_1(
        "mayor_habitat_demo",
        data_dir=Path("./nemesis_titan_demo"),
        consent_granted=True,
    )
    print()

    # ── Fase 1: 20 días normales (mayor estable) ────────────────
    print(f"\n{'─' * 50}")
    print("📊 FASE 1: 20 días de datos normales (mayor estable)")
    print(f"{'─' * 50}")
    for day in range(20):
        result = titan.add_daily_data(
            sleep=7.0 + np.random.uniform(-1.5, 1),
            steps=5000 + np.random.randint(-1500, 1500),
            hrv=55 + np.random.uniform(-10, 10),
            mood="estable",
        )
        if day % 5 == 0:
            print(f"  Día {day + 1:2d}: flag={result['flag']}")

    # ── Fase 2: 5 días de crisis (caídas + aislamiento) ─────────
    print(f"\n{'─' * 50}")
    print("🚨 FASE 2: 5 días de crisis (caídas + aislamiento)")
    print(f"{'─' * 50}")
    for day in range(5):
        result = titan.add_elder_data(
            mobility_score=3.0 + np.random.uniform(-1, 1),
            social_hours=0.5,
            falls_detected=1 if day % 2 == 0 else 0,
            sleep=4.5 + np.random.uniform(-1, 0.5),
            hrv=38 + np.random.uniform(-8, 5),
            mood="ansioso",
        )
        falls = 1 if day % 2 == 0 else 0
        print(f"  Día {21 + day}:  flag={result['flag']}  caídas={falls}")

    # ── Fase 3: Análisis profundo ────────────────────────────────
    print(f"\n{'─' * 50}")
    print("🔍 FASE 3: Análisis profundo del Titán")
    print(f"{'─' * 50}")
    analysis = titan.deep_analysis()
    for key, value in analysis.items():
        print(f"  {key:.<30s} {value}")

    # ── Fase 4: Exportación cifrada ──────────────────────────────
    print(f"\n{'─' * 50}")
    print("🔐 FASE 4: Exportación cifrada del alma")
    print(f"{'─' * 50}")
    export_path = titan.export_soul("PasswordSuperSegura2026!")

    # ── Resumen final ────────────────────────────────────────────
    print(f"\n{SEPARATOR}")
    print("  ✅ DEMO COMPLETADA – EL TITÁN INMORTAL ESTÁ VIVO Y MEJORADO")
    print(f"  📁 Datos en: {titan.data_dir}")
    if export_path:
        print(f"  🔐 Alma cifrada en: {export_path}")
    print(SEPARATOR)


if __name__ == "__main__":
    run_demo()
