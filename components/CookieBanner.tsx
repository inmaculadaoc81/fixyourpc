"use client";

import { useEffect, useState } from "react";

const KEY = "kelatos_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reading localStorage (an external system) is only possible after mount,
    // so this effect exists purely to sync that external state into React —
    // the sanctioned exception to "don't setState in an effect".
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (privacy mode, etc.) — just skip the banner.
    }
  }, []);

  const setConsent = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignore write errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[99999] flex flex-wrap items-center justify-center gap-4 bg-brand-black px-5 py-5 pr-14 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.25)] sm:pr-5"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <p className="m-0 max-w-3xl flex-1 basis-[500px] text-[13.5px] leading-relaxed text-white">
        Utilizamos cookies y tecnologías similares propias y de terceros, de sesión o
        persistentes, para hacer funcionar de manera segura nuestra página web y personalizar su
        contenido. Igualmente, utilizamos cookies para medir y obtener datos de la navegación que
        realizas y para ajustar la publicidad a tus gustos y preferencias. Puedes aceptar el uso
        de cookies a continuación.
      </p>
      <div className="flex flex-shrink-0 flex-wrap justify-center gap-2.5 sm:flex-row">
        <button
          type="button"
          onClick={() => setConsent("accepted")}
          className="rounded-md bg-[#1fb6ad] px-4.5 py-2.5 text-[13.5px] font-bold whitespace-nowrap text-white hover:bg-[#189d95]"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => setConsent("rejected")}
          className="rounded-md bg-[#1fb6ad] px-4.5 py-2.5 text-[13.5px] font-bold whitespace-nowrap text-white hover:bg-[#189d95]"
        >
          Rechazar
        </button>
        <a
          href="https://kelatos.com/privacy-policy/"
          target="_blank"
          rel="noopener"
          className="rounded-md bg-[#1fb6ad] px-4.5 py-2.5 text-[13.5px] font-bold whitespace-nowrap text-white hover:bg-[#189d95]"
        >
          Política de privacidad
        </a>
      </div>
      <button
        type="button"
        onClick={() => setConsent("dismissed")}
        aria-label="Cerrar"
        className="absolute top-2.5 right-3.5 bg-transparent p-1.5 text-2xl leading-none text-[#aab0bb] hover:text-white"
      >
        &times;
      </button>
    </div>
  );
}
