import { whatsappUrl } from "../lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Frigelar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:bg-[#20BD5A] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-5 sm:right-5 sm:h-[52px] sm:w-[52px]"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22C17 22 21 17.5 21 12C21 6.5 17 2 12 2C7 2 3 6.5 3 12C3 13.7 3.4 15.3 4.2 16.7L3.1 20.4L6.9 19.4C8.2 20.3 9.5 21 12 21V22Z"
          fill="white"
          stroke="white"
          strokeWidth="0.5"
        />
        <path
          d="M8.8 10.1C9 9.4 9.4 9.3 9.8 9.3H10.6C10.9 9.3 11.2 9.6 11.4 10.1L11.9 11.4C12.1 11.9 11.9 12.3 11.4 12.7L10.9 13.3C11.5 14.4 12.7 15.6 14 16.3L14.5 15.8C14.9 15.4 15.3 15.3 15.8 15.5L17 16C17.5 16.2 17.8 16.5 17.8 16.8V17.6C17.8 18 17.6 18.4 16.9 18.7C16.2 19 15 18.8 13.6 18C12.1 17.2 10.8 15.8 9.9 14.3C9 12.8 8.6 11.4 8.8 10.1Z"
          fill="#25D366"
          stroke="#128C7E"
          strokeWidth="0.3"
        />
        <path
          d="M8.8 10.1C9 9.4 9.4 9.3 9.8 9.3H10.6C10.9 9.3 11.2 9.6 11.4 10.1L11.9 11.4C12.1 11.9 11.9 12.3 11.4 12.7L10.9 13.3C11.5 14.4 12.7 15.6 14 16.3L14.5 15.8C14.9 15.4 15.3 15.3 15.8 15.5L17 16C17.5 16.2 17.8 16.5 17.8 16.8V17.6C17.8 18 17.6 18.4 16.9 18.7C16.2 19 15 18.8 13.6 18C12.1 17.2 10.8 15.8 9.9 14.3C9 12.8 8.6 11.4 8.8 10.1Z"
          fill="white"
        />
      </svg>
    </a>
  );
}
