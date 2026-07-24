import "./ContactMap.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import L from "leaflet";
import { useTranslation } from "react-i18next";

const POSITION = [47.6489, 7.5731];
const ADDRESS_LINES = [
  "PhysioVital",
  "Musterstraße 12",
  "79588 Efringen-Kirchen",
];
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${POSITION[0]},${POSITION[1]}`;

const ContactMap = () => {
  const { t } = useTranslation();
  const mapNodeRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map(mapNodeRef.current, {
      center: POSITION,
      zoom: 15,
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      zoomControl: false,
      attributionControl: true,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        maxZoom: 19,
      },
    ).addTo(map);

    const icon = L.divIcon({
      className: "custom-pin-wrapper",
      html: `
        <div class="custom-pin">
          <span class="pulse"></span>
          <span class="pulse delay"></span>
          <span class="dot"></span>
          <div class="pin-tooltip">
            ${ADDRESS_LINES.map((line, i) =>
              i === 0 ? `<strong>${line}</strong>` : `<span>${line}</span>`,
            ).join("")}
            <a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer">
              Google Maps'te aç
            </a>
          </div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    L.marker(POSITION, { icon, keyboard: false }).addTo(map);

    mapRef.current = map;

    const observer = new ResizeObserver(() => map.invalidateSize());
    observer.observe(mapNodeRef.current);

    return () => {
      observer.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section className="contact-map">
      <div
        className="map-shell"
        ref={mapNodeRef}
        aria-label={t("contact.map.aria")}
      />
    </section>
  );
};

export default ContactMap;
