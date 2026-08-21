import { CONTACT } from "@/lib/site-config";

export default function MapEmbed() {
  return (
    <div className="mx-auto w-full max-w-[800px] overflow-hidden rounded-xl">
      <iframe
        src={CONTACT.mapEmbedSrc}
        width="800"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Mapa de ubicación de MsTech, servicio técnico MSI en Madrid"
        className="h-[300px] w-full"
      />
    </div>
  );
}
