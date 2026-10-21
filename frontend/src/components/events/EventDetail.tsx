import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

export default function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <div className="detay-container">
      <article className="detay-kart">
        {event.image && (
          <figure className="afis-kutusu">
            <img src={event.image} alt={event.title} />
            <figcaption>{event.title} afişi</figcaption>
          </figure>
        )}
        <div className="kunye">
          <h2>{event.title}</h2>
          <p>
            <strong>Kategori:</strong> {event.category}
          </p>
          <p>
            <strong>Tarih & Saat:</strong> {formatDate(event.date)} {event.time}
          </p>
          <p>
            <strong>Konum:</strong> {event.location}
          </p>
          <p>
            <strong>Kontenjan:</strong> {event.capacity} Kişi
          </p>
          <p className="aciklama">{event.description}</p>

          <div
            className="detay-butonlar"
            style={{ display: "flex", gap: "10px", marginTop: "15px" }}
          >
            <button className="btn-detay" onClick={onBack}>
              ← Listeye Dön
            </button>
            <button className="btn-detay" onClick={() => onEdit(event.id)}>
              Bu Etkinliği Güncelle
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}