import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

export default function EventCard({ event, onShowDetail }: EventCardProps) {
  return (
    <article className="kart">
      <div className="kart-icerik">
        <h3>{event.title}</h3>
        <p className="kategori-etiket">{event.category}</p>
        <p className="tarih">
          <strong>Tarih:</strong> {formatDate(event.date)} - {event.time}
        </p>
        <p className="konum">
          <strong>Konum:</strong> {event.location}
        </p>
        <p className="kontenjan">
          <strong>Kontenjan:</strong> {event.capacity} Kişi
        </p>
        <p className="aciklama">{event.description}</p>
        <button
          type="button"
          className="btn-detay"
          onClick={() => onShowDetail(event.id)}
        >
          Detayları Gör
        </button>
      </div>
    </article>
  );
}