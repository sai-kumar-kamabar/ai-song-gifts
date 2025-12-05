import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Music4, Heart, Gift, Headphones, Sparkles, Phone, Instagram, Youtube, Mail, CheckCircle2, IndianRupee } from "lucide-react";



const packages = [
  {
    name: "Basic",
    price: null,
    desc: "Personalized lyrics + music, Audio (MP3)",
    features: ["Personalized Names & Story", "Audio-only (MP3)", "Delivery: 24-48 hours"],
    highlight: false,
  },
  {
    name: "Standard",
    price: null,
    desc: "Personalized lyrics + music + polish, Audio + Image Video",
    features: ["Personalized Names & Story", "Images + on-screen lyrics", "Delivery: 2–3 days"],
    highlight: true,
  },
  {
    name: "Premium",
    price: null,
    desc: "Personalized cinematic song, extra manual editing, Custom Video",
    features: ["Personalized Names & Story","High‑quality video editing", "Delivery: 4–5 days"],
    highlight: false,
  },
];

const samples = [
  {
    title: "Personalized Love Story - lyrical audio",
    type: "audio",
    src: "https://res.cloudinary.com/dm7jagjg6/video/upload/v1757337265/potty_song_1_nzgr4c.mp3", 
  },
  {
    title: "shared Memories - lyrical audio",
    type: "audio",
    src: "https://res.cloudinary.com/dm7jagjg6/video/upload/v1757337305/s_song_1-_AudioTrimmer.com_t6sgcd.mp3", 
  },
  {
    title: "Personalized Name (Keerty)",
    type: "audio",
    src: "https://res.cloudinary.com/dm7jagjg6/video/upload/v1760456005/%E0%B0%95%E0%B1%80%E0%B0%B0%E0%B1%8D%E0%B0%A4%E0%B0%BF_%E0%B0%A8%E0%B1%80_%E0%B0%A8%E0%B0%B5%E0%B1%8D%E0%B0%B5%E0%B1%81_%E0%B0%9A%E0%B0%82%E0%B0%A6%E0%B0%AE%E0%B0%BE%E0%B0%AE%E0%B0%B2%E0%B0%BE_es9j3z.mp3", 
  },
  {
    title: "custom Love Memories - lyrical audio",
    type: "audio",
    src: "https://res.cloudinary.com/dm7jagjg6/video/upload/v1760456282/kiran_mounika_eudwqz.mp3", 
  },
  {
    title: "Love Story - lyrical video",
    type: "youtube",
    src: "https://www.youtube.com/embed/vwTXwhINx4E?si=BYWvoRXUaiMoroEd", 
  },

];


const services = [
  {
    icon: <Heart className="w-6 h-6 text-rose-500"/>,
    title: "Personalized Songs",
    description: "Custom lyrics and melodies created just for you, capturing your unique story and emotions.",
  },
  {
    icon: <Music4 className="w-6 h-6 text-rose-500"/>,
    title: "Lyric Videos",
    description: "Beautifully animated videos with on-screen lyrics to accompany your personalized songs.",
  },
  {
    icon: <Gift className="w-6 h-6 text-rose-500"/>,
    title: "Special Occasion Packages",
    description: "Packages tailored for anniversaries, birthdays, proposals, pre-weddings and more. Choose what fits your moment.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-rose-500"/>,
    title: "Fast Delivery & Revisions",
    description: "Quick turnaround times with options for minor edits to ensure you get exactly what you want.",
  },
];

