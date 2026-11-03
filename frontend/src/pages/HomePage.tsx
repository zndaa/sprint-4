import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";

export default function HomePage() {
  const { events } = useEvents();

  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  return (
    <section className="ana-sayfa">
      <h2 className="bolum-baslik">Yaklaşan 2 Etkinlik</h2>
      <EventList events={upcoming} />
      <div style={{ marginTop: "20px" }}>
        <Link className="btn-detay" to="/events">
          Tüm etkinlikleri gör
        </Link>
      </div>
    </section>
  );
}