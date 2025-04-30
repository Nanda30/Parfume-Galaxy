import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-sky-100 to-purple-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/parfum.jpeg"
            alt="Parfum Galaxy"
            width={400}
            height={400}
            className="mx-auto rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-8 text-purple-600 tracking-tight">
            Diskon Spesial! Wangi Mewah, Harga Meriah!
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Selamat datang di <strong>Galaxy Parfume</strong>, destinasi parfum terbaik untuk Anda yang ingin tampil percaya diri dan berkesan. Kami menghadirkan koleksi parfum pilihan dengan kualitas premium—dari aroma segar dan lembut hingga wangi elegan yang memikat.
          </p>
          <ul className="mt-6 text-left max-w-md mx-auto list-disc list-inside text-gray-600">
            <li>Wangi Tahan Lama</li>
            <li>Harga Terjangkau</li>
            <li>Varian Lengkap untuk Pria & Wanita</li>
            <li>100% Original & Terjamin Kualitasnya</li>
          </ul>
          <p className="mt-6 text-xl">
            Mulai dari <span className="line-through text-red-500">Rp31.000</span>{" "}
            <span className="font-bold text-green-600">Rp16.000 saja</span>
          </p>
          <div className="mt-4 text-sm text-orange-600">
            <p><strong>Promo Terbatas:</strong></p>
            <ul className="list-disc list-inside">
              <li>Beli 1 Free 5ml</li>
              <li>Diskon s.d. 52%</li>
              <li>Gratis Ongkir ke Seluruh Indonesia</li>
            </ul>
          </div>
          <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
            Temukan Wangi Favoritmu
          </button>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="about" className="bg-purple-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Tentang Kami</h2>
          <p className="text-gray-700 leading-relaxed">
            Kami adalah toko parfum yang menghadirkan berbagai pilihan aroma dari merek ternama maupun lokal. Setiap parfum dipilih dengan cermat untuk memastikan kualitas dan karakteristik yang unik.
          </p>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section id="products" className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-purple-700">Produk Unggulan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              name: 'Eau de Parfum',
              image: '/1.jpeg',
              description: 'Aroma floral dengan sentuhan vanilla yang memikat.',
            }, {
              name: 'Citrus Fresh',
              image: '/2.jpeg',
              description: 'Kesegaran citrus yang menyegarkan sepanjang hari.',
            }, {
              name: 'Woody Musk',
              image: '/3.jpeg',
              description: 'Perpaduan aroma kayu dan musk yang elegan.',
            }].map((product, idx) => (
              <div key={idx} className="text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md mx-auto mb-4 w-full object-cover h-64 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                />
                <h3 className="text-xl font-bold text-purple-600">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak (CTA ke WhatsApp) */}
      <section id="contact" className="bg-purple-100 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Hubungi Kami di WhatsApp</h2>
          <p className="text-gray-700 mb-4">
            Ada pertanyaan atau butuh bantuan? Klik tombol di bawah ini untuk chat langsung dengan kami di WhatsApp!
          </p>
          <a
            href="https://wa.link/yeiws9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300">
              Chat via WhatsApp
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}