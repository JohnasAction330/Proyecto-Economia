export const productsData = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "Celulares",
    status: "in-stock",
    store: 7,
    comments : [
      {
        user : "Juancito",
        comment : "Excelente producto, muy satisfecho con la compra.",
      },
      {
        user : "MaríaG",
        comment : "La cámara es impresionante, las fotos salen geniales.",
      }
    ],
    price: [
      {
        storage: "128 GB",
        amount: 24999,
      },
      {
        storage: "256 GB",
        amount: 25999,
      },
      {
        storage: "512 GB",
        amount: 27999,
      }
    ],
    discount: 15,
    colors: [
      {
        name: "Negro espacial",
        images: [
          "http://localhost:3000/images/Iphone-14-Pro/31Fc3yVe9+L._AC_.jpg",
          "http://localhost:3000/images/Iphone-14-Pro/41jGAU2Xs3L._AC_SX522_.jpg",
          "http://localhost:3000/images/Iphone-14-Pro/41JZ9VqvGjL._AC_.jpg",
        ],
      },
      {
        name: "Dorado",
        images: [
          "http://localhost:3000/images/Iphone-14-Pro/51PNqMth7kL._AC_SL1000_.jpg",
          "http://localhost:3000/images/Iphone-14-Pro/519ddZrOm4L._AC_SL1000_.jpg",
          "http://localhost:3000/images/Iphone-14-Pro/51PNqMth7kL._AC_SL1000_.jpg",
        ],
      },
      {
        name: "Morado",
        images: [
          "http://localhost:3000/images/Iphone-14-Pro/51aWrQ-VuSL._AC_SL1024_.jpg",
          "http://localhost:3000/images/Iphone-14-Pro/71NrjeXnfaL._AC_SL1500_.jpg",
        ],
      },
    ],
    description: "El iPhone 14 cuenta con una pantalla OLED Super Retina XDR de 6.1 pulgadas, chip A15 Bionic, cámara dual de 12 MP con modo cinemático, y diseño resistente al agua con certificación IP68",
    features : [
      "Pantalla OLED Super Retina XDR de 6.1'' (2532x1170 px)",
      "Chip A15 Bionic con GPU de 5 núcleos",
      "Cámara dual de 12 MP (principal f/1.5 + ultra gran angular f/2.4)",
      "Cámara frontal de 12 MP con autofocus",
      "Grabación de video 4K hasta 60 fps y modo acción",
      "Batería de 3279 mAh (hasta 20 h de video)",
      "Resistencia al agua y polvo IP68",
      "Conectividad 5G, Wi-Fi 6, Bluetooth 5.3, MagSafe",
      "Opciones de almacenamiento: 128 GB, 256 GB, 512 GB"
    ],
    image: "http://localhost:3000/images/Iphone-14-Pro/31Fc3yVe9+L._AC_.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    category: "Celulares",
    status: "in-stock",
    store: 4,
    comments : [],
    price: [
      {
        storage: "256 GB",
        amount: 29999,
      },
      {
        storage: "512 GB",
        amount: 31999,
      },
      {
        storage: "1 TB",
        amount: 34999,
      }
    ],
    discount: 10,
    colors: [
      {
        name: "Dorado-S23",
        images: [
          "http://localhost:3000/images/Galaxy-S23/51xtssOvWbL._AC_SL1500_.jpg",
          "http://localhost:3000/images/Galaxy-S23/61oXcVnOdAL._AC_SL1500_.jpg"
        ]
      },
      {
        name: "Rosa-S23",
        images: [
          "http://localhost:3000/images/Galaxy-S23/31c60GgATgL._AC_.jpg",
          "http://localhost:3000/images/Galaxy-S23/51y9SFjYNRL._AC_.jpg",
          "http://localhost:3000/images/Galaxy-S23/51jZNC1g--L._AC_SL1200_.jpg"
        ]
      }
    ],
    description: "El Samsung Galaxy S23 Ultra cuenta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Snapdragon 8 Gen 2, cámara cuádruple con sensor principal de 200 MP, y batería de 5000 mAh con carga rápida.",
    features : [
      "Pantalla Dynamic AMOLED 2X de 6.8'' (3088x1440 px)",
      "Procesador Snapdragon 8 Gen 2",
      "Cámara cuádruple: 200 MP (principal) + 12 MP (ultra gran angular) + 10 MP (telefoto) + 10 MP (periscopio)",
      "Batería de 5000 mAh con carga rápida de 45W",
      "Conectividad 5G, Wi-Fi 6E, Bluetooth 5.3",
      "Resistencia al agua y polvo IP68"
    ],
    image: "http://localhost:3000/images/Galaxy-S23/s23.3.jpg"
  },
  {
    id: 201,
    name: "IPhone 16e",
    category: "Celulares",
    status: "in-stock",
    store: 8,
    comments : [],
    price: [
      { storage: "128 GB", amount: 21999 },
      { storage: "256 GB", amount: 23999 },
      { storage: "512 GB", amount: 26999 }
    ],
    discount: 0,
    colors: [
      { name: "Negro Iphone-16e", 
        images: [
          "http://localhost:3000/images/Iphone-16e/16e1.jpg",
          "http://localhost:3000/images/Iphone-16e/16e2.jpg",
          "http://localhost:3000/images/Iphone-16e/16e3.jpg"
      ] }
    ],
    description: "Pantalla OLED Super Retina XDR de 6.1'' con Dynamic Island, chip A16 Bionic y cámara principal de 48 MP con USB‑C.",
    features: [
      "Pantalla OLED Super Retina XDR de 6.1'' (2556x1179 px) con Dynamic Island",
      "Chip A16 Bionic",
      "Cámara principal 48 MP + ultra gran angular 12 MP",
      "Cámara frontal 12 MP con autofocus",
      "Video 4K hasta 60 fps y Dolby Vision",
      "Resistencia al agua y polvo IP68",
      "Conectividad 5G, Wi‑Fi 6, Bluetooth 5.3, USB‑C",
      "Almacenamiento: 128 GB, 256 GB, 512 GB"
    ],
    image: "http://localhost:3000/images/Iphone-16e/16e1.jpg"
  },
  {
    id: 202,
    name: "Samsung Z Flip 7",
    category: "Celulares",
    status: "in-stock",
    store: 6,
    comments : [],
    price: [
      { storage: "256 GB", amount: 32999 },
      { storage: "512 GB", amount: 34799 }
    ],
    discount: 0,
    colors: [
      { name: "Azul Samsung Z Flip 7",
         images: [
          "http://localhost:3000/images/Samsung-Z-Flip-7/flip-azul-3.jpeg",
          "http://localhost:3000/images/Samsung-Z-Flip-7/flip-azul.jpg",
         ] },
      { name: "Coral Samsung Z Flip 7", 
        images: [
          "http://localhost:3000/images/Samsung-Z-Flip-7/flip-coral-3.jpg",
          "http://localhost:3000/images/Samsung-Z-Flip-7/flip-coral.webp"
        ] },
      { name: "Negro Samsung Z Flip 7", 
        images: [
          "http://localhost:3000/images/Samsung-Z-Flip-7/flip-negro-2.jpg",
          "http://localhost:3000/images/Samsung-Z-Flip-7/flip-negro.png"
        ] }
    ],
    description: "El Samsung Galaxy Z Flip 7 es el smartphone plegable más avanzado de su categoría, con una pantalla principal Dynamic AMOLED 2X de 6.9 pulgadas que se pliega perfectamente en tu bolsillo. Cuenta con la revolucionaria FlexWindow de 4.1 pulgadas edge-to-edge, la más grande en un Galaxy Z Flip, permitiéndote hacer más sin abrir el teléfono. Equipado con el procesador Exynos 2500 de 3nm optimizado para Galaxy AI, ofrece un rendimiento excepcional para multitarea, gaming y fotografía. Su sistema de cámara dual de 50MP + 12MP captura fotos y videos con calidad flagship en cualquier condición de iluminación. Con clasificación IP48, diseño premium en Armor Aluminum y Corning Gorilla Glass Victus 2, batería de 4,300 mAh con carga rápida de 25W, y Android 16 con One UI 8, el Galaxy Z Flip 7 redefine la innovación móvil.",
    features: [
        "Pantalla principal Dynamic AMOLED 2X de 6.9'' (2520 x 1080 px) con tasa de refresco adaptativa de 1-120Hz",
        "FlexWindow Super AMOLED de 4.1'' (720 x 748 px) edge-to-edge con Vision Booster",
        "Procesador: Exynos 2500 de 3nm optimizado para Galaxy AI",
        "RAM: 12 GB LPDDR5X",
        "Almacenamiento: 256 GB / 512 GB UFS 4.0 (no expandible)",
        "Cámara trasera dual: 50MP Wide (f/1.8, OIS, Dual Pixel AF) + 12MP Ultra-Wide",
        "Cámara frontal: 10MP (f/2.2, FOV 85°)",
        "Batería: 4,300 mAh con carga rápida 25W (50% en 30 min), carga inalámbrica 2.0 y PowerShare",
        "Brillo máximo: 2,600 nits en ambas pantallas",
        "Enhanced Nightography con grabación 10-bit HDR",
        "Clasificación IP48 resistente a agua y polvo",
        "Corning Gorilla Glass Victus 2 + Armor Aluminum",
        "Sistema operativo: Android 16 con One UI 8",
        "Conectividad: 5G, Wi-Fi 7, Bluetooth 5.4, NFC",
        "Sensor de huella dactilar capacitivo lateral",
        "Dimensiones plegado: 71.9 x 85.1 x 14.9 mm",
        "Dimensiones desplegado: 71.9 x 165.1 x 6.9 mm",
        "Peso: 187 gramos",
        "Colores disponibles: Negro espacial, Plateado, Azul, Morado"
    ],
    image: "http://localhost:3000/images/Samsung-Z-Flip-7/flip-azul.jpg"
  },
  {
    id: 203,
    name: "Iphone 17 Pro Max",
    category: "Celulares",
    status: "in-stock",
    store: 10,
    comments : [
      {
        user: "AnaP",
        comment: "Muy buen rendimiento y la batería dura todo el día."
      }
    ],
    price: [
       {
            storage: "256 GB",
            amount: 43990
        },
        {
            storage: "512 GB",
            amount: 48490
        },
        {
            storage: "1 TB",
            amount: 56990
        },
        {
            storage: "2 TB",
            amount: 65490
        }
    ],
    discount: 0,
    colors: [
      { name: "Azul Iphone 17 Pro Max", 
        images: [
          "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-azul-2.jpg",
          "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-azul-3.jpg",
          "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-azul.jpg"
        ] },
      { name: "Naranja Iphone 17 Pro Max", 
        images: [
          "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-naranja-2.jpg",
          "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-naranja-3.avif",
          "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-naranja.webp"
        ] }
    ],
    description: "El iPhone 17 Pro Max combina la potencia del chip A19 Pro con 12GB de RAM, pantalla Super Retina XDR de 6.9 pulgadas con brillo de 3000 nits, y un sistema de cámara Pro Fusion de 48MP con zoom 5x. Batería de 5088 mAh, Dynamic Island, ProMotion 120Hz, construcción en titanio aeroespacial, y disponible hasta con 2TB de almacenamiento. El smartphone más avanzado con iOS 26 y Apple Intelligence.",
    features: [
        "Pantalla Super Retina XDR de 6.9'' (2868 x 1320 px) con tecnología ProMotion adaptativa 1-120Hz",
        "Brillo: 1000 nits típico, 1600 nits HDR, 3000 nits pico exterior, 1 nit mínimo",
        "Procesador: Apple A19 Pro de 3nm con Neural Engine de 16 núcleos",
        "RAM: 12 GB LPDDR5X",
        "Sistema de cámara Pro Fusion 48MP: Main (ƒ/1.78) + Ultra Wide (ƒ/2.2) + Telephoto (ƒ/2.8, zoom óptico 5x)",
        "Grabación de video: 4K@24/25/30/60/100/120fps con Dolby Vision HDR, ProRes, audio y video espacial 3D",
        "Photonic Engine, Deep Fusion, Smart HDR 5, ProRAW, Night Mode",
        "Dynamic Island con notificaciones y controles interactivos",
        "Camera Control con ajustes táctiles de exposición, profundidad, zoom y estilos",
        "Conectividad: 5G mmWave/Sub-6GHz, Wi-Fi 7 (802.11be), Bluetooth 5.4, UWB de segunda generación",
        "USB-C con soporte USB 3 (hasta 10Gb/s), DisplayPort, carga bidireccional",
        "Dual eSIM activo (almacena 8+ eSIMs, sin bandeja SIM física)",
        "Material: Titanio aeroespacial grado 5 con Ceramic Shield",
        "Sistema operativo: iOS 26 con Apple Intelligence",
        "Colores: Plata, Cosmic Orange, Deep Blue"
    ],
    image: "http://localhost:3000/images/Iphone-17-Pro-Max/iphone-17pm-azul.jpg"
  },
  {
    id: 204,
    name: "Dell Laptop Inspiron 16 5640",
    category: "Computadoras",
    status: "in-stock",
    store: 6,
    comments: [],
    price: [
      { storage: "1 TB", amount: 16080 },
    ],
    discount: 0,
    colors: [
      { name: "Azul-Inspiron", images:
         ["http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-AzulMedianoche1.jpg",
         "http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-AzulMedianoche2.jpg",
         "http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-AzulMedianoche3.jpg"
      ] },
      { name: "Negro-Inspiron", images: ["http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-NegroCarbon.jpg",
        "http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-NegroCarbon2.jpg",
        "http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-NegroCarbon3.jpg"
      ] }
    ],
    description: "Diseño delgado y portátil, pantalla FHD+ de 14 pulgadas (1920 x 1200), rendimiento de última generación con procesador Intel Core i7-150U y USB-C.",
    features: [
    "Pantalla FHD+ de 14'' (1920 x 1200) con alta definición",
    "Procesador Intel Core i7-150U de última generación",
    "Gráficos Intel integrados",
    "Wi-Fi y Bluetooth integrados",
    "USB‑C, HDMI, y lector de tarjetas microSD",
    "Almacenamiento SSD de 1 TB, RAM DDR5 de 16 GB",
    "Audio estéreo",
    "Windows 11 Home con funciones de seguridad y productividad"
    ],
    image: "http://localhost:3000/images/Dell-Laptop-Inspiron-16-5640/Dell-AzulMedianoche1.jpg"
  },
  {
    id: 205,
    name: "Apple MacBook Air",
    category: "Computadoras",
    status: "in-stock",
    store: 8,
    comments: [],
    price: [
      { storage: "256 GB", amount: 9300 },
      { storage: "512 GB", amount: 15800 }
    ],
    discount: 0,
    colors: [
      { name: "Gris-MacBook", images: 
        ["http://localhost:3000/images/Apple-MacBook-Air/MacBookAir-GrisEspacial1.jpg",
        "http://localhost:3000/images/Apple-MacBook-Air/MacBookAir-GrisEspacial2.jpg",
        "http://localhost:3000/images/Apple-MacBook-Air/MacBookAir-GrisEspacial3.jpg"
      ] },
      { name: "Oro-Macbook", images: 
        ["http://localhost:3000/images/Apple-MacBook-Air/MacBook-Oro1.jpg",
        "http://localhost:3000/images/Apple-MacBook-Air/MacBook-Oro2.jpg",
        "http://localhost:3000/images/Apple-MacBook-Air/MacBook-Oro3.jpg"
      ] },
      { name: "Plateado-Macbook", images:
         ["http://localhost:3000/images/Apple-MacBook-Air/MacBook-Plateado1.jpg",
        "http://localhost:3000/images/Apple-MacBook-Air/MacBook-Plateado2.jpg",
        "http://localhost:3000/images/Apple-MacBook-Air/MacBook-Plateado3.jpg"
      ] }
    ],
    description: "Diseño ligero con pantalla Retina de 13 pulgadas, rendimiento eficiente y USB‑C. Ideal para tareas diarias con almacenamiento SSD rápido.",
    features: [
      "Pantalla Retina de 13'' con resolución nítida",
    "Procesador Intel Core i3 de 1.1 GHz (2020)",
    "Gráficos Intel integrados",
    "Video HD",
    "Wi‑Fi y Bluetooth",
    "USB‑C para datos y carga",
    "Almacenamiento: 256 GB o 512 GB SSD",
    "Audio estéreo integrado",
    "macOS con funciones de privacidad y productividad"
    ],
    image: "http://localhost:3000/images/Apple-MacBook-Air/MacBookAir-GrisEspacial1.jpg"
  },
  {
    id: 206,
    name: "Microsoft Surface Laptop 4",
    category: "Computadoras",
    status: "in-stock",
    store: 6,
    comments: [],
    price: [
      { storage: "512 GB", amount: 18300 },
    ],
    discount: 0,
    colors: [
      { name: "Platinado-Surface", images:
         ["http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Platinado1.jpg",
        "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Platinado2.jpg",
        "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Platinado3.jpg"
      ] },
      { name: "Azul-Surface", images:
         ["http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Azul1.jpg",
        "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Azul2.jpg",
        "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Azul3.jpg"
      ] },
      { name: "Negro-Surface", images:
         ["http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Negro1.jpg",
        "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Negro2.jpg",
        "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Negro3.jpg"  
      ] }
    ],
    description: "Computadora portátil ultradelgada con pantalla táctil de alta resolución, potencia profesional y SSD de 512 GB.",
    features: [
    "Pantalla táctil de 13.5 pulgadas con alta resolución",
    "Procesador Intel Core i7 de última generación",
    "Gráficos Intel Iris Xe integrados",
    "Cámara HD frontal integrada",
    "Batería de larga duración con carga rápida",
    "Wi-Fi, Bluetooth y USB‑C",
    "Desbloqueo facial con Windows Hello",
    "Almacenamiento: 512 GB SSD",
    "Audio Omnisonic con micrófonos de campo lejano",
    "Windows 11 Home con funciones de productividad y seguridad"
    ],
    image: "http://localhost:3000/images/Microsoft-Surface-Laptop-4/Microsoft-Platinado1.jpg"
  },
  {
    id: 207,
    name: "Beats Solo 4",
    category: "Audífonos",
    status: "in-stock",
    store: 10,
    comments: [],
    price: 3400,
    discount: 0,
    colors: [
      { name: "Negro-Beats", images: 
        ["http://localhost:3000/images/Beats-Solo-4/Beat-Negro1.jpg",
        "http://localhost:3000/images/Beats-Solo-4/Beat-Negro2.jpg",
        "http://localhost:3000/images/Beats-Solo-4/Beat-Negro3.jpg"
      ] },
      { name: "Rosado-Beats", images:
         ["http://localhost:3000/images/Beats-Solo-4/Beat-Rosa1.jpg",
          "http://localhost:3000/images/Beats-Solo-4/Beat-Rosa2.jpg",
          "http://localhost:3000/images/Beats-Solo-4/Beat-Rosa3.jpg"
      ] },
      { name: "Azul-Beats", images: 
        ["http://localhost:3000/images/Beats-Solo-4/Beat-Azul1.jpg",
          "http://localhost:3000/images/Beats-Solo-4/Beat-Azul2.jpg",
          "http://localhost:3000/images/Beats-Solo-4/Beat-Azul3.jpg"
        ] }
    ],
    description: "Auriculares inalámbricos con diseño cómodo, Bluetooth de alta eficiencia y hasta 50 horas de batería. Compatibles con dispositivos Apple y Android.",
    features: [
      "Sonido acústico optimizado para música y llamadas",
    "Hasta 50 horas de duración de batería",
    "Bluetooth multipunto para conexión rápida",
    "Compatibilidad universal con Apple y Android",
    "Modo Fast Fuel: carga rápida para 3 horas de uso en solo 5 minutos",
    "Micrófono integrado para llamadas y comandos de voz",
    "Controles físicos en el auricular",
    "Disponible en varios colores"
    ],
    image: "http://localhost:3000/images/Beats-Solo-4/Beat-Negro1.jpg"
  },
  {
    id: 208,
    name: "Sony WH-CH520",
    category: "Audífonos",
    status: "in-stock",
    store: 9,
    comments: [],
    price: 999,
    discount: 0,
    colors: [
      { name: "Blanco-Sony", images: 
        ["http://localhost:3000/images/Sony-WH-CH520/Sony-Blanco1.jpg",
          "http://localhost:3000/images/Sony-WH-CH520/Sony-Blanco2.jpg",
          "http://localhost:3000/images/Sony-WH-CH520/Sony-Blanco3.jpg"
        ] },
      { name: "Azul-Sony", images: 
        ["http://localhost:3000/images/Sony-WH-CH520/Sony-Azul1.jpg",
          "http://localhost:3000/images/Sony-WH-CH520/Sony-Azul2.jpg",
          "http://localhost:3000/images/Sony-WH-CH520/Sony-Azul3.jpg"
        ] },
      { name: "Rosado-Sony", images: 
        ["http://localhost:3000/images/Sony-WH-CH520/Sony-Rosa1.jpg",
          "http://localhost:3000/images/Sony-WH-CH520/Sony-Rosa2.jpg",
          "http://localhost:3000/images/Sony-WH-CH520/Sony-Rosa3.jpg"
      ] }
    ],
    description: "Auriculares inalámbricos Bluetooth con micrófono, batería de larga duración y carga rápida, ideales para llamadas y música.",
    features: [
      "Hasta 50 horas de duración de batería",
    "Carga rápida: 3 minutos para 1.5 horas de reproducción",
    "Micrófono integrado para llamadas manos libres",
    "Bluetooth multipunto para conectar varios dispositivos",
    "Diseño ligero y cómodo",
    "Compatibilidad universal con Apple, Android y Windows",
    "Control de música, volumen y llamadas en el auricular",
    "Disponible en varios colores"
    ],
    image: "http://localhost:3000/images/Sony-WH-CH520/Sony-Blanco1.jpg"
  },
  {
    id: 209,
    name: "Soundcore P30i",
    category: "Audífonos",
    status: "in-stock",
    store: 12,
    comments: [],
    price: 660,
    discount: 0,
    colors: [
      { name: "Negro-Sound", images:
         ["http://localhost:3000/images/Soundcore-P30i/Sound-Negro1.jpg",
          "http://localhost:3000/images/Soundcore-P30i/Sound-Negro2.jpg",
          "http://localhost:3000/images/Soundcore-P30i/Sound-Negro3.jpg"
         ] },
      { name: "Blanco-Sound", images:
         ["http://localhost:3000/images/Soundcore-P30i/Sound-Blanco1.jpg",
          "http://localhost:3000/images/Soundcore-P30i/Sound-Blanco2.jpg",
          "http://localhost:3000/images/Soundcore-P30i/Sound-Blanco3.jpg"
         ] },
      { name: "Azul-Sound", images: 
        ["http://localhost:3000/images/Soundcore-P30i/Sound-Azul1.jpg",
          "http://localhost:3000/images/Soundcore-P30i/Sound-Azul2.jpg",
          "http://localhost:3000/images/Soundcore-P30i/Sound-Azul3.jpg"
        ] }
    ],
    description: "Auriculares intraurales inalámbricos con cancelación de ruido inteligente, graves potentes y batería de larga duración. Incluyen funda 2 en 1 y son compatibles con teléfono móvil.",
    features: [
    "Cancelación activa e inteligente de ruido",
    "Graves potentes y sonido de alta calidad",
    "Micrófono integrado para llamadas",
    "Hasta 45 horas de duración de batería con estuche de carga",
    "Funda 2 en 1 para carga y soporte para teléfono",
    "Bluetooth multipunto para conexión rápida",
    "Resistentes al agua y sudor",
    "Compatibilidad universal con Android y iOS"
    ],
    image: "http://localhost:3000/images/Soundcore-P30i/Sound-Negro1.jpg"
  },
  {
    id: 210,
    name: "Xiaomi Mi Smart Band 10",
    category: "Relojes Inteligentes",
    status: "in-stock",
    store: 12,
    comments: [],
    price: 1420,
    discount: 0,
    colors: [
      { name: "Negro-Band", images:
         ["http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Negra1.jpg",
          "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Negra2.jpg",
          "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Negra3.jpg"
         ] },
      { name: "Blanco-Band", images:
         ["http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Blanco1.jpg",
          "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Blanco2.jpg",
          "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Blanco3.jpg"
         ] },
          { name: "Rosa-Band", images:
         ["http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Rosa1.jpg",
          "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Rosa2.jpg",
          "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Rosa3.jpg"
         ] }
    ],
    description: "Pulsera inteligente con pantalla AMOLED de 1.72 pulgadas, duración de batería de hasta 21 días, seguimiento integral de actividad y deportes.",
    features: [
    "Pantalla táctil AMOLED de 1.72 pulgadas",
    "Hasta 21 días de duración de batería",
    "Rastreador de pasos, calorías y frecuencia cardiaca",
    "Modo multideporte y monitor de actividad diaria",
    "Resistencia al agua",
    "Conectividad Bluetooth",
    "Compatibilidad con Android y iOS",
    "Notificaciones inteligentes",
    "Control del sueño y bienestar"
    ],
    image: "http://localhost:3000/images/Xiaomi-Mi-Smart-Band-10/Band-Negra1.jpg"
  },
  {
    id: 211,
    name: "Apple Watch Serie 11",
    category: "Relojes Inteligentes",
    status: "in-stock",
    store: 8,
    comments: [],
    price: 9184,
    discount: 0,
    colors: [
      { name: "Negro-Watch", images: 
        ["http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Negro1.jpg",
          "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Negro2.jpg",
          "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Negro3.jpg"
        ]},
      { name: "Blanco-Watch", images:
         ["http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Rosa1.jpg",
          "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Rosa2.jpg",
          "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Rosa3.jpg"
         ]},
          { name: "Gris-Watch", images:
         ["http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Gris1.jpg",
          "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Gris2.jpg",
          "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Gris3.jpg"
         ]}
    ],
    description: "Reloj inteligente con GPS, pantalla táctil de alta resolución, seguimiento avanzado de sueño y deportes, control de salud y aluminio de diseño elegante.",
    features: [
    "Pantalla táctil de 1.654 pulgadas (alta resolución)",
    "Sensor avanzado de ritmo cardíaco y oxígeno",
    "GPS integrado para rutas deportivas",
    "Seguimiento de sueño y monitoreo de fitness",
    "Resistencia al agua",
    "Notificaciones inteligentes y llamadas desde la muñeca",
    "Compatible con Apple iPhone",
    "Modo deporte multiactividad",
    "Diseño ligero en aluminio oro rosa",
    "Correa deportiva ajustable"
    ],
    image: "http://localhost:3000/images/Apple-Watch-Serie-11/Watch-Negro1.jpg"
  },
  {
    id: 212,
    name: "Monitor ASUS TUF Gaming 25",
    category: "Monitores",
    status: "in-stock",
    store: 10,
    comments: [],
    price: 7857,
    discount: 0,
    colors: [
      { name: "Negro-Asus", images: 
      [
        "http://localhost:3000/images/ASUS-TUF-Gaming-25/Asus-Negro1.jpg",
        "http://localhost:3000/images/ASUS-TUF-Gaming-25/Asus-Negro2.jpg",
        "http://localhost:3000/images/ASUS-TUF-Gaming-25/Asus-Negro3.jpg"

      ] }
    ],
    description: "Monitor para juegos de 25 pulgadas con frecuencia de actualización ultra rápida, colores intensos y bajo desenfoque de movimiento. Perfecto para gaming competitivo.",
    features: [
    "Pantalla IPS rápida de 25'' Full HD (1920x1080)",
    "Frecuencia de actualización 310 Hz",
    "Tiempo de respuesta de 1 ms",
    "Tecnología FreeSync para sincronización y fluidez",
    "Cobertura de color sRGB 99%",
    "Desenfoque de movimiento extremadamente bajo",
    "Altavoces integrados",
    "Modo gaming optimizado",
    "Conectividad HDMI y DisplayPort",
    "Diseño ajustable y resistente"
    ],
    image: "http://localhost:3000/images/ASUS-TUF-Gaming-25/Asus-Negro1.jpg"
  },
  {
    id: 213,
    name: "Monitor Acer Nitro",
    category: "Monitores",
    status: "in-stock",
    store: 9,
    comments: [],
    price: 4000,
    discount: 0,
    colors: [
      { name: "Color 1", images: 
        [
          "http://localhost:3000/images/Acer-Nitro/Acer-Negro1.jpg",
          "http://localhost:3000/images/Acer-Nitro/Acer-Negro2.jpg",
          "http://localhost:3000/images/Acer-Nitro/Acer-Negro3.jpg"
        ] }
    ],
    description: "Monitor de 27 pulgadas IPS con resolución QHD, frecuencia de actualización de hasta 180 Hz y tecnología FreeSync para juegos fluidos y detallados.",
    features: [
    "Pantalla IPS de 27'' QHD Wide (2560 x 1440)",
    "Frecuencia de actualización hasta 180 Hz",
    "Tiempo de respuesta ultra rápido de 0.5 ms",
    "Cobertura de color DCI-P3 95%",
    "Soporte HDR 10 para mayor rango dinámico",
    "AMD FreeSync para sincronización",
    "Relación de aspecto 16:9",
    "Superficie de pantalla brillante",
    "Conectividad: un puerto DisplayPort 1.2 y dos HDMI",
    "Modo gaming optimizado"
    ],
    image: "http://localhost:3000/images/Acer-Nitro/Acer-Negro1.jpg"
  },
  {
    id: 408,
    name: "Samsung Galaxy Tab A9",
    category: "Tablets",
    status: "in-stock",
    store: 7,
    comments: [],
    price: [
      { storage: "64 GB", amount: 3900 },
      { storage: "128 GB", amount: 4700 }
    ],
    discount: 0,
    colors: [
      { name: "Gris-Tab", images: [
        "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Gris1.jpg",
        "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Gris2.jpg",
        "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Gris3.jpg"
      ] },
      { name: "Blanco-Tab", images: [
        "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Blanco1.jpg",
        "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Blanco2.jpg",
        "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Blanco3.jpg"
      ] }
    ],
    description: "Tableta Android de 11 pulgadas con pantalla grande, sonido envolvente y diseño ligero, ideal para entretenimiento y productividad.",
    features: [
     "Pantalla grande de 11'' (1340 x 800 px)",
    "Altavoces cuádruples Dolby Atmos",
    "Almacenamiento: 64 GB o 128 GB (expandible con microSD)",
    "Memoria RAM: 4 GB (64GB) / 8 GB (128GB)",
    "Procesador Snapdragon mejorado",
    "Cámara trasera de 8 MP y frontal de 5 MP",
    "Batería de larga duración (7040 mAh)",
    "Wi-Fi de doble banda, Bluetooth 5.1",
    "Diseño delgado y liviano",
    "Android 13 y modo multiventana"
    ],
    image: "http://localhost:3000/images/Samsung-Galaxy-Tab-A9/Tab-Blanco1.jpg"
  },
  {
    id: 409,
    name: "Apple Ipad Air 5",
    category: "Tablets",
    status: "in-stock",
    store: 6,
    comments: [],
    price: [
      { storage: "64 GB", amount: 14460 },
      { storage: "256 GB", amount: 16500 }
    ],
    discount: 0,
    colors: [
      { name: "Negro-IpadAir", images: 
        ["http://localhost:3000/images/Apple-Ipad-Air/Ipad-Negra1.jpg",
          "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Negra2.jpg",
          "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Negra3.jpg"
        ] },
        { name: "Azul-IpadAir", images: 
        ["http://localhost:3000/images/Apple-Ipad-Air/Ipad-Azul1.jpg",
          "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Azul2.jpg",
          "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Azul3.jpg"
        ] },
        { name: "Rosa-IpadAir", images: 
        ["http://localhost:3000/images/Apple-Ipad-Air/Ipad-Rosa1.jpg",
          "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Rosa2.jpg",
          "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Rosa3.jpg"
        ] }
    ],
    description: "Tablet premium con pantalla Liquid Retina de 10.9 pulgadas, procesador M1, gran autonomía y opciones avanzadas para productividad y entretenimiento.",
    features: [
     "Pantalla Liquid Retina 10.9'' (2360 x 1640)",
    "Procesador Apple M1 [finance:Apple Inc.]",
    "Cámara trasera de 12 MP, frontal de 12 MP (Center Stage)",
    "Almacenamiento: opciones de 64 GB y 256 GB",
    "Conectividad Wi-Fi 6, Bluetooth 5.0",
    "Touch ID integrado en botón superior",
    "Compatible con Apple Pencil (2da generación) y Magic Keyboard",
    "Batería de larga duración (hasta 10 horas de uso)",
    "Sistema operativo iPadOS",
    "Puerto USB‑C para carga y datos"
    ],
    image: "http://localhost:3000/images/Apple-Ipad-Air/Ipad-Negra1.jpg"
  },
  {
    id: 410,
    name: "Logitech MX Master 3S",
    category: "Ratones",
    status: "in-stock",
    store: 4,
    comments : [],
    price:2899,
    discount: 0,
    colors: [
      { name: "Negro Logitech MX Master 3S", 
        images: [
          "http://localhost:3000/images/Logitech-MX-Master-3S/51m4354BqaL._AC_SL1500_.jpg",
          "http://localhost:3000/images/Logitech-MX-Master-3S/61-sH2TYCjL._AC_SL1500_.jpg",
          "http://localhost:3000/images/Logitech-MX-Master-3S/610aoo6pA7L._AC_SL1500_.jpg"
        ] }
    ],
    description: "El Logitech MX Master 3S es el mouse inalámbrico premium para profesionales, con sensor óptico Darkfield de 8000 DPI que funciona en cualquier superficie, incluso vidrio. Cuenta con 7 botones personalizables, rueda MagSpeed electromagnética con desplazamiento de hasta 1000 líneas por segundo, clicks 90% más silenciosos, y batería recargable de 70 días. Compatible con hasta 3 dispositivos mediante Bluetooth y Logi Bolt, incluye Logi Flow para trabajar entre múltiples computadoras y diseño ergonómico con construcción premium.",
    features: [
      "Sensor óptico Darkfield de alta precisión: 200-8000 DPI ajustables",
    "Funciona en cualquier superficie, incluso vidrio transparente",
    "7 botones programables personalizables con Logi Options+",
    "Rueda MagSpeed electromagnética: hasta 1000 líneas/segundo con Smart-Shift",
    "Rueda lateral horizontal para navegación multidireccional",
    "Clicks silenciosos: 90% reducción de ruido vs modelos anteriores",
    "Batería recargable Li-Po 500mAh: hasta 70 días de uso",
    "Carga rápida USB-C: 1 min = 3 horas, carga completa en 2 horas",
    "Conectividad: Bluetooth Low Energy y receptor Logi Bolt USB",
    "Easy-Switch: conecta hasta 3 dispositivos simultáneamente",
    "Logi Flow: controla múltiples computadoras y transfiere archivos",
    "Diseño ergonómico para mano derecha con recubrimiento antideslizante",
    "Dimensiones: 124.9 x 84.3 x 51 mm",
    "Peso: 141 gramos",
    "Compatible con Windows, macOS, Linux, Chrome OS"
    ],
    image: "http://localhost:3000/images/Logitech-MX-Master-3S/51m4354BqaL._AC_SL1500_.jpg"
  },
   {
    id: 411,
    name: "M110-Silent-910",
    category: "Ratones",
    status: "in-stock",
    store: 22,
    comments : [],
    price:249,
    discount: 0,
    colors: [
      { name: "Blanco M110-Silent-910", 
        images: [
          "http://localhost:3000/images/M110-Silent-910/Silent1.jpg",
          "http://localhost:3000/images/M110-Silent-910/Silent2.jpg",
          "http://localhost:3000/images/M110-Silent-910/Silent1.jpg"
        ] }
    ],
    description: "El Logitech M110 Silent es un mouse con cable USB ideal para oficina y uso diario, con clicks silenciosos que reducen el ruido en 90% manteniendo la sensación táctil familiar. Su diseño ambidiestro ergonómico es cómodo tanto para diestros como zurdos, con sensor óptico de 1000 DPI para seguimiento preciso. Conexión plug-and-play sin necesidad de software, compatible con Windows, macOS y Linux. Construcción duradera y confiable para uso intensivo.",
    features: [
      "Clicks silenciosos: 90% reducción de ruido sin perder sensación táctil",
    "Sensor óptico: 1000 DPI para seguimiento preciso",
    "3 botones: Click izquierdo/derecho silenciosos + rueda central",
    "Diseño ambidiestro ergonómico para uso con ambas manos",
    "Conexión: cable USB tipo A de 1.8 metros",
    "Plug-and-play: sin necesidad de software ni drivers",
    "Dimensiones: 112.96 x 61.7 x 38.4 mm",
    "Peso: 85 gramos (ultraligero)",
    "Compatible con Windows, macOS, Linux",
    "Construcción duradera para uso diario intensivo"
    ],
    image: "http://localhost:3000/images/M110-Silent-910/Silent1.jpg"
  },
]