const reviews = [
  { name: "Keerthy", text: "I cried happy tears after hearing my named song gift 💖", stars: 5 },
  { name: "Ravi", text: "Best surprise ever, super unique idea!", stars: 5 },
  { name: "Kiran & Mounika", text: "For our 5th anniversary, I gifted my wife a personalized AI song. When the melody played with our love story as lyrics, she cried happy tears. Best surprise ever!", stars: 5 },
  { name: "Srujana", text: "Affordable and heart-touching gift ✨", stars: 4 },
  { name: "Sneha & Mahesh", text: "We welcomed our baby girl last month. The AI song captured our emotions so beautifully, like a lullaby with our journey. It will always be our baby's first gift.", stars: 4 },
  { name: "Rahul", text: "I used Half Ticket Memories to create a song for my proposal. When the music played, I went down on one knee — she said YES with tears in her eyes! Thank you for making my moment unforgettable.", stars: 5 },
  { name: "Anjali & Vivek", text: "For our pre-wedding shoot, we added our AI song in the background video. Friends and family keep asking who composed it. It felt like a movie made only for us.", stars: 4 },
  { name: "Bhuvana", text: "My brother gave me a birthday song with my childhood memories in it. It was funny, emotional, and heart-touching at the same time. Way better than any material gift!", stars: 5 },


];



