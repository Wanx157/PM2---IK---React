"use client";

import FavColor from "./components/favcolor";
import ContactBlue from "./componentsBlue/contactBlue";
import HeroesBlue from "./componentsBlue/heroesBlue";
import HobbiesBlue from "./componentsBlue/hobbyBlue";
import SkillsSectionBlue from "./componentsBlue/myskillBlue";
import PekerjaanBlue from "./componentsBlue/pekerjaanBlue";
import PendidikanBlue from "./componentsBlue/pendidikanBlue";
import PersonInfoBlue from "./componentsBlue/personalBlue";
import "./stylish.css";
import React, { useState } from 'react';

interface Page3Props {
  setCurrentPage2: (pageNumber: number) => void;
}
export default function Page2({ setCurrentPage2 }: Page3Props) {
  const [isOpen, setIsOpen] = useState(false);  // State untuk pop-up tema

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
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                onClick={() => goToPage(2)} // Navigasi ke Halaman 2
              >
                (Dark)
              </button>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-200"
                onClick={() => goToPage(1)} // Kembali ke Halaman 1
              >
                (Blue)
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Konten Halaman 3 */}
      <HeroesBlue />
      <div className="okgas">
        <SkillsSectionBlue />
        <PersonInfoBlue />
      </div>
      <HobbiesBlue />
      <PendidikanBlue />
      <PekerjaanBlue />
      <FavColor />
      <ContactBlue />
    </section>
  );
}
