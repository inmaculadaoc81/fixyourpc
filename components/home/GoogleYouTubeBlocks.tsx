import { CONTACT } from "@/lib/site-config";
import { GOOGLE_BUSINESS_BLOCK, YOUTUBE_BLOCK } from "@/lib/home-content";

export default function GoogleYouTubeBlocks() {
  return (
    <section className="bg-brand-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:px-8">
        <div className="card-surface flex flex-col justify-between p-8">
          <div>
            <svg width="36" height="36" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
              <path fill="#FBBC05" d="M11.69 28.18A13.96 13.96 0 0 1 10.9 24c0-1.45.25-2.86.7-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
              <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
            </svg>
            <h3 className="mt-4 text-xl font-bold text-brand-black">{GOOGLE_BUSINESS_BLOCK.title}</h3>
          </div>
          <a
            href={CONTACT.googleBusinessHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl"
          >
            {GOOGLE_BUSINESS_BLOCK.cta}
          </a>
        </div>

        <div className="card-surface flex flex-col justify-between p-8">
          <div>
            <svg width="40" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z" />
              <path fill="#fff" d="M9.6 15.6V8.4l6.4 3.6-6.4 3.6Z" />
            </svg>
            <h3 className="mt-4 text-xl font-bold text-brand-black">{YOUTUBE_BLOCK.title}</h3>
            <p className="mt-2 text-sm text-brand-gray-700">{YOUTUBE_BLOCK.subtitle}</p>
          </div>
          <a
            href={CONTACT.youtubeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5"
          >
            {YOUTUBE_BLOCK.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
