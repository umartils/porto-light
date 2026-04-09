/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { listSertifikat } from '../data';

const bidangColors = {
  'Web Development': 'bg-sky-100 text-sky-700 border-sky-200',
  'AI / Machine Learning': 'bg-violet-100 text-violet-700 border-violet-200',
  'UI/UX Design': 'bg-pink-100 text-pink-700 border-pink-200',
  'Frontend Development': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Cloud Computing': 'bg-orange-100 text-orange-700 border-orange-200',
  'Data Science': 'bg-emerald-100 text-emerald-700 border-emerald-200',
};

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates mt-32 py-10" id="certificates">
      <h1
        className="text-center text-4xl/snug font-bold mb-10 text-slate-800"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Certificates
      </h1>

      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {listSertifikat.map((sertif) => (
          <div
            key={sertif.id}
            className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            onClick={() => setSelected(sertif)}
          >
            {/* Certificate Image */}
            <div className="relative overflow-hidden">
              <img
                src={sertif.gambar}
                alt={sertif.nama}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Hover button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-sm font-medium text-white bg-sky-500 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                  <i className="ri-eye-line"></i>
                  Detail
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Badge */}
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${
                  bidangColors[sertif.bidang] ||
                  'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                <i className="ri-award-line ri-sm"></i>
                {sertif.bidang}
              </span>

              {/* Title */}
              <h3 className="font-semibold text-base leading-snug mb-2 text-slate-800 group-hover:text-sky-600 transition-colors">
                {sertif.nama}
              </h3>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <i className="ri-building-line"></i>
                  {sertif.penerbit}
                </span>
                <span className="flex items-center gap-1">
                  <i className="ri-calendar-line"></i>
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
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl shadow-slate-300/50"
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
                  'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                <i className="ri-award-line ri-sm"></i>
                {selected.bidang}
              </span>

              <h2 className="text-xl font-bold mb-3 text-slate-800">
                {selected.nama}
              </h2>

              <div className="flex items-center gap-4 text-sm text-slate-500">
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
                className="mt-5 inline-flex items-center gap-2 text-sm text-white font-medium bg-sky-500 px-5 py-2.5 rounded-full hover:bg-sky-600 transition-all shadow-sm hover:shadow-sky-200"
              >
                <i className="ri-external-link-line"></i>
                View Credential
              </a>

              <button
                onClick={() => setSelected(null)}
                className="mt-3 w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-xl transition-colors font-medium text-sm"
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