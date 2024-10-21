import React from 'react';

interface Kerja {
  tahun: string;
  bekerja: string;
  instansi: string;
}



function BarisRiwayatPekerjaan(props: Kerja)  {
  return (
<div className="border-2 border-inidigo-500/75 rounded-lg bg-white-800 p-2 my-5">
      <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4 text-black">{props.tahun}</h3>
            <p className="col-span-12 md:col-span-4 text-white">{props.bekerja}</p>
            <p className="col-span-12 md:col-span-4 text-black">{props.instansi}</p>
          </div>
      </div>
    </div>
  );
};

export default function RiwayatPekerjaan(){
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Riwayat Pekerjaan</h2>
      <BarisRiwayatPekerjaan tahun="2012 - 2014" bekerja="Manajer Pemasaran" instansi="PT. Maju Bersama"  />
      <BarisRiwayatPekerjaan tahun="2014 - 2017" bekerja="Analis Keuangan" instansi="Bank Sejahtera"  />
      <BarisRiwayatPekerjaan tahun="2017 - 2020" bekerja="Staf Administrasi" instansi="Yayasan Pendidikan Cerdas"  />
      <BarisRiwayatPekerjaan tahun="2020 - Sekarang" bekerja="Customer Service" instansi="PT. Layanan Prima"  />
      </div>
  );
}