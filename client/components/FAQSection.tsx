import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "👉Our USP is we complete project in lesser time, Most Projects take 1-3 weeks. Smaller projects can finish in 1-2 weeks. We’ll share a clear timeline before starting.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "👉 Pricing depends on your project. We offer fixed, hourly, or custom plans — based on your budget.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "👉 Yes! We love working with startups and can adapt to your budget as you grow.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "👉 We work with tech, e-commerce, creative, finance, and more. Our approach fits any industry.",
    },
    {
      question: "Can you help with ongoing support?",
      answer:
        "👉 Yes! We offer maintenance and updates after your project is live. Many clients stay with us for long-term support.",
    },
  ];

  return (
    <section id="faqs" className="py-20 px-8 bg-gradient-to-b from-yellow-300 to-yellow-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Got Questions? 💬
          </h2>
          <p className="text-lg text-gray-800">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-black rounded-lg bg-white/95 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
