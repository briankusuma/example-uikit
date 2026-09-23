# AGENT.md - Business Profile Application Guidelines (React + Vite + OWW UIKit CDN)

Dokumen ini mendefinisikan aturan wajib yang harus dipatuhi oleh seluruh AI Agent / Engineer saat mengembangkan, membaca, memodifikasi, dan memperluas aplikasi **Business Profile** yang dibangun menggunakan **React**, **Vite**, **React Router**, **Zustand**, dan design system **OWW UIKit** via CDN.

---

## 1. Sumber Desain Tunggal (Figma Single Source of Truth)

1. **Referensi Node Figma Utama**:
   - **URL**: `https://www.figma.com/design/6GEf60awGDM4kVZGJ9RkO5/Ad-Platform-Maker-Athian-Phase-2?node-id=22546-15469&m=dev`
   - **File Key**: `6GEf60awGDM4kVZGJ9RkO5`
   - **Node ID**: `22546:15469` (*"Business Profile - Complete business profile"*)

2. **Kepatuhan Desain Mutlak (High Fidelity)**:
   - Setiap elemen UI wajib merefleksikan spesifikasi Figma pada viewport Desktop:
     - **Canvas Container**: Desain desktop berbasis 1440px.
     - **Sidebar Kiri**: Lebar fixed `302px`, menu gap `20px`, padding `24px 0px`.
     - **Main Content**: Top Bar tinggi `88px`, Cover tinggi `250px`, Profile avatar overlap `-80px`.
     - **Widget Kanan (Business Profile)**: Lebar `302px`, border-radius `20px`, background `#F8F8F8`, border `1px solid #E9E9E9`.

---

## 2. Prinsip Integrasi OWW UIKit via CDN (Seperti Tailwind / Bootstrap)

1. **CDN Base Stylesheet**:
   - Framework UI dasar dimuat langsung dari CDN resmi:
     `https://cdn.jsdelivr.net/gh/briankusuma/oww-uikit@main/dist/uikit.css`
   - Framework UI dasar didokumentasikan dan dianalisis dari website resmi framework:
     `https://oww-uikit.vercel.app/`
   - Berfungsi seperti Bootstrap / Tailwind CDN yang menyediakan:
     - Reset CSS & normalisasi font Inter
     - `.oww-btn` (`.oww-btn--primary`, `.oww-btn--outline`, dll)
     - `.oww-sidebar`, `.oww-nav-item`, `.oww-nav-item--active`
     - `.oww-card` (`.oww-card--product`, `.oww-card__header`, `.oww-card__title`, dll)
     - `.oww-avatar`, `.oww-badge`, `.oww-input`

2. **Peran SCSS Lokal (Lean & Extension Only)**:
   - SCSS lokal di `src/styles/` **tidak menduplikasi** styling yang sudah ada di `uikit.css`.
   - SCSS lokal hanya digunakan untuk mengatur layout spesifik halaman dan responsive adjustments.

3. **Standar Penamaan CSS (BEM)**:
   - Gunakan class bawaan OWW UIKit untuk komponen umum (`.oww-btn`, `.oww-sidebar`, `.oww-nav-item`, `.oww-card`).
   - Gunakan namespace `.biz-*` untuk komponen tata letak halaman spesifik.

---

## 3. Aturan Wajib Responsif (Tablet & Mobile Mandatory Support)

> [!IMPORTANT]
> **Setiap kali membuat atau memodifikasi komponen/layout baru pada prompt apapun**, Agent **WAJIB** menyertakan adaptasi responsif lengkap untuk Tablet dan Mobile tanpa kecuali:

1. **Desktop (>= 1200px)**:
   - Sidebar fixed di sebelah kiri (302px, non-scrollable).
   - Main area scrollable independen.
   - Kartu profil kanan (`biz-info-card`) sticky tepat 40px di bawah navbar (`top: calc(88px + 40px)`).

2. **Tablet (769px - 1024px)**:
   - Sidebar beralih ke mode slim / icon-only (lebar ~76px) agar ruang konten utama tetap luas.
   - Body row bertumpuk rapi (`flex-direction: column`) jika layar portrait, sehingga kartu profil samping berpindah ke bawah konten utama dengan lebar penuh (100%).
   - Padding canvas menyesuaikan (16px - 24px).

3. **Mobile (<= 768px)**:
   - Sidebar Desktop disembunyikan dan diubah menjadi **Mobile Bottom Navigation Bar** fixed di bawah layar (tinggi 64px) dengan touch target yang nyaman.
   - Main area memiliki padding bawah (padding-bottom: 72px) agar konten tidak tertutup bottom bar.
   - Avatar mengecil secara proporsional (~90px) dengan overlap yang rapi (-45px).
   - Banner cover mengecil menjadi 160px.
   - Tombol aksi utama (seperti "Edit Profile") menjadi full-width di mobile.
   - Input pencarian di TopBar menyesuaikan lebar layar secara fleksibel.
   - **Zero Horizontal Overflow**: Dilarang membiarkan ada scroll horizontal yang tidak disengaja (`overflow-x: hidden`).

---

## 4. Arsitektur Proyek React + Vite

```text
example-uikit/
├── AGENT.md                       # Contract & instruction guidelines (dokumen ini)
├── index.html                     # Memuat CDN uikit.css di <head>
├── package.json                   # Dependencies (react, react-dom, react-router-dom, zustand, vite, sass)
├── vite.config.js                 # Konfigurasi Vite & alias path
├── src/
│   ├── assets/
│   │   ├── icons/                 # SVG icons
│   │   └── images/                # Assets gambar (cover, avatar)
│   ├── components/
│   │   ├── layout/                # Shell, Sidebar (oww-sidebar), TopBar
│   │   ├── profile/               # Cover, CoverModal, ProfileHeader, ProfileTabs, BusinessInfoCard
│   │   ├── products/              # ProductListSection, EmptyProductState
│   │   └── common/                # Button.jsx, Icon.jsx
│   ├── pages/                     # BusinessProfilePage.jsx & PlaceholderPage.jsx
│   ├── store/
│   │   └── useAppStore.js         # Zustand store
│   ├── styles/
│   │   ├── modules/               # Folder kelompok SCSS modular
│   │   │   ├── _button-helpers.scss
│   │   │   ├── _layout.scss
│   │   │   ├── _topbar.scss
│   │   │   ├── _profile.scss
│   │   │   ├── _tabs.scss
│   │   │   ├── _products.scss
│   │   │   ├── _infocard.scss
│   │   │   ├── _modal.scss
│   │   │   └── _responsive.scss
│   │   └── main.scss              # Entry point utama (@use 'modules/...')
│   ├── App.jsx                    # Root router
│   └── main.jsx                   # Entry point React
└── public/
```

---

## 5. Prosedur Kerja Agent & Verifikasi

1. **Selalu Cek Data Figma Sebelum Coding**:
   - Jika ada keraguan pada dimensi atau warna, jalankan MCP tool `get_figma_data`.
2. **Prioritas Alur Perubahan**:
   ```text
   OWW UIKit CDN Classes → Lean SCSS Extensions → Responsive Design (Desktop, Tablet, Mobile)
   ```
3. **Verifikasi Build**:
   - Wajib menjalankan `npm run build` sebelum menyelesaikan task.
