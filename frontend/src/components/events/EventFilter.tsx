import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  selectedCategory: Category | "";
  onCategoryChange: (category: Category | "") => void;
  categories: string[];
}

export default function EventFilter({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: EventFilterProps) {
  return (
    <div className="filtre-alani">
      <input
        type="search"
        placeholder="Etkinlik ara..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value as Category | "")}
      >
        <option value="">Tüm Kategoriler</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}