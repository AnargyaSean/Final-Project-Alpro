// app/jual/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"

// Daftar pilihan kondisi barang, dibuat array supaya tidak menulis 3 blok yang sama
const daftarKondisi = [
  {
    value: "seperti_baru",
    label: "Seperti Baru",
    keterangan: "Jarang dipakai & mulus",
    warna: "bg-[#DEF7EC] text-[#03543F]",
  },
  {
    value: "bekas_mulus",
    label: "Bekas Mulus",
    keterangan: "Ada tanda pakai wajar",
    warna: "bg-[#E1EFFE] text-[#1E429F]",
  },
  {
    value: "layak_pakai",
    label: "Layak Pakai",
    keterangan: "Fungsi 100% normal",
    warna: "bg-[#FEF08A] text-[#713F12]",
  },
]

export default function Page() {
  // Satu state untuk setiap isian form
  const [nama, setNama] = useState("Monitor LG 24 Inch IPS 75Hz Full HD (24MK600M)")
  const [kategori, setKategori] = useState("elektronik")
  const [kondisi, setKondisi] = useState("bekas_mulus")
  const [harga, setHarga] = useState("850.000")
  const [lokasi, setLokasi] = useState("perpus_asrama")
  const [deskripsi, setDeskripsi] = useState(
    "Pemakaian 1 tahun untuk skripsi. Layar bersih no dead pixel, kelengkapan kabel HDMI + adaptor original. Dijual karena ganti laptop."
  )
  const [pesanSukses, setPesanSukses] = useState("")

  // Dijalankan saat tombol "Jual Barang Sekarang" ditekan
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // mencegah halaman reload
    setPesanSukses(`Listing "${nama}" berhasil dipasang dengan harga Rp ${harga}.`)
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col justify-between antialiased">
      {/* ================= HEADER ================= */}
      <header className="bg-primary-container shadow-md border-b border-outline-variant/20 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-6">
            <Link className="flex items-center gap-3" href="/">
              <span className="text-headline-lg font-headline-lg font-bold text-on-primary tracking-tight">
                ITS Preloved
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-surface-container-lowest/10 rounded-full border border-outline-variant/20 text-on-primary font-caption text-caption">
              <span
                className="material-symbols-outlined text-[16px] text-primary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>Khusus Mahasiswa ITS</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-label-md text-label-md">
            <Link className="text-on-primary-container hover:text-on-primary transition-colors" href="/">
              Semua
            </Link>
            <Link className="text-on-primary-container hover:text-on-primary transition-colors" href="/">
              Buku &amp; Kuliah
            </Link>
            <Link className="text-on-primary-container hover:text-on-primary transition-colors" href="/detail">
              Elektronik
            </Link>
            <Link className="text-on-primary-container hover:text-on-primary transition-colors" href="/">
              Kebutuhan Kost
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              className="hidden sm:inline-flex text-on-primary-container hover:text-on-primary font-label-md text-label-md px-3 py-2 rounded-lg hover:bg-on-primary/10 transition-colors"
              href="/checkout"
            >
              Pesanan Saya
            </Link>
            <button
              type="button"
              title="Notifikasi"
              className="p-2 text-on-primary-container hover:text-on-primary hover:bg-on-primary/10 rounded-lg transition-colors relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary-container rounded-full" />
            </button>
            <button
              type="button"
              title="Chat"
              className="p-2 text-on-primary-container hover:text-on-primary hover:bg-on-primary/10 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-outline-variant/20">
              <div className="w-9 h-9 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-body-sm font-bold border border-primary-fixed-dim">
                AN
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ISI HALAMAN ================= */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col items-center">
        {/* Tombol kembali */}
        <div className="w-full max-w-[680px] mb-4">
          <Link
            className="inline-flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors group"
            href="/"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Kotak form */}
        <div className="w-full max-w-[680px] bg-surface-container-lowest rounded-[10px] border border-outline-variant/40 shadow-sm p-6 sm:p-8">
          <div className="border-b border-outline-variant/30 pb-6 mb-8">
            <div className="flex items-center gap-2 text-secondary-container font-label-sm text-label-sm mb-1.5">
              <span className="material-symbols-outlined text-[18px]">storefront</span>
              <span>PASANG LISTING KAMPUS</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
              Pasang Listing Barang Preloved
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
              Jual barangmu kepada sesama mahasiswa ITS dengan cepat dan terpercaya.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* ---------- UPLOAD FOTO ---------- */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-label-md text-label-md text-primary">
                  Foto Barang <span className="text-secondary-container">*</span>
                </label>
                <span className="font-caption text-caption text-on-surface-variant">1/5 foto terunggah</span>
              </div>
              <p className="font-caption text-caption text-on-surface-variant mb-3">
                Unggah foto barang (Maks 5 foto, format JPG/PNG, maks 5MB)
              </p>
              <div className="grid grid-cols-3 gap-3">
                {/* Foto yang sudah ada */}
                <div className="relative group aspect-square rounded-lg border border-outline-variant/60 overflow-hidden bg-surface-container-low shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt="Foto monitor yang diunggah"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJn3TWpba7669hU1UMeZgI5-_55AuGt1LuzwltKs5iDkYxvDY1dwDAuo28B4Qx88v7VyfBha0tUfaO1JfKzMgRyI-l41BErLa-29MAs5jUsNMcyWuyvCEio9r6o6Yhkz6VFnieEYk2cVd42nNERTvJ6GkhlLZSlrtNYMkxxoNLmLP6r1K1BrTCY-og5uuXdApNFEV82R3fJw_jJRXZDi723TNap8VmHUxKVah7iVlYiaayN6sl7oMB"
                  />
                  <span className="absolute top-1.5 left-1.5 bg-primary-container text-on-primary text-[10px] px-1.5 py-0.5 rounded font-semibold">
                    Utama
                  </span>
                </div>

                {/* Dua slot kosong */}
                {[1, 2].map((nomor) => (
                  <label
                    key={nomor}
                    className="aspect-square rounded-lg border-2 border-dashed border-outline-variant/70 hover:border-primary-container transition-colors bg-surface flex flex-col items-center justify-center cursor-pointer text-center p-2 group"
                  >
                    <span className="material-symbols-outlined text-outline group-hover:text-primary-container transition-colors text-[24px]">
                      add_photo_alternate
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container mt-1">
                      + Tambah Foto
                    </span>
                    <input accept="image/png, image/jpeg" className="hidden" type="file" />
                  </label>
                ))}
              </div>
            </div>

            {/* ---------- NAMA BARANG ---------- */}
            <div>
              <label className="block font-label-md text-label-md text-primary mb-1.5" htmlFor="nama">
                Nama Barang <span className="text-secondary-container">*</span>
              </label>
              <input
                id="nama"
                type="text"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Kalkulus Purcell Edisi 9, Jas Lab Kimia L, Monitor..."
                className="w-full h-11 px-3.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
              />
            </div>

            {/* ---------- KATEGORI ---------- */}
            <div>
              <label className="block font-label-md text-label-md text-primary mb-1.5" htmlFor="kategori">
                Kategori Barang <span className="text-secondary-container">*</span>
              </label>
              <div className="relative">
                <select
                  id="kategori"
                  required
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full h-11 pl-3.5 pr-10 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 appearance-none transition-all outline-none cursor-pointer"
                >
                  <option value="elektronik">Elektronik &amp; Gadget</option>
                  <option value="buku">Buku &amp; Kuliah</option>
                  <option value="kost">Kebutuhan Kost</option>
                  <option value="fashion">Fashion &amp; Seragam</option>
                  <option value="hobi">Hobi &amp; Olahraga</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </div>
              </div>
            </div>

            {/* ---------- KONDISI BARANG ---------- */}
            <div>
              <label className="block font-label-md text-label-md text-primary mb-2">
                Kondisi Barang <span className="text-secondary-container">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {daftarKondisi.map((item) => (
                  <label
                    key={item.value}
                    className="relative flex flex-col p-3 rounded-lg border border-outline-variant/60 cursor-pointer hover:border-primary-container bg-surface-container-lowest transition-all has-[:checked]:border-primary-container has-[:checked]:bg-primary-fixed/20 has-[:checked]:ring-1 has-[:checked]:ring-primary-container"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold ${item.warna}`}
                      >
                        {item.label}
                      </span>
                      <input
                        type="radio"
                        name="kondisi"
                        value={item.value}
                        checked={kondisi === item.value}
                        onChange={(e) => setKondisi(e.target.value)}
                        className="h-4 w-4 border-outline-variant"
                      />
                    </div>
                    <span className="font-caption text-caption text-on-surface-variant mt-1 leading-snug">
                      {item.keterangan}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* ---------- HARGA ---------- */}
            <div>
              <label className="block font-label-md text-label-md text-primary mb-1.5" htmlFor="harga">
                Harga Jual <span className="text-secondary-container">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-body-md text-on-surface-variant font-bold select-none">
                  Rp
                </span>
                <input
                  id="harga"
                  type="text"
                  required
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  placeholder="0"
                  className="w-full h-11 pl-11 pr-3.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-headline-md text-primary font-bold focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none"
                />
              </div>
              <p className="font-caption text-caption text-on-surface-variant mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Tentukan harga wajar untuk sesama mahasiswa
              </p>
            </div>

            {/* ---------- LOKASI COD ---------- */}
            <div>
              <label className="block font-label-md text-label-md text-primary mb-1.5" htmlFor="lokasi">
                Lokasi COD di Kampus ITS <span className="text-secondary-container">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </span>
                <select
                  id="lokasi"
                  required
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 appearance-none transition-all outline-none cursor-pointer"
                >
                  <option value="perpus_asrama">Perpustakaan Pusat ITS / Asrama Mahasiswa ITS</option>
                  <option value="kantin_pusat">Kantin Pusat ITS (Kantin Baru)</option>
                  <option value="informatika">Gedung Teknik Informatika &amp; Sistem Informasi</option>
                  <option value="rektorat">Plaza Dr. Angka / Depan Rektorat ITS</option>
                  <option value="sipil">Fakultas Teknik Sipil, Perencanaan, dan Kebumian</option>
                  <option value="bunderan">Bunderan ITS / Pintu Utama Sukolilo</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-outline">
                  <span className="material-symbols-outlined text-[20px]">expand_more</span>
                </div>
              </div>
            </div>

            {/* ---------- DESKRIPSI ---------- */}
            <div>
              <label className="block font-label-md text-label-md text-primary mb-1.5" htmlFor="deskripsi">
                Deskripsi Lengkap <span className="text-secondary-container">*</span>
              </label>
              <textarea
                id="deskripsi"
                rows={4}
                required
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Jelaskan kondisi detail fisik, riwayat pemakaian, minus (jika ada), dan kelengkapan aksesoris..."
                className="w-full p-3.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none resize-y"
              />
              <p className="font-caption text-caption text-on-surface-variant mt-1">
                Sertakan detail kelengkapan garansi/kabel agar barang lebih cepat terjual.
              </p>
            </div>

            {/* ---------- CATATAN VERIFIKASI ---------- */}
            <div className="flex items-start gap-3 p-3.5 bg-primary-fixed/20 border border-primary-fixed-dim rounded-lg">
              <span
                className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                Listing kamu akan langsung aktif dan hanya dapat dilihat oleh civitas akademika ITS yang
                terverifikasi.
              </p>
            </div>

            {/* ---------- PESAN SUKSES ---------- */}
            {pesanSukses && (
              <div className="flex items-center gap-2 p-3.5 bg-[#DEF7EC] text-[#03543F] border border-[#03543F]/20 rounded-lg font-label-md text-label-md">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>{pesanSukses}</span>
              </div>
            )}

            {/* ---------- TOMBOL ---------- */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full h-12 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:bg-[#16325B] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">publish</span>
                <span>Jual Barang Sekarang</span>
              </button>
              <Link
                href="/"
                className="w-full h-11 bg-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md rounded-lg transition-colors flex items-center justify-center"
              >
                Batal / Kembali ke Beranda
              </Link>
            </div>
          </form>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-surface-container-high border-t border-outline-variant/40 mt-12">
        <div className="w-full py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
            <span className="font-headline-md text-headline-md font-bold text-primary">ITS Preloved</span>
            <span className="hidden md:inline text-outline-variant">•</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 ITS Preloved - Komunitas Jual Beli Terverifikasi Mahasiswa Institut Teknologi Sepuluh
              Nopember
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 font-label-sm text-label-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">Panduan COD Aman di Kampus</a>
            <a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi</a>
            <a className="hover:text-primary transition-colors" href="#">Syarat &amp; Ketentuan</a>
            <a className="hover:text-primary transition-colors" href="#">Pusat Bantuan Mahasiswa</a>
          </div>
        </div>
      </footer>
    </div>
  )
}