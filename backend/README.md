# Backend API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | /events | Listeyi getir | 200 | — | Bu sprint |
| GET | /events/:id | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | /events | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | /events/:id | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | /events/:id | Sil | 204 | 404 | Sprint 9 |

## Status Codes
- **200**: Tamam
- **201**: Oluşturuldu
- **204**: İçerik yok
- **400**: Eksik/yanlış veri
- **404**: Bulunamadı

## Hata Formatı
```json
{
  "error": {
    "message": "Event not found"
  }
}
### 2. `backend/src/data/events.ts` Dosyası (Adım 6)

`src/data/events.ts` dosyasını aç ve 6 adet uydurma etkinlikle (image alanları olmadan) şu şekilde güncelle[cite: 29]:

```typescript
export interface EventItem {
  id: string;
  title: string;
  category: string;
  capacity: number;
  date: string;
  time: string;
  location: string;
  description: string;
}

export let events: EventItem[] = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    capacity: 100,
    date: "2026-10-12",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Yazılım sektöründeki lider şirketlerle buluşma fırsatı."
  },
  {
    id: "event-2",
    title: "Yapay Zeka Workshop",
    category: "Atölye",
    capacity: 50,
    date: "2026-10-15",
    time: "10:30",
    location: "Lab 3",
    description: "Python ve Makine Öğrenmesi temel uygulamaları."
  },
  {
    id: "event-3",
    title: "Siber Güvenlik Zirvesi",
    category: "Konferans",
    capacity: 150,
    date: "2026-11-01",
    time: "09:00",
    location: "Merkez Amfi",
    description: "Ağ güvenliği ve etik hackleme üzerine oturumlar."
  },
  {
    id: "event-4",
    title: "Mobil Uygulama Geliştirme",
    category: "Atölye",
    capacity: 40,
    date: "2026-11-10",
    time: "13:00",
    location: "Lab 1",
    description: "React Native ile ilk mobil uygulamanı yap."
  },
  {
    id: "event-5",
    title: "TÜBİTAK Proje Hazırlama Eğitimi",
    category: "Seminer",
    capacity: 80,
    date: "2026-11-20",
    time: "15:00",
    location: "B Blok 201",
    description: "2209-A ve 2209-B araştırma projeleri rehberi."
  },
  {
    id: "event-6",
    title: "Kampüs Oyun Turnuvası",
    category: "Sosyal",
    capacity: 200,
    date: "2026-12-05",
    time: "16:00",
    location: "Öğrenci Merkezi",
    description: "Öğrenciler arası ödüllü e-spor turnuvası."
  }
];