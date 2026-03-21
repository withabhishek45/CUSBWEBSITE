import { useState } from "react";
import { api } from "../utils/api";
import { FaPhone, FaEnvelope, FaMapMarker, FaClock } from "react-icons/fa";
import BackToTop from "../components/layout/BackToTop";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await api.post("/contact", form);
    setStatus(result.success ? "success" : "error");
    if (result.success) setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  const contactInfo = [
    { icon: FaMapMarker, title: "Address", content: "NH-120, Gaya Panchanpur Road, Gaya - 824236 (Bihar), India" },
    { icon: FaPhone, title: "Phone", content: "+91-631-2229530" },
    { icon: FaEnvelope, title: "Email", content: "registrar@cusb.ac.in" },
    { icon: FaClock, title: "Office Hours", content: "Mon - Fri: 9:00 AM - 5:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-1">Get in touch with Central University of South Bihar</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <info.icon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.6846877892494!2d84.88686167497507!3d24.872126977921678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d2ba5426f7dbf%3A0x3c4a04dfea5ac7fb!2sCentral%20University%20of%20South%20Bihar!5e1!3m2!1sen!2sin!4v1773949721037!5m2!1sen!2sin"
                className="w-full h-64"
                style={{ border: 0 }}
                loading="lazy"
                title="CUSB Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({...form, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-center font-medium">✓ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </main>
      <BackToTop />
    </div>
  );
}
