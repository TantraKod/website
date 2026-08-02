import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      setStatus({ type: 'error', msg: 'Please complete all required fields.' });
      return;
    }

    setStatus({
      type: 'success',
      msg: `Thank you, ${formData.name.trim()}! Your inquiry has been sent to our engineering lead. We will reach out within 24 hours.`
    });

    setFormData({ name: '', email: '', service: '', message: '' });

    setTimeout(() => {
      setStatus({ type: '', msg: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d111d]/70 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Left Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Let's Connect
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-primary">
            Ready to Build Your Digital Future?
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            Schedule a free technical strategy call with our Senior Solutions Architect. We will review your project scope and provide a detailed engineering roadmap.
          </p>

          <div className="space-y-4 pt-4">
            <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm">Direct Email</h4>
                <p className="text-slate-400 text-sm">contact@tantrakod.com</p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm">Global Headquarters</h4>
                <p className="text-slate-400 text-sm">TantraKod Tech Park, Innovation Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Right */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-10 rounded-3xl gradient-border space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#090c14] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-[#090c14] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Service / Product Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#090c14] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              >
                <option value="" disabled>Select a Service or Product</option>
                <option value="website">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="ai">AI Solutions</option>
                <option value="cloud">Cloud Services</option>
                <option value="uiux">UI/UX Design</option>
                <option value="security">Cyber Security</option>
                <option value="devops">DevOps</option>
                <option value="saas">SaaS Products</option>
                <option value="qr">QR Generator</option>
                <option value="erp">ERP System</option>
                <option value="crm">CRM Suite</option>
                <option value="school">School Management</option>
                <option value="hospital">Hospital Management</option>
                <option value="chatbot">AI Chatbot</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Project Overview</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your project requirements and timelines..."
                className="w-full bg-[#090c14] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Submit Project Inquiry
              <Send className="w-4 h-4" />
            </button>

            {status.msg && (
              <div className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                status.type === 'success' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
              }`}>
                {status.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{status.msg}</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
