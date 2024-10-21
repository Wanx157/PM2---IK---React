import "./wan-style.css";
import React from 'react';
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import RiwayatPekerjaan from "./components/rowriwayatpekerjaan";
import Profile from "./components/profile";
import Favcolor from "./components/favcolor";
// import Form from "./components/kuis";

export default function MyApp() {
  return (
    <section className="bg-cv">
      <Profile />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Favcolor />
      {/* <Form /> */}
    </section>
  )
}