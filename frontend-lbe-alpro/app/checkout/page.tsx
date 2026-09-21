// app/checkout/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"

// Fungsi bantu untuk mengubah angka jadi format rupiah Indonesia
function formatRupiah(angka: number) {
  return "Rp " + angka.toLocaleString("id-ID")
}

// Data barang yang dibeli (sementara ditulis langsung, belum dari database)
const barang = {
  nama: "Mechanical Keyboard Keychron K2 Wireless RGB",
  harga: 620000,
  kondisi: "Seperti Baru",
  kategori: "Elektronik & Aksesoris PC",
  penjual: "Fajar Ramadhan",
  gambar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzDGZdIuvghwJq_PnT-42y6GHUrXgkg8cCDGBzuSsSs4iJFUhclCu9QOA87m6gZlmapURCOEXEwhauI_Rm_PYcy53KEjG8lvHMMt_M5DjNVqaj0KDQEQK2e1XrkOKHo3UyzL4_ugjJ_fIKk5j0xvunBCmwuBgmaBx-BHu9h31Xcwa_cCk_F8QPVJsNcJQrRYRXYsnuZVyttQZKAWGAM-l-nD9WLMMUBOSNW13CYVscVQvqQX9veEFh",
}

export default function Page() {
  // Status pesanan: "pending" | "dikonfirmasi" | "dibatalkan"
  const [status, setStatus] = useState("pending")

  // Perhitungan biaya
  const biayaPlatform = 0
  const biayaLayanan = 0
  const total = barang.harga + biayaPlatform + biayaLayanan

  // Menentukan tulisan dan warna badge sesuai status
  let teksStatus = "Status: PENDING - Menunggu Konfirmasi Penjual"
  let warnaStatus = "bg-[#FDE8E8] text-[#9B1C1C] border-[#FDE8E8]"

  if (status === "dikonfirmasi") {
    teksStatus = "Status: DIKONFIRMASI - Siap COD di Kampus"
    warnaStatus = "bg-[#DEF7EC] text-[#03543F] border-[#03543F]/20"
  } else if (status === "dibatalkan") {
    teksStatus = "Status: DIBATALKAN - Pengajuan Dibatalkan"
    warnaStatus = "bg-surface-container-high text-on-surface-variant border-outline-variant"
  }

  return (
    <div className="bg-background text-on-surface antialiased font-body-sm min-h-screen flex flex-col">
      {/* ================= HEADER ================= */}
      <header className="bg-primary-container text-on-primary sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-6">
            <Link className="flex items-center gap-3" href="/">
              <span className="text-headline-lg font-headline-lg font-bold text-on-primary tracking-tight">
                ITS Preloved
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-surface-container-lowest/10 text-on-primary border border-surface-container-lowest/20">
                <span
                  className="material-symbols-outlined text-[14px] mr-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                Kampus Sukolilo
              </span>
            </Link>
            <div className="hidden md:flex items-center relative w-72 lg:w-80">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span>
              <input
                type="text"
                placeholder="Cari buku kalkulus, jas lab, monitor..."
                className="w-full h-9 pl-9 pr-3 text-body-sm bg-surface-container-lowest text-on-surface rounded-lg border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary-container"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-on-primary-container hover:text-on-primary transition-colors text-label-md font-label-md" href="/">
              Semua
            </Link>
            <Link className="text-on-primary-container hover:text-on-primary transition-colors text-label-md font-label-md" href="/">
              Buku &amp; Kuliah
            </Link>
            <Link className="text-on-primary-container hover:text-on-primary transition-colors text-label-md font-label-md" href="/detail">
              Elektronik
            </Link>
            <Link className="text-on-primary-container hover:text-on-primary transition-colors text-label-md font-label-md" href="/">
              Kebutuhan Kost
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex text-on-primary font-bold border-b-2 border-secondary-container pb-1 text-label-md font-label-md">
              Pesanan Saya
            </span>
            <button
              type="button"
              aria-label="Notifikasi"
              className="p-2 text-on-primary hover:bg-on-primary/10 transition-colors rounded-lg relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary-container rounded-full ring-2 ring-primary-container" />
            </button>
            <button
              type="button"
              aria-label="Chat"
              className="p-2 text-on-primary hover:bg-on-primary/10 transition-colors rounded-lg"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </button>
            <Link
              href="/jual"
              className="bg-secondary-container hover:bg-secondary text-on-secondary px-3.5 py-1.5 rounded-lg text-label-md font-label-md font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              <span>Jual Barang</span>
            </Link>
            <div className="flex items-center gap-2 pl-2 border-l border-outline-variant/20">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container font-bold">
                SM
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= JUDUL & BREADCRUMB ================= */}
      <section className="bg-surface-container-low border-b border-outline-variant/30 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <nav className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant mb-1">
                <Link className="hover:text-primary transition-colors" href="/">Beranda</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-semibold">Checkout &amp; Status Pesanan</span>
              </nav>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-headline-xl font-headline-xl text-primary tracking-tight">
                  Checkout &amp; Konfirmasi COD
                </h1>
                <span className="inline-flex items-center gap-1 bg-surface-container-highest text-primary-container text-label-sm font-label-sm px-2.5 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px] text-secondary-container">qr_code_2</span>
                  ID Transaksi: #ITS-202503-0841
                </span>
              </div>
            </div>

            {/* Tracker langkah transaksi */}
            <div className="flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-primary-container text-on-primary rounded-lg text-label-sm font-label-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping" />
                <span>1. Menunggu Konfirmasi</span>
              </div>
              <span className="material-symbols-outlined text-outline-variant text-[16px] mx-1">arrow_forward</span>
              <div className="px-3 py-1 text-on-surface-variant text-label-sm font-label-sm opacity-60">
                2. COD Kampus
              </div>
              <span className="material-symbols-outlined text-outline-variant text-[16px] mx-1">arrow_forward</span>
              <div className="px-3 py-1 text-on-surface-variant text-label-sm font-label-sm opacity-60">
                3. Selesai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ISI HALAMAN ================= */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ---------- KOLOM KIRI ---------- */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Kartu 1: Barang yang dibeli */}
            <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-6">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-5 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">inventory_2</span>
                  <h2 className="text-headline-md font-headline-md text-primary">Barang yang Dibeli</h2>
                </div>
                <span className="text-caption font-caption text-on-surface-variant">
                  Kategori: {barang.kategori}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative w-full sm:w-36 h-36 shrink-0 bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/30">
                  <img className="w-full h-full object-cover" alt={barang.nama} src={barang.gambar} />
                  <div className="absolute top-2 left-2 bg-[#DEF7EC] text-[#03543F] px-2.5 py-0.5 rounded-full text-label-sm font-label-sm font-bold">
                    {barang.kondisi}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface leading-snug">
                      {barang.nama}
                    </h3>
                    <p className="text-headline-lg font-headline-lg font-bold text-primary-container mt-1">
                      {formatRupiah(barang.harga)}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container font-label-sm font-bold">
                        FR
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-body-sm font-body-sm font-semibold text-on-surface">
                          <span>{barang.penjual}</span>
                          <span
                            className="material-symbols-outlined text-[16px] text-primary-container"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            verified
                          </span>
                        </div>
                        <p className="text-caption font-caption text-on-surface-variant">
                          Informatika ITS • Aktif 2 jam lalu
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-label-sm font-label-sm text-primary-container hover:text-secondary font-semibold bg-surface-container-high px-2.5 py-1.5 rounded-lg transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px]">forum</span>
                      Hubungi Penjual
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Kartu 2: Data pembeli */}
            <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-6">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-5 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">badge</span>
                  <h2 className="text-headline-md font-headline-md text-primary">Data Mahasiswa Pembeli</h2>
                </div>
                <span className="inline-flex items-center gap-1 text-label-sm font-label-sm bg-[#DEF7EC] text-[#03543F] px-2 py-0.5 rounded-full font-bold">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Akun ITS Terverifikasi (SSO)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/30">
                  <span className="text-caption font-caption text-on-surface-variant block mb-0.5">
                    Nama Mahasiswa
                  </span>
                  <p className="text-body-md font-body-md font-bold text-on-surface">Sinta Maharani</p>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/30">
                  <span className="text-caption font-caption text-on-surface-variant block mb-0.5">
                    Email Kampus Resmi
                  </span>
                  <div className="flex items-center gap-1.5">
                    <p className="text-body-sm font-body-sm font-semibold text-primary-container break-all">
                      sinta.22@student.its.ac.id
                    </p>
                    <span
                      className="material-symbols-outlined text-[16px] text-primary-container"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/30">
                  <span className="text-caption font-caption text-on-surface-variant block mb-0.5">
                    Departemen &amp; Fakultas
                  </span>
                  <p className="text-body-sm font-body-sm font-medium text-on-surface">
                    Sistem Informasi, FTEIC - ITS
                  </p>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant/30">
                  <span className="text-caption font-caption text-on-surface-variant block mb-0.5">
                    WhatsApp / Kontak Mahasiswa
                  </span>
                  <div className="flex items-center justify-between">
                    <p className="text-body-sm font-body-sm font-bold text-on-surface">+62 812-3456-7890</p>
                    <span className="text-[11px] font-label-sm text-[#03543F] bg-[#DEF7EC] px-1.5 py-0.5 rounded">
                      Tersinkron
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Kartu 3: Kesepakatan COD */}
            <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-6">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-5 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-container">handshake</span>
                  <h2 className="text-headline-md font-headline-md text-primary">
                    Kesepakatan Lokasi &amp; Waktu COD Kampus
                  </h2>
                </div>
                <span className="text-caption font-caption text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">shield</span> Zona Aman Kampus
                </span>
              </div>

              <div className="space-y-4">
                <div className="border border-outline-variant/40 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container shrink-0">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="text-caption font-caption font-semibold text-primary-container uppercase tracking-wider">
                          Titik Temu COD Terpilih
                        </span>
                        <span className="text-[11px] font-label-sm text-on-primary bg-primary-container px-2 py-0.5 rounded">
                          Area Ramai Disarankan
                        </span>
                      </div>
                      <p className="text-body-md font-body-md font-bold text-on-surface mt-1">
                        Menara Sains ITS (Lantai 1, Dekat Gazebo)
                      </p>
                      <p className="text-caption font-caption text-on-surface-variant mt-0.5">
                        Kampus ITS Sukolilo, Surabaya • Akses mudah dekat kantin pusat &amp; pos keamanan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-body-sm font-body-sm font-semibold text-on-surface mb-1">
                    <span className="material-symbols-outlined text-[18px] text-outline">edit_note</span>
                    Catatan Waktu &amp; Pengecekan Barang:
                  </div>
                  <p className="text-body-sm font-body-sm text-on-surface-variant bg-surface-container-lowest p-3 rounded border border-outline-variant/20 italic">
                    &ldquo;Bisa ketemuan hari Rabu siang setelah kelas jam 13.00 WIB untuk cek fisik dan switch
                    keyboard.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#FEF08A]/30 border border-[#FEF08A] rounded-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#713F12]">payments</span>
                    <div>
                      <span className="text-label-sm font-label-sm font-bold text-[#713F12] block">
                        Metode Pembayaran COD:
                      </span>
                      <p className="text-body-sm font-body-sm text-on-surface">
                        Bayar saat Bertemu (Cash / QRIS Langsung ke Penjual saat COD)
                      </p>
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-[#713F12]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* ---------- KOLOM KANAN ---------- */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            <aside className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-6">
              {/* Badge status */}
              <div className="mb-5 pb-5 border-b border-outline-variant/30">
                <span className="text-caption font-caption text-on-surface-variant block mb-1.5 font-medium">
                  Status Pesanan Saat Ini:
                </span>
                <div
                  className={`flex items-center gap-2 border px-3.5 py-2 rounded-lg font-label-md text-label-md font-bold ${warnaStatus}`}
                >
                  {status === "pending" && (
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse" />
                  )}
                  <span>{teksStatus}</span>
                </div>
                <p className="text-caption font-caption text-on-surface-variant mt-2">
                  Penjual diberikan waktu 24 jam untuk menyetujui jadwal dan titik temu COD.
                </p>
              </div>

              {/* Ringkasan biaya */}
              <div className="space-y-3 mb-6">
                <h3 className="text-headline-md font-headline-md text-primary mb-3">Ringkasan Pembayaran</h3>

                <div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant">
                  <span>Harga Barang</span>
                  <span className="text-on-surface font-semibold">{formatRupiah(barang.harga)}</span>
                </div>

                <div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant gap-2">
                  <div className="flex items-center gap-1">
                    <span>Biaya Platform Mahasiswa</span>
                    <span
                      className="material-symbols-outlined text-[14px] text-outline"
                      title="Gratis untuk seluruh civitas akademika ITS"
                    >
                      info
                    </span>
                  </div>
                  <span className="text-[#03543F] font-semibold bg-[#DEF7EC] px-2 py-0.5 rounded text-label-sm font-label-sm">
                    {formatRupiah(biayaPlatform)} (Gratis)
                  </span>
                </div>

                <div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant">
                  <span>Biaya Layanan COD</span>
                  <span className="text-on-surface font-semibold">{formatRupiah(biayaLayanan)}</span>
                </div>

                <div className="border-t border-outline-variant/40 pt-3 mt-3 flex justify-between items-center">
                  <div>
                    <span className="text-headline-md font-headline-md font-bold text-primary block">
                      Total Pembayaran
                    </span>
                    <span className="text-caption font-caption text-on-surface-variant">
                      Dibayarkan langsung ke penjual
                    </span>
                  </div>
                  <span className="text-headline-xl font-headline-xl font-bold text-primary-container">
                    {formatRupiah(total)}
                  </span>
                </div>
              </div>

              {/* Tombol aksi */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setStatus("dikonfirmasi")}
                  disabled={status !== "pending"}
                  className="w-full h-12 bg-primary-container hover:bg-[#16325B] text-on-primary font-bold text-body-md rounded-lg shadow-sm transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  Konfirmasi Pesanan
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("dibatalkan")}
                  disabled={status !== "pending"}
                  className="w-full h-10 bg-transparent hover:bg-surface-container text-on-surface-variant font-label-md text-label-md rounded-lg transition-colors border border-outline-variant/30 flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                  Batalkan Pengajuan
                </button>
              </div>

              {/* Panduan transaksi aman */}
              <div className="mt-6 pt-5 border-t border-outline-variant/30 bg-surface-container-low -mx-6 -mb-6 p-6 rounded-b-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">
                    verified_user
                  </span>
                  <h4 className="text-label-md font-label-md font-bold text-primary uppercase tracking-wide">
                    Panduan Transaksi Aman ITS
                  </h4>
                </div>
                <ul className="space-y-2.5 text-body-sm font-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary-container text-on-primary text-[11px] font-bold flex items-center justify-center mt-0.5">
                      1
                    </span>
                    <span>
                      <strong>Cek fisik barang</strong> di tempat ramai kampus (Perpustakaan, Menara Sains, atau
                      Plaza Dr. Angka).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary-container text-on-primary text-[11px] font-bold flex items-center justify-center mt-0.5">
                      2
                    </span>
                    <span>
                      <strong>Uji fungsi</strong> seluruh tuts keyboard, Bluetooth &amp; backlight sebelum
                      membayar ke penjual.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary-container text-on-primary text-[11px] font-bold flex items-center justify-center mt-0.5">
                      3
                    </span>
                    <span>
                      <strong>Lapor ke Satgas Kampus / Admin</strong> jika kondisi barang tidak sesuai deskripsi
                      atau ada kendala transaksi.
                    </span>
                  </li>
                </ul>
                <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-caption font-caption text-outline">
                  <span>Keamanan Transaksi Terjamin SSO</span>
                  <a className="text-primary-container font-semibold hover:underline" href="#">
                    Baca SOP Lengkap
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-surface-container-high border-t border-outline-variant/40 mt-12">
        <div className="w-full py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-body-sm font-body-sm text-on-surface-variant text-center md:text-left">
            © 2025 ITS Preloved - Komunitas Jual Beli Terverifikasi Mahasiswa Institut Teknologi Sepuluh Nopember
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-label-sm font-label-sm">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Panduan COD Aman di Kampus</a>
            <span className="text-outline-variant">•</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Kebijakan Privasi</a>
            <span className="text-outline-variant">•</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Syarat &amp; Ketentuan</a>
            <span className="text-outline-variant">•</span>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Pusat Bantuan Mahasiswa</a>
          </div>
        </div>
      </footer>
    </div>
  )
}