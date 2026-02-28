import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s discuss your project
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Whether you have an idea, need guidance, or want to start immediately —
            we’re here to help you take the next step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl border space-y-6 transition-all duration-500 ease-premium hover:shadow-2xl">

            <a href="tel:+918520003931" className="flex items-center gap-4 group">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaPhoneAlt className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="font-medium group-hover:text-primary">+91 8520003931</p>
              </div>
            </a>

            <a href="mailto:hello.arvextech@gmail.com" className="flex items-center gap-4 group">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium group-hover:text-primary">hello.arvextech@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/918520003931"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaWhatsapp className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="font-medium group-hover:text-primary">Start chat instantly</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>

          </div>

          <div className="relative bg-gradient-to-br from-primary to-accent text-white p-10 rounded-2xl shadow-xl overflow-hidden">

            <h3 className="text-2xl font-semibold mb-3">
              Start your digital journey today
            </h3>

            <p className="text-sm opacity-90">
              We partner with businesses to build websites and AI-powered solutions
              that attract customers, build credibility, and drive growth.
            </p>

            <ul className="mt-6 space-y-2 text-sm opacity-95">
              <li>✔️ Free consultation</li>
              <li>✔️ Simple process</li>
              <li>✔️ Fast delivery</li>
              <li>✔️ Ongoing support</li>
            </ul>

            <a
              href="https://wa.me/918520003931"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-primary px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              Message on WhatsApp →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}