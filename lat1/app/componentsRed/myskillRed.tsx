// SkillsSection.js
import React from 'react';
import '../stylish.css';
import { warnaskillMerahKuning} from '../color'; 


const SkillsSectionRed = ({ }) => {
  const skills = [
    { name: "React", rating: 65 },
    { name: "HTML", rating: 95 },
    { name: "CSS", rating: 80 },
    { name: "Design", rating: 50 },
    { name: "SQL", rating: 65 },
  ];

  return (
    
    <div className="w-full max-w-2xl mx-auto my-4">
      <h3 className="text-4xl font-bold mb-4 mt-8 tracking-wider text-center"
          style={{ 
            color: warnaskillMerahKuning.text, // Menggunakan warna putih
            textShadow: warnaskillMerahKuning.textShadow,
            fontFamily: warnaskillMerahKuning.fontFamily
          }}
      >
        MySkills
      </h3>
      <section
        style={{
          backgroundColor: warnaskillMerahKuning.containerBg,
          padding: '1.5rem',
          fontFamily: warnaskillMerahKuning.fontFamily,
          borderRadius: '1rem',
          boxShadow: warnaskillMerahKuning.boxShadow,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-4px',
            left: '-4px',
            right: '-4px',
            bottom: '-4px',
            borderRadius: 'inherit',
            background: warnaskillMerahKuning.borderGradient,
            zIndex: -1,
          }}
        />
        <ul className="space-y-4">
          {skills.map(({ name, rating }, index) => (
            <li key={index} style={{ color: warnaskillMerahKuning.text, textShadow: warnaskillMerahKuning.textShadow, fontSize: '1.125rem' }}>
              <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span style={{ color: warnaskillMerahKuning.yearText, textShadow: warnaskillMerahKuning.yearTextShadow, fontSize: '0.875rem' }}>
                  {rating}%
                </span>
              </div>
              <div style={{ width: '100%', backgroundColor: '#434343', borderRadius: '0.5rem', height: '20px', marginTop: '5px' }}>
                <div
                  style={{
                    width: `${rating}%`,
                    background: 'linear-gradient(to right, #ff0000, #ffff00)',
                    height: '100%',
                    borderRadius: '0.5rem',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    
  );
};

export default SkillsSectionRed;
