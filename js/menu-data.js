const RESTAURANT = {
  name: "Airah PlayZone 9",
  nameUrdu: "عیرا پلے زون نائن",
  tagline: "Gaming Gear • Headsets • RGB Fans • Cables",
  address: "Main Boulevard, Lahore",
  mapUrl: "https://maps.google.com/?q=Lahore",
  whatsapp: "923150445168",
  logoImg: "AiraPlayz.png",
  nameFont: "Bebas Neue",
  poweredBy: "Qalbi Studio",

  delivery: { charge: 200, freeAbove: 5000, note: "Rs 5,000+ par FREE delivery" },

  categories: [
    "Headsets",
    "Keyboards & Mice",
    "Controllers",
    "Fans & Cooling",
    "Cables & Accessories"
  ],

  items: [
    { id: 1, cat: "Headsets", emoji: "🎧", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/S%C5%82uchawki_referencyjne_K-701_firmy_AKG.jpg/330px-S%C5%82uchawki_referencyjne_K-701_firmy_AKG.jpg", name: "Gaming Headset 7.1", nameUrdu: "گیمنگ ہیڈ سیٹ", desc: "Surround sound, RGB, mic", price: 3500, popular: true },
    { id: 2, cat: "Headsets", emoji: "🎧", name: "Wireless Gaming Headset", nameUrdu: "وائرلیس ہیڈ سیٹ", desc: "30hr battery, 2.4GHz", price: 6500, popular: true },
    { id: 3, cat: "Headsets", emoji: "🎧", name: "Wired Gaming Headset", nameUrdu: "وائرڈ ہیڈ سیٹ", desc: "3.5mm jack, padded", price: 1800 },
    { id: 4, cat: "Headsets", emoji: "🎧", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/JH16_Pro.png/330px-JH16_Pro.png", name: "Gaming Earbuds", nameUrdu: "گیمنگ ایئر بڈز", desc: "Low latency, charging case", price: 2200 },

    { id: 5, cat: "Keyboards & Mice", emoji: "⌨️", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Typing_example.ogv/330px--Typing_example.ogv.jpg", name: "Mechanical Keyboard RGB", nameUrdu: "میکانیکل کی بورڈ", desc: "Hot-swappable, blue switches", price: 5500, popular: true },
    { id: 6, cat: "Keyboards & Mice", emoji: "🖱️", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/330px-3-Tasten-Maus_Microsoft.jpg", name: "Gaming Mouse RGB", nameUrdu: "گیمنگ ماوس", desc: "6400 DPI, 6 buttons", price: 2800, popular: true },
    { id: 7, cat: "Keyboards & Mice", emoji: "🖱️", name: "Wireless Mouse", nameUrdu: "وائرلیس ماوس", desc: "Silent click, USB dongle", price: 1900 },
    { id: 8, cat: "Keyboards & Mice", emoji: "🟪", name: "RGB Mousepad XL", nameUrdu: "ماؤس پیڈ", desc: "900x400, stitched edge", price: 1500 },

    { id: 9, cat: "Controllers", emoji: "🎮", name: "PS5 DualSense Controller", nameUrdu: "پی ایس 5 کنٹرولر", desc: "Haptic, adaptive triggers", price: 8500, popular: true },
    { id: 10, cat: "Controllers", emoji: "🎮", name: "Xbox Wireless Controller", nameUrdu: "ایکس باکس کنٹرولر", desc: "Bluetooth + USB-C", price: 7500 },
    { id: 11, cat: "Controllers", emoji: "🎮", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/SNES-Controller-in-Hand.jpg/330px-SNES-Controller-in-Hand.jpg", name: "Universal Gamepad", nameUrdu: "یونیورسل گیم پیڈ", desc: "PC / Android / Smart TV", price: 2200 },
    { id: 12, cat: "Controllers", emoji: "📱", name: "Mobile Game Triggers", nameUrdu: "موبائل گیمنگ ٹرگر", desc: "Pair, cooling fan", price: 600 },

    { id: 13, cat: "Fans & Cooling", emoji: "🌀", name: "RGB Case Fan 120mm", nameUrdu: "آر جی بی فین", desc: "ARGB, quiet bearing", price: 900, popular: true },
    { id: 14, cat: "Fans & Cooling", emoji: "❄️", name: "CPU Air Cooler", nameUrdu: "سی پی یو کولر", desc: "4 heatpipes, RGB fan", price: 3500 },
    { id: 15, cat: "Fans & Cooling", emoji: "🌬️", name: "Laptop Cooling Pad", nameUrdu: "لیپ ٹاپ کولنگ پیڈ", desc: "5 fans, adjustable", price: 2200 },
    { id: 16, cat: "Fans & Cooling", emoji: "🔌", name: "ARGB Fan Controller", nameUrdu: "فین کنٹرولر", desc: "6 ports, remote", price: 1500 },

    { id: 17, cat: "Cables & Accessories", emoji: "🔌", name: "USB-C Cable 1.5m", nameUrdu: "ی ایس بی کیبل", desc: "100W, braided nylon", price: 500, popular: true },
    { id: 18, cat: "Cables & Accessories", emoji: "🔗", name: "HDMI 2.1 Cable 2m", nameUrdu: "HDMI کیبل", desc: "4K 120Hz, gold plated", price: 900 },
    { id: 19, cat: "Cables & Accessories", emoji: "🔌", name: "4-Port USB Hub", nameUrdu: "USB ہب", desc: "USB 3.0, plug & play", price: 1200 },
    { id: 20, cat: "Cables & Accessories", emoji: "⚡", name: "Power Strip 4-Way", nameUrdu: "پاور اسٹرپ", desc: "Surge protection", price: 1200 },
    { id: 21, cat: "Cables & Accessories", emoji: "🎧", name: "Aux Cable 3m", nameUrdu: "آکس کیبل", desc: "Braided, gold tips", price: 350 },
    { id: 22, cat: "Cables & Accessories", emoji: "💻", name: "Laptop Stand", nameUrdu: "لیپ ٹاپ اسٹینڈ", desc: "Aluminum, foldable", price: 1500 },
    { id: 23, cat: "Cables & Accessories", emoji: "🎚️", name: "Headset Stand", nameUrdu: "ہیڈ سیٹ اسٹینڈ", desc: "RGB base, USB ports", price: 1300 }
  ]
};
