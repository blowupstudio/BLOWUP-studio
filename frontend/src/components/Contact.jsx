import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Magnetic from "./Magnetic";
import { links, topics } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const inputCls =
  "w-full bg-surface border border-line focus:border-brand outline-none px-4 py-3 rounded-xl text-bone placeholder:text-ash/60 transition-colors";
const EMPTY = { name: "", email: "", phone: "", topic: topics[0], message: "" };

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="overline text-ash block mb-2">{label}</span>
      {children}
    </label>
  );
}

function ContactInfo() {
  return (
    <div className="order-2 lg:order-1 flex flex-col gap-4">
      <a
        href={`mailto:${links.email}`}
        className="flex items-center gap-4 border border-line bg-surface rounded-2xl p-5 hover:border-brand transition-colors group"
        data-testid="contact-email-link"
      >
        <span className="h-11 w-11 rounded-xl bg-brand/15 flex items-center justify-center text-brand">
          <Mail size={18} />
        </span>
        <span className="text-bone/90 group-hover:text-bone break-all">{links.email}</span>
      </a>
      <div className="flex items-center gap-4 border border-line bg-surface rounded-2xl p-5">
        <span className="h-11 w-11 rounded-xl bg-brand/15 flex items-center justify-center text-brand">
          <MapPin size={18} />
        </span>
        <span className="text-bone/90">{links.address}</span>
      </div>
      <div className="border border-line rounded-2xl overflow-hidden h-56 lg:flex-1">
        <iframe
          title="Kort over BLOWUP studio"
          src={links.maps}
          className="w-full h-full grayscale contrast-125"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function SubmitButton({ status }) {
  return (
    <Magnetic className="block">
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brandDark disabled:opacity-60 text-ink font-semibold text-base px-6 py-4 rounded-full transition-colors"
        data-testid="contact-submit"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sender...
          </>
        ) : (
          <>
            <Send size={16} /> Send besked
          </>
        )}
      </button>
    </Magnetic>
  );
}

function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fejl");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="border border-line bg-surface rounded-2xl p-6 sm:p-8 space-y-4" data-testid="contact-form">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Navn">
          <input required value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} placeholder="Dit navn" data-testid="contact-name-input" />
        </Field>
        <Field label="Email">
          <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputCls} placeholder="dig@email.dk" data-testid="contact-email-input" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Telefon">
          <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} placeholder="+45" data-testid="contact-phone-input" />
        </Field>
        <Field label="Emne">
          <select value={form.topic} onChange={(e) => set("topic", e.target.value)} className={inputCls} data-testid="contact-topic-select">
            {topics.map((t) => (
              <option key={t} className="bg-surface">{t}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Besked">
        <textarea required rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} className={`${inputCls} resize-none`} placeholder="Fortæl kort om dit projekt..." data-testid="contact-message-input" />
      </Field>
      <SubmitButton status={status} />
      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-brand" data-testid="contact-success">
          <CheckCircle2 size={16} /> Tak! Vi vender tilbage hurtigst muligt.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" data-testid="contact-error">
          Noget gik galt. Prøv igen eller skriv på mail.
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section id="kontakt" className="bg-ink py-20 md:py-28 border-t border-line" data-testid="contact">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="07" label="Kontakt" title="Sig hej." />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactInfo />
          <Reveal className="order-1 lg:order-2">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
