 export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateStr).toLocaleDateString("tr-TR", options);
}