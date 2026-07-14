import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/967738688812"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[99] w-14 h-14 bg-burning-flame text-abyssal-blue rounded-full flex items-center justify-center border-2 border-abyssal-blue shadow-[3px_3px_0_0_var(--color-abyssal-blue)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0_0_var(--color-abyssal-blue)] transition-all duration-300"
      aria-label="تواصل معنا عبر واتساب"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
