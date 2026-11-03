import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

export default function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="etkinlik-detay-karti">
      {event.imageUrl && (
        <figure className="afis-kutusu">
          <img src={event.imageUrl} alt={event.title} />
          <figcaption>{event.title} afişi</figcaption>
        </figure>
      )}

      <h3>Etkinlik Künyesi</h3>
      <dl>
        <dt>Tarih</dt>
        <dd>{formatDate(event.date)}</dd>
        <dt>Yer</dt>
        <dd>{event.location}</dd>
        <dt>Kategori</dt>
        <dd>{event.category}</dd>
        <dt>Kontenjan</dt>
        <dd>{event.capacity} kişi</dd>
      </dl>

      <h3>Açıklama</h3>
      <p>{event.description}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Link to="/events" className="btn-detay">
          Listeye Dön
        </Link>
        <Link to={`/admin/${event.id}/edit`} className="btn-detay">
          Güncelle
        </Link>
      </div>
    </article>
  );
}