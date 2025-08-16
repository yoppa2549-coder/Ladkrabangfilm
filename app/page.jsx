export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-black text-white text-center px-6">
      <div>
        <h1 className="text-6xl font-bold tracking-widest mb-4">
          LADKRABANG FILM
        </h1>
        <h2 className="text-2xl text-gray-300 mb-6">
          Created by Ladkrabang Students
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          โปรดักชั่นเฮ้าส์นักศึกษาที่ใหญ่ที่สุดในประเทศไทย
        </p>
        
        <div className="flex justify-center gap-4">
          <a 
            href="#trailer" 
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            ดูตัวอย่าง
          </a>
          <a 
            href="#tickets" 
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            ซื้อตั๋ว
          </a>
        </div>
      </div>
    </main>
  );
}
