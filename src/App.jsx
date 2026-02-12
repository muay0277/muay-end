import heroImg from "../public/images/hero.jpg";

import { useEffect, useState } from "react";
import "./App.css";

const NAV = [
  { id: "home", label: "ໜ້າຫຼັກ" },
  { id: "why", label: "ເລືອກເຮົາ" },
  { id: "features", label: "ຟັງຊັນ" },
  { id: "solutions", label: "ໂຊລູຊັນ" },
  { id: "hardware", label: "ອຸປະກອນ" },
  { id: "process", label: "ຂັ້ນຕອນ" },
  { id: "pricing", label: "ແພັກເກັດ" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "ຕິດຕໍ່" },
];

const STATS = [
  { num: "99%", label: "Customer Satisfaction" },
  { num: "24/7", label: "Support" },
  { num: "50+", label: "Projects Delivered" },
  { num: "1–3 ມື້", label: "Go-live (ໂດຍສະເລ່ຍ)" },
];

const WHY = [
  {
    icon: "✨",
    title: "ດູແລຄົບຈົບ",
    desc: "ລະບົບ + ອຸປະກອນ + ຕິດຕັ້ງ + ອົບຮົມ + Support ຕໍ່ເນື່ອງ",
  },
  {
    icon: "⚡",
    title: "ຂາຍໄວ ກົດນ້ອຍ",
    desc: "Flow ຂາຍອອກແບບໃຫ້ພະນັກງານຮຽນໄວ ແລະເຮັດວຽກທັນໃຈ",
  },
  {
    icon: "📊",
    title: "ຂໍ້ມູນຊັດ ຮູ້ກຳໄລ",
    desc: "ລາຍງານຍອດຂາຍ/ກຳໄລ/ສິນຄ້າຂາຍດີ ຊ່ວຍຕັດສິນໃຈໄດ້ຖືກ",
  },
];

const FEATURES = [
  {
    icon: "🧾",
    title: "ຂາຍໜ້າຮ້ານ (POS)",
    desc: "ອອກບິນໄວ, ສ່ວນຫຼຸດ, ພິມ 80mm/A4",
  },
  {
    icon: "📦",
    title: "ຈັດການສາງ",
    desc: "ຕັດສາງອັດຕະໂນມັດ, ແຈ້ງເຕືອນຂອງໃກ້ໝົດ",
  },
  {
    icon: "🏷️",
    title: "Barcode / QR",
    desc: "ສະແກນໄວ ລົດຄວາມຜິດພາດ, ອ່ານຈາກຫນ້າຈໍໄດ້",
  },
  {
    icon: "👥",
    title: "ສະມາຊິກ / Top-up",
    desc: "ສະສົມແຕ້ມ, ໂປຣໂມຊັນ, ກະຕຸ້ນການກັບມາຊື້",
  },
  {
    icon: "🧑‍🍳",
    title: "ຮ້ານອາຫານ/ຄາເຟ່",
    desc: "Table/Zone, ສົ່ງອໍເດີເຂົ້າຄົວ, ແຍກບິນ",
  },
  {
    icon: "📈",
    title: "Reports",
    desc: "ຮູ້ຍອດຂາຍທຸກວັນ, ສິນຄ້າຂາຍດີ, ພະນັກງານ",
  },
];

const SOLUTIONS = [
  { title: "ຮ້ານຄ້າ / ມິນິມາດ", desc: "ຂາຍໄວ • ຕັດສາງ • ໂປຣໂມຊັນ • ປິດຍອດຊັດ" },
  {
    title: "ຮ້ານອາຫານ / ຄາເຟ່",
    desc: "ໂຕະ/Zone • ອໍເດີຄົວ • ແຍກບິນ • QR Menu",
  },
  {
    title: "ຄ້າສົ່ງ / ຄັງສິນຄ້າ",
    desc: "ຮັບເຂົ້າ-ອອກ • ລາຄາສົ່ງ-ປີກ • ລາຍງານກຳໄລ",
  },
];

const HARDWARE = [
  { title: "Scanner 2D", desc: "ສະແກນ Barcode/QR ໄວ • ອ່ານຈາກຫນ້າຈໍໄດ້" },
  { title: "Printer 80mm", desc: "ພິມໃບບິນຄົມ • ໄວ • ທົນທານ" },
  { title: "Cash Drawer", desc: "ລິ້ນຊັກເກັບເງິນ • ແຂງແຮງ • ປອດໄພ" },
];

