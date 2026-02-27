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

        {/* ===== Heading ===== */}
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

        {/* ===== Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT — CONTACT CHANNELS */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border space-y-6">

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaPhoneAlt className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us</p>
                <p className="font-medium">+91 8520003931</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaEnvelope className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">hello.arvextech@gmail.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaWhatsapp className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <a
                  href="https://wa.me/918520003931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-indigo-600"
                >
                  Start chat instantly
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaInstagram className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Instagram</p>
                <a
                  href="https://instagram.com/arvextech_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-indigo-600"
                >
                  Follow us
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-xl">
                <FaMapMarkerAlt className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>

          </div>

          {/* RIGHT — CTA BLOCK */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 rounded-2xl shadow-xl overflow-hidden">

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/20 blur-3xl rounded-full"></div>

            <h3 className="text-2xl font-semibold mb-3 relative">
              Start your digital journey today
            </h3>

            <p className="text-sm opacity-90 relative">
              We partner with businesses to build websites and AI-powered solutions
              that attract customers, build credibility, and drive growth.
            </p>

            <ul className="mt-6 space-y-2 text-sm opacity-95 relative">
              <li>✔️ Free consultation</li>
              <li>✔️ Simple process</li>
              <li>✔️ Fast delivery</li>
              <li>✔️ Ongoing support</li>
            </ul>

            <a
              href="https://wa.me/918520003931"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:scale-[1.02] transition relative"
            >
              Message on WhatsApp →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}