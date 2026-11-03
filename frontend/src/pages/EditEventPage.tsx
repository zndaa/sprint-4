import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { findEventById } from "../utils/filter-events";
import EventForm from "../components/forms/EventForm";
import NotFoundPage from "./NotFoundPage";

export default function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = findEventById(events, id ?? "");

  if (!event) {
    return <NotFoundPage />;
  }

  const initialFormData = {
    ...event,
    capacity: String(event.capacity),
  };

  return (
    <section className="form-sayfasi">
      <h2 className="bolum-baslik">Etkinlik Düzenle</h2>
      <EventForm
        initialData={initialFormData}
        submitText="Güncelle"
        onSubmit={(data) => {
          updateEvent(event.id, data);
          navigate("/admin");
        }}
      />
    </section>
  );
}