import type { CampusEvent } from "../../types/campus-event";

interface EventFormProps {
  onSubmit: () => void;
  page: "add" | "update";
  selected?: CampusEvent;
}

export default function EventForm({ onSubmit, page, selected }: EventFormProps) {
  return (
    <>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Bu sprintte form sadece görünümdür; kayıt yapılmaz.
      </p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label htmlFor="title">Etkinlik Adı</label>
        <input
          id="title"
          type="text"
          maxLength={80}
          defaultValue={page === "update" ? selected?.title : ""}
          required
        />

        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          defaultValue={page === "update" ? selected?.category : "Seminer"}
        >
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
    </>
  );
}