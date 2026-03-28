"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";
import { Download, ArrowRight, CheckCircle, Cog, Wrench, Cpu, Settings, Search, PackageCheck, Truck, Package, Zap, ShieldCheck, Gauge, Pipette, Bolt, Factory } from "lucide-react";
import { motion } from "framer-motion";
import CatalogViewer from "@/components/CatalogViewer";

export default function ProdukPage() {

const { lang } = useLanguage();
const t = dictionary[lang].produk;
const showDownload = false;



return (
<>

{/* ================= HERO ================= */}
<section className="relative min-h-[480px] flex items-center justify-center text-center overflow-hidden">

<div className="absolute inset-0 animated-gradient"/>
<div className="absolute inset-0 bg-grid-pattern opacity-10"/>
<div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/30 blur-[140px] rounded-full"/>
<div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-400/30 blur-[140px] rounded-full"/>

<div className="relative z-10 max-w-4xl px-6">

<div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">

<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
{t.heroTitle}
</h1>

<p className="text-lg text-white/90 mb-8">
{t.heroSubtitle}
</p>

{showDownload && (
<button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
<Download size={18}/>
{t.download}
</button>
)}

</div>
</div>
</section>



{/* ================= PRODUK CONTENT ================= */}
<section className="relative py-24 bg-gray-100 overflow-hidden">

<div className="absolute inset-0 opacity-20 pointer-events-none">

<div className="absolute inset-0 industrial-pattern"></div>

<div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200/40 blur-[140px] rounded-full"></div>

<div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-teal-200/40 blur-[140px] rounded-full"></div>

</div>


<div className="relative max-w-7xl mx-auto px-6">


{/* ================= INDUSTRIAL PRODUCTS ================= */}
<div className="mb-28">

{/* TITLE */}
<div className="text-center mb-16">

<h2 className="text-4xl font-bold text-blue-900 mb-4">
{t.industrialTitle}
</h2>

<p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
{t.industrialDesc}
</p>

</div>


{/* CATEGORY GRID */}
<div className="grid md:grid-cols-4 gap-8">

{products.map((item,index)=>(

<motion.div
key={item.slug}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5,delay:index*0.05}}
viewport={{once:true}}
className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer h-full flex flex-col"
>

{/* IMAGE */}
<div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
<img
src={item.image}
alt={item.title[lang]}
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>
</div>

{/* TITLE */}
<h3 className="font-semibold text-gray-800 mb-2">
{item.title[lang]}
</h3>

{/* DESC */}
<p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-grow">
{item.desc[lang]}
</p>

{/* CTA */}
<div className="mt-4 text-sm text-blue-600 font-medium flex items-center gap-1 opacity-0">
Lihat Detail
<ArrowRight size={14}/>
</div>

</motion.div>


))}

</div>

</div>



{/* ================= WHY CHOOSE US PREMIUM ================= */}
<section className="relative py-32 mb-32 overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 industrial-pattern opacity-30"></div>

<div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-blue-200/40 blur-[180px] rounded-full"></div>

<div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-teal-200/40 blur-[180px] rounded-full"></div>
</div>


<div className="relative max-w-7xl mx-auto px-6">

<div className="text-center mb-24">

<h3 className="text-5xl font-bold text-blue-900 mb-6">
{t.whyTitle}
</h3>

<p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
{t.whyDesc}
</p>

</div>


<div className="grid md:grid-cols-4 gap-12">

{/* CARD */}
{[
{
icon:"🌐",
title: t.title1,
desc: t.desc1,
},
{
icon:"⚙️",
title: t.title2,
desc: t.desc2,
},
{
icon:"🚚",
title: t.title3,
desc: t.desc3,
},
{
icon:"🤝",
title: t.title4,
desc: t.desc4,
}
].map((item,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:i*0.1}}
viewport={{once:true}}
className="group"
>

<div className="relative backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl p-10 shadow-xl transition duration-500 hover:-translate-y-4 hover:shadow-2xl text-center">

<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-100/40 to-teal-100/40 transition"></div>

<div className="relative">

<div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-lg mb-6 text-2xl group-hover:scale-110 transition">
{item.icon}
</div>

<h4 className="font-semibold text-gray-800 mb-3">
{item.title}
</h4>

<p className="text-sm text-gray-600">
{item.desc}
</p>

</div>

</div>

</motion.div>
))}

</div>

</div>

</section>


{/* ================= PROCUREMENT PROCESS ABSOLUTE PREMIUM ================= */}
<section className="relative py-32 mb-31 overflow-hidden">

