import { useState } from "react";
import emailjs from "emailjs-com";
import { ContactFormData } from "@shared/api";

export default function ContactSection() {
  // ------------------------------
  // 🧠 Local State Management
  // ------------------------------
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

  // ------------------------------
  // ✏️ Handle Input Changes
  // ------------------------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ------------------------------
  // 📤 Handle Form Submission (EmailJS)
  // ------------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        "service_v90d0eq", // ✅ Your Service ID
        "template_isravtn", // ✅ Your Template ID
        {
          from_name: formData.name, // matches {{from_name}}
          from_email: formData.email, // matches {{from_email}}
          message: formData.message, // matches {{message}}
          time: new Date().toLocaleString(), // matches {{time}} in your template
        },
        "uZAs5PjMdniIVdiYL" // ✅ Your Public Key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "✅ Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "❌ Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "⚠️ An error occurred while sending. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ------------------------------
  // 🧩 UI Markup
  // ------------------------------
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Let's Create Something Amazing!
          </h2>
          <p className="text-lg text-gray-700">
            Ready to transform your vision? Let's chat about your project.
          </p>
        </div>

        {/* 📧 Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-yellow-50 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-yellow-50 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-yellow-50 border border-black rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Sending..." : "Let's Talk 📩"}
          </button>
        </form>

        {/* 🔔 Success / Error Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg text-center font-semibold ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* 🌐 Social Links */}
        <div className="border-t border-black/10 pt-8">
          <p className="text-center text-gray-700 font-semibold mb-6">
            Follow us on social
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-yellow-100 border border-black rounded-full flex items-center justify-center font-semibold text-black hover:bg-yellow-200 transition-colors"
            >
              T
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-yellow-100 border border-black rounded-full flex items-center justify-center font-semibold text-black hover:bg-yellow-200 transition-colors"
            >
              L
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-yellow-100 border border-black rounded-full flex items-center justify-center font-semibold text-black hover:bg-yellow-200 transition-colors"
            >
              I
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
