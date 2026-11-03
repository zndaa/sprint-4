import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
    setError(found);
    setSent(found === "");
  };

  return (
    <section className="form-sayfasi">
      <h2 className="bolum-baslik">Şifremi Unuttum</h2>
      <p style={{ marginBottom: "15px", fontSize: "14px" }}>
        Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.
      </p>

      {sent && (
        <p className="mesaj mesaj-basari" style={{ color: "green", padding: "10px", background: "#e8f5e9", borderRadius: "4px", marginBottom: "15px" }}>
          Bağlantı {email} adresine gönderildi (demo).
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="etkinlik-formu">
        <div className="form-grup">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>

        <button type="submit" className="btn-detay">
          Bağlantı Gönder
        </button>
      </form>

      <div style={{ marginTop: "15px", fontSize: "14px" }}>
        <Link to="/login">← Girişe dön</Link>
      </div>
    </section>
  );
}