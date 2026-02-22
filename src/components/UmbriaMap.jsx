import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslation } from "react-i18next";

const ceremonyIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div class="svg-marker">
      <svg width="28" height="38" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
              fill="#5b6d4c"/>
        <g transform="translate(6,8)">
          <rect x="3" y="6" width="6" height="8" fill="white"/>
          <polygon points="6,0 0,6 12,6" fill="white"/>
          <rect x="5.2" y="2" width="1.6" height="4" fill="#5b6d4c"/>
          <rect x="4" y="3.2" width="4" height="1.6" fill="#5b6d4c"/>
        </g>
      </svg>
    </div>
  `,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -34],
});

const receptionIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div class="svg-marker">
      <svg width="28" height="38" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
              fill="#5b6d4c"/>
        <g transform="translate(7,8)">
          <path d="M0 0h10c0 4-2.5 6-5 6S0 4 0 0z" fill="white"/>
          <rect x="4.2" y="6" width="1.6" height="4" fill="white"/>
          <rect x="2" y="10" width="6" height="1.5" fill="white"/>
        </g>
      </svg>
    </div>
  `,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -34],
});

const customIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <div class="svg-marker">
      <svg width="22" height="32" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#b84a3c"/>
            <stop offset="100%" stop-color="#8f2d24"/>
          </linearGradient>
        </defs>
        <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
              fill="url(#pinGrad)"/>
        <circle cx="12" cy="12" r="4" fill="white"/>
      </svg>
      <div class="marker-pulse"></div>
    </div>
  `,
  iconSize: [22, 32],
  iconAnchor: [11, 32],
  popupAnchor: [0, -30],
});

export default function UmbriaMap() {
  const [showAll, setShowAll] = useState(false);

  const { t, i18n } = useTranslation();

  const locations = [
    {
      key: "perugia",
      name: t("map.places.perugia"),
      position: [43.1107, 12.3908],
      description: t("map.descriptions.perugia"),
      type: "place",
    },
    {
      key: "assisi",
      name: t("map.places.assisi"),
      position: [43.0707, 12.6170],
      description: t("map.descriptions.assisi"),
      type: "place",
    },
    {
      key: "spello",
      name: t("map.places.spello"),
      position: [42.9909, 12.6713],
      description: t("map.descriptions.spello"),
      type: "place",
    },
    {
      key: "castiglione",
      name: t("map.places.castiglione"),
      position: [43.1286, 12.0391],
      description: t("map.descriptions.castiglione"),
      type: "place",
    },
    {
      key: "montefalcoBevagna",
      name: t("map.places.montefalcoBevagna"),
      position: [42.8934, 12.6493],
      description: t("map.descriptions.montefalcoBevagna"),
      type: "place",
    },
    {
      key: "marmore",
      name: t("map.places.marmore"),
      position: [42.5480, 12.7170],
      description: t("map.descriptions.marmore"),
      type: "place",
    },
    {
      key: "clitunno",
      name: t("map.places.clitunno"),
      position: [42.8144, 12.7389],
      description: t("map.descriptions.clitunno"),
      type: "place",
    },
    {
      key: "spoleto",
      name: t("map.places.spoleto"),
      position: [42.7345, 12.7388],
      description: t("map.descriptions.spoleto"),
      type: "place",
    },
    {
      key: "gubbio",
      name: t("map.places.gubbio"),
      position: [43.3512, 12.5776],
      description: t("map.descriptions.gubbio"),
      type: "place",
    },
    {
      name: t("map.places.ceremony"),
      position: [43.0619, 12.3776],
      type: "ceremony",
    },
    {
      name: t("map.places.reception"),
      position: [42.9645, 12.0822],
      type: "reception",
    },
  ];

  const filteredLocations = showAll
    ? locations
    : locations.filter(loc => loc.type === "ceremony" || loc.type === "reception");

  const getKmlFileByLanguage = () => {
    const lang = i18n.language || "it";

    if (lang.startsWith("de")) return "/umbria-wedding-map-de.kml";
    if (lang.startsWith("en")) return "/umbria-wedding-map-en.kml";

    return "/umbria-wedding-map-it.kml";
  };

  const getGoogleMapsKmlLink = () => {
    const baseUrl = window.location.origin;
    const kmlPath = getKmlFileByLanguage();
    const fullKmlUrl = `${baseUrl}${kmlPath}`;
    return `https://www.google.com/maps?q=${encodeURIComponent(fullKmlUrl)}`;
  };

  return (
    <div className="map-wrapper">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          className="map-toggle-btn"
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? t("map.showWeddingOnly") : t("map.showAll")}
      
        </button>
      </div>
      <MapContainer
        center={[43.0, 12.5]}
        zoom={9}
        scrollWheelZoom={false}
        className="umbria-map"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {filteredLocations.map((loc, index) => (
          <Marker
            key={index}
            position={loc.position}
            icon={
              loc.type === "ceremony"
                ? ceremonyIcon
                : loc.type === "reception"
                ? receptionIcon
                : customIcon
            }
            eventHandlers={{
              click: (e) => {
                const el = e.target.getElement();
                el.classList.remove("marker-active");
                void el.offsetWidth;
                el.classList.add("marker-active");
              }
            }}
          >
            <Popup>
              <div className="map-popup">
                <h3>{loc.name}</h3>
                {loc.description && <p>{loc.description}</p>}

                {loc.type === "place" && (
                  <a
                    href={t(`map.infoLinks.${loc.key}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-info-button"
                  >
                    Info →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a
          href={getGoogleMapsKmlLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="map-all-btn"
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            {t("map.openAllOnMaps")}
          </span>
        </a>
        <div style={{ marginTop: "10px", fontSize: "0.8rem", opacity: 0.7 }}>
          {t("map.openHint")}
        </div>
      </div>
    </div>
  );
}