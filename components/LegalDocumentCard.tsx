"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import DocumentModal from "./DocumentModal";

interface Props {
  title: string;
  desc: string;
  image: string;
  number: string;
}

export default function LegalDocumentCard({ title, desc, image, number }: Props) {

  const [open, setOpen] = useState(false);

  return (
    <>

      <div className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

        {/* TITLE */}
        <h3 className="font-semibold text-blue-900 mb-2">
          {title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-500 mb-2">
          {desc}
        </p>

        {/* NUMBER (PREMIUM STYLE) */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-1">
            Nomor Dokumen
          </p>

          <p className="text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-md inline-block">
            {number}
          </p>


          
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white py-2 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-md"
        >
          <Eye size={16} />
          Preview Dokumen
        </button>

      </div>


      <DocumentModal
        open={open}
        setOpen={setOpen}
        image={image}
        title={title}
      />

    </>
  );
}