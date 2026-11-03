import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

export default function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <section className="yonetim-sayfasi">
      <h2 className="bolum-baslik">Etkinlik Yönetimi</h2>

      <div style={{ marginBottom: "20px" }}>
        <Link to="/admin/new" className="buton btn-yeni">
          + Yeni etkinlik
        </Link>
      </div>

      {events.length === 0 ? (
        <p>Hakkında henüz etkinlik yok.</p>
      ) : (
        <table className="tablo">
          <thead>
            <tr>
              <th>Etkinlik</th>
              <th>Tarih</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td data-baslik="Etkinlik">{event.title}</td>
                <td data-baslik="Tarih">{formatDate(event.date)}</td>
                <td data-baslik="Kategori">{event.category}</td>
                <td className="islemler" data-baslik="İşlemler">
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Link to={`/admin/${event.id}/edit`} className="buton btn-duzenle">
                      Düzenle
                    </Link>
                    <button
                      className="buton buton-sil"
                      onClick={() => handleDelete(event.id, event.title)}
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}