export default function Portfolio() {
  const [active, setActive] = useState("audio");

  const whatsappLink = "https://wa.me/+918897005988?text=Hi%20I%20want%20a%20personalized%20song"; 
  const orderForm = "https://docs.google.com/forms/d/e/1FAIpQLSd29HcZm6nsW7-Na3wZTZmX7O-7RXfgpvy5OmgRNQ9ur7B2UQ/viewform?usp=dialog"; 
  const instagram = "https://www.instagram.com/half_ticket_memories/"; 
  const youtube = "http://www.youtube.com/@halfticketmemories"; 
  
  // GTM Container ID from the image is GTM-KVV4L924
  const gtmId = 'GTM-KVV4L924';
  
  // The first GTM snippet (for <head>)
  const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${gtmId}');`;

  // The second GTM snippet (for <body>)
  const gtmBodyNoscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`;

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Personalized Music Composition and Production",
  "name": "Original Personalized Song and Video Gifts (AI-Assisted & Human-Crafted)",
  "description": "Innovative, custom-written songs and professional lyric videos created from your personal memories. Our process combines human creativity and refinement with cutting-edge AI assistance to deliver truly unique, high-quality musical gifts, available globally.",
  "sameAs": [
      "https://www.instagram.com/half_ticket_memories/",
      "http://www.youtube.com/@halfticketmemories"
    ],
  "isAccessibleForFree": "False",
  "provider": {
    "@type": "Organization",
    "name": "Half Ticket Memories",
    "url": "https://www.halfticketmemories.com/",
    "logo": "https://res.cloudinary.com/dm7jagjg6/image/upload/v1759404568/Half_Ticket_Memories_Logo_Design_pvetjb.png" 
  },
  "areaServed": [
    {
      // Global Reach
      "@type": "Place",
      "name": "Worldwide" 
    },
    {
      // National Focus
      "@type": "Country",
      "name": "India"
    },
    {
      // State Focus
      "@type": "State",
      "name": "Telangana",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad" // City Focus
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personalized Song Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Basic Personalized Song Package",
        "description": "Personalized lyrics + music, Audio (MP3)",
        "price": "499",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Standard Personalized Song & Image Video Package",
        "description": "Personalized lyrics + music + polish, Audio + Image Video",
        "price": "1499",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "name": "Premium Cinematic Song & Custom Video Package",
        "description": "Personalized cinematic song, extra manual editing, Custom Video",
        "price": "2999",
        "priceCurrency": "INR"
      }
    ]
  }
};




  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-gray-900">
      
      <Helmet>

        <script>
          {gtmHeadScript}
        </script>

        {/* Dynamic Meta Tags */}
        <title>Half Ticket Memories - Personalized Song Gifts, Custom Music & Videos</title>
        <meta name="description" content="Get a unique personalized song or video for any occasion: birthday, anniversary, proposal, pre-wedding shoot, marriage, baby birth, gift idea celebrations and more. Indian languages & international styles available. Order in minutes!" />
        <link rel="canonical" href="https://www.halfticketmemories.com/" />
        <link rel="icon" type="image/png" sizes="192x192" href="\logo192.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Half Ticket Memories | Half Ticket Gifts" />
        <meta property="og:description" content="Original, AI-assisted personalized music gifts for your loved ones, delivered as audio or custom video." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.halfticketmemories.com/" />
        <meta property="og:image" content="https://www.halfticketmemories.com/images/logo192.png" />
        <meta name="twitter:image" content="https://www.halfticketmemories.com/images/logo192.png" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Custom Songs & Videos | Half Ticket Memories" />
        <meta name="twitter:description" content="Personalized songs and lyric videos for memorable gifting. Listen to samples and order online." />
        {/* Structured Data / Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

        
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: gtmBodyNoscript }} />
      {/* Header */}
      
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music4 className="w-6 h-6 text-rose-500"/>
            <span className="font-semibold">Half Ticket Memories</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#samples" className="hover:text-rose-600">Samples</a>
            <a href="#services" className="hover:text-rose-600">Services</a>
            <a href="#packages" className="hover:text-rose-600">Packages</a>
            <a href="#how" className="hover:text-rose-600">How it works</a>
            <a href="#faq" className="hover:text-rose-600">FAQ</a>
            <a href="#rev" className="hover:text-rose-600">Reviews</a>
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
            <p className="mt-4 text-gray-600">Personalized songs for anniversaries, birthdays, proposals, parents & friends, pre-weddings, Events, employees appreciation. Multi‑language, any style. Delivered as audio or a beautiful lyric video.</p>
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
          {samples
  .filter(s => active === "audio" ? s.type === "audio" : s.type === "video" || s.type === "youtube")
  .map((s, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-3xl border bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-4 h-4 text-rose-500"/>
                <span className="font-medium">{s.title}</span>
              </div>
                      {s.type === "audio" && (
          <audio controls className="w-full">
            <source src={s.src} type="audio/mpeg"/>
          </audio>
        )}

        {s.type === "video" && (
          <video controls className="w-full rounded-xl">
            <source src={s.src} type="video/mp4"/>
          </video>
        )}

        {s.type === "youtube" && (
          <div className="aspect-video">
            <iframe
              src={s.src}
              title={s.title}
              className="w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

            </motion.div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">Want a free 30‑sec demo with your names? <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-rose-600 underline">Chat on WhatsApp</a>.</p>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16 bg-white/90 rounded-3xl shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 border border-rose-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
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
          
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-16 ">
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
              <div key={i} className="rounded-3xl border bg-white p-5 shadow-sm ">
                <div className="font-semibold">{f.q}</div>
                <p className="text-sm text-gray-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Reviews */}
<section id="rev" className="bg-gray-900 text-white py-12">
  <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>

  {/* Desktop: Auto-scrolling marquee */}
  <div className="hidden md:block overflow-hidden relative w-full">
    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...reviews, ...reviews].map((review, index) => (
        <div
          key={index}
          className="min-w-[300px] bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <p className="italic mb-4 text-sm md:text-base">"{review.text}"</p>
          <div className="flex items-center justify-between text-sm md:text-base">
            <span className="font-semibold">{review.name}</span>
            <span>{"⭐".repeat(review.stars)}</span>
          </div>
        </div>
      ))}
    </motion.div>
  </div>

  {/* Mobile: Swipeable scroll */}
  <div className="md:hidden flex gap-4 overflow-x-auto px-4 scrollbar-hide">
  {reviews.map((review, index) => (
    <div
      key={index}
      className="w-[260px] bg-gray-800 p-4 rounded-xl shadow-md flex-shrink-0"
    >
      <p className="italic mb-3 text-sm line-clamp-6">"{review.text}"</p>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold">{review.name}</span>
        <span>{"⭐".repeat(review.stars)}</span>
      </div>
    </div>
  ))}
</div>
</section>


      {/* Footer */}
      <footer className="bg-black/5">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold"><Music4 className="w-5 h-5 text-rose-500"/>Half Ticket Memories</div>
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
              
            </ul>
          </div>
        </div>
        <div className="text-xs text-center text-gray-500 pb-8">© {new Date().getFullYear()} Half Ticket Memories · “All songs are AI‑assisted, original & for personal gifting. Commercial use requires license.”</div>
      </footer>
      <Analytics />
    </div>
  );
}
