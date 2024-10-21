import React from 'react';

interface Education {
  level: string;
  schoolName: string;
  year: string;
}



function BarisRiwayatPendidikan(props:Education)  {
  return (
<div className="border-2 border-inidigo-500/75 rounded-lg bg-white-800 p-2 my-5">
      <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4 text-black">{props.level}</h3>
            <p className="col-span-12 md:col-span-4 text-white">{props.schoolName}</p>
            <p className="col-span-12 md:col-span-4 text-black">{props.year}</p>
          </div>
      </div>
    </div>
  );
};

export default function RiwayatPendidikan(){
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Riwayat Pendidikan</h2>
      <BarisRiwayatPendidikan level="SD" schoolName="SDN CIGUMELOR" year="2010 - 2016"  />
      <BarisRiwayatPendidikan level="SMP" schoolName="SMPN 3 PASEH" year="2016 - 2019"  />
      <BarisRiwayatPendidikan level="SMA" schoolName="SMAN 2 MAJALAYA" year="2019 - 2022"  />
      <BarisRiwayatPendidikan level="SARJANA" schoolName="UNIVERSITAS MASOEM" year="2022 - Sekarang"  />
      </div>
  ); 
}

