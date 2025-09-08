import { useState } from "react";
import { motion } from "framer-motion";
import { Music4, Heart, Gift, Headphones, Sparkles, Phone, Instagram, Youtube, Mail, CheckCircle2, IndianRupee } from "lucide-react";

// 🔧 QUICK SETUP NOTES
// 1) Replace all PLACEHOLDER links below (sample MP3/MP4, WhatsApp, Google Form, social links)
// 2) Deploy steps provided in chat (Vercel/Netlify). This is a single React component export.

const packages = [
  {
    name: "Basic",
    price: 799,
    desc: "1–1.5 min custom song, AI lyrics + music, Audio (MP3)",
    features: ["Personalized names & story", "Audio-only (MP3)", "Delivery: 2–3 days"],
    highlight: false,
  },
  {
    name: "Standard",
    price: 1499,
    desc: "2–3 min song, AI lyrics + music + polish, Audio + Simple Video",
    features: ["Images + on-screen lyrics", "1 revision included", "Delivery: 3–4 days"],
    highlight: true,
  },
  {
    name: "Premium",
    price: 2499,
    desc: "3–4 min cinematic song, extra manual editing, Custom Video",
    features: ["High‑quality visuals/animations", "Preview before final", "Delivery: 4–5 days"],
    highlight: false,
  },
];

