"use client";
import { useState } from "react";
import { warnaskill } from '../color';

const themes = [
  { background: '#ff0000', name: 'Merah' },
  { background: '#ffffff', name: 'Putih' },
  { background: '#808080', name: 'Abu-abu' },
  { background: '#0000ff', name: 'Biru' },
  { background: '#FFFF00', name: 'Kuning' }
];

export default function FavColor() {
  const [themeIndex, setThemeIndex] = useState(0);

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <div
      className="container mx-auto p-2 text-center"
      style={{
        background: themes[themeIndex].background,
        borderRadius: '20px',
        border: '2px solid white',
        width: '600px'
      }}
    >
      <button
        className="hover:bg-gray-700 text-white py-2 px-1 rounded"
        style={{ backgroundColor: 'transparent' }}
        onClick={toggleTheme}
      >
        <h1 className="text-black font-bold" style={{ fontFamily: 'Southern' }}>
          {themes[themeIndex].name}
        </h1>
      </button>
    </div>
  );
}
