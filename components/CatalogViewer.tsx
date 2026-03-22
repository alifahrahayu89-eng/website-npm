"use client";

import { useState } from "react";
import { Eye, X } from "lucide-react";

export default function CatalogViewer({ pdf }: { pdf: string }) {

  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        <Eye size={18}/>
        Preview Katalog
      </button>


      {open && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl w-[90%] h-[90%] relative shadow-2xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <X size={20}/>
            </button>

            <iframe
              src={pdf}
              className="w-full h-full rounded-xl"
            />

          </div>

        </div>

      )}

    </>
  );
}