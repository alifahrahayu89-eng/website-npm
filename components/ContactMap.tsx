"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen";

const OFFICE_POSITION: [number, number] = [-6.2188415, 106.5302578];
const ENABLE_GOOGLE_ROUTE = false;

/* ============================= */
/*        FULLSCREEN CONTROL     */
/* ============================= */
function FullscreenControl() {
  const map = useMap();

  useEffect(() => {
    const control = new (L.Control as any).Fullscreen({
      position: "topright",
    });
    map.addControl(control);
    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
}

/* ============================= */
/*         SMOOTH FLY EFFECT     */
/* ============================= */
function SmoothFly() {
  const map = useMap();
  useEffect(() => {
    map.flyTo(OFFICE_POSITION, 15, { duration: 2 });
  }, [map]);
  return null;
}

/* ============================= */
/*      AUTO DETECT USER LOC     */
/* ============================= */
function LocateUser() {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: false });

    map.on("locationfound", (e: any) => {
      const userIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:20px;
          height:20px;
          background:#2563eb;
          border-radius:50%;
          box-shadow:0 0 15px #2563eb;
        "></div>`,
      });

      L.marker(e.latlng, { icon: userIcon })
        .addTo(map)
        .bindPopup("Lokasi Anda")
        .openPopup();
    });
  }, [map]);

  return null;
}

export default function ContactMap() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const tileUrl = dark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const attribution = dark
    ? "&copy; CARTO"
    : "&copy; OpenStreetMap contributors";

  const customIcon = useMemo(() => {
    return L.divIcon({
      className: "",
      html: `
        <div class="glow-marker">
          <img src="/logo.png" style="width:48px;height:48px;" />
        </div>
      `,
      iconSize: [48, 48],
      iconAnchor: [24, 48],
      popupAnchor: [0, -45],
    });
  }, []);

  const openGoogleMaps = () => {
  if (!ENABLE_GOOGLE_ROUTE) return;

  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_POSITION[0]},${OFFICE_POSITION[1]}`,
    "_blank"
  );
};

  return (
    <MapContainer
      center={OFFICE_POSITION}
      zoom={14}
      scrollWheelZoom={true}
      style={{
        height: "100%",
        minHeight: "650px",
        transform: "perspective(1000px) rotateX(4deg)",
      }}
      className="z-0"
    >
      <TileLayer attribution={attribution} url={tileUrl} />

      <Marker position={OFFICE_POSITION} icon={customIcon}>
        <Popup>
  <strong>CV Nusantara Mitra Persada</strong>
  <br />
  General Trading & Technical Service
  <br /><br />

  {ENABLE_GOOGLE_ROUTE && (
    <button
      onClick={openGoogleMaps}
      style={{
        background: "#2563eb",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Route via Google Maps
    </button>
  )}
</Popup>
      </Marker>

      <FullscreenControl />
      <SmoothFly />
      <LocateUser />
    </MapContainer>
  );
}