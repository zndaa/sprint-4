import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { Category } from "./types/campus-event";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";
import type { PageName } from "./types/page";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

export function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
  }

  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  const categories = Array.from(new Set(events.map((e) => e.category)));

  const filtered = filterByCategory(
    searchEvents(events, searchText),
    selectedCategory
  );

  const selected = selectedId ? findEventById(events, selectedId) : undefined;

  useEffect(() => {
    if (page === "home") {
      document.title = "Kampüs Etkinlikleri — Ana Sayfa";
    } else if (page === "events") {
      document.title = "Kampüs Etkinlikleri — Tüm Etkinlikler";
    } else if (page === "detail" && selected) {
      document.title = `Kampüs Etkinlikleri — ${selected.title}`;
    } else if (page === "add") {
      document.title = "Kampüs Etkinlikleri — Yeni Etkinlik";
    } else if (page === "update" && selected) {
      document.title = `Kampüs Etkinlikleri — ${selected.title} Güncelle`;
    } else {
      document.title = "Kampüs Etkinlikleri";
    }
  }, [page, selected]);

  return (
    <>
      <Header title="Kampüs Etkinlikleri" />
      <Navigation current={page} onNavigate={go} />

      <main className="main-content">
        {page === "home" && (
          <section className="ana-sayfa">
            <h2>Yaklaşan 2 Etkinlik</h2>
            <EventList
              events={upcoming}
              onShowDetail={(id) => go("detail", id)}
            />
            <div style={{ marginTop: "20px" }}>
              <button className="btn-detay" onClick={() => go("events")}>
                Tüm etkinlikleri gör
              </button>
            </div>
          </section>
        )}
           {page === "events" && (
  <section className="etkinlikler-sayfasi">
    <h2>Tüm Etkinlikler</h2>

    <EventFilter
      searchText={searchText}
      onSearchChange={setSearchText}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      categories={categories}
    />

    <p style={{ fontSize: "14px", margin: "10px 0" }}>
      {filtered.length} etkinlik listeleniyor.
    </p>

    <EventList
      events={filtered}
      onShowDetail={(id) => go("detail", id)}
      emptyText="Aramanıza uygun etkinlik bulunamadı."
    />
  </section>
)}
        
       {page === "detail" && (
  <section className="detay-sayfasi">
    {!selected ? (
      <div className="hata-kutusu">
        <p>Aradığınız etkinlik bulunamadı.</p>
        <button onClick={() => go("events")}>Listeye Dön</button>
      </div>
    ) : (
      <EventDetail
        event={selected}
        onBack={() => go("events")}
        onEdit={(id) => go("update", id)}
      />
    )}
  </section>
)}

        {(page === "add" || page === "update") && (
  <section className="form-sayfasi">
    <h2>{page === "add" ? "Yeni Etkinlik Ekle" : "Etkinlik Güncelle"}</h2>
    <EventForm
      page={page}
      selected={selected}
      onSubmit={() => window.scrollTo(0, 0)}
    />
  </section>
)}
      </main>
      <Footer />
    </>
  );
}

export default App;