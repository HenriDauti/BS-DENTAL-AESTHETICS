import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNav((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNav]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-primary-foreground hover:text-accent"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav((index - 1 + images.length) % images.length);
        }}
        className="absolute left-4 text-primary-foreground hover:text-accent"
        aria-label="Previous"
      >
        <ChevronLeft size={36} />
      </button>
      <img
        src={images[index].src}
        alt={images[index].alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] object-contain"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav((index + 1) % images.length);
        }}
        className="absolute right-4 text-primary-foreground hover:text-accent"
        aria-label="Next"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
}

export function GalleryGrid({ images }: { images: { src: string; alt: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative aspect-[4/5] overflow-hidden bg-muted"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Para / Pas</span>
            </div>
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox images={images} index={open} onClose={() => setOpen(null)} onNav={setOpen} />
      )}
    </>
  );
}