const PROCESS = [
  {
    step: "01",
    title: "ສຳຫຼວດຮ້ານ",
    desc: "ເຂົ້າໃຈປະເພດຮ້ານ + ຈຸດຂາຍ + ຟັງຊັນທີ່ຕ້ອງການ",
  },
  {
    step: "02",
    title: "Demo ຕົງວຽກ",
    desc: "ຈັດ Demo ໃຫ້ຕາມສິນຄ້າ/ເມນູຈິງ ເພື່ອເຫັນພາບ",
  },
  {
    step: "03",
    title: "ຕິດຕັ້ງ & ຕັ້ງຄ່າ",
    desc: "ລົງລະບົບ, ຕັ້ງຄ່າອຸປະກອນ, ກຳນົດສິດຜູ້ໃຊ້",
  },
  {
    step: "04",
    title: "ອົບຮົມ & Support",
    desc: "ອົບຮົມພະນັກງານ + ມີ Support ຊ່ວຍຕໍ່ເນື່ອງ",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "ເລີ່ມຕົ້ນ",
    desc: "ເໝາະກັບຮ້ານນ້ອຍ ຢາກເລີ່ມໃຊ້ງ່າຍໆ",
    list: ["POS ພື້ນຖານ", "Stock ພື້ນຖານ", "Reports ພື້ນຖານ", "Training 1 ຮອບ"],
    hot: false,
  },
  {
    name: "Business",
    price: "ຄຸ້ມຄ່າ",
    desc: "ເໝາະກັບຮ້ານທີ່ຢາກເຕີບໂຕ ແລະຄວບຄຸມຈິງ",
    list: ["POS + Barcode/QR", "Stock ຄົບ", "Reports ແນ່ນ", "Support ສູງກວ່າ"],
    hot: true,
  },
  {
    name: "Enterprise",
    price: "ປັບຕາມຮ້ານ",
    desc: "ເໝາະກັບຫຼາຍຈຸດຂາຍ/ຫຼາຍສາຂາ ຫຼືມີ workflow ສະເພາະ",
    list: [
      "Multi-branch",
      "Role/Permission",
      "Advanced Reports",
      "Custom Integration",
    ],
    hot: false,
  },
];

