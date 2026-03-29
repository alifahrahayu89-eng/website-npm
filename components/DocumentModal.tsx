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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
      />

      {/* WRAPPER */}
      <div className="relative z-10 flex justify-center items-center h-full p-4">

        {/* MODAL */}
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl flex flex-col">

          {/* HEADER (FIXED POSITION) */}
          <div className="flex justify-between items-center p-4 border-b bg-white">
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

          {/* IMAGE VIEWER (INI KUNCINYA) */}
          <div className="h-[75vh] overflow-y-auto bg-gray-100 p-4">

            <img
              src={image}
              alt="document preview"
              className="w-full h-auto rounded-lg shadow-sm select-none"
              draggable={false}
            />

          </div>

        </div>

      </div>

    </div>
  );
}