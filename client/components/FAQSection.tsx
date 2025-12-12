import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
<<<<<<< HEAD
        "Project timelines vary depending on complexity and scope. A typical website takes 6-12 weeks, while simpler projects may take 2-4 weeks. We'll provide a detailed timeline during the initial consultation.",
=======
        "👉Our USP is we complete project in lesser time, Most Projects take 1-3 weeks. Smaller projects can finish in 1-2 weeks. We’ll share a clear timeline before starting.",
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
    {
      question: "What's your pricing structure?",
      answer:
<<<<<<< HEAD
        "We offer flexible pricing based on your project needs. We can work with fixed project fees, hourly rates, or retainer arrangements. Contact us for a custom quote tailored to your budget.",
=======
        "👉 Pricing depends on your project. We offer fixed, hourly, or custom plans — based on your budget.",
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
    {
      question: "Do you work with startups?",
      answer:
<<<<<<< HEAD
        "Absolutely! We love working with startups and have experience helping early-stage companies build their digital presence. We offer flexible terms and can scale with your growth.",
=======
        "👉 Yes! We love working with startups and can adapt to your budget as you grow.",
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
    {
      question: "What industries do you specialize in?",
      answer:
<<<<<<< HEAD
        "We work across various industries including tech, e-commerce, healthcare, finance, creative, and more. Our diverse experience allows us to adapt our approach to any industry's unique needs.",
=======
        "👉 We work with tech, e-commerce, creative, finance, and more. Our approach fits any industry.",
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
    {
      question: "Can you help with ongoing support?",
      answer:
<<<<<<< HEAD
        "Yes! We offer maintenance, support, and update services after project completion. Many clients work with us on retainer for continuous optimization and feature development.",
=======
        "👉 Yes! We offer maintenance and updates after your project is live. Many clients stay with us for long-term support.",
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
  ];

  return (
<<<<<<< HEAD
    <section id="faqs" className="py-16 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help transform your project
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group border border-slate-700 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden hover:border-slate-500 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white text-left group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-all duration-300 flex-shrink-0 ml-4 ${
=======
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
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
<<<<<<< HEAD
                <div className="px-8 pb-6 border-t border-slate-700 animate-in fade-in slide-in-from-top-2">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
=======
                <div className="px-6 pb-4 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
                </div>
              )}
            </div>
          ))}
        </div>
<<<<<<< HEAD

        <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl text-center">
          <p className="text-gray-300 mb-4 text-lg">
            Still have questions?
          </p>
          <a href="#contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
=======
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
      </div>
    </section>
  );
}
