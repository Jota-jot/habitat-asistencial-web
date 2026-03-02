# nemesis_care/core.py
# NÉMESIS-CARE v5.0.1 – EL TITÁN INMORTAL MEJORADO
# Local-first · Federated · Guerrero · Inmortal · Integrado Hábitat Asistencial
# Careware Ethics Collective – 09 Febrero 2026

import numpy as np
import json
import hashlib
import base64
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Any, Optional
from cryptography.fernet import Fernet, InvalidToken
from cryptography.hazmat.primitives.kdf.scrypt import Scrypt


@dataclass
class EthicalBoundary:
    """Límites éticos inquebrantables del sistema."""
    max_data_retention_days: int = 21
    allow_cloud_sync: bool = False
    require_explicit_consent: bool = True


@dataclass
class CompassionateMessage:
    """Mensajes con alma: técnicos para el sistema, humanos para la persona."""
    technical_alert: str
    human_message: str
    suggested_action: str
    balls_level: int = 2

    def to_dict(self) -> Dict[str, Any]:
        tone = {
            1: "suave",
            2: "firme pero cariñoso",
            3: "con dos cojones",
        }.get(self.balls_level, "firme")
        return {
            "for_system": self.technical_alert,
            "for_human": f"[TONO {tone.upper()}] {self.human_message}",
            "gentle_next_step": self.suggested_action,
            "note": "Cuidar de verdad requiere cojones, no miedo.",
        }


@dataclass
class SelfImprovementLog:
    """Registro de auto-evolución del Titán."""
    version: str
    insight: str
    impact: str
    timestamp: str


