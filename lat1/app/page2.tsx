"use client";

import FavColor from "./components/favcolor";
import Heroes from "./componentsRed/heroesRed";
import HobbiesRed from "./componentsRed/hobbyRed";
import SkillsSectionRed from "./componentsRed/myskillRed";
import ContactRed from "./componentsRed/contactRed";
import "./stylish.css";
import React, { useState } from 'react';
import PersonInfoRed from "./componentsRed/personalRed";
import PendidikanRed from "./componentsRed/pendidikanRed";
import PekerjaanRed from "./componentsRed/pekerjaanRed";

interface Page2Props {
  setCurrentPage2: (pageNumber: number) => void;
}
export default function Page2({ setCurrentPage2 }: Page2Props) {
  const [isOpen, setIsOpen] = useState(false); // State untuk pop-up tema

  const togglePopup = () => {
    setIsOpen(!isOpen); // Toggle antara membuka dan menutup pop-up
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage2(pageNumber); // Set halaman yang aktif
    setIsOpen(false); // Tutup pop-up saat halaman dipilih
  };

  return (
    <section className="relative">
      {/* Tombol Pilih Tema di Pojok Atas Kanan */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
          onClick={togglePopup} // Toggle pop-up saat tombol diklik
        >
          Select Themes
        </button>

        {isOpen && (
          <div className="absolute z-10 top-12 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-all duration-200">
            <div className="mt-2 flex flex-col space-y-2">
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-200"
                onClick={() => goToPage(1)} // Kembali ke Halaman 1
              >
                (Dark)
              </button>
              <button
                className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => goToPage(3)} // Navigasi ke Halaman 3
              >
                (Blue)
              </button>
            </div>
          </div>
        )}
      </div>

   
      <Heroes />
      <div className="okgas">
        <SkillsSectionRed />
        <PersonInfoRed />
      </div>
      <HobbiesRed />
      <PendidikanRed />
      <PekerjaanRed />
      <FavColor />
      <ContactRed />
    </section>
  );
}
