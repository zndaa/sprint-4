import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import type { Category } from "../types/campus-event";
import { filterByCategory, searchEvents } from "../utils/filter-events";
import EventFilter from "../components/events/EventFilter";
import EventList from "../components/events/EventList";

export default function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const categories = Array.from(new Set(events.map((e) => e.category)));

  const filtered = filterByCategory(
    searchEvents(events, searchText),
    category
  );

  return (
    <section className="etkinlikler-sayfasi">
      <h2 className="bolum-baslik">Tüm Etkinlikler</h2>
      <EventFilter
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedCategory={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      <p style={{ fontSize: "14px", margin: "10px 0" }}>
        {filtered.length} etkinlik listeleniyor.
      </p>
      <EventList
        events={filtered}
        emptyText="Aramanıza uygun etkinlik bulunamadı."
      />
    </section>
  );
}