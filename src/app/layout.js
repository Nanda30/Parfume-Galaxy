// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Toko Parfum Elegan",
  description: "Temukan koleksi parfum eksklusif untuk setiap momen spesial.",
};

export default function RootLayout(props) {
  return (
    <html lang="id">
      <body className="antialiased bg-white text-gray-800 font-sans">
        <header className="py-6 shadow-sm sticky top-0 z-50 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">ParfumElegan</h1>
            <nav className="space-x-6">
              <a href="#about" className="hover:underline">Tentang</a>
              <a href="#products" className="hover:underline">Produk</a>
              <a href="#contact" className="hover:underline">Kontak</a>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="bg-gray-100 mt-16 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ParfumElegan. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
