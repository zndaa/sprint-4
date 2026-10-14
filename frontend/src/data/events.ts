import type { CampusEvent } from "../types/campus-event";

export const events: CampusEvent[] = [
  {
    id: "event-1",
    title: "Yazılım ve Kariyer Söyleşisi",
    category: "Söyleşi",
    capacity: 120,
    date: "2026-11-15",
    time: "14:00",
    location: "Mühendislik Amfisi",
    description: "Sektörden tecrübeli yazılımcılarla soru-cevap ve kariyer tavsiyeleri.",
    image: "/images.jpg"
  },
  {
    id: "event-2",
    title: "React ve TypeScript Atölyesi",
    category: "Atölye",
    capacity: 40,
    date: "2026-11-20",
    time: "10:30",
    location: "Laboratuvar A2",
    description: "Uygulamalı modern web geliştirme ve tipli kodlama atölyesi.",
    image: "/images.jpg"
  },
  {
    id: "event-3",
    title: "Yapay Zeka ve Gelecek Semineri",
    category: "Seminer",
    capacity: 200,
    date: "2026-11-25",
    time: "13:00",
    location: "Kültür Merkezi Salon A",
    description: "Büyük dil modelleri ve yapay zeka teknolojilerinin gelişimi.",
    image: "/images.jpg"
  },
  {
    id: "event-4",
    title: "Kampüs Algoritma Yarışması",
    category: "Yarışma",
    capacity: 60,
    date: "2026-12-01",
    time: "09:00",
    location: "Merkezi Derslikler B4",
    description: "Ödüllü problem çözme ve algoritma geliştirme yarışı.",
    image: "/images.jpg"
  },
  {
    id: "event-5",
    title: "Siber Güvenlik Farkındalık Semineri",
    category: "Seminer",
    capacity: 90,
    date: "2026-12-05",
    time: "15:00",
    location: "Mühendislik Amfisi",
    description: "Web güvenliği, sızma testleri ve kişisel veri güvenliği.",
    image: "/images.jpg"
  },
  {
    id: "event-6",
    title: "UI/UX Tasarım Atölyesi",
    category: "Atölye",
    capacity: 35,
    date: "2026-12-10",
    time: "11:00",
    location: "Tasarım Stüdyosu",
    description: "Kullanıcı deneyimi odaklı arayüz tasarımı ilkeleri.",
    image: "/images.jpg"
  }
];