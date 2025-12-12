import { useState } from "react";
import { ContactFormData, ContactFormResponse } from "@shared/api";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data: ContactFormResponse;
      try {
        data = (await response.json()) as ContactFormResponse;
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        setSubmitStatus({
          type: "error",
          message: "An error occurred. Please try again later.",
        });
        setIsSubmitting(false);
        return;
      }

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            data.message ||
            "Thank you! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.message ||
            "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@example.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-6">
            Let's Create Something Amazing!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vision into reality? We're excited to hear about your project and discuss how we can help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl text-center hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${info.gradient} text-white mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-gray-300">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Tell Us About Your Project
              </label>
              <textarea
                name="message"
                placeholder="Describe your project, goals, and any specific requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Let's Talk"}
            </button>
          </form>

          {submitStatus.type && (
            <div
              className={`mt-6 p-4 rounded-lg text-center font-semibold transition-all ${
                submitStatus.type === "success"
                  ? "bg-green-500/20 text-green-300 border border-green-500/50"
                  : "bg-red-500/20 text-red-300 border border-red-500/50"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>

        <div className="mt-16 text-center border-t border-slate-700 pt-12">
          <p className="text-gray-300 mb-6 text-lg">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-10-10z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-gray-300 hover:border-blue-600 hover:text-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center text-gray-300 hover:border-pink-500 hover:text-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
