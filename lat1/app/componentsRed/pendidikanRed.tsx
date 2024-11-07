import React from 'react';
import '../stylish.css';
import { warnaMerahKuning } from '../color';

interface RiwayatPendidikanProps {
  level: string;
  namasekolah: string;
  year: string;
}

export default function PendidikanRed() {
  return (
    <div className="container mx-auto p-2 text-center pt-20" style={{ color: warnaMerahKuning.textColor }}>
      <h1 className="text-4xl font-bold mb-6 tracking-widest" style={{
          color: warnaMerahKuning.textColor,
          textShadow: warnaMerahKuning.boxShadow,
          fontFamily: 'Southern, sans-serif',
        }}>
        Riwayat Pendidikan
      </h1>
      <RowRiwayat level="SD" namasekolah="SDN CIGUMELOR" year="2010 - 2016"  />
      <RowRiwayat level="SMP" namasekolah="SMPN 3 PASEH" year="2016 - 2019"  />
      <RowRiwayat level="SMA" namasekolah="SMAN 2 MAJALAYA" year="2019 - 2022"  />
      <RowRiwayat level="Universitas" namasekolah="UNIVERSITAS MASOEM" year="2022 - Sekarang"  />
    </div>
  );
}

function RowRiwayat({ level, namasekolah, year }: RiwayatPendidikanProps) {
  return (
    <div className="education-container" style={{ padding: '10px' }}>
      <div
        className="rounded-lg p-4 my-5"
        style={{
          backgroundColor: warnaMerahKuning.background,
          border: warnaMerahKuning.borderGradient,
          borderRadius: '1rem',
          boxShadow: warnaMerahKuning.boxShadow,
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-3px',
            left: '-3px',
            right: '-3px',
            bottom: '-3px',
            borderRadius: 'inherit',
            background: warnaMerahKuning.borderGradient,
            zIndex: -1,
          }}
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4">{level}</h3>
            <p className="col-span-12 md:col-span-4">{namasekolah}</p>
            <p className="col-span-12 md:col-span-4">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
