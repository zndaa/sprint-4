import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="form-sayfasi" style={{ textAlign: "left", padding: "20px 0" }}>
      <h2 className="bolum-baslik" style={{ marginBottom: "10px" }}>
        Sayfa bulunamadı
      </h2>
      <p style={{ color: "#4a5568", marginBottom: "20px", fontSize: "15px" }}>
        Aradığınız sayfa ya da etkinlik yok.
      </p>
      <div>
        <Link to="/" className="btn-detay">
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}