const FAQ = [
  {
    q: "ຕິດຕັ້ງໃຊ້ເວລາດົນບໍ?",
    a: "ໂດຍສ່ວນໃຫຍ່ 1–3 ມື້ (ຂຶ້ນກັບຈຳນວນສິນຄ້າ/ຈຸດຂາຍ). ເຮົາຕັ້ງຄ່າ+ອົບຮົມໃຫ້ຈົນໃຊ້ໄດ້.",
  },
  {
    q: "ພະນັກງານຮຽນຍາກບໍ?",
    a: "UI ເນັ້ນກົດນ້ອຍ ແລະມີຄູ່ມື/Support ຊ່ວຍ. ສ່ວນໃຫຍ່ໃຊ້ເປັນໃນ 1 ມື້.",
  },
  {
    q: "Support ມີຈິງບໍ?",
    a: "ມີ: ຊ່ວຍແກ້ໄຂ, ແນະນຳການໃຊ້, ອັບເດດຕາມການເຕີບໂຕຂອງຮ້ານ.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onResize = () => window.innerWidth >= 980 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container header__inner">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Go home"
          >
            <span className="brand__logo">VS</span>
            <span className="brand__text">
              <span className="brand__name">VL Smartgenai</span>
              <span className="brand__tag">POS • IT • Business Solutions</span>
            </span>
          </button>

          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <a
                key={n.id}
                className="nav__link"
                href={`#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.id);
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button className="btn btn--ghost" onClick={() => go("contact")}>
              ຕິດຕໍ່
            </button>
            <button className="btn btn--primary" onClick={() => go("contact")}>
              ຮັບ Demo
            </button>

            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`mobileMenu ${open ? "isOpen" : ""}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="mobileMenu__panel">
            <div className="mobileMenu__top">
              <div className="mobileMenu__title">Menu</div>
              <button
                className="mobileMenu__close"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mobileMenu__links">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  className="mobileMenu__link"
                  onClick={() => go(n.id)}
                >
                  {n.label}
                </button>
              ))}
            </div>

            <div className="mobileMenu__cta">
              <button
                className="btn btn--primary btn--full"
                onClick={() => go("contact")}
              >
                ຂໍ Demo / ຂໍລາຄາ
              </button>
              <div className="hint">✨ ຕິດຕັ້ງ • ອົບຮົມ • Support</div>
            </div>
          </div>

          <div
            className="mobileMenu__backdrop"
            onClick={() => setOpen(false)}
          />
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="container hero__grid">
          <div className="hero__left">
            <div className="badge">✨ ພັດທະນາ • ຕິດຕັ້ງ • ອົບຮົມ • Support</div>
            <h1 className="h1">ຂາຍໄວ • ຄຸ້ມຄອງງ່າຍ • ເຫັນກຳໄລຊັດ</h1>
            <p className="lead">
              ຍົກລະດັບຮ້ານຂອງເຈົ້າດ້ວຍ POS/CRM/Website ແລະ IT Solutions
              ທີ່ໃຊ້ງ່າຍ — ເຮົາຊ່ວຍໃຫ້ຮ້ານ “ລື່ນ” ແລະ “ຮູ້ຕົວເລກ”
              ເພື່ອເຕີບໂຕໄດ້ຈິງ.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn--primary"
                onClick={() => go("contact")}
              >
                ຂໍ Demo / ຂໍລາຄາ
              </button>
              <button className="btn btn--ghost" onClick={() => go("features")}>
                ເບິ່ງຟັງຊັນ
              </button>
            </div>

            <div className="hero__checks">
              <span>✅ ອອກບິນໄວ</span>
              <span>✅ ສາງແມ່ນຍຳ</span>
              <span>✅ ລາຍງານຊັດ</span>
              <span>✅ Support ຫຼັງຂາຍ</span>
            </div>

            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__num">{s.num}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__right">
            <div className="card card--media">
              <div className="media">
                <img
                  src="/images/hero.jpg"
                  alt="VL Smartgenai"
                  loading="lazy"
                />
              </div>
              <div className="card__body">
                <h3 className="h3">ພ້ອມໃຊ້ໄວ ພ້ອມອຸປະກອນຄົບ</h3>
                <p className="muted">
                  ຈັດຊຸດ POS ຄົບ + ຕິດຕັ້ງ + ອົບຮົມ ຈົນພະນັກງານໃຊ້ເປັນ.
                </p>
                <button
                  className="btn btn--primary btn--full"
                  onClick={() => go("contact")}
                >
                  ຄຸຍກັບທີມ / ຂໍ Demo
                </button>
                <div className="note">
                  💡 ສົ່ງ “ປະເພດຮ້ານ + ຈຸດຂາຍ + ຟັງຊັນ” ແລ້ວຈະໄດ້ Demo
                  ທີ່ຕົງວຽກ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ເປັນຫຍັງຕ້ອງເລືອກເຮົາ</h2>
            <p className="muted">
              ເຮົາເນັ້ນ “ໃຊ້ງ່າຍ + ໄດ້ຜົນຈິງ” ເພາະຮ້ານຈະເຕີບໂຕໄດ້ ຕ້ອງມີລະບຽບ
              ແລະຂໍ້ມູນຊັດ.
            </p>
          </div>

          <div className="grid3">
            {WHY.map((x) => (
              <div className="card" key={x.title}>
                <div className="card__body">
                  <div className="kicker">
                    {x.icon} {x.title}
                  </div>
                  <p className="muted">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ຟັງຊັນຫຼັກ</h2>
            <p className="muted">
              ອອກແບບໃຫ້ຄົບ ແລະຂະຫຍາຍໄດ້ ຕາມການເຕີບໂຕຂອງຮ້ານ
            </p>
          </div>

          <div className="grid3">
            {FEATURES.map((f) => (
              <div className="card" key={f.title}>
                <div className="card__body">
                  <div className="featureTop">
                    <div className="featureIcon">{f.icon}</div>
                    <div>
                      <h3 className="h3">{f.title}</h3>
                      <p className="muted">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ໂຊລູຊັນຕາມປະເພດຮ້ານ</h2>
            <p className="muted">ຈັດໃຫ້ຕົງວຽກ ແລະລົດຄວາມວຸ່ນວາຍໃນການຄຸ້ມຄອງ</p>
          </div>

          <div className="grid3">
            {SOLUTIONS.map((s) => (
              <div className="card" key={s.title}>
                <div className="card__body">
                  <h3 className="h3">{s.title}</h3>
                  <p className="muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta">
            <div className="cta__inner">
              <div>
                <h3 className="cta__title">ຢາກໄດ້ Demo ຕົງວຽກ?</h3>
                <p className="cta__desc">
                  ສົ່ງຂໍ້ມູນ: ປະເພດຮ້ານ + ຈຸດຂາຍ + ຟັງຊັນທີ່ຢາກໄດ້ — ເຮົາຈັດ
                  Demo ໃຫ້ພ້ອມໃຊ້.
                </p>
              </div>
              <button className="btn btn--white" onClick={() => go("contact")}>
                ຄຸຍກັບທີມ / ຂໍ Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section id="hardware" className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ອຸປະກອນທີ່ແນະນຳ</h2>
            <p className="muted">ຄັດເລືອກທີ່ເຂົ້າກັນແນ່ ໃຫ້ຮ້ານໃຊ້ລື່ນ</p>
          </div>

          <div className="grid3">
            {HARDWARE.map((h) => (
              <div className="card" key={h.title}>
                <div className="card__body">
                  <h3 className="h3">{h.title}</h3>
                  <p className="muted">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ຂັ້ນຕອນການເຮັດວຽກ</h2>
            <p className="muted">ໃຫ້ເຈົ້າເລີ່ມໃຊ້ໄດ້ໄວ ແລະເຫັນຜົນຈິງ</p>
          </div>

          <div className="grid2">
            {PROCESS.map((p) => (
              <div className="card" key={p.step}>
                <div className="card__body process">
                  <div className="process__step">{p.step}</div>
                  <div>
                    <h3 className="h3">{p.title}</h3>
                    <p className="muted">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ແພັກເກັດແນະນຳ</h2>
            <p className="muted">ເລືອກແພັກໃຫ້ເໝາະກັບຮ້ານ (ປັບໄດ້)</p>
          </div>

          <div className="grid3">
            {PRICING.map((p) => (
              <div
                className={`card price ${p.hot ? "isHot" : ""}`}
                key={p.name}
              >
                <div className="card__body">
                  {p.hot && <div className="hot">⭐ Popular</div>}
                  <h3 className="h3">{p.name}</h3>
                  <div className="price__value">{p.price}</div>
                  <p className="muted">{p.desc}</p>
                  <ul className="list">
                    {p.list.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn--primary btn--full"
                    onClick={() => go("contact")}
                  >
                    ຂໍລາຍລະອຽດ / ຂໍ Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">FAQ</h2>
            <p className="muted">ຄຳຖາມທີ່ພົບເລື້ອຍ</p>
          </div>

          <div className="grid2">
            {FAQ.map((f) => (
              <details key={f.q} className="faq">
                <summary className="faq__q">{f.q}</summary>
                <div className="faq__a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">ຕິດຕໍ່ / ຂໍ Demo</h2>
            <p className="muted">
              ບອກ: ປະເພດຮ້ານ + ຈຸດຂາຍ + ຟັງຊັນທີ່ຢາກໄດ້ — ເຮົາຈັດ Demo
              ໃຫ້ຕົງວຽກ.
            </p>
          </div>

          <div className="grid2">
            <div className="card">
              <div className="card__body">
                <h3 className="h3">ຕິດຕໍ່ໄດ້ທັນທີ</h3>
                <div className="contactList">
                  <div>
                    <b>📞 ໂທ:</b> 2092949696
                  </div>
                  <div>
                    <b>💬 WhatsApp:</b> 2092949696
                  </div>
                  <div>
                    <b>📩 Facebook:</b> VL Smartgenai
                  </div>
                </div>
               
              </div>
            </div>

            <div className="card">
              <div className="card__body">
                <h3 className="h3">ຂໍ້ມູນທີ່ຊ່ວຍໃຫ້ Demo ຕົງວຽກ</h3>
                <ul className="list">
                  <li>ປະເພດຮ້ານ (ຄ້າປີກ/ສົ່ງ/ອາຫານ/ຄາເຟ່)</li>
                  <li>ຈຸດຂາຍ (1 / 2 / 3+)</li>
                  <li>ຟັງຊັນ (Barcode, Stock, Report, Kitchen, Membership)</li>
                </ul>
                <button
                  className="btn btn--primary btn--full"
                  onClick={() =>
                    alert("https://wa.me/8562092949696")
                  }
                >
                  ສົ່ງຂໍ້ມູນເພື່ອຂໍ Demo
                </button>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div>© {year} VL Smartgenai — POS • IT • Business Solutions</div>
            <div className="muted">Luxury • Clean • Professional</div>
          </footer>
        </div>
      </section>
    </div>
  );
}
