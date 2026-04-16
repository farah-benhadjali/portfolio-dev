import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E0E7FF] placeholder-[#A5B4FC]/50 outline-none focus:border-[#6366F1]/60 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition";

  const isLoading = status === "sending";

  return (
    <section id="contact" className="py-24 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#E0E7FF]">Contact</h2>
            <p className="text-[#A5B4FC] mt-3 text-sm max-w-xl mx-auto">
              Envoyez un message — réponse rapide garantie.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* FORM */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl
                hover:border-[#6366F1]/30 transition"
              >
                {/* glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1]/10 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Nom"
                      disabled={isLoading}
                      required
                    />

                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Email"
                      disabled={isLoading}
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} min-h-[140px]`}
                    placeholder="Votre message..."
                    disabled={isLoading}
                    required
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-5 py-3 rounded-xl font-medium transition
                    bg-[#6366F1] hover:bg-[#4f46e5] text-white disabled:opacity-60
                    flex items-center justify-center gap-2"
                  >
                    {status === "sending" && (
                      <span className="animate-spin">⏳</span>
                    )}
                    {status === "idle" && "🚀 Envoyer"}
                    {status === "sending" && "Envoi..."}
                    {status === "sent" && "✅ Envoyé"}
                    {status === "error" && "❌ Erreur"}
                  </button>
                </div>
              </form>
            </div>

            {/* SIDE */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* CONTACT */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl
              hover:border-[#22D3EE]/30 transition"
              >
                <h3 className="text-[#E0E7FF] font-semibold mb-4">
                  Contact direct
                </h3>

                <p className="text-[#A5B4FC] text-sm mb-2">
                  📞 +216 27 66 40 99
                </p>

                <p className="text-[#A5B4FC] text-sm">
                  📧 farah.bhadjali@gmail.com
                </p>
              </div>

              {/* STATUS */}
              <div
                className="rounded-2xl p-4 bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center gap-3
              hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-[#E0E7FF] text-sm">Disponible</p>
                  <p className="text-[#A5B4FC] text-xs">Freelance & CDI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
