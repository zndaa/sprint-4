export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  description: string;
}

export let events: EventItem[] = [
  {
    id: "event-1",
    title: "Gömülü Sistemler ve AVR Assembly",
    category: "Teknoloji",
    date: "2026-05-15",
    time: "11:00",
    location: "Mikroişlemci Laboratuvarı",
    capacity: 123,
    description: "ATmega2560 ve 7 segment ekran uygulamaları"
  },
  {
    id: "event-2",
    title: "Dijital Görüntü İşleme Atölyesi",
    category: "Teknoloji",
    date: "2026-06-01",
    time: "15:00",
    location: "Bilgisayar Bilimleri Lab B",
    capacity: 43,
    description: "Spatial filtreleme, Sobel ve Laplacian operatörleri"
  },
  {
    id: "event-3",
    title: "Makine Öğrenmesi ve Optimizasyon",
    category: "Teknoloji",
    date: "2026-07-10",
    time: "09:00",
    location: "Mühendislik Fakültesi Amfi 3",
    capacity: 165,
    description: "Gradient Descent ve Newton metodu ile karar destek sistemleri"
  },
  {
    id: "event-4",
    title: "Cross-Platform Mobil Uygulama",
    category: "Atölye",
    date: "2026-08-20",
    time: "14:30",
    location: "Yazılım Proje Odası",
    capacity: 28,
    description: "Flutter ve Dart ile alışkanlık takip uygulaması mimarisi"
  },
  {
    id: "event-5",
    title: "Modern Frontend ve State Yönetimi",
    category: "Teknoloji",
    date: "2026-09-05",
    time: "15:00",
    location: "Merkezi Kütüphane Semir Salonu",
    capacity: 81,
    description: "Angular ve React üzerinde REST API entegrasyonu"
  },
  {
    id: "event-6",
    title: "Mantıksal Devre ve Veri Yapıları",
    category: "Atölye",
    date: "2026-10-12",
    time: "10:30",
    location: "Elektronik Laboratuvarı 1",
    capacity: 42,
    description: "Bileşik mantık devreleri ve ikili arama ağaçları"
  }
];