{/* BACKGROUND */}
<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 industrial-pattern opacity-30"/>

<div className="absolute -top-40 left-0 w-[700px] h-[700px] bg-blue-200/40 blur-[200px] rounded-full"/>

<div className="absolute -bottom-40 right-0 w-[700px] h-[700px] bg-teal-200/40 blur-[200px] rounded-full"/>

</div>


<div className="relative max-w-7xl mx-auto px-6">


{/* TITLE */}
<div className="text-center mb-28">

<h3 className="text-5xl font-bold text-blue-900 mb-6">
{t.processTitle}
</h3>

<p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
{t.processDesc}
</p>

</div>



{/* TIMELINE */}
<div className="relative">

{/* PROGRESS LINE */}
<div className="hidden md:block absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">

<motion.div
initial={{width:"0%"}}
whileInView={{width:"100%"}}
transition={{duration:1.6}}
viewport={{once:true}}
className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"
/>

</div>



<div className="grid md:grid-cols-4 gap-12 relative">

{/* STEP 1 */}
<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="group h-full"
>

<div className="relative backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl p-10 shadow-xl transition duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl h-full flex flex-col">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/30 to-teal-100/30 opacity-0 group-hover:opacity-100 transition"/>

<div className="relative flex flex-col h-full">

<div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition">
<Settings size={32}/>
</div>

<div className="text-4xl font-bold text-blue-900 mb-3">01</div>

<h4 className="font-semibold text-gray-800 mb-3">
{t.step1Title}
</h4>

<p className="text-sm text-gray-600 leading-relaxed flex-grow">
{t.step1Desc}
</p>

</div>

</div>

</motion.div>



{/* STEP 2 */}
<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="group h-full"
>

<div className="relative backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl p-10 shadow-xl transition duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl h-full flex flex-col">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/30 to-teal-100/30 opacity-0 group-hover:opacity-100 transition"/>

<div className="relative flex flex-col h-full">

<div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition">
<Search size={32}/>
</div>

<div className="text-4xl font-bold text-blue-900 mb-3">02</div>

<h4 className="font-semibold text-gray-800 mb-3">
{t.step2Title}
</h4>

<p className="text-sm text-gray-600 leading-relaxed flex-grow">
{t.step2Desc}
</p>

</div>

</div>

</motion.div>



{/* STEP 3 */}
<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="group h-full"
>

<div className="relative backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl p-10 shadow-xl transition duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl h-full flex flex-col">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/30 to-teal-100/30 opacity-0 group-hover:opacity-100 transition"/>

<div className="relative flex flex-col h-full">

<div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition">
<PackageCheck size={32}/>
</div>

<div className="text-4xl font-bold text-blue-900 mb-3">03</div>

<h4 className="font-semibold text-gray-800 mb-3">
{t.step3Title}
</h4>

<p className="text-sm text-gray-600 leading-relaxed flex-grow">
{t.step3Desc}
</p>

</div>

</div>

</motion.div>



{/* STEP 4 */}
<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="group h-full"
>

<div className="relative backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl p-10 shadow-xl transition duration-500 transform group-hover:-translate-y-4 group-hover:shadow-2xl h-full flex flex-col">

<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/30 to-teal-100/30 opacity-0 group-hover:opacity-100 transition"/>

<div className="relative flex flex-col h-full">

<div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition">
<Truck size={32}/>
</div>

<div className="text-4xl font-bold text-blue-900 mb-3">04</div>

<h4 className="font-semibold text-gray-800 mb-3">
{t.step4Title}
</h4>

<p className="text-sm text-gray-600 leading-relaxed flex-grow">
{t.step4Desc}
</p>

</div>

</div>

</motion.div>

</div>

</div>

</div>

</section>


</div>
</section>



{/* ================= CTA ================= */}
<section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-center">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="max-w-4xl mx-auto px-6"
>

<h2 className="text-3xl md:text-4xl font-bold mb-4">
{t.quickTitle}
</h2>

<p className="text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
{t.quickText}
</p>

<Link
href="/kontak"
className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300"
>
{t.button}
<ArrowRight size={18}/>
</Link>

</motion.div>

</section>



<style jsx global>{`

.animated-gradient{
background:linear-gradient(-45deg,#0f172a,#1e3a8a,#0ea5e9,#14b8a6);
background-size:400% 400%;
animation:gradientMove 12s ease infinite;
}

@keyframes gradientMove{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.bg-grid-pattern{
background-image:
linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
background-size:40px 40px;
}

.industrial-pattern{
background-image:
linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
background-size:60px 60px;
}

`}</style>

</>
);
}