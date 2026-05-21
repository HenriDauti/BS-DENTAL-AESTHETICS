import lips1 from "@/assets/gallery/lips-1.jpeg";
import lips2 from "@/assets/gallery/lips-2.jpeg";
import lips3 from "@/assets/gallery/lips-3.jpeg";
import veneers1 from "@/assets/gallery/veneers-1.jpeg";
import veneers2 from "@/assets/gallery/veneers-2.jpeg";
import whitening1 from "@/assets/gallery/whitening-1.jpeg";

export type GalleryCategory = "lips" | "veneers" | "whitening";

export type GalleryItem = {
  src: string;
  category: GalleryCategory;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { src: lips1, category: "lips", alt: "Lip filler before and after" },
  { src: veneers2, category: "veneers", alt: "Emax veneers before and after" },
  { src: whitening1, category: "whitening", alt: "Laser teeth whitening result" },
  { src: lips2, category: "lips", alt: "Hyaluronic acid lip treatment result" },
  { src: veneers1, category: "veneers", alt: "Porcelain veneers detail" },
  { src: lips3, category: "lips", alt: "Natural lip harmonisation" },
];

export const testimonials = [
  {
    name: "Eriona K.",
    service: "Veneers Emax",
    quote:
      "Çdo detaj u trajtua me kujdes të jashtëzakonshëm. Buzëqeshja ime ka ndryshuar plotësisht — duket krejtësisht natyrale.",
    quoteEn:
      "Every detail was handled with extraordinary care. My smile has completely changed — and it looks entirely natural.",
  },
  {
    name: "Arben M.",
    service: "Implante dentare",
    quote:
      "Procesi ishte i qetë dhe pa dhimbje. Dr. Miti shpjegoi gjithçka hap pas hapi dhe rezultati është perfekt.",
    quoteEn:
      "The process was calm and pain-free. Dr. Miti explained every step and the result is perfect.",
  },
  {
    name: "Klea P.",
    service: "Mbushës buzësh",
    quote:
      "Më në fund gjeta një klinikë që kupton se çfarë do të thotë 'natyral'. Dr. Bia ka një sy artistik të rrallë.",
    quoteEn:
      "I finally found a clinic that understands what 'natural' means. Dr. Bia has a rare artistic eye.",
  },
  {
    name: "Sara T.",
    service: "Zbardhim laser",
    quote:
      "Ambienti është i qetë, stafi shumë profesional dhe rezultati i menjëhershëm. Do t'i rekomandoja pa hezitim.",
    quoteEn:
      "The space is calming, the staff highly professional and the result is immediate. I would recommend without hesitation.",
  },
];
