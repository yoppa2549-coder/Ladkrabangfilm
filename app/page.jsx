export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          LADKRABANG FILM
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          โปรดักชั่นเฮ้าส์นักศึกษาที่ใหญ่ที่สุดในประเทศไทย
        </p>

        {/* ปุ่ม */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#trailer"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            ดูตัวอย่าง
          </a>
          <a
            href="#tickets"
            className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            ซื้อตั๋ว
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-24 max-w-3xl text-center px-4">
        <h2 className="text-3xl font-bold mb-4">เกี่ยวกับเรา</h2>
        <p className="text-gray-400 leading-relaxed">
          เราคือทีมโปรดักชั่นเฮ้าส์ที่รวมพลังของนักศึกษา
          เพื่อสร้างภาพยนตร์สั้นและผลงานที่เต็มไปด้วยความคิดสร้างสรรค์
          พร้อมผลักดันวงการภาพยนตร์ไทยไปสู่เวทีโลก
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="mt-24 w-full px-6">
        <h2 className="text-3xl font-bold text-center mb-8">แกลเลอรี</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-700 rounded-lg shadow-lg">🎬</div>
          <div className="h-48 bg-gray-700 rounded-lg shadow-lg">🎥</div>
          <div className="h-48 bg-gray-700 rounded-lg shadow-lg">📽️</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 border-t border-gray-800 text-gray-400 text-sm">
        © 2025 Ladkrabang Film. All rights reserved.
      </footer>
    </main>
  );
}
