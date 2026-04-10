// import HeroImage from "./assets/hero-img.webp";
import HeroImage from './assets/avatar.png';
import FormalImage from './assets/hero.png';

const Image = {
  HeroImage,
  FormalImage,
};

export default Image;

import Tools1 from './assets/tools/vscode.png';
import Tools2 from './assets/tools/reactjs.png';
import Tools3 from './assets/tools/nextjs.png';
import Tools4 from './assets/tools/tailwind.png';
import Tools5 from './assets/tools/bootstrap.png';
import Tools6 from './assets/tools/js.png';
import Tools7 from './assets/tools/nodejs.png';
import Tools8 from './assets/tools/github.png';
import Tools9 from './assets/tools/ai.png';
import Tools10 from './assets/tools/canva.png';
import Tools11 from './assets/tools/figma.png';

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: 'Visual Studio Code',
    ket: 'Code Editor',
    dad: '100',
  },
  {
    id: 2,
    gambar: Tools2,
    nama: 'React JS',
    ket: 'Framework',
    dad: '200',
  },
  {
    id: 3,
    gambar: Tools3,
    nama: 'Next JS',
    ket: 'Framework',
    dad: '300',
  },
  {
    id: 4,
    gambar: Tools4,
    nama: 'Tailwind CSS',
    ket: 'Framework',
    dad: '400',
  },
  {
    id: 5,
    gambar: Tools5,
    nama: 'Bootstrap',
    ket: 'Framework',
    dad: '500',
  },
  {
    id: 6,
    gambar: Tools6,
    nama: 'Javascript',
    ket: 'Language',
    dad: '600',
  },
  {
    id: 7,
    gambar: Tools7,
    nama: 'Node JS',
    ket: 'Javascript Runtime',
    dad: '700',
  },
  {
    id: 8,
    gambar: Tools8,
    nama: 'Github',
    ket: 'Repository',
    dad: '800',
  },
  {
    id: 9,
    gambar: Tools9,
    nama: 'Adobe Illustrator',
    ket: 'Design App',
    dad: '900',
  },
  {
    id: 10,
    gambar: Tools10,
    nama: 'Canva',
    ket: 'Design App',
    dad: '1000',
  },
  {
    id: 11,
    gambar: Tools11,
    nama: 'Figma',
    ket: 'Design App',
    dad: '1100',
  },
];

import Proyek1 from './assets/proyek/project1.png';
import Proyek2 from './assets/proyek/project2.png';
import Proyek3 from './assets/proyek/project3.png';
import Proyek4 from './assets/proyek/project4.png';
import Proyek5 from './assets/proyek/proyek5.webp';
import Proyek6 from './assets/proyek/proyek6.webp';

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: 'AI Smart Crossing Device',
    desk: 'Proyek ini merupakan solusi smart city yang mengotomatisasi lampu penyebrangan jalan (pedestrian crossing) menggunakan teknologi Computer Vision.',
    tools: [
      'AI',
      'IoT',
      'Computer Vision',
      'YOLO',
      'Jetson Nano',
      'Linux',
      'Python',
    ],
    dad: '200',
    link: 'https://www.youtube.com/watch?v=csYZiGcbWLE&feature=youtu.be',
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: 'Real-time Obstacle Detection Vest',
    desk: 'Proyek ini merupakan sebuah rompi pintar yang menggunakan teknologi Computer Vision untuk mendeteksi rintangan di sekitar pengguna secara real-time, memberikan peringatan melalui suara.',
    tools: [
      'AI',
      'IoT',
      'Computer Vision',
      'YOLO',
      'Jetson Nano',
      'Linux',
      'Python',
    ],
    dad: '300',
    link: 'https://drive.google.com/file/d/1JLiwhpc2gz83XrjrL509w8coUPimqOdz/view?usp=share_link',
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: 'Form Request Website',
    desk: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['Laravel', 'PHP', 'Javascript', 'MySQL', 'Google Cloud'],
    dad: '400',
    link: 'https://www.github.com/umartils',
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: 'Chatbot Mobile Application',
    desk: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['Flutter', 'Dart', 'SQLite'],
    dad: '500',
    link: 'https://www.github.com/umartils',
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: 'Web Portfolio',
    desk: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['HTML', 'CSS', 'Javascript', 'Bootsrap'],
    dad: '600',
    link: 'https://www.github.com/umartils',
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: 'Company Profile 2.0',
    desk: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!',
    tools: ['NextJS', 'TailwindCSS', 'Framermotion'],
    dad: '700',
    link: 'https://www.github.com/umartils',
  },
];

import Sertif1 from './assets/sertifikat/sertif_1.jpg';
import Sertif2 from './assets/sertifikat/sertif_2.jpg';
import Sertif3 from './assets/sertifikat/sertif_3.jpg';
import Sertif4 from './assets/sertifikat/sertif_4.jpg';
import Sertif5 from './assets/sertifikat/sertif_5.jpg';
import Sertif6 from './assets/sertifikat/sertif_6.jpg';

export const listSertifikat = [
  {
    id: 1,
    gambar: Sertif1,
    nama: 'Belajar Machine Learning untuk Pemula',
    bidang: 'AI / Machine Learning',
    penerbit: 'Dicoding Indonesia',
    tahun: '2025',
    credentials: 'https://www.dicoding.com/certificates/98XWE9QOLXM3',
  },
  {
    id: 2,
    gambar: Sertif2,
    nama: 'Belajar Pengembangan Machine Learning',
    bidang: 'AI / Machine Learning',
    penerbit: 'Dicoding Indonesia',
    tahun: '2025',
    credentials: 'https://www.dicoding.com/certificates/98XWE9QOLXM3',
  },
  {
    id: 3,
    gambar: Sertif3,
    nama: 'Machine Learning Terapan',
    bidang: 'AI / Machine Learning',
    penerbit: 'Dicoding Indonesia',
    tahun: '2025',
    credentials: 'https://www.dicoding.com/certificates/98XWE9QOLXM3',
  },
  {
    id: 4,
    gambar: Sertif4,
    nama: 'React JS Advanced',
    bidang: 'AI / Machine Learning',
    penerbit: 'Dicoding Indonesia',
    tahun: '2025',
    credentials: 'https://www.dicoding.com/certificates/98XWE9QOLXM3',
  },
  {
    id: 5,
    gambar: Sertif5,
    nama: 'Cloud Computing Essentials',
    bidang: 'AI / Machine Learning',
    penerbit: 'Dicoding Indonesia',
    tahun: '2025',
    credentials: 'https://www.dicoding.com/certificates/98XWE9QOLXM3',
  },
  {
    id: 6,
    gambar: Sertif6,
    nama: 'Data Science & Analytics',
    bidang: 'Data Science',
    penerbit: 'Dicoding Indonesia',
    tahun: '2025',
    credentials: 'https://www.dicoding.com/certificates/98XWE9QOLXM3',
  },
];
