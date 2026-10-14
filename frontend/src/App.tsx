import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { CampusEvent, Category } from "./types/campus-event";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";

type PageName = "home" | "events" | "detail" | "add" | "update";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateStr).toLocaleDateString("tr-TR", options);
}

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

  function renderCard(event: CampusEvent) {
    return (
      <article className="kart" key={event.id}>
        <div className="kart-icerik">
          <h3>{event.title}</h3>
          <p className="kategori-etiket">{event.category}</p>
          <p className="tarih"><strong>Tarih:</strong> {formatDate(event.date)} - {event.time}</p>
          <p className="konum"><strong>Konum:</strong> {event.location}</p>
          <p className="kontenjan"><strong>Kontenjan:</strong> {event.capacity} Kişi</p>
          <p className="aciklama">{event.description}</p>
          <button className="btn-detay" onClick={() => go("detail", event.id)}>
            Detayları Gör
          </button>
        </div>
      </article>
    );
  }

  return (
    <>
      <header className="site-header">
        <h1>Kampüs Etkinlikleri</h1>
        <nav className="site-nav">
          <button className={page === "home" ? "active" : ""} onClick={() => go("home")}>
            Ana Sayfa
          </button>
          <button className={page === "events" ? "active" : ""} onClick={() => go("events")}>
            Etkinlikler
          </button>
          <button className={page === "add" ? "active" : ""} onClick={() => go("add")}>
            Ekle
          </button>
        </nav>
      </header>

      <main className="main-content">
        {page === "home" && (
          <section className="ana-sayfa">
            <h2>Yaklaşan 2 Etkinlik</h2>
            <div className="etkinlik-listesi">
              {upcoming.map(renderCard)}
            </div>
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
            
            <div className="filtre-alani">
              <input
                type="search"
                placeholder="Etkinlik ara..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | "")}
              >
                <option value="">Tüm Kategoriler</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <p style={{ fontSize: "14px", margin: "10px 0" }}>
              {filtered.length} etkinlik listeleniyor.
            </p>

            {filtered.length === 0 ? (
              <p className="bulunamadi">Aramanıza uygun etkinlik bulunamadı.</p>
            ) : (
              <div className="etkinlik-listesi">
                {filtered.map(renderCard)}
              </div>
            )}
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
              <div className="detay-container">
                <article className="detay-kart">
                  {selected.image && (
                    <figure className="afis-kutusu">
                      <img src={selected.image} alt={selected.title} />
                      <figcaption>{selected.title} afişi</figcaption>
                    </figure>
                  )}
                  <div className="kunye">
                    <h2>{selected.title}</h2>
                    <p><strong>Kategori:</strong> {selected.category}</p>
                    <p><strong>Tarih & Saat:</strong> {formatDate(selected.date)} - {selected.time}</p>
                    <p><strong>Konum:</strong> {selected.location}</p>
                    <p><strong>Kontenjan:</strong> {selected.capacity} Kişi</p>
                    <p className="aciklama">{selected.description}</p>

                    <div className="detay-butonlar" style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                      <button className="btn-detay" onClick={() => go("events")}>
                        ← Listeye Dön
                      </button>
                      <button className="btn-detay" onClick={() => go("update", selected.id)}>
                        Bu Etkinliği Güncelle
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </section>
        )}

        {(page === "add" || page === "update") && (
          <section className="form-sayfasi">
            <h2>{page === "add" ? "Yeni Etkinlik Ekle" : "Etkinlik Güncelle"}</h2>
            <p style={{ fontSize: "12px", color: "#666" }}>
              Bu sprintte form sadece görünümdür; kayıt yapılmaz.
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="title">Etkinlik Adı</label>
              <input 
                id="title" 
                type="text" 
                maxLength={80} 
                defaultValue={page === "update" ? selected?.title : ""}
                required 
              />

              <label htmlFor="category">Kategori</label>
              <select id="category" defaultValue={page === "update" ? selected?.category : "Seminer"}>
                <option value="Seminer">Seminer</option>
                <option value="Atölye">Atölye</option>
                <option value="Söyleşi">Söyleşi</option>
                <option value="Yarışma">Yarışma</option>
              </select>

              <label htmlFor="capacity">Kontenjan</label>
              <input 
                id="capacity" 
                type="number" 
                min={1} 
                defaultValue={page === "update" ? selected?.capacity : 50} 
              />

              <label htmlFor="date">Tarih</label>
              <input 
                id="date" 
                type="date" 
                defaultValue={page === "update" ? selected?.date : ""} 
              />

              <label htmlFor="time">Saat</label>
              <input 
                id="time" 
                type="time" 
                defaultValue={page === "update" ? selected?.time : "14:00"} 
              />

              <label htmlFor="location">Konum / Yer</label>
              <input 
                id="location" 
                type="text" 
                defaultValue={page === "update" ? selected?.location : ""} 
              />

              <label htmlFor="description">Açıklama</label>
              <textarea 
                id="description" 
                rows={5} 
                defaultValue={page === "update" ? selected?.description : ""}
              />

              <button type="submit">
                {page === "add" ? "Kaydet" : "Güncelle"}
              </button>
            </form>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <p>zeynep nida çiçek - 2416501033 - 2026</p>
      </footer>
    </>
  );
}

export default App;