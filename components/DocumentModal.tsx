"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  image: string;
  title: string;
}

export default function DocumentModal({ open, setOpen, image, title }: Props) {

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">

      {/* WRAPPER */}
      <div className="flex justify-center items-start min-h-full p-6">

        {/* MODAL */}
        <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full flex flex-col max-h-[90vh]">

          {/* HEADER (STICKY) */}
          <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
            <h3 className="text-lg font-semibold text-blue-900">
              {title}
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              <X size={22} />
            </button>
          </div>

          {/* CONTENT (SCROLLABLE) */}
          <div className="overflow-y-auto p-4">

            <img
              src={image}
              alt="document preview"
              className="w-full rounded-lg border shadow-sm"
              draggable={false}
            />

          </div>

        </div>

      </div>

    </div>

  );
}