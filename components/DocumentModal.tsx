"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  image: string;
  title: string;
}

export default function DocumentModal({ open, setOpen, image, title }: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">

      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full relative p-6">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          {title}
        </h3>

        <img
          src={image}
          alt="document preview"
          className="w-full rounded-lg border shadow-sm"
        />

      </div>

    </div>

  );
}