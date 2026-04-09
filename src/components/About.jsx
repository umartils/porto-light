/* eslint-disable react/react-in-jsx-scope */
import DataImage from '../data';
import { listTools } from '../data';

export default function About() {
  return (
    <div className="about mt-32 py-10" id="about">
      <h1
        className="text-center text-4xl md:text-5xl font-bold mb-12 text-slate-900"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Tentang Saya
      </h1>

      <div
        className="max-w-4xl mx-auto p-8 md:p-10 bg-linear-to-br from-sky-600 to-sky-700 rounded-3xl shadow-xl border border-sky-500/30"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={DataImage.FormalImage}
            alt="Umar Tilmisani"
            loading="lazy"
            className="w-28 h-28 object-cover rounded-xl ring-4 ring-white/30 shadow-md md:hidden"
          />

          {/* Text */}
          <div>
            <p className="text-white text-center md:text-start text-base md:text-lg leading-relaxed opacity-95">
              Saya <span className="font-semibold">Umar Tilmisani</span>, fresh
              graduate Teknik Komputer dengan{' '}
              <span className="font-semibold">IPK 3.91</span>
              yang lulus dalam 3.5 tahun. Memiliki pengalaman sebagai
              <span className="font-semibold"> intern di Telkomsel</span> serta
              peserta <span className="font-semibold">Coding Camp 2025</span>{' '}
              dengan pencapaian{' '}
              <span className="font-semibold">Top-Scoring Student</span>.
            </p>

            <p className="text-white text-center md:text-start text-base md:text-lg leading-relaxed mt-4 opacity-90">
              Berpengalaman mengembangkan lebih dari
              <span className="font-semibold"> 20+ proyek</span> mencakup
              <span className="font-semibold"> software development</span>,
              <span className="font-semibold"> IoT</span>, dan
              <span className="font-semibold"> AI/Machine Learning</span>. Saya
              berfokus pada membangun solusi yang efisien, scalable, dan
              memberikan dampak nyata.
            </p>

            {/* Highlight Badge */}
            <div className="flex items-center justify-baseline gap-2 mt-6">
              <img
                src={DataImage.FormalImage}
                alt="Umar Tilmisani"
                loading="lazy"
                className="w-20 h-20 object-cover rounded-xl ring-4 ring-white/30 shadow-md md:block hidden"
              />
              <div className="flex items-center gap-4 ml-5">
                <span className="px-3 py-1 text-xs text-slate-50 bg-white/30 rounded-full">
                  20+ Projects
                </span>
                <span className="px-3 py-1 text-xs text-slate-50 bg-white/30 rounded-full">
                  AI/ML Enthusiast
                </span>
                <span className="px-3 py-1 text-xs text-slate-50 bg-white/30 rounded-full">
                  IoT Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="tools mt-30 py-10">
        <h1
          className="text-center text-4xl/snug font-bold mb-10"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Tools
        </h1>
        <div
          className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-3 p-4 border border-sky-700 rounded-xl hover:bg-sky-800 hover:border-violet-600/40 group transition-all"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-12 h-12 object-contain bg-sky-800 p-1.5 rounded-lg group-hover:bg-sky-900"
              />
              <div>
                <h4 className="font-semibold text-sm">{tool.nama}</h4>
                <p className="opacity-50 text-xs mt-0.5">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
