export const COMPANY_INFO = {
  name: "PT Mitra Bintang Transportindo",
  shortName: "MBT Logistics",
  motto: "Your logistic partner, we move your success",
  mottoId: "Mitra Logistik Anda, Kami Menggerakkan Kesuksesan Anda",
  address: "Jl. Sutoyo S komplek Ar Rahman No.50, Banjarmasin 70118, Kalimantan Selatan, Indonesia",
  phone: "+62 511 8765 4321",
  whatsapp: "+62 812 5555 9876",
  email: "info@mitrabintangtransportindo.co.id",
  salesEmail: "sales@mitrabintangtransportindo.co.id",
  operationalHours: "Senin - Sabtu: 08:00 - 17:00 WITA (Operasional Kargo 24/7)",
  establishedYear: 2012,
  coordinates: {
    lat: -3.3194,
    lng: 114.5908
  }
};

export const CERTIFICATIONS = [
  {
    id: "klhk-b3",
    title: "Izin Transportasi Limbah B3 KLHK",
    authority: "Kementerian Lingkungan Hidup dan Kehutanan RI",
    code: "SK.B3/KLHK/2023-MBT",
    description: "Izin operasional pengangkutan limbah Bahan Berbahaya dan Beracun (B3) lintas provinsi laut dan darat.",
    category: "HSE & Environmental"
  },
  {
    id: "kemenhub-transport",
    title: "Izin Penyelenggara Angkutan Barang Khusus B3",
    authority: "Kementerian Perhubungan Direktorat Perhubungan Darat & Laut",
    code: "SK.KEMENHUB/B3/2024",
    description: "Sertifikasi armada darat (head truck & isotank) serta laut (LCT & SPOB) laik jalan untuk kargo kimia cair & padat.",
    category: "Transport Safety"
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    authority: "International Organization for Standardization",
    code: "CERT-ISO9001-MBT",
    description: "Sistem Manajemen Mutu Pelayanan Freight Forwarding & Logistik Terpadu.",
    category: "Quality Management"
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018 (K3 / HSE)",
    authority: "International Organization for Standardization",
    code: "CERT-HSE45001-MBT",
    description: "Sistem Manajemen Kesehatan dan Keselamatan Kerja (K3) standar internasional untuk penanganan kargo sensitif.",
    category: "HSE Standards"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "b3-chemicals",
    titleId: "Transportasi Material B3 & Kimia",
    titleEn: "B3 & Chemical Transport",
    icon: "FlaskConical",
    descriptionId: "Pengangkutan bahan kimia berbahaya & limbah B3 dengan armada berizin resmi, standar K3 ketat, dan unit Isotank/Container khusus.",
    descriptionEn: "Licensed transportation of hazardous materials (B3) & chemical waste using specialized Isotanks and B3 safety compliance.",
    items: [
      {
        id: "isotank-sodium-methylate",
        name: "Isotank Container B3 - Sodium Methylate",
        tag: "B3 Liquid - Hazardous",
        image: "/images/isotank-b3-sodium-methylate.jpeg",
        specs: ["Capacity: 24,000 - 26,000 Liters", "Material: Stainless Steel 316L / T11 UN Portable Tank", "UN Code: UN 1289 (Corrosive & Flammable)", "Certified Leak Proof & Thermal Insulation"],
        descId: "Penanganan dan pengangkutan bahan kimia Sodium Methylate Solution khusus industri biodiesel dan kimia dengan sertifikasi UN T11.",
        descEn: "Handling and transportation of Sodium Methylate Solution for biodiesel & chemical industries under UN T11 standard."
      },
      {
        id: "isotank-hcl",
        name: "Isotank Container - Asam Klorida (HCl)",
        tag: "Corrosive Chemical",
        image: "/images/isotank-b3-sodium-methylate.jpeg",
        specs: ["Rubber-lined / Composite Lined Tank", "Cap: 20,000 - 24,000 L", "UN 1789 Hazard Class 8", "Top & Bottom Valves with Safety Pressure Relief"],
        descId: "Transportasi cairan asam keras (HCl) menggunakan tangki berlapisan karet anti-korosi khusus standar pabrik manufaktur.",
        descEn: "Hydrochloric acid (HCl) transport utilizing rubber-lined anti-corrosion tank containers."
      },
      {
        id: "container-cyanide",
        name: "Regular Container B3 - Sianida (Sodium Cyanide)",
        tag: "Toxic Solid - Mining Cargo",
        image: "/images/warehouse-jumbo-bags.jpeg",
        specs: ["Sealed Heavy Duty Container 20ft / 40ft", "UN 1689 Class 6.1 Toxic Solid", "Spill Kit & Secondary Containment Included", "GPS Tracking & Armed Guard Escort Option"],
        descId: "Pengiriman material Sianida padat untuk kebutuhan pengolahan tambang emas dengan protokol pengawalan K3 ekstra ketat.",
        descEn: "Transport of solid Sodium Cyanide for mining operations under strict security protocols."
      }
    ]
  },
  {
    id: "maritime-fleet",
    titleId: "Armada Laut & Tongkang",
    titleEn: "Maritime Fleet & Barges",
    icon: "Ship",
    descriptionId: "Armada transportasi laut untuk wilayah sungai & pesisir Kalimantan serta antar-pulau di seluruh perairan Indonesia.",
    descriptionEn: "River, coastal, and inter-island marine logistics across Kalimantan and the Indonesian archipelago.",
    items: [
      {
        id: "lct-vessels",
        name: "LCT (Landing Craft Tank)",
        tag: "Heavy Logistics & Remote Access",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
        specs: ["Cap: 500 DWT - 2,000 DWT", "Ramp door width: up to 8 meters", "Shallow draft navigation for Kalimantan rivers", "Suitable for Isotank trucks & heavy machinery"],
        descId: "Kapal LCT serbaguna untuk mobilisasi alat berat, armada truk Isotank B3, dan kargo proyek ke area perairan dangkal & remote site.",
        descEn: "Landing Craft Tank vessels designed for heavy equipment, Isotank trucks, and remote river access."
      },
      {
        id: "tongkang-barges",
        name: "Tongkang (Cargo Barges)",
        tag: "Bulk & Container Marine Freight",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
        specs: ["Size: 180ft, 230ft, 270ft, 300ft", "Tugboat power: 1,200 HP - 3,200 HP", "Deck load capacity up to 8 tonnes/m²", "Side wall protection for secure cargo"],
        descId: "Pengangkutan kargo curah, container B3, serta alat konstruksi kapasitas besar lintas pulau.",
        descEn: "Bulk cargo and container barges suitable for large volume inter-island freight."
      },
      {
        id: "spob-barges",
        name: "SPOB (Self Propelled Oil Barge)",
        tag: "Liquid Fuel & Chemical Marine",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
        specs: ["Cap: 1,000 KL - 3,500 KL", "Independent Cargo Pumps & Flow Meters", "Double Bottom & Double Side Hull Safety", "PERTAMINA / Marine Class Certified"],
        descId: "Pengangkutan bahan bakar cair & minyak industri melalui jalur sungai dan laut dengan sistem perlindungan hull ganda.",
        descEn: "Self-propelled oil & liquid cargo barge for safe river and sea transport."
      }
    ]
  },
  {
    id: "regular-specialist",
    titleId: "Kargo Reguler & Spesialis",
    titleEn: "Regular & Specialist Cargo",
    icon: "PackageCheck",
    descriptionId: "Layanan kontainer standar dan kontainer cair fleksibel (Flexi Bag) untuk produk minyak sawit (CPO), bahan makanan, dan kimia non-B3.",
    descriptionEn: "Standard dry container and Flexibag liquid solutions for CPO, food grade, and general industrial cargo.",
    items: [
      {
        id: "flexibag-container",
        name: "Flexi Bag Container Logistics",
        tag: "Non-Hazardous Liquid Solution",
        image: "/images/flexibag-liquid-container.jpeg",
        specs: ["Cap: 16,000 - 24,000 Liters in 20ft Dry Box", "Food Grade Polyethylene (FDA Compliant)", "Single-use hygienic liner prevents contamination", "Heating pad option for high-viscosity oils"],
        descId: "Solusi ekonomis pengiriman cairan non-B3 seperti CPO, Palm Olein, dan bahan baku cair industri menggunakan wadah Flexibag dalam kontainer 20ft.",
        descEn: "Cost-effective liquid cargo transport solution inside 20ft dry containers using FDA-approved flexibags."
      },
      {
        id: "regular-dry-container",
        name: "Regular Dry Container (20ft / 40ft / 40ft HC)",
        tag: "FCL & LCL General Cargo",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        specs: ["20ft GP (33 CBM / 28 Tonnes max)", "40ft HC (76 CBM / 26 Tonnes max)", "Door-to-Door & Port-to-Port Service", "Intermodal Trucking & Shipping Line Access"],
        descId: "Layanan pengiriman barang manufaktur, bahan baku industri, dan komoditas umum dengan jaringan intermodal terlengkap.",
        descEn: "Standard container freight forwarding for general manufactured goods and industrial commodities."
      },
      {
        id: "isotank-general",
        name: "Isotank Container (General Chemical)",
        tag: "General Liquid Cargo",
        image: "/images/isotank-b3-sodium-methylate.jpeg",
        specs: ["Cap: 21,000 - 26,000 L", "Suitable for Solvents, Glycols, Resins", "Baffle plates to reduce liquid surge during transport"],
        descId: "Wadah Isotank serbaguna untuk berbagai cairan kimia non-korosif dan pelarut industri.",
        descEn: "Multi-purpose ISO tank containers designed for non-corrosive chemicals and solvents."
      }
    ]
  },
  {
    id: "pln-project",
    titleId: "Distribusi Proyek Infrastruktur PLN",
    titleEn: "PLN Infrastructure Project Distribution",
    icon: "Zap",
    descriptionId: "Spesialisasi pengiriman komponen kelistrikan berat, Trafo daya, jaringan kabel, dan perlengkapan Gardu Induk (GI) PLN di wilayah Kalimantan.",
    descriptionEn: "Specialized logistics for heavy power transformers, substation equipment, and cable drums for PLN power grids.",
    items: [
      {
        id: "pln-gi-distribution",
        name: "PLN Part Distribution to Gardu Induk (GI)",
        tag: "Government & BUMN Project Cargo",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
        specs: ["Heavy Haulage Lowbed Trailer up to 120 Tonnes", "Crane & Rigging Services at Substation Site", "Route Survey & Civil Infrastructure Reinforcement", "Police & PLN Operational Escort"],
        descId: "Pengangkutan dan pengawalan peralatan vital Gardu Induk (GI) PLN dari pelabuhan Banjarmasin hingga site pedalaman Kalimantan.",
        descEn: "Specialized transport and site rigging for PLN substation transformers and high-voltage grid equipment."
      }
    ]
  },
  {
    id: "warehouse-facility",
    titleId: "Fasilitas Logistik & Perdagangan Warehouse",
    titleEn: "Warehouse & Logistics Facilities",
    icon: "Warehouse",
    descriptionId: "Fasilitas pergudangan tertutup & terbuka di Banjarmasin dengan penanganan Jumbo Bags, material B3 terpisah, dan sistem manajemen persediaan.",
    descriptionEn: "Secured covered & open storage warehouse facility in Banjarmasin with dedicated B3 material zoning.",
    items: [
      {
        id: "warehouse-storage",
        name: "Warehouse & Material Distribution Center",
        tag: "Storage & Handling",
        image: "/images/warehouse-jumbo-bags.jpeg",
        specs: ["Total Area: 15,000 m² (Covered & Open Yard)", "Dedicated Hazardous B3 Isolated Zone", "Forklift 3T - 10T & Overhead Crane 25T", "24/7 CCTV & Security Patrol"],
        descId: "Fasilitas gudang strategis di Banjarmasin untuk penyimpanan kargo karungan (Jumbo Bag), kontainer, dan konsolidasi kargo industri.",
        descEn: "Strategic warehouse center in Banjarmasin for jumbo bag materials, B3 segregation, and cargo consolidation."
      }
    ]
  }
];

