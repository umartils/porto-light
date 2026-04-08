import { useState } from "react";
import { listSertifikat } from "../data";

const bidangColors = {
  "Web Development": "bg-violet-600/20 text-violet-300 border-violet-600/40",
  "AI / Machine Learning": "bg-blue-600/20 text-blue-300 border-blue-600/40",
  "UI/UX Design": "bg-pink-600/20 text-pink-300 border-pink-600/40",
  "Frontend Development": "bg-cyan-600/20 text-cyan-300 border-cyan-600/40",
  "Cloud Computing": "bg-orange-600/20 text-orange-300 border-orange-600/40",
  "Data Science": "bg-green-600/20 text-green-300 border-green-600/40",
};

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates mt-32 py-10" id="certificates">
      <h1
        className="text-center text-4xl/snug font-bold mb-3"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Certificates
      </h1>
      {/* <p
        className="text-center opacity-60 mb-14"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Pencapaian dan sertifikasi yang telah saya raih
      </p> */}

      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {listSertifikat.map((sertif) => (
          <div
            key={sertif.id}
            className="group relative bg-zinc-800/60 border border-zinc-700 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => setSelected(sertif)}
          >
            {/* Certificate Image */}
            <div className="relative overflow-hidden">
              <img
                src={sertif.gambar}
                alt={sertif.nama}
                loading="lazy"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-sm font-medium bg-violet-600 px-4 py-1.5 rounded-full flex items-center gap-2">
                  <i className="ri-eye-line"></i>
                  Lihat Detail
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Badge bidang */}
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${
                  bidangColors[sertif.bidang] ||
                  "bg-zinc-700/40 text-zinc-300 border-zinc-600"
                }`}
              >
                <i className="ri-award-line ri-sm"></i>
                {sertif.bidang}
              </span>

              <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-violet-300 transition-colors">
                {sertif.nama}
              </h3>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-700">
                <span className="text-sm opacity-60 flex items-center gap-1.5">
                  <i className="ri-building-line ri-sm"></i>
                  {sertif.penerbit}
                </span>
                <span className="text-sm opacity-50 flex items-center gap-1">
                  <i className="ri-calendar-line ri-sm"></i>
                  {sertif.tahun}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.gambar}
              alt={selected.nama}
              className="w-full h-full object-cover"
            />
            <div className="p-6">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${
                  bidangColors[selected.bidang] ||
                  "bg-zinc-700/40 text-zinc-300 border-zinc-600"
                }`}
              >
                <i className="ri-award-line ri-sm"></i>
                {selected.bidang}
              </span>
              <h2 className="text-2xl font-bold mb-3">{selected.nama}</h2>
              <div className="flex items-center gap-4 text-sm opacity-70">
                <span className="flex items-center gap-1.5">
                  <i className="ri-building-line"></i>
                  {selected.penerbit}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-calendar-line"></i>
                  {selected.tahun}
                </span>
              </div>
              <a
                  href={selected.credentials}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium bg-violet-600 px-4 py-1.5 rounded-full hover:bg-violet-500 transition-colors"
                >
                  <i className="ri-eye-line ri-sm"></i>Lihat Credentials
                </a>
              {/* <a
                href={selected.credentials}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium bg-violet-600 px-4 py-1.5 rounded-full"
              >
                <i className="ri-eye-line ri-sm"></i>
                Lihat Credentials
              </a> */}
              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl transition-colors font-medium"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
