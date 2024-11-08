import React from 'react';
import '../stylish.css';
import { warnaPekerjaanMerahKuning } from '../color';

interface Job {
  year: string;
  instansi: string;
  as: string;
}

export default function PekerjaanRed() {
  return (
    <div className="container mx-auto p-2 text-center pt-20" style={{ color: warnaPekerjaanMerahKuning.textColor }}>
      <h1
        className="text-4xl font-bold mb-6 tracking-widest"
        style={{
          color: warnaPekerjaanMerahKuning.textColor,
          textShadow: warnaPekerjaanMerahKuning.boxShadow,
          fontFamily: 'Southern, sans-serif',
        }}
      >
        Riwayat Pekerjaan
      </h1>
      <RowJob year="2012 - 2014" instansi="Manajer Pemasaran" as="PT. Maju Bersama"  />
      <RowJob year="2014 - 2017" instansi="Analis Keuangan" as="Bank Sejahtera"  />
      <RowJob year="2017 - 2020" instansi="Staf Administrasi" as="Yayasan Pendidikan Cerdas"  />
      <RowJob year="2020 - Sekarang" instansi="Customer Service" as="PT. Layanan Prima"  />
    </div>
  );
}

function RowJob({ year, instansi, as }: Job) {
  return (
    <div className="education-container" style={{ padding: '10px' }}>
      <div
        className="rounded-lg p-4 my-5"
        style={{
          backgroundColor: warnaPekerjaanMerahKuning.background,
          color: warnaPekerjaanMerahKuning.textColor,
          boxShadow: warnaPekerjaanMerahKuning.boxShadow,
          position: 'relative',
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
            background: warnaPekerjaanMerahKuning.borderGradient,
            zIndex: -1,
          }}
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4">{year}</h3>
            <p className="col-span-12 md:col-span-4">{instansi}</p>
            <p className="col-span-12 md:col-span-4">{as}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
