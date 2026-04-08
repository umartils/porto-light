import DataImage from "../data";

const socialLinks = [
  { href: "https://github.com/umartils/", icon: "ri-github-fill" },
  { href: "https://www.instagram.com/umartils_", icon: "ri-instagram-fill" },
  { href: "https://www.linkedin.com/in/umartils/", icon: "ri-linkedin-box-fill" },
];

export default function Hero() {
  return (
    <div
      id="home"
      className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 gap-6 xl:gap-0"
    >
      {/* LEFT CONTENT */}
      <div className="animate__animated animate__fadeInLeft animate__delay-3s">
        
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl border border-zinc-700">
          <img
            src={DataImage.HeroImage}
            alt="Hero"
            loading="lazy"
            className="w-10 rounded-md"
          />
          <span className="text-violet-300 font-medium">
            Fullstack Developer & AI/ML Engineer
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl/tight font-bold mb-2">
          Halo, Saya{" "}
          <span className="text-violet-400">Umar Tilmisani</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-violet-300 mb-7">
          Fullstack Web Developer, AI/ML & IoT Engineer
        </p>

        {/* Description */}
        <p className="text-base/loose mb-6 opacity-70">
            Saya adalah seorang pengembang yang berfokus pada pengembangan software, perangkat IoT, dan solusi berbasis AI/ML. 
            Saya terbiasa membangun sistem end-to-end mulai dari perangkat keras, 
            backend, hingga aplikasi yang terintegrasi. Saya menggabungkan pemahaman teknis yang kuat dengan pendekatan problem-solving 
            untuk menghasilkan solusi yang fungsional, efisien, dan berdampak nyata.
        </p>

        {/* CTA & Social */}
        <div className="flex items-center gap-6">
          
          {/* Button */}
          <div className="flex items-center justify-center h-12 px-6 bg-violet-800 border border-violet-700 rounded-full">
            <h3 className="text-sm font-medium text-white">
              Hubungi saya
            </h3>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-violet-200 bg-zinc-800/60 border border-zinc-700 rounded-full transition-colors hover:text-violet-500"
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-fit md:ml-auto">
        
        {/* Glow */}
        <div className="absolute inset-0 scale-110 rounded-full blur-2xl bg-gradient-to-tr from-violet-600/30 via-purple-500/20 to-transparent"></div>

        {/* Image */}
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          loading="lazy"
          className="relative w-72 md:w-96 rounded-full object-cover ring-4 ring-violet-500/40 shadow-2xl animate__animated animate__fadeInRight animate__delay-3s transition duration-500 ease-in-out hover:scale-105 hover:ring-violet-400 hover:shadow-violet-500/30"
        />
      </div>
    </div>
  );
}