class NemesisTitanCoreV5_0_1:
    """
    NÉMESIS-CARE v5.0.1 – EL TITÁN INMORTAL

    Motor central de análisis predictivo para cuidado de mayores.
    Local-first, federado, ético, no invasivo.
    Integrado con el ecosistema Hábitat Asistencial.
    """

    VERSION = "5.0.1-INMORTAL"

    def __init__(
        self,
        user_id: str,
        data_dir: Path = Path("./nemesis_titan"),
        consent_granted: bool = False,
    ):
        self.user_id = hashlib.sha256(user_id.encode()).hexdigest()[:16]
        self.data_dir = data_dir / self.user_id
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.ethics = EthicalBoundary()
        self.history: List[Dict[str, Any]] = []
        self.self_improvements: List[SelfImprovementLog] = []
        self.federated_insights: List[Dict] = []
        self.anomaly_threshold = 0.70
        self.warrior_active = False
        self.consent_granted = consent_granted

        self._load_state()
        print(f"🔥 NÉMESIS-TITÁN v{self.VERSION} – EL INMORTAL DESPIERTO (Consent: {self.consent_granted})")
        print("   Local-first · Federado · Guerrero · Inmortal · Hábitat Asistencial Ready")

    # ─── Persistencia ────────────────────────────────────────────────

    def _load_state(self):
        """Carga el alma del Titán desde disco."""
        file = self.data_dir / "titan_soul.json"
        if file.exists():
            try:
                with open(file, "r") as f:
                    data = json.load(f)
                self.history = data.get("history", [])
                self.self_improvements = [
                    SelfImprovementLog(**log) for log in data.get("improvements", [])
                ]
                self.federated_insights = data.get("federated_insights", [])
                self._apply_retention_policy()
            except (json.JSONDecodeError, KeyError, TypeError):
                pass

    def _save_state(self):
        """Persiste el estado completo del Titán."""
        file = self.data_dir / "titan_soul.json"
        data = {
            "version": self.VERSION,
            "history": self.history,
            "improvements": [asdict(log) for log in self.self_improvements],
            "federated_insights": self.federated_insights,
        }
        with open(file, "w") as f:
            json.dump(data, f, indent=2)

    def _apply_retention_policy(self):
        """Política de privacidad: elimina datos más antiguos que el límite ético."""
        cutoff = datetime.now() - timedelta(days=self.ethics.max_data_retention_days)
        old = len(self.history)
        self.history = [
            e for e in self.history
            if datetime.fromisoformat(e["timestamp"]) > cutoff
        ]
        if len(self.history) < old:
            print(f"🧹 PRIVACIDAD INMORTAL: {old - len(self.history)} entradas eliminadas.")

    # ─── Ingesta de datos ────────────────────────────────────────────

    def add_daily_data(
        self,
        sleep: float,
        steps: int,
        hrv: float,
        mood: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Añade datos diarios generales (sueño, pasos, HRV, estado de ánimo)."""
        entry = {
            "timestamp": datetime.now().isoformat(),
            "sleep_hours": round(sleep, 1),
            "daily_steps": steps,
            "heart_rate_variability": round(hrv, 1),
            "mood": mood,
            "flag": None,
        }
        self.history.append(entry)
        self._save_state()

        result = self._analyze()
        entry["flag"] = result["flag"]
        self._self_evolve()
        self._check_warrior_mode(entry)
        return result

    def add_elder_data(
        self,
        mobility_score: Optional[float] = None,
        social_hours: Optional[float] = None,
        falls_detected: int = 0,
        **kwargs,
    ) -> Dict[str, Any]:
        """
        Método específico para Hábitat Asistencial: datos de mayores no invasivos.
        Compatible con Radares Hub (caídas, actividad) y Biovita (sueño, cardio).
        """
        entry = {
            "timestamp": datetime.now().isoformat(),
            "mobility_score": mobility_score,
            "social_contact_hours": social_hours,
            "falls_detected": falls_detected,
            **kwargs,
        }
        self.history.append(entry)
        self._save_state()
        result = self._analyze_elder()
        entry["flag"] = result["flag"]
        return result

    # ─── Análisis ────────────────────────────────────────────────────

    def _analyze(self) -> Dict[str, Any]:
        """Análisis predictivo general basado en HRV + mood."""
        if len(self.history) < 5:
            return {"flag": "learning", "message": "El Titán observa y aprende."}

        recent = [d for d in self.history[-5:] if "heart_rate_variability" in d]
        if not recent:
            return {"flag": "no_data", "message": "Faltan datos HRV."}

        hrv_recent = [d["heart_rate_variability"] for d in recent]
        hrv_avg = np.mean(hrv_recent)

        # Baseline rolling: últimos 9-14 días previos, default 60 si poco data
        prev_data = [
            d["heart_rate_variability"]
            for d in self.history[:-5]
            if "heart_rate_variability" in d
        ][-14:]
        baseline = np.mean(prev_data) if prev_data else 60.0

        mood_penalty = (
            0.85
            if any(
                m in str(self.history[-1].get("mood", "")).lower()
                for m in ["ansioso", "deprimido", "solo"]
            )
            else 1.0
        )

        if hrv_avg < baseline * self.anomaly_threshold * mood_penalty:
            msg = CompassionateMessage(
                technical_alert="Crisis detectada (HRV + mood)",
                human_message="Tu cuerpo y mente necesitan atención YA. No estás solo, coño.",
                suggested_action="Respira profundo 4-7-8. Contacta familiar o cuidador. Actúa.",
                balls_level=3,
            )
            return {"flag": "TITAN_WARRIOR", "message": msg.to_dict()}

        return {"flag": "TITAN_STRONG", "message": "Fuerte. Inmortal. Sigue así."}

    def _analyze_elder(self) -> Dict[str, Any]:
        """Análisis específico para mayores (Hábitat Asistencial)."""
        if len(self.history) < 3:
            return {"flag": "learning_elder", "message": "Observando patrón de mayor."}

        recent = self.history[-3:]
        falls = sum(d.get("falls_detected", 0) for d in recent)
        social_entries = [
            d.get("social_contact_hours", 0)
            for d in recent
            if "social_contact_hours" in d
        ]
        social = np.mean(social_entries) if social_entries else 0

        if falls > 0 or social < 1:
            return {
                "flag": "TITAN_CARE_ALERT",
                "message": "Alerta cuidado: caídas o aislamiento detectado. Notificar discreto.",
            }
        return {
            "flag": "TITAN_ELDER_STABLE",
            "message": "Mayor estable en hábitat.",
        }

    # ─── Auto-evolución ─────────────────────────────────────────────

    def _self_evolve(self):
        """El Titán aprende de sus propios errores y se recalibra."""
        if len(self.history) > 30 and len(self.self_improvements) < 10:
            recent_flags = [e.get("flag") for e in self.history[-30:]]
            warrior_count = recent_flags.count("TITAN_WARRIOR")
            false_positives = warrior_count / len(recent_flags) if recent_flags else 0

            if false_positives > 0.4:
                self.anomaly_threshold = max(0.55, self.anomaly_threshold - 0.05)
                log = SelfImprovementLog(
                    version=f"5.0.1.{len(self.self_improvements) + 1}",
                    insight=f"Reducido threshold a {self.anomaly_threshold} por falsos positivos",
                    impact="Mejor precisión en crisis reales",
                    timestamp=datetime.now().isoformat(),
                )
                self.self_improvements.append(log)
                self._save_state()

    def _check_warrior_mode(self, entry: Dict):
        """Activa modo guerrero si hay crisis y consentimiento."""
        if (
            entry.get("flag") == "TITAN_WARRIOR"
            and self.consent_granted
            and not self.warrior_active
        ):
            print("⚔️ MODO GUERRERO ACTIVADO – EL TITÁN PROTEGE (con consentimiento)")
            self.warrior_active = True

    # ─── Exportación cifrada ─────────────────────────────────────────

    def export_soul(self, password: str) -> Optional[str]:
        """Exporta el alma del Titán cifrada con AES (Fernet + Scrypt KDF)."""
        if not self.consent_granted:
            print("❌ Consentimiento requerido para exportar alma.")
            return None

        soul = {
            "history": self.history,
            "improvements": [asdict(log) for log in self.self_improvements],
            "insights": self.federated_insights,
        }
        kdf = Scrypt(salt=b"nemesis_salt_2026", length=32, n=2**14, r=8, p=1)
        key = base64.urlsafe_b64encode(kdf.derive(password.encode()))
        f = Fernet(key)
        encrypted = f.encrypt(json.dumps(soul).encode())
        file = self.data_dir / "titan_soul_export.enc"
        file.write_bytes(encrypted)
        print(f"✅ Alma exportada cifrada AES (Fernet) en {file}")
        return str(file)

    # ─── Diagnóstico profundo ────────────────────────────────────────

    def deep_analysis(self) -> Dict[str, Any]:
        """Retorna estado completo del Titán para diagnóstico."""
        return {
            "status": "INMORTAL",
            "version": self.VERSION,
            "days_active": len(self.history),
            "evolutions": len(self.self_improvements),
            "threshold_actual": self.anomaly_threshold,
            "warrior_mode": self.warrior_active,
            "consent": self.consent_granted,
            "ethical_retention_days": self.ethics.max_data_retention_days,
        }
