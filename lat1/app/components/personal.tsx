import React from 'react';
import '../stylish.css'; // Pastikan path file CSS sesuai
import { warnaperson } from '../color'; // Import file warna

const MyInfos = {
  Birthday: "22 Oktober 2003",
  Gender: "Male",
  TinggiBadan: "165 cm",
  BeratBadan: "48 kg",
  Status: "Mahasiswa",
  Whatsapp: "+62 818-1826-2469",
  Email: "balyakkun37@gmail.com",
};

// Tipe untuk props RowInfo
interface RowInfoProps {
  label: string;
  value: string;
}

// Komponen RowInfo
const RowInfo: React.FC<RowInfoProps> = ({ label, value }) => (
  <>
    <h3 className="font-semibold text-lg" style={{
        color: warnaperson.labelText,
        textShadow: warnaperson.labelTextShadow,
      }}>
      {label}
    </h3>
    <p className="text-md break-words" style={{
        color: warnaperson.valueText,
        textShadow: warnaperson.valueTextShadow,
      }}>
      {value}
    </p>
  </>
);

const PersonInfo: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center pt-20" style={{ fontFamily: warnaperson.fontFamily }}>
      <h1 className="text-4xl font-bold mb-6 tracking-widest" style={{
          color: warnaperson.labelText,
          textShadow: warnaperson.textShadow,
        }}>
        Personal Info
      </h1>
      <div className="rounded-lg p-4 mb-4" style={{
          backgroundColor: warnaperson.containerBg,
          border: warnaperson.borderGradient,
          borderRadius: '1rem',
          boxShadow: warnaperson.boxShadow,
          position: 'relative'
        }}>
        <div style={{
            position: 'absolute',
            top: '-4px',
            left: '-4px',
            right: '-4px',
            bottom: '-4px',
            borderRadius: 'inherit',
            background: warnaperson.borderGradient,
            zIndex: -1
          }} 
        />
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(MyInfos).map(([key, value], index) => (
            <React.Fragment key={key}>
              <RowInfo label={key.replace(/([A-Z])/g, ' $1')} value={value} />
              {index < Object.entries(MyInfos).length - 1 && (
                <hr className="col-span-2 my-2" style={{
                    border: '0',
                    height: '3px',
                    background: warnaperson.borderGradient,
                  }} 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
