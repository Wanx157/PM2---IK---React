import React from 'react';
import '../stylish.css';
import { warnahobi } from '../color';

// Import local images
import gameImage from '../image/mainGame.jpg';
import homeworkImage from '../image/homework-4.jpg';
import olahragaImage from '../image/olahraga.jpg';
import kucingImage from '../image/kucing.jpg';

const hobbiesData = [
  {
    name: 'Mempelajari Bahasa Asing',
    images: [gameImage],
  },
  {
    name: 'Bermain Game',
    images: [homeworkImage],
  },
  {
    name: 'Olahraga',
    images: [olahragaImage],
  },
  {
    name: 'Membaca Buku',
    images: [kucingImage],
  },
];

const Hobbies = () => {
  return (
    <div className="hobbies-wrapper">
      <h3
        className="text-4xl font-bold mb-6 mt-8 tracking-wider text-center"
        style={{
          color: warnahobi.text || '#333',
          fontFamily: warnahobi.fontFamily || 'Arial, sans-serif',
        }}
      >
        Hobbi Saya
      </h3>

      <div className="hobbies-container grid grid-cols-2 gap-8 mt-8 mx-auto max-w-6xl px-6">
        {hobbiesData.map((hobby, index) => (
          <div
            key={index}
            className="hobby-card"
            style={{
              background: warnahobi.borderGradient || 'linear-gradient(to bottom right, #f9f9f9, #eaeaea)',
              borderRadius: '1.5rem',
              padding: '1rem',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              className="hobby-box p-3 rounded-lg" // Increased padding here
              style={{
                backgroundColor: warnahobi.containerBg || '#fff',
                borderRadius: '1.25rem',
                boxShadow: warnahobi.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.15)',
                textAlign: 'center',
                margin: '.01rem', // Negative margin to pull the box outwards
              }}
            >
              <p
                className="hobby-name mb-4 text-xl font-semibold"
                style={{
                  color: warnahobi.text || '#333',
                  textShadow: warnahobi.textShadow || '1px 1px 2px rgba(0,0,0,0.2)',
                  fontFamily: warnahobi.fontFamily || 'Arial, sans-serif',
                }}
              >
                {hobby.name}
              </p>

              {/* Display each image with enhanced styling */}
              <div className="hobby-images grid grid-cols-1 gap-4">
                {hobby.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="hobby-image-box">
                    <img
                      src={image.src}
                      alt={`${hobby.name} ${imgIndex + 1}`}
                      className="hobby-image w-full h-48 object-cover rounded-lg mb-2"
                      style={{
                        borderRadius: '0.75rem',
                        border: '2px solid rgba(255,255,255,0.6)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      }}
                    />
                    {/* Removed the image label text */}
                    {/* <p className="image-name text-sm text-gray-500 italic">
                      {`Image-${imgIndex + 1}.jpg`}
                    </p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