const samples = [
  {
    title: "Love story",
    type: "audio",
    src: "https://res.cloudinary.com/dm7jagjg6/video/upload/v1757337265/potty_song_1_nzgr4c.mp3", // 🔁 replace
  },
  {
    title: "Name proposal",
    type: "audio",
    src: "https://res.cloudinary.com/dm7jagjg6/video/upload/v1757337305/s_song_1-_AudioTrimmer.com_t6sgcd.mp3", // 🔁 replace
  },
  {
    title: "Parents Tribute Video",
    type: "video",
    src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", // 🔁 replace
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("audio");

  const whatsappLink = "https://wa.me/8897005988?text=Hi%20I%20want%20a%20personalized%20song"; // 🔁 replace
  const orderForm = "https://docs.google.com/forms/d/e/1FAIpQLSd29HcZm6nsW7-Na3wZTZmX7O-7RXfgpvy5OmgRNQ9ur7B2UQ/viewform?usp=dialog"; // 🔁 replace
  const instagram = "https://instagram.com/yourhandle"; // 🔁 replace
  const youtube = "https://youtube.com/@yourchannel"; // 🔁 replace
  const mailto = "saisk58593@gmail.com"; // 🔁 replace

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music4 className="w-6 h-6 text-rose-500"/>
            <span className="font-semibold">Half Ticket Memories</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#samples" className="hover:text-rose-600">Samples</a>
            <a href="#packages" className="hover:text-rose-600">Packages</a>
            <a href="#how" className="hover:text-rose-600">How it works</a>
            <a href="#faq" className="hover:text-rose-600">FAQ</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-rose-600 text-white px-4 py-2 shadow-sm hover:bg-rose-700">
            <Phone className="w-4 h-4"/> WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Turn Your <span className="text-rose-600">Memories</span> into a
              <br/> Custom <span className="text-rose-600">Song & Video</span>
            </h1>
            <p className="mt-4 text-gray-600">Personalized songs for anniversaries, birthdays, proposals, parents & friends. Multi‑language, any style. Delivered as audio or a beautiful lyric video.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={orderForm} target="_blank" rel="noreferrer" className="rounded-2xl bg-rose-600 text-white px-5 py-3 shadow hover:bg-rose-700">Order Now</a>
              <a href="#samples" className="rounded-2xl bg-white border px-5 py-3 hover:border-rose-300">Listen Samples</a>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500"/> 24–48h Delivery
              <CheckCircle2 className="w-4 h-4 text-emerald-500"/> Names & story included
              <CheckCircle2 className="w-4 h-4 text-emerald-500"/> Revisions available
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-rose-100 to-rose-200 shadow-inner flex items-center justify-center">
              <div className="text-center p-6">
                <Heart className="w-10 h-10 mx-auto text-rose-500"/>
                <p className="font-semibold mt-2">A gift they’ll never forget</p>
                <p className="text-sm text-gray-600 mt-1">Play a short demo below</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow p-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-500"/> 100% Personalized
            </div>
          </motion.div>
        </div>
      </section>

      {/* Samples */}
      <section id="samples" className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Samples</h2>
          <div className="flex items-center gap-2 text-sm border rounded-2xl px-2 py-1">
            <button onClick={()=>setActive("audio")} className={`px-3 py-1 rounded-2xl ${active==="audio"?"bg-rose-600 text-white":"hover:bg-rose-100"}`}>Audio</button>
            <button onClick={()=>setActive("video")} className={`px-3 py-1 rounded-2xl ${active==="video"?"bg-rose-600 text-white":"hover:bg-rose-100"}`}>Video</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {samples.filter(s => s.type===active).map((s, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-3xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-4 h-4 text-rose-500"/>
                <span className="font-medium">{s.title}</span>
              </div>
              {s.type === "audio" ? (
                <audio controls className="w-full">
                  <source src={s.src} type="audio/mpeg"/>
                </audio>
              ) : (
                <video controls className="w-full rounded-xl">
                  <source src={s.src} type="video/mp4"/>
                </video>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">Want a free 30‑sec demo with your names? <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-rose-600 underline">Chat on WhatsApp</a>.</p>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-white/70 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 mt-2">Pick a package. Add your story. We handle the magic ✨</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {packages.map((p, idx) => (
              <div key={idx} className={`rounded-3xl border shadow-sm p-6 bg-white ${p.highlight?"ring-2 ring-rose-500" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold flex items-center gap-2"><Gift className="w-4 h-4 text-rose-500"/>{p.name}</h3>
                  <div className="flex items-baseline gap-1 font-bold text-2xl"><IndianRupee className="w-5 h-5"/>{p.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f, i)=>(
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5"/>{f}</li>
                  ))}
                </ul>
                <a href={orderForm} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full justify-center rounded-2xl bg-rose-600 text-white px-4 py-2 hover:bg-rose-700">Choose {p.name}</a>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600 mt-4">Add‑ons: Extra language +₹500 · Express 24h +₹700 · Printed lyrics PDF +₹300</div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            {icon: <Heart className="w-5 h-5 text-rose-500"/>, title: "Share your story", text: "Fill the quick form with names, memories, language & style."},
            {icon: <Music4 className="w-5 h-5 text-rose-500"/>, title: "We compose", text: "AI + human polish to write lyrics & create melody."},
            {icon: <Headphones className="w-5 h-5 text-rose-500"/>, title: "Review & tweak", text: "Get a short preview, request minor edits."},
            {icon: <Sparkles className="w-5 h-5 text-rose-500"/>, title: "Deliver", text: "Receive MP3 or a lovely lyric video — ready to share!"},
          ].map((s, i)=> (
            <div key={i} className="rounded-3xl bg-white border p-5 shadow-sm">
              <div className="flex items-center gap-2 font-semibold">{s.icon}{s.title}</div>
              <p className="text-sm text-gray-600 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={orderForm} target="_blank" rel="noreferrer" className="rounded-2xl bg-rose-600 text-white px-6 py-3 hover:bg-rose-700">Start Your Song</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white/70 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[{
              q:"Is this really personalized?",
              a:"Yes! We use your details (names, memories, language & vibe) to create an original song just for you.",
            },{
              q:"Can I get vocals in a certain style?",
              a:"We’ll match a style (romantic, Bollywood, pop, etc.). If it resembles a famous song, we’ll regenerate to keep it original.",
            },{
              q:"Commercial use?",
              a:"Default license is personal gifting. For ads/YouTube monetization, ask for a commercial license.",
            },{
              q:"Refunds & revisions?",
              a:"Digital products aren’t refundable after delivery, but we include minor edits to get it right.",
            }].map((f,i)=> (
              <div key={i} className="rounded-3xl border bg-white p-5 shadow-sm">
                <div className="font-semibold">{f.q}</div>
                <p className="text-sm text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold"><Music4 className="w-5 h-5 text-rose-500"/>AI Song Gifts</div>
            <p className="text-sm text-gray-600 mt-2">Original AI‑assisted songs & videos for your special moments. Made with love in India.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="text-sm space-y-2">
              <li><a className="hover:text-rose-600" href="#samples">Samples</a></li>
              <li><a className="hover:text-rose-600" href="#packages">Packages</a></li>
              <li><a className="hover:text-rose-600" href="#how">How it works</a></li>
              <li><a className="hover:text-rose-600" href="#faq">FAQ</a></li>
              <li><a className="hover:text-rose-600" href={orderForm} target="_blank" rel="noreferrer">Order Form</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> <a className="hover:text-rose-600" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li className="flex items-center gap-2"><Instagram className="w-4 h-4"/> <a className="hover:text-rose-600" href={instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li className="flex items-center gap-2"><Youtube className="w-4 h-4"/> <a className="hover:text-rose-600" href={youtube} target="_blank" rel="noreferrer">YouTube</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> <a className="hover:text-rose-600" href={mailto}>Email</a></li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-center text-gray-500 pb-8">© {new Date().getFullYear()} AI Song Gifts · “All songs are AI‑assisted, original & for personal gifting. Commercial use requires license.”</div>
      </footer>
    </div>
  );
}
