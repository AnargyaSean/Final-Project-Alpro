export default function Page() {
  return (
    <>
      <div className="bg-surface-container-low text-on-surface font-body-md antialiased min-h-screen flex flex-col">
        {/* TopNavBar (Shared Component JSON Blueprint Compliant) */}
        <header className="bg-primary-container text-on-primary sticky top-0 z-50 shadow-md border-b border-outline-variant/20">
          <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16 gap-4">
            {/* Brand & Verified Campus Tag */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <img alt="ITS Preloved Logo" className="h-8 w-auto object-contain rounded-lg" src="https://lh3.googleusercontent.com/aida/AEtjO1U0ceGqIJaJmuqqSUevo5rqApzRyXYSfA-mooLRM7lEVsVDTcGgZIMNH0xH1hvZl8kWP0BYYTiaN_xIGRhS-nS9PQZep69Opz10BKsOSzSTTUFjQxf0BLDoO1vhpSi74bEd-aVitvZMJFHMB0du620gtnvkq3fEFEApMxZj186zoQfRmsM61nsG667CPvsGg9Gzw1E6H_5cSzuEib1iWnLi2hl0nH8-ujMYJ7vihO5YwsMDPZFxZPe1CAs" />
                <span className="text-headline-lg font-headline-lg font-bold text-on-primary tracking-tight hidden sm:inline-block">ITS Preloved</span>
              </div>
              <span className="inline-flex items-center gap-1 bg-surface-container-lowest/10 text-on-primary border border-surface-container-lowest/20 rounded-full px-2.5 py-0.5 text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[15px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Komunitas Mahasiswa ITS
              </span>
            </div>
            {/* Quick Search Bar */}
            <div className="flex-1 max-w-lg mx-2 hidden md:block">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span>
                <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm font-body-sm pl-9 pr-4 py-2 rounded-lg border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-fixed transition-all" placeholder="Cari buku kalkulus, monitor, keyboard mekanikal..." type="text" />
              </div>
            </div>
            {/* Trailing Navigation & Actions */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Action: Jual Barang */}
              <button className="bg-secondary-container hover:bg-secondary text-on-secondary flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-label-md font-label-md shadow-sm active:scale-98 transition-all">
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>Jual Barang</span>
              </button>
              {/* Secondary Action: Pesanan Saya */}
              <a className="text-on-primary hover:bg-on-primary/10 px-3 py-2 rounded-lg text-label-md font-label-md hidden lg:inline-flex items-center transition-colors" href="#orders">
                Pesanan Saya
              </a>
              {/* Action Icons (notifications, chat) */}
              <div className="flex items-center text-on-primary">
                <button aria-label="Notifikasi" className="p-2 hover:bg-on-primary/10 rounded-lg transition-colors relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary-container rounded-full ring-2 ring-primary-container" />
                </button>
                <button aria-label="Pesan Chat" className="p-2 hover:bg-on-primary/10 rounded-lg transition-colors relative">
                  <span className="material-symbols-outlined">chat</span>
                </button>
              </div>
              <div className="h-6 w-px bg-outline-variant/30 hidden sm:block" />
              {/* User Profile Pill */}
              <div className="flex items-center gap-2 pl-1">
                <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-bold text-label-md ring-2 ring-surface-container-lowest/30">
                  A
                </div>
                <div className="hidden xl:flex flex-col text-left leading-none">
                  <span className="text-label-sm font-label-sm text-on-primary">Andi</span>
                  <span className="text-caption font-caption text-on-primary-container">Informatika ITS</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Secondary Top Category Navigation Links */}
        <nav className="bg-primary-container/95 border-b border-outline-variant/15 text-on-primary hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-8 text-label-md font-label-md h-10">
            <a className="text-on-primary font-bold border-b-2 border-secondary-container pb-1" href="#">Semua</a>
            <a className="text-on-primary-container hover:text-on-primary transition-colors pb-1" href="#">Buku &amp; Kuliah</a>
            <a className="text-on-primary-container hover:text-on-primary transition-colors pb-1" href="#">Elektronik</a>
            <a className="text-on-primary-container hover:text-on-primary transition-colors pb-1" href="#">Kebutuhan Kost</a>
            <div className="ml-auto text-caption font-caption text-on-primary-container flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">local_police</span>
              Semua transaksi terikat etika mahasiswa ITS &amp; aman via COD kampus
            </div>
          </div>
        </nav>
        {/* Main Canvas Container (1280px Desktop) */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 flex flex-col gap-6">
          {/* Hero / Subheader (No Carousel, Strict Functionalist) */}
          <section className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/40 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm tracking-wide">
                <span className="material-symbols-outlined text-[16px]">school</span>
                PORTAL RESMI PEER-TO-PEER MAHASISWA
              </div>
              <h1 className="text-headline-xl font-headline-xl text-primary tracking-tight">Marketplace Preloved Mahasiswa ITS</h1>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
                Jual beli barang preloved aman, terverifikasi sesama civitas academica ITS Surabaya.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <div className="text-left">
                <p className="text-label-sm font-label-sm text-primary">100% Akun Mahasiswa</p>
                <p className="text-caption font-caption text-on-surface-variant">Login via SSO / myITS terverifikasi</p>
              </div>
            </div>
          </section>
        {/* Search & Filter Bar Section */}
        <section className="space-y-4">
          {/* Top Row: Category Chips & Sort Selector */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button className="bg-primary-container text-on-primary px-3.5 py-1.5 rounded-full text-label-sm font-label-sm shrink-0 border border-primary-container">Semua (128)</button>
              <button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3.5 py-1.5 rounded-full text-label-sm font-label-sm shrink-0 border border-outline-variant transition-colors">Elektronik &amp; Gadget (42)</button>
              <button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3.5 py-1.5 rounded-full text-label-sm font-label-sm shrink-0 border border-outline-variant transition-colors">Buku &amp; Kuliah (35)</button>
              <button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3.5 py-1.5 rounded-full text-label-sm font-label-sm shrink-0 border border-outline-variant transition-colors">Fashion &amp; Jaket Lab (27)</button>
              <button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface px-3.5 py-1.5 rounded-full text-label-sm font-label-sm shrink-0 border border-outline-variant transition-colors">Kebutuhan Kost (24)</button>
            </div>
            {/* Sorting Selector */}
            <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
              <label className="text-label-sm font-label-sm text-on-surface-variant" htmlFor="sort-select">Urutkan:</label>
              <div className="relative">
                <select defaultValue="Terbaru ▾" className="appearance-none bg-surface-container-lowest text-on-surface border border-outline-variant rounded-lg text-label-sm font-label-sm py-1.5 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-primary-container" id="sort-select">
                  <option value="Terbaru ▾">Terbaru ▾</option>
                  <option value="Harga Terendah">Harga Terendah</option>
                  <option value="Harga Tertinggi">Harga Tertinggi</option>
                </select>
              </div>
            </div>
          </div>
          {/* Bottom Row: Campus Location Filter Quick Tags */}
          <div className="flex items-center gap-2 flex-wrap text-caption font-caption text-on-surface-variant">
            <span className="font-label-sm text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-secondary">location_on</span> Lokasi COD:</span>
            <button className="bg-primary-fixed text-on-primary-fixed font-label-sm px-2.5 py-1 rounded-md transition-colors">Semua Lokasi</button>
            <button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/60 px-2.5 py-1 rounded-md transition-colors">Perpus Pusat ITS</button>
            <button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/60 px-2.5 py-1 rounded-md transition-colors">Menara Sains</button>
            <button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/60 px-2.5 py-1 rounded-md transition-colors">Asrama Mahasiswa</button>
            <button className="bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/60 px-2.5 py-1 rounded-md transition-colors">Kantin Pusat</button>
          </div>
        </section>
        {/* Product Grid Section (3 Columns on Desktop) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Monitor LG 24 Inch */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
            <div className="relative aspect-square w-full bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A clean, modern 24-inch slim bezel IPS monitor displayed on a minimal wooden student study desk in bright natural day lighting. The background shows soft academic dorm room ambience with high-key neutral white and gray tones, complemented by deep navy subtle stationery accessories. Crisp product photography focusing on the pristine display surface and stand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChvxRwX9kZ7_o3-seum18IwaeLvwoKMbq_2g3U42W92wL8bVlZ-plJXOOl2RSjg7Om_YFhBiE-Y-dvR6Q77yG2eY8Se8JpsXatpMv7uZsGpK7urGfdMjoifoJAEi1rmiKQcGTeLDY_0oiWmCqzbeD0GGPvA-P-mJ-4aO054TaKbtz7MtvjdYP50cEFThGD7w4cf91g_bxNQHZGmHXbTT5yZtlI__Ai0_4z5zEPCNWWzqtg88H8QFux" />
              <div className="absolute top-3 left-3">
                <span className="bg-blue-100 text-blue-800 text-[12px] font-bold px-2.5 py-1 rounded-full border border-blue-200">Kondisi: Bekas Mulus</span>
              </div>
              <button aria-label="Simpan Favorit" className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-outline hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-body-md font-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">Monitor LG 24 Inch IPS 75Hz</h3>
                <p className="text-headline-md font-headline-md text-primary mt-1">Rp 850.000</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm">Budi S.</span>
                  <span className="text-outline text-caption font-caption">(Teknik Elektro '21)</span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-outline">pin_drop</span>
                  <span>COD Asrama Mahasiswa ITS</span>
                </div>
              </div>
            </div>
          </article>
          {/* Card 2: Mechanical Keyboard Keychron K2 */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
            <div className="relative aspect-square w-full bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A clean Keychron mechanical keyboard with custom dark navy and red accent keycaps resting on a sleek felt desk mat inside a university library cubicle. Soft bright daytime illumination highlighting the matte texture of the keycaps and wireless metal frame. The setting emphasizes clean student study setup with subtle books and high-key minimalist modern aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBRMRYRYWhCMmBxLQqo0oz6tDNIWKD4A_qNij4fx5mmVLEBVeWbj1gkw-Ls4F954NC22jYV40ddbE-PYhU05Yl_7w_b0sB6IvI1604oC-lOyvVNFjFPFINowtfQy_XAqeQy0oqSak4FyaJIhpjWOySoKY29jRElqiGKMwK7DP0WKu5-KRav0er3ozXhUF-65a9kgiuXk-CqXOu3zH_jX3LsHFzBKcR1XbhusMwPh0hrqO9qWcBb3Vi" />
              <div className="absolute top-3 left-3">
                <span className="bg-green-100 text-green-800 text-[12px] font-bold px-2.5 py-1 rounded-full border border-green-200">Kondisi: Seperti Baru</span>
              </div>
              <button aria-label="Simpan Favorit" className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-outline hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-body-md font-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">Mechanical Keyboard Keychron K2 Wireless</h3>
                <p className="text-headline-md font-headline-md text-primary mt-1">Rp 620.000</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm">Fajar R.</span>
                  <span className="text-outline text-caption font-caption">(Informatika '22)</span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-outline">pin_drop</span>
                  <span>COD Menara Sains ITS</span>
                </div>
              </div>
            </div>
          </article>
          {/* Card 3: Purcell Calculus Book */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
            <div className="relative aspect-square w-full bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="An authentic Calculus Purcell ninth edition textbook neatly placed on an academic library study desk with neat notebook pages beside it. High key natural light casts gentle shadows, illuminating the book cover with crisp mathematical formulas. Clean university environment with light wooden textures and minimal deep blue pen accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh9yso5wmrJqlTwJfH6Ps8qXDJuh5Lh6C4ILWuz8sdXGfrpKFo9NEziIvuW8zJXXjDEm9Y--cDR1anv0MKr-4WVTOxbHMyvOkpbl_sU8oWEF4ApwvV20XkfwnOHGuSc_kOZjWEnVCIp8NHoTbGKjs7KrUZKl2Ab4xuAjZHbCJeUHb_adw0Q8Cwv7Lbz9Mp2mzCnIgC-TEyic4zOErkLE7I2dNpuJxHBTcoFou3keL951hkAIDmr5We" />
              <div className="absolute top-3 left-3">
                <span className="bg-amber-100 text-amber-900 text-[12px] font-bold px-2.5 py-1 rounded-full border border-amber-200">Kondisi: Layak Pakai</span>
              </div>
              <button aria-label="Simpan Favorit" className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-outline hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-body-md font-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">Buku Kalkulus Purcell Edisi 9 (Asli)</h3>
                <p className="text-headline-md font-headline-md text-primary mt-1">Rp 95.000</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm">Siti N.</span>
                  <span className="text-outline text-caption font-caption">(Matematika '23)</span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-outline">pin_drop</span>
                  <span>COD Perpustakaan Pusat ITS</span>
                </div>
              </div>
            </div>
          </article>
          {/* Card 4: Casio ClassWiz fx-991EX */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
            <div className="relative aspect-square w-full bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A Casio fx-991EX ClassWiz scientific calculator shown in sharp detail on a crisp engineering graph paper notebook. The scene is bright and organized, with a stainless steel engineering ruler and pencil nearby in an academic laboratory studio setting. High clarity product photography with soft white studio light and clean technical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_wClOTN30onSojgmxJzq26vT-OnrckXVEK2pbhodajP5CSRzrwhJjtQY-Soi-f4i7LeOkqax6qMbAI9dPs3S5RLvVlCJOzX1PEm1nTIVE--PAgiLzI4GvSc_7PFJI29eL4Smh0lXBAReb08b3FHTx9lAG4YbF6XLkqx_cSyUt_13ma6daKF3dGP9UWRHh0veETnJtRMhNIqvp9CtsP4DrgaE87GnW0myrKOrm19GQoKk-6_B88Ogq" />
              <div className="absolute top-3 left-3">
                <span className="bg-blue-100 text-blue-800 text-[12px] font-bold px-2.5 py-1 rounded-full border border-blue-200">Kondisi: Bekas Mulus</span>
              </div>
              <button aria-label="Simpan Favorit" className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-outline hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-body-md font-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">Kalkulator Scientific Casio fx-991EX ClassWiz</h3>
                <p className="text-headline-md font-headline-md text-primary mt-1">Rp 180.000</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm">Rian P.</span>
                  <span className="text-outline text-caption font-caption">(Teknik Mesin '21)</span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-outline">pin_drop</span>
                  <span>COD Gedung Riset ITS</span>
                </div>
              </div>
            </div>
          </article>
          {/* Card 5: Meja Belajar Lipat Kayu */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
            <div className="relative aspect-square w-full bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A compact foldable light wood study table designed for dorm room living, set on clean light-colored tiled flooring. A sleek coffee mug and study tablet sit neatly on its surface in a sunlit student studio apartment. Bright daylight coming through window, natural light wood grain, uncluttered and practical student aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7eK9tIJzTEUYojCir1AmJtB3Hw5YjMBUbiGOAbPbODqT9WMVUO9pY1diC7uA3lnMIuXS8JVwOfs_Jzls3C8WRvwuV43kVJ1KvLTVF6OlCWuGAMHXxmWY92-JRfA82-WdQzpyPQQvBc0UXt2jF2GC8fCX7kQ1VlwC3WWEgJQwrhzpkYDu4hIjEY79___87GOicYhHBT9RKy6XEXxERfVATB2AAjYN071yVajgtlj0G_QBugv2gy1sA" />
              <div className="absolute top-3 left-3">
                <span className="bg-amber-100 text-amber-900 text-[12px] font-bold px-2.5 py-1 rounded-full border border-amber-200">Kondisi: Layak Pakai</span>
              </div>
              <button aria-label="Simpan Favorit" className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-outline hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-body-md font-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">Meja Belajar Lipat Kayu Minimalis Anak Kost</h3>
                <p className="text-headline-md font-headline-md text-primary mt-1">Rp 70.000</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm">Dimas A.</span>
                  <span className="text-outline text-caption font-caption">(Teknik Sipil '20)</span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-outline">pin_drop</span>
                  <span>COD Keputih Dekat Gerbang ITS</span>
                </div>
              </div>
            </div>
          </article>
          {/* Card 6: Jas Lab Kimia ITS + Kacamata Safety */}
          <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
            <div className="relative aspect-square w-full bg-surface-container-high overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A clean white official university chemistry laboratory coat neatly pressed and hung on a minimalist wooden hanger alongside clear safety goggles. Academic chemistry lab background with glass test tubes and sterile workstations bathed in crisp neutral clinical white lighting. Professional, pristine presentation tailored for STEM student gear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzteU_vmXGW3Z-jEDvMgrXYlarXbNP2FcI3LpTt_Ta-iN3YxuubDCIoRkoSs7BjYn-hKBPEZz20tzB52lO1zmKTLUP-ptI2YazxYQLe94Af0oFKcZvhZCeF7A72sZrJbaPLATCL_z-IMHHMe4v7EohsXGFM7Eha_ByBggxN1Wtkgas9zZR_UWJLKIm2zIRTV064q-s1yfyaIdlqtp1m0T-l4FgSSVw16ZddLhKZge79iLJXYr-DuPV" />
              <div className="absolute top-3 left-3">
                <span className="bg-green-100 text-green-800 text-[12px] font-bold px-2.5 py-1 rounded-full border border-green-200">Kondisi: Seperti Baru</span>
              </div>
              <button aria-label="Simpan Favorit" className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-outline hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between gap-3">
              <div>
                <h3 className="text-body-md font-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">Jas Lab Kimia ITS Size L + Kacamata Safety</h3>
                <p className="text-headline-md font-headline-md text-primary mt-1">Rp 55.000</p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="font-label-sm">Annisa W.</span>
                  <span className="text-outline text-caption font-caption">(Teknik Kimia '22)</span>
                </div>
                <div className="flex items-center gap-1 text-caption font-caption text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-outline">pin_drop</span>
                  <span>COD Departemen Kimia FSAD</span>
                </div>
              </div>
            </div>
          </article>
        </section>
          {/* Pagination & Counter Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 border-t border-outline-variant/40">
            <p className="text-body-sm font-body-sm text-on-surface-variant">Menampilkan <span className="font-bold text-on-surface">6</span> dari <span className="font-bold text-on-surface">128</span> barang</p>
            <div className="flex items-center gap-1.5">
              <button aria-label="Halaman Sebelumnya" className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface-variant disabled:opacity-40" disabled={true}>
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="w-9 h-9 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md">1</button>
              <button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md">2</button>
              <button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md">3</button>
              <span className="px-1 text-outline">...</span>
              <button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md">22</button>
              <button aria-label="Halaman Selanjutnya" className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container text-on-surface">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
          {/* Campus COD Safety Guide Banner */}
          <section className="bg-surface-container rounded-xl p-5 border border-outline-variant/50">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">verified_user</span>
              <div className="space-y-1">
                <h4 className="text-headline-md font-headline-md text-primary">Panduan COD Aman di Lingkungan Kampus ITS</h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Utamakan bertransaksi langsung (COD) di titik keramaian seperti Perpustakaan Pusat, Menara Sains, Kantin Pusat, atau Pos Satpam kampus. Cek kondisi barang bersama sebelum melakukan pembayaran tunai atau QRIS.</p>
              </div>
            </div>
          </section>
        </main>
        {/* Footer (Shared Component JSON Blueprint Compliant) */}
        <footer className="bg-surface-container-high text-on-surface border-t border-outline-variant mt-10">
          <div className="w-full py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright text & identity */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
              <span className="text-headline-md font-headline-md font-bold text-primary">ITS Preloved</span>
              <p className="text-body-sm font-body-sm text-on-surface-variant">© 2025 ITS Preloved - Komunitas Jual Beli Terverifikasi Mahasiswa Institut Teknologi Sepuluh Nopember</p>
            </div>
            {/* Links defined in JSON Blueprint */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-label-sm font-label-sm">
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all duration-150" href="#panduan-cod">Panduan COD Aman di Kampus</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all duration-150" href="#kebijakan-privasi">Kebijakan Privasi</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all duration-150" href="#syarat-ketentuan">Syarat &amp; Ketentuan</a>
              <a className="text-on-surface-variant hover:text-primary hover:underline transition-all duration-150" href="#pusat-bantuan">Pusat Bantuan Mahasiswa</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
