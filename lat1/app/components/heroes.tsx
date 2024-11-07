import foto from "../image/test.jpeg"; // atau "../image/test.jpg" jika sesuai



export default function Heroes() {
  return (
    <section className="container mx-auto p-2 flex flex-col items-center">
      <div className="text-gray-300 font-bold text-4xl text-center" style={{ fontFamily: 'southern' }}>
        CV ONLINE
      </div>
      <hr className="my-5 gradient-hr" />

      {/* Profile section */}
      <div className="flex flex-col items-center w-full">
        {/* Profile Image */}
        <Profile />

        {/* Name */}
        <h1 className="text-4xl font-semibold text-center mt-4" style={{ fontFamily: 'southern' }}>
          Iwan Kurniawan
        </h1>

        {/* Text Section */}
        <div className="w-full px-4">
          <p className="text-lg text-gray-300 text-center mt-4" style={{ fontFamily: 'southern', lineHeight: '2' }}>
            Hi, Saya adalah mahasiswa Universitas Maseom angkatan 2022 dengan NIM 222505042, memiliki keahlian di bidang
            desain grafis yang mencakup kemampuan dalam pengkodean dan penggunaan aplikasi editing untuk merancang
            layout yang menarik. Selama studi, saya telah mengembangkan pemahaman mendalam tentang prinsip-prinsip
            desain, tipografi, dan penggunaan warna, yang memungkinkan saya menghasilkan karya yang estetis dan
            komunikatif. Saya juga menjunjung tinggi nilai-nilai kedisiplinan dan ketekunan, yang saya anggap sebagai
            kunci untuk mencapai hasil maksimal dalam proyek desain maupun dalam pendidikan.
          </p>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <img
      src={foto.src}
      alt="Profile Picture"
      className="untane w-80 h-80 object-cover" // Memperbesar gambar
    />
  );
}
