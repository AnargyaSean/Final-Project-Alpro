"use client"

import { useState } from "react"

export default function Page() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDXfKNhU0Dck5EPVk_5vYyaUlExDCV6xONSxHTkO1nXG-xuBDglnRjE85y19X1ktrqwNRuh3r52I62FD-XlZXdxEc_zuc1vqBHf8olfxK1iAivsHDjBf-gGXvEekn87RZ9gzB9gFsKKMYzOfMRmG1eUsS6DExERxfq2JoquAnG8IOhZ5tpBRnCQ3dqNFiZTXNY6IjUkm52ZOwO8EKlO2hd0hGYGZbdBAOcqcgC1Eu8UoVjgWGRy0Bhy",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBKRU0KJr0ghpuXsKv-jP4Z31fHcn1Ibsb7Mr9FwbAIbDB_Zw7SnJybLwYUs4Ug6EWMLRi1YeEsFgrLmp2Idida_UWQTqIE-KYTq9x6WqanmyhWj313hteKhskv5JqBYUa7Acwshq-7WDe4GiHZq8LiyxNBHMwDbJHY_jtlu2OXWwQENp3utqxBZgGcGrkUfwNMFVeW9AJAe0ILPzoNfOykApYeZbxbYNg5mbxhr3wEilL41xFo_Rvl",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYYk4Dz_cd3zORnPZTvqwCJPAi4qdZsb9ui62_J7_PPjpuseWuI5VmrPzl_PZLUQN6QOpAQeSJ27p58HQ_8xgte-Uj9tWuvAIOt7Rlf_1Y1IKMK_9VayvwOCx39Bi2x5t3KID-_kN-aahwrjbgwmdxw1mBxUSoMaXsm_-qvFMsQJGvG8wPzBDB-MZ_M1M1pPQGoseNVOLWAjhhYs2uYX0A0y1Shdu6iwiXxpZh7jDkpDD8Sfm2A52L",
  ]
  const [mainIndex, setMainIndex] = useState(0)
  return (
    <div className="bg-surface-container-low text-on-surface font-body-md antialiased min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary">
      {/* TopNavBar (Shared Component) */}
      <header className="bg-primary-container dark:bg-primary-container text-on-primary dark:text-on-primary docked full-width top-0 shadow-md border-b border-outline-variant/20 dark:border-outline-variant/10 sticky z-50">
        <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16">
          {/* Brand & Left Search */}
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2" href="#">
              <span className="text-headline-lg font-headline-lg font-bold text-on-primary dark:text-on-primary tracking-tight">ITS Preloved</span>
              <span className="inline-flex items-center gap-1 bg-surface-container-lowest/15 px-2 py-0.5 rounded-full text-caption font-label-sm text-on-primary">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Kampus
              </span>
            </a>
            {/* Search Bar */}
            <div className="relative hidden lg:block w-72">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
              <input className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container-lowest text-on-surface text-body-sm placeholder:text-outline border border-outline-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all" placeholder="Cari buku kalkulus, jas lab, monitor..." type="text" />
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-on-primary-container hover:text-on-primary transition-colors pb-1 text-label-md font-label-md" href="#">Semua</a>
            <a className="text-on-primary-container hover:text-on-primary transition-colors pb-1 text-label-md font-label-md" href="#">Buku &amp; Kuliah</a>
            <a className="text-on-primary font-bold border-b-2 border-secondary-container pb-1 text-label-md font-label-md" href="#">Elektronik</a>
            <a className="text-on-primary-container hover:text-on-primary transition-colors pb-1 text-label-md font-label-md" href="#">Kebutuhan Kost</a>
          </nav>
          {/* Trailing Action Cluster */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-on-primary-container hover:bg-on-primary/10 transition-colors duration-150 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary-container rounded-full" />
            </button>
            <button className="relative p-2 text-on-primary-container hover:bg-on-primary/10 transition-colors duration-150 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">chat</span>
            </button>
            <a className="hidden sm:inline-flex text-body-sm font-label-md text-on-primary hover:bg-on-primary/10 transition-colors duration-150 rounded-lg px-3 py-2" href="#">Pesanan Saya</a>
            <button className="bg-secondary-container hover:bg-secondary text-on-secondary px-4 py-2 rounded-lg text-label-md font-label-md shadow-sm active:scale-98 transition-transform duration-100 ease-in-out flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>Jual Barang</span>
            </button>
            <div className="h-8 w-px bg-outline-variant/30 mx-1 hidden sm:block" />
            {/* Verified Student Persona Sinta Profile */}
            <div className="flex items-center gap-2">
              <img alt="Foto Profil Mahasiswa ITS Terverifikasi" className="w-9 h-9 rounded-full object-cover border-2 border-secondary-container/80 shadow-sm" data-alt="Close up photographic profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXQ7qlOZRR26HzeFNbnaSvJb3eiXXyfguw09rf_muWQenIMMc16SzIbB9IOk5g30fLr_31t6Y1H6k8saWU5hgH2KE5AbKKO6tBz_C6V6UDCw-PNpBWPctDTGIkyuY929S_agTrnsAzZYJGrL9CDZj2oipL5wwkZ-vvXDBG_hNrOquwbr5PzcNoonlICkiROh1hIiiWu7bTPKDLe6CpUFUghkSYTfm_p5gHrHJTPxS23OLXNrmeSy5" />
            </div>
          </div>
        </div>
      </header>
      {/* Main Canvas Container */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant mb-6">
          <a className="inline-flex items-center gap-1 text-primary-container font-label-md hover:underline" href="#">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Kembali ke Marketplace</span>
          </a>
          <span className="text-outline-variant">/</span>
          <a className="text-on-surface-variant hover:text-primary-container hover:underline" href="#">Elektronik &amp; Gadget</a>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface font-label-md truncate max-w-xs md:max-w-md">Keyboard Mechanical Keychron K2</span>
        </nav>
        {/* Two-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gallery & Images (7 cols) */}
          <section className="lg:col-span-7 space-y-4">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-3 shadow-sm relative overflow-hidden">
              {/* Main Hero Image Showcase */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container flex items-center justify-center relative">
                <img alt="Keyboard Mechanical Keychron K2 Wireless RGB" className="w-full h-full object-cover transition-opacity duration-200" data-alt="Main product image" id="mainProductImg" src={images[mainIndex]} />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-surface-container-lowest/95 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm text-primary-container shadow-sm border border-outline-variant/40">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">photo_camera</span>
                  <span>Foto Real Barang Penjual</span>
                </div>
              </div>
              {/* Thumbnail Row Selector */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <button type="button" className={`thumb-btn rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container aspect-[4/3] relative transition-all ${mainIndex===0? 'ring-2 ring-primary-container':''}`} onClick={() => setMainIndex(0)}>
                  <img alt="Tampak Atas Keychron K2" className="w-full h-full object-cover" src={images[0]} />
                  <div className="absolute bottom-1 right-1 bg-primary-container/80 text-on-primary text-[10px] font-label-sm px-1.5 py-0.5 rounded backdrop-blur-sm">Tampak Atas</div>
                </button>
                <button type="button" className={`thumb-btn rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container aspect-[4/3] relative transition-all ${mainIndex===1? 'opacity-100':''} opacity-70 hover:opacity-100`} onClick={() => setMainIndex(1)}>
                  <img alt="Switch Gateron Brown Hot-Swappable" className="w-full h-full object-cover" src={images[1]} />
                  <div className="absolute bottom-1 right-1 bg-primary-container/80 text-on-primary text-[10px] font-label-sm px-1.5 py-0.5 rounded backdrop-blur-sm">Switch Gateron</div>
                </button>
                <button type="button" className={`thumb-btn rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container aspect-[4/3] relative transition-all ${mainIndex===2? 'opacity-100':''} opacity-70 hover:opacity-100`} onClick={() => setMainIndex(2)}>
                  <img alt="Port USB-C dan Tombol Bluetooth" className="w-full h-full object-cover" src={images[2]} />
                  <div className="absolute bottom-1 right-1 bg-primary-container/80 text-on-primary text-[10px] font-label-sm px-1.5 py-0.5 rounded backdrop-blur-sm">Port &amp; Switch</div>
                </button>
              </div>
            </div>
            {/* Section Deskripsi Lengkap */}
            <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-6 shadow-sm space-y-6">
              <div className="border-b border-outline-variant/20 pb-4">
                <h2 className="text-headline-md font-headline-md text-on-surface">Deskripsi Lengkap &amp; Spesifikasi Barang</h2>
                <p className="text-body-sm font-body-sm text-outline mt-1">Ditinjau dan ditulis langsung oleh mahasiswa pemilik barang</p>
              </div>
              {/* Quick Spec Chips / Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                  <span className="text-caption font-label-sm text-on-surface-variant block">Jenis Switch</span>
                  <span className="text-body-sm font-label-md text-on-surface">Gateron Brown (Tactile)</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                  <span className="text-caption font-label-sm text-on-surface-variant block">Konektivitas</span>
                  <span className="text-body-sm font-label-md text-on-surface">Bluetooth 5.1 &amp; Type-C</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                  <span className="text-caption font-label-sm text-on-surface-variant block">Kapasitas Baterai</span>
                  <span className="text-body-sm font-label-md text-on-surface">4000 mAh Awet</span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">
                  <span className="text-caption font-label-sm text-on-surface-variant block">Kelengkapan</span>
                  <span className="text-body-sm font-label-md text-on-surface">Fullset Dus + Puller</span>
                </div>
              </div>
              {/* Penjelasan Barang */}
              <div className="space-y-3 text-body-md font-body-md text-on-surface-variant leading-relaxed">
                <p className="text-on-surface font-label-md">Kondisi &amp; Kelengkapan Produk:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-body-sm">
                  <li>Pemakaian wajar untuk ngetik tugas praktikum dan skripsi di lab komputer ITS.</li>
                  <li>Hot-swappable PCB berfungsi 100% normal, belum pernah disolder atau dibongkar paksa.</li>
                  <li>Semua LED RGB backlight menyala terang, koneksi wireless ke laptop Mac &amp; Windows sangat lancar.</li>
                  <li>Box original masih mulus, kabel USB-C braided bawaan, keycap puller, dan switch puller lengkap tersedia.</li>
                </ul>
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-primary-container mt-4">
                  <p className="text-label-md font-label-md text-primary-container mb-1">Alasan Jual:</p>
                  <p className="text-body-sm text-on-surface">"Sudah upgrade ke keyboard custom, barang jarang dipakai dan kondisi prima tanpa kendala daripada menganggur di kamar kost."</p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary-container mt-3">
                  <p className="text-label-md font-label-md text-secondary mb-1">Catatan COD Khusus Area Kampus ITS:</p>
                  <p className="text-body-sm text-on-surface">"Hanya melayani COD di dalam area kampus ITS Surabaya (Menara Sains, Perpus ITS, atau Asrama Mahasiswa). Calon pembeli dipersilakan bawa laptop untuk test ngetik dan cek Bluetooth sepuasnya."</p>
                </div>
              </div>
            </article>
          </section>
          {/* Right Column: Detail & Action Box (5 cols) */}
          <aside className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
            {/* Pricing & Key Attribute Box */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-6 shadow-sm space-y-4">
              {/* Badges & Status Row */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-label-sm font-label-md bg-surface-container text-primary-container border border-outline-variant/40">Elektronik</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-label-sm font-label-md bg-[#DEF7EC] text-[#03543F]"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_back_ios_new</span> Seperti Baru (9.5/10)</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-caption font-label-sm bg-[#DEF7EC] text-[#03543F] border border-[#03543F]/20 font-bold"><span className="w-2 h-2 rounded-full bg-[#03543F] animate-pulse" /> TERSEDIA</span>
              </div>
              {/* Product Title */}
              <h1 className="text-headline-lg font-headline-lg text-primary tracking-tight leading-snug">Mechanical Keyboard Keychron K2 Wireless RGB (Hot-swappable)</h1>
              {/* Price Display */}
              <div className="pt-2 border-t border-outline-variant/20 flex items-baseline justify-between">
                <div>
                  <span className="text-caption font-label-sm text-outline block">Harga Nego Sopan</span>
                  <span className="text-headline-xl font-headline-xl text-primary-container font-bold">Rp 620.000</span>
                </div>
                <span className="text-caption font-label-sm bg-surface-container px-2 py-1 rounded text-on-surface-variant">Hemat ~40% dr baru</span>
              </div>
              {/* Seller ITS Profile Card */}
              <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/25 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img alt="Foto Penjual Fajar Ramadhan" className="w-12 h-12 rounded-full object-cover border-2 border-primary-container/60" data-alt="Penjual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ravX_T0sIEmZzi2v8ML_trkQWGDg5gicM2Oj3ZCJurXpxjwDWchTMX2lgTKUPx1mt-Nj8PavhrE5Ov_pd7DEFsz7dihmwq6-jbxK-uuR2h3MlHBurwfQqGAfcvmPgoiD5RAqGC8Z-VWu1x7fzq2X23VHZ5weMcppulpZstad6vmUAzQ39yN3ZQr5DN6MYjw1PSuXNLSvFbgaT-5IYyqUyFddQv61W2M5pa11Vcr6VyzUtOzX2E65" />
                    <span className="material-symbols-outlined absolute -bottom-1 -right-1 text-[16px] text-on-primary bg-primary-container rounded-full p-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-1.5"><p className="text-body-md font-label-md text-on-surface truncate">Fajar Ramadhan</p><span className="text-caption text-outline font-label-sm">(Penjual)</span></div>
                    <p className="text-caption font-body-sm text-on-surface-variant">NRP 502521... • Teknik Informatika ITS</p>
                    <div className="flex items-center gap-1 text-[11px] text-[#03543F] font-label-sm mt-0.5"><span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span><span>Mahasiswa Aktif Terverifikasi @student.its.ac.id</span></div>
                  </div>
                </div>
                <div className="pt-2 border-t border-outline-variant/20 flex justify-between text-caption text-outline"><span>Bergabung sejak Feb 2024</span><span className="text-on-surface font-label-sm flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>5.0 (8 Transaksi Sukses)</span></div>
              </div>
              {/* Meeting Spot / COD info */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-surface-container text-body-sm"><span className="material-symbols-outlined text-secondary-container text-[20px] shrink-0 mt-0.5">pin_drop</span><div><span className="font-label-md text-on-surface block text-label-sm">Lokasi Transaksi COD:</span><span className="text-on-surface-variant text-caption">Menara Sains ITS / Kantin Informatika (Bisa cek barang langsung saat jam kuliah)</span></div></div>
              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                <button className="w-full h-12 bg-primary-container hover:bg-primary text-on-primary rounded-lg text-body-md font-label-md font-bold shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[20px]">shopping_bag</span><span>Beli Sekarang</span></button>
                <button className="w-full h-11 border border-primary-container text-primary-container hover:bg-primary-container/5 rounded-lg text-body-sm font-label-md transition-colors flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[18px]">mail</span><span>Chat Penjual via Email ITS</span></button>
                <div className="pt-1 flex items-center justify-center"><button className="inline-flex items-center gap-1 text-caption font-label-sm text-outline hover:text-error transition-colors"><span className="material-symbols-outlined text-[16px]">flag</span><span>Laporkan Barang Ini</span></button></div>
              </div>
            </div>
            {/* Safe Campus Trading Trust Card */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-5 shadow-sm space-y-3"><div className="flex items-center gap-2 text-primary-container font-label-md"><span className="material-symbols-outlined text-[20px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span><span className="text-label-md">Protokol Keamanan COD ITS Preloved</span></div><ul className="text-caption text-on-surface-variant space-y-2"><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-[#03543F] shrink-0">check_circle</span><span>Penjual &amp; Pembeli sama-sama berstatus mahasiswa aktif Institut Teknologi Sepuluh Nopember.</span></li><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-[#03543F] shrink-0">check_circle</span><span>Lakukan transaksi di spot publik kampus ber-CCTV (Perpustakaan, Selasar Jurusan, Gazebo).</span></li><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-[#03543F] shrink-0">check_circle</span><span>Periksa fungsi hardware secara langsung sebelum menyerahkan dana/transfer QRIS.</span></li></ul></div>
          </aside>
        </div>
        {/* Jaminan Keamanan Transaksi Mahasiswa ITS Banner */}
        <section className="mt-12 bg-primary-container text-on-primary rounded-xl p-6 md:p-8 shadow-md relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10 text-on-primary pointer-events-none"><span className="material-symbols-outlined text-[200px]">shield</span></div>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary px-3 py-1 rounded-full text-caption font-label-sm mb-3"><span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span> Standar Integritas Sivitas Akademika</div>
            <h3 className="text-headline-lg font-headline-lg font-bold text-on-primary mb-2">Jaminan Keamanan Jual Beli Mahasiswa Sepuluh Nopember</h3>
            <p className="text-body-sm font-body-sm text-on-primary-container max-w-2xl leading-relaxed">Setiap akun terhubung langsung dengan SSO myITS. Kami menindak tegas penipuan barang second hand maupun indikasi calo komersial dengan sanksi pemblokiran akun dan eskalasi ke bagian Kemahasiswaan ITS.</p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-label-sm font-label-md"><div className="flex items-center gap-1.5 text-on-primary"><span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span><span>Verifikasi SSO Terpadu</span></div><div className="flex items-center gap-1.5 text-on-primary"><span className="material-symbols-outlined text-secondary-container text-[18px]">location_city</span><span>Area COD Terkendali Kampus</span></div><div className="flex items-center gap-1.5 text-on-primary"><span className="material-symbols-outlined text-secondary-container text-[18px]">support_agent</span><span>Pusat Mediasi Sengketa Barang</span></div></div>
          </div>
        </section>
      </main>
      {/* Footer (Shared Component) */}
      <footer className="bg-surface-container-high dark:bg-surface-container-highest text-on-surface dark:text-on-surface full-width bottom border-t border-outline-variant dark:border-outline-variant/40 mt-12">
        <div className="w-full py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
            <span className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">ITS Preloved</span>
            <span className="hidden sm:inline text-outline-variant">•</span>
            <p className="text-body-sm font-body-sm text-on-surface-variant">© 2025 ITS Preloved - Komunitas Jual Beli Terverifikasi Mahasiswa Institut Teknologi Sepuluh Nopember</p>
          </div>
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-label-sm font-label-sm">
            <a className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:underline transition-all duration-150" href="#">Panduan COD Aman di Kampus</a>
            <a className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:underline transition-all duration-150" href="#">Kebijakan Privasi</a>
            <a className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:underline transition-all duration-150" href="#">Syarat &amp; Ketentuan</a>
            <a className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:underline transition-all duration-150" href="#">Pusat Bantuan Mahasiswa</a>
          </div>
        </div>
      </footer>
    </div>
  )
}