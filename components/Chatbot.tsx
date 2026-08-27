"use client";

import { useEffect } from "react";

const CHAT_WEBHOOK_URL =
  "https://sswebhookss.affirmatechnology.com/webhook/be1293ae-db62-4ab3-8204-d2ae42505d63/chat";
const SESSION_KEY_NAME = "sessionId";
const TIMEOUT_DURATION = 5 * 60 * 1000;

/**
 * Mirrors the original site's n8n chat widget (same webhook, assistant
 * persona and inactivity/session-reset behaviour), reimplemented as a
 * client-side effect instead of an inline WordPress script.
 */
export default function Chatbot() {
  useEffect(() => {
    let cancelled = false;
    let cleanupTimer: (() => void) | undefined;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // @ts-expect-error -- dynamic ESM import from a CDN URL has no type declarations
    import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js")
      .then(({ createChat }) => {
        if (cancelled) return;

        createChat({
          webhookUrl: CHAT_WEBHOOK_URL,
          webhookConfig: { method: "POST", headers: {} },
          target: "#n8n-chat",
          mode: "window",
          chatInputKey: "chatInput",
          chatSessionKey: SESSION_KEY_NAME,
          metadata: {},
          showWelcomeScreen: true,
          defaultLanguage: "es",
          initialMessages: [
            "¡Hola! Soy Fátima, tu asistente. Cuéntame qué le pasa a tu MSI y te ayudo a ver qué opciones tienes.",
          ],
          i18n: {
            es: {
              title: "Hola!",
              subtitle: "Asistente Virtual",
              footer: "",
              getStarted: "INICIAR CONVERSACIÓN",
              inputPlaceholder: "Escribe tu mensaje...",
            },
          },
        });

        let inactivityTimer: ReturnType<typeof setTimeout>;
        const resetTimer = () => {
          clearTimeout(inactivityTimer);
          inactivityTimer = setTimeout(() => {
            localStorage.clear();
            window.location.reload();
          }, TIMEOUT_DURATION);
        };
        const events = ["mousemove", "keypress", "click", "scroll", "touchstart"] as const;
        events.forEach((e) => window.addEventListener(e, resetTimer));
        resetTimer();

        cleanupTimer = () => {
          clearTimeout(inactivityTimer);
          events.forEach((e) => window.removeEventListener(e, resetTimer));
        };
      })
      .catch(() => {
        // Chat widget failed to load (offline/CDN unreachable) — fail silently,
        // the phone/WhatsApp CTAs remain fully functional without it.
      });

    return () => {
      cancelled = true;
      cleanupTimer?.();
      link.remove();
    };
  }, []);

  return (
    <>
      <div id="n8n-chat" />
      <style>{`
        #n8n-chat .chat-window-wrapper,
        #n8n-chat [class*="chat-window-wrapper"] {
          position: fixed !important;
          z-index: 9999 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          bottom: 96px !important;
          right: 20px !important;
          width: auto !important;
          height: auto !important;
          pointer-events: none !important;
        }
        #n8n-chat .chat-window-wrapper > *,
        #n8n-chat [class*="chat-window-wrapper"] > * { pointer-events: auto !important; }
        #n8n-chat .chat-window-toggle,
        #n8n-chat [class*="chat-window-toggle"] {
          position: fixed !important;
          background: #004aad !important;
          color: #ffffff !important;
          width: 64px !important;
          height: 64px !important;
          border-radius: 50% !important;
          border: 1px solid #fff !important;
          box-shadow: 0 4px 20px rgba(0, 74, 173, 0.4) !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          flex-shrink: 0 !important;
          z-index: 10000 !important;
          right: 20px !important;
          bottom: 96px !important;
        }
        #n8n-chat .chat-window-toggle:hover,
        #n8n-chat [class*="chat-window-toggle"]:hover {
          transform: scale(1.1) !important;
          background: #003c8f !important;
          box-shadow: 0 8px 25px rgba(0, 74, 173, 0.6) !important;
        }
        #n8n-chat .chat-window:not([class*="toggle"]),
        #n8n-chat [class*="chat-window"]:not([class*="toggle"]):not([class*="wrapper"]) {
          width: 380px !important;
          max-height: 80vh !important;
          border-radius: 20px !important;
          margin-bottom: 15px !important;
          box-shadow: 0 5px 30px rgba(0,0,0,0.15) !important;
          position: fixed !important;
          right: 20px !important;
          bottom: 166px !important;
          z-index: 10000 !important;
        }
        .chat-powered-by { display: none; }
        @media (max-width: 600px) {
          #n8n-chat .chat-window-wrapper,
          #n8n-chat [class*="chat-window-wrapper"] {
            bottom: 90px !important;
            right: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            align-items: center !important;
          }
          #n8n-chat .chat-window-toggle,
          #n8n-chat [class*="chat-window-toggle"] {
            right: 16px !important;
            bottom: 90px !important;
          }
          #n8n-chat .chat-window:not([class*="toggle"]),
          #n8n-chat [class*="chat-window"]:not([class*="toggle"]):not([class*="wrapper"]) {
            left: 12px !important;
            right: 12px !important;
            width: auto !important;
            max-width: 100vw !important;
            bottom: 160px !important;
          }
        }
      `}</style>
    </>
  );
}
