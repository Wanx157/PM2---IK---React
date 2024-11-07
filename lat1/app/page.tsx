"use client";

import FavColor from "./components/favcolor";
import Heroes from "./components/heroes";
import Hobbies from "./components/hobby";
import SkillsSection from "./components/myskill";
import PersonInfo from "./components/personal";
import ContactForm from "./components/quiz";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import Page2 from "./page2"; // Import Halaman Kedua
import Page3 from "./page3"; // Import Halaman Ketiga
import "./stylish.css";
import React, { useState } from 'react';

export default function MyApp() {
  const [currentTheme, setCurrentTheme] = useState("default");
  const [isOpen, setIsOpen] = useState(false); // State untuk pop-up tema
  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman yang aktif

  const handleThemeChange = (theme: React.SetStateAction<string>) => {
    setCurrentTheme(theme);
    setIsOpen(false); // Tutup pop-up setelah memilih tema
  };

  const togglePopup = () => {
    setIsOpen(!isOpen); // Toggle antara membuka dan menutup pop-up
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Set halaman yang aktif
    setIsOpen(false); // Tutup pop-up saat halaman dipilih
  };

  const renderContent = () => {
    if (currentPage === 2) {
      return <Page2 setCurrentPage2={setCurrentPage} />; // Render Halaman Kedua
    } else if (currentPage === 3) {
      return <Page3 setCurrentPage2={setCurrentPage} />; // Render Halaman Ketiga
    } else {
      return (
        <>
          <Heroes />
          <div className="okgas">
            <SkillsSection />
            <PersonInfo />
          </div>
          <Hobbies />
          <RiwayatPendidikan />
          <RiwayatPekerjaan />
          <FavColor />
          <ContactForm />
        </>
      ); // Render halaman utama
    }
  };

  return (
    <section className="relative">
      {/* Tombol Pilih Tema di Pojok Atas Kanan */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
          onClick={togglePopup} // Toggle pop-up saat tombol diklik
        >
          Pilih Thema
        </button>

        {isOpen && (
          <div className="absolute z-10 top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-all duration-200">
            <div className="mt-2 flex flex-col space-y-2">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                onClick={() => goToPage(2)} // Navigasi ke Halaman 2
              >
                (Yellow)
              </button>
              <button
                className="bg-sky-400 text-white py-2 px-4 rounded hover:bg-sky-500 transition duration-200"
                onClick={() => goToPage(3)} // Navigasi ke Halaman 3
              >
                (Green)
              </button>
            </div>
          </div>
        )}
      </div>
      {renderContent()} {/* Render konten berdasarkan halaman yang dipilih */}
    </section>
  );
}
