import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/967738688812"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[99] w-14 h-14 bg-[#4FFFB0] text-black rounded-full flex items-center justify-center border-2 border-black shadow-[3px_3px_0_0_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0_0_#000] transition-all duration-300"
      aria-label="تواصل معنا عبر واتساب"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
