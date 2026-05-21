import about from "@/assets/about.jpg";
import doctorWorking from "@/assets/team/doctor-working.jpeg";
import doctorInjection from "@/assets/team/doctor-injection.jpeg";
import veneers1 from "@/assets/gallery/veneers-1.jpeg";
import whitening1 from "@/assets/gallery/whitening-1.jpeg";

export const serviceImage: Record<string, string> = {
  "dentistri-estetike": veneers1,
  "endodonti-protetike": doctorWorking,
  "implante-kirurgji": about,
  "ortodonci-maskerina": whitening1,
  "facial-fillers-treatment": doctorInjection,
};
