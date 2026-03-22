"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";
import { dictionary } from "@/lib/dictionary";

export default function Page(){

const params = useParams();
const slug = params.slug as string;

const { lang } = useLanguage();
const t = dictionary[lang].produk;

const product = products.find((p)=>p.slug === slug);

if(!product){
return (

<div className="p-20 text-center">
{lang === "id" ? "Produk tidak ditemukan" : "Product not found"}
</div>
);
}


return(

<section className="bg-gray-100 min-h-screen py-20">

<div className="max-w-7xl mx-auto px-6">

{/* BACK */}

<Link
href="/produk"
className="inline-flex items-center gap-2 text-blue-600 mb-10"
>
<ArrowLeft size={18}/>
{lang === "id" ? "Kembali ke Produk" : "Back to Products"}
</Link>

{/* HERO PRODUK */}

<div className="grid md:grid-cols-2 gap-16 items-center mb-24">

<img
src={product.image}
alt={product.title[lang]}
className="rounded-3xl shadow-xl"
/>

<div>

<h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
{product.title[lang]}
</h1>

<p className="text-gray-600 leading-relaxed mb-8">
{product.desc[lang]}
</p>

<a
href="https://wa.me/628132639781"
target="_blank"
className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"

>

{lang === "id" ? "Hubungi via WhatsApp" : "Contact via WhatsApp"} </a>

</div>

</div>

{/* KATALOG PRODUK */}
{product.items && (

<div className="mb-24">

<h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
{lang === "id" ? "Katalog Produk" : "Product Catalog"}
</h2>

<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

{product.items.map((item,index)=>(

<div
key={index}
className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 group"
>

<div className="aspect-[4/3] w-full overflow-hidden rounded-xl mb-4">

<img
src={item.image}
alt={item.name[lang]}
className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>

</div>

<h3 className="font-semibold text-gray-800 mb-2">
{item.name[lang]}
</h3>

<p className="text-sm text-gray-500">
{item.desc[lang]}
</p>

</div>

))}

</div>

</div>

)}

</div>

</section>

)

}
