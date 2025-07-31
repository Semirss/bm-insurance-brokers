import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it and provide a user-friendly message.
    console.log('Form submitted:', formData);

    // Using a custom message box instead of alert()
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-white p-4 rounded-lg shadow-xl text-center max-w-xs mx-auto">
        <h3 class="text-lg font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p class="text-sm text-gray-700 mb-4">Thank you for your message! We will get back to you shortly.</p>
        <button id="closeMessageBox" class="bg-gray-600 text-white font-semibold py-1.5 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300 text-sm">
          Close
        </button>
      </div>
    `;
    document.body.appendChild(messageBox);

    document.getElementById('closeMessageBox')?.addEventListener('click', () => {
      document.body.removeChild(messageBox);
    });

    setFormData({ name: '', email: '', phone: '', comments: '' }); // Clear form
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-50 py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Heading for the section */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center animate-fade-in-down">
          Connect With Our <span className="text-gray-600">Experts</span>
        </h1>

        {/* Contact Information & Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"> {/* items-stretch for equal height columns */}
          {/* Left Column: Map */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 flex flex-col animate-fade-in-left">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
            <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.697529402127!2d38.78440611478635!3d9.01188389352932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8514131b79e9%3A0x86c1c9b3c7d6c6a!2sMeskel%20Square!5e0!3m2!1sen!2set!4v1678912345678!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <p><span className="font-semibold">Address:</span> From Meskel flower to Gorgorios round about Martereza building 1st floor</p>
              <p><span className="font-semibold">Hours:</span> Always Open</p>
              <p><span className="font-semibold">Phone:</span> +251 91 198 2264 | +251 91 175 2727</p>
              <p><span className="font-semibold">Email:</span> contact@bminsurancebrokers.com</p>
            </div>
          </div> {/* End of Left Column: Map */}

          {/* Right Column: Contact Form */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 animate-fade-in-right">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-xs font-semibold mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-gray-50 text-gray-900 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-xs font-semibold mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-gray-50 text-gray-900 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-xs font-semibold mb-1">
                  Telephone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+251 (Optional)"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-gray-50 text-gray-900 text-sm"
                />
              </div>
              <div>
                <label htmlFor="comments" className="block text-gray-700 text-xs font-semibold mb-1">
                  How can we help? <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry or comments..."
                  rows={4} // Reduced rows
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-gray-50 text-gray-900 resize-y text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-600 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .bg-pattern {
          background-image: radial-gradient(#ffffff33 1px, transparent 1px), radial-gradient(#ffffff33 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
        }

        /* Animations */
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          animation-delay: 0.1s;
        }

        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-15px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }

        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(15px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
