import test from "../test.jpeg"

export default function Tester() {
    return (
      <section className="bg-cv">
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
          <h1 className="TEXT-3X1 text-white">Iwan Kurniawan</h1>
          <Profile />
          <p className="text-white">
            Hi Saya Iwan Kurniawan<br />
            Mahasiswa Ma'soem university<br />
            Fakultas Komputer
            Jurusan Sistem Informasi<br />
            Saat ini saya sedang belajar react!
          </p>
        </div>
        <h1 className="text-black">============================================================================================================================================================================================</h1>
        </section>
  )
}

function Profile() {
    return <img src={test.src} alt="Iwan Kurniawan" className="test" />; 
  }