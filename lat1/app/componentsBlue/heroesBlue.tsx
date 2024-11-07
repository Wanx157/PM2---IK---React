import foto from "../image/test.jpeg"; // atau "../image/test.jpg" jika sesuai



export default function Heroes() {
  return (
    <section className="container mx-auto p-2 flex flex-col items-center">
      <div className="text-gray-300 font-bold text-4xl text-center" style={{ fontFamily: 'southern' }}>
        CV ONLINE
      </div>
      <hr className="my-5 gradient-hrBlue" />

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
          Hi, Saya adalah mahasiswa Universitas Maseom angkatan 2022 dengan NIM 222505042, Memiliki keahlian dalam bidang editing
            video dengan kemampuan menggunakan berbagai perangkat lunak pengeditan seperti Adobe Premiere Pro, Final Cut Pro, dan DaVinci Resolve. 
            Saya terampil dalam memotong, menyusun, dan menambahkan efek visual serta audio yang mendukung narasi,
            sehingga menghasilkan video yang menarik dan berkesan. Selama pengalaman saya, saya juga telah mengembangkan pemahaman mendalam tentang ritme, transisi, dan penggunaan
            warna untuk memperkuat pesan dalam setiap video yang saya buat. Dengan menjunjung tinggi ketelitian dan kreativitas, saya selalu berupaya
            menghasilkan karya yang memenuhi standar kualitas tinggi dan mencapai tujuan komunikasi yang diinginkan.
          </p>
        </div>
      </div>
      <hr className="my-5 gradient-hrBlue" />
    </section>
  );
}

function Profile() {
  return (
    <img
      src={foto.src}
      alt="Profile Picture"
      className="MizuNoKokyu w-80 h-80 object-cover" // Memperbesar gambar
    />
  );
}