export const HSE_PROTOCOLS = [
  {
    step: "01",
    titleId: "Inspeksi Kelayakan Armada (Pre-Trip Inspection)",
    titleEn: "Pre-Trip Inspection",
    descId: "Pemeriksaan 32 poin kelayakan teknis head truck, Isotank pressure valve, grounding strap, dan kelengkapan apar sebelum armada beroperasi."
  },
  {
    step: "02",
    titleId: "Sertifikasi Driver & APD Lengkap",
    titleEn: "Certified Driver & Hazmat PPE",
    descId: "Setiap pengemudi mengantongi Sertifikat K3 B3 aktif dari Kemenhub/KLHK dan wajib mengenakan APD Hazmat Level 2/3 selama proses muat-bongkar."
  },
  {
    step: "03",
    titleId: "Emergency Response & Spill Kit Standard",
    titleEn: "Spill Kit & Emergency Response",
    descId: "Setiap unit kendaraan B3 dilengkapi Chemical Neutralizer Spill Kit (absorbent pad, boom, hazmat suit) dan terhubung ke Tim ERT 24 Jam."
  },
  {
    step: "04",
    titleId: "GPS Real-time & Speed Limiter Control",
    titleEn: "Real-time Telematics & Speed Control",
    descId: "Armada dibatasi kecepatan maksimal 60 km/jam di jalur darat dan dipantau 24/7 melalui pusat komando telematika GPS sensor suhu/tekanan."
  }
];

export const CLIENT_LOGOS = [
  { name: "PLN (Persero)", category: "BUMN Kelistrikan" },
  { name: "Pabrik Manufaktur Kimia", category: "Chemical Industry" },
  { name: "Perusahaan Tambang Emas & Batu Bara", category: "Mining Operations" },
  { name: "Produsen Biofuel & CPO", category: "Bioenergy Sector" }
];
