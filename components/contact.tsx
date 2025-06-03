import React from "react";

const ContactSection = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto grid gap-6"
          aria-label="Contact form"
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 text-blue-600 bg-[#eaf6ff] hover:bg-[#D5EFFF] border border-[#b6dcfe] hover:border-[#60a5fa] rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-sky-600"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 text-blue-600 bg-[#eaf6ff] hover:bg-[#D5EFFF] border border-[#b6dcfe] hover:border-[#60a5fa] rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-sky-600"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 text-blue-600 bg-[#eaf6ff] hover:bg-[#D5EFFF] border border-[#b6dcfe] hover:border-[#60a5fa] rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] placeholder-sky-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r bg-blue-500  hover:bg-blue-600  text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
