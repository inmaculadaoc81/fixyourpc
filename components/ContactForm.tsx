"use client";

import { useState, type FormEvent } from "react";
import { EQUIPMENT_OPTIONS } from "@/lib/home-content";
import type { ContactFormStatus } from "@/types/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      equipment: String(formData.get("equipment") || ""),
      message: String(formData.get("message") || ""),
      privacyAccepted: formData.get("privacyAccepted") === "on",
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "No se pudo enviar el mensaje.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("No se pudo enviar el mensaje. Comprueba tu conexión e inténtalo de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800">
        <p className="font-semibold">Consulta enviada correctamente.</p>
        <p className="mt-1 text-sm">Te respondemos en 5 minutos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="name" required autoComplete="name" />
        <Field label="Teléfono" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <SelectField label="Equipo / producto" name="equipment" options={EQUIPMENT_OPTIONS} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-black">
          ¿Qué ha pasado?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Cuéntanos qué hace o qué ha dejado de hacer tu equipo..."
          className="mt-1.5 w-full rounded-xl border border-transparent bg-brand-gray-50 px-4 py-2.5 text-sm text-brand-black placeholder:text-brand-gray-400 transition-colors focus:border-brand-red/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-brand-gray-700">
        <input type="checkbox" name="privacyAccepted" required className="mt-1" />
        <span>
          Acepto que MSITech use estos datos únicamente para responder a mi consulta. No se comparten con terceros.
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-transparent bg-brand-gray-50 px-4 py-2.5 text-sm text-brand-black transition-colors focus:border-brand-red/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-black">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1.5 w-full rounded-xl border border-transparent bg-brand-gray-50 px-4 py-2.5 text-sm text-brand-black transition-colors focus:border-brand-red/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-red/10"
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
