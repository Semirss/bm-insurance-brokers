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
      <div class="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm mx-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p class="text-gray-700 mb-6">Thank you for your message! We will get back to you shortly.</p>
        <button id="closeMessageBox" class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
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
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Heading for the section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center animate-fade-in-down">
          Connect With Our <span className="text-blue-600">Experts</span>
        </h2>

        {/* Creative Call to Action Section */}
        <div className="relative bg-blue-800 text-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left overflow-hidden animate-scale-in">
          {/* Background overlay for subtle pattern/texture */}
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 md:mb-0 md:mr-10 flex-grow">
              Ready to secure your peace of mind? <span className="block md:inline text-teal-300">Explore our plans today!</span>
            </h3>
            <a
              href="#"
              className="bg-teal-500 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg whitespace-nowrap"
            >
              Browse Insurance Plans
            </a>
          </div>
        </div>

        {/* Contact Information & Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"> {/* items-stretch for equal height columns */}
          {/* Left Column: Contact Information */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 flex flex-col justify-between animate-fade-in-left">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                We'd love to hear from you! Whether you have questions, need a quote, or require assistance, our team is here to help. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-center text-gray-800">
                  <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.001 8.001 0 0012 8c-2.83 0-5.485 1.117-7.464 3.136M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657m11.314 0A8.001 8.001 0 0012 8c-2.83 0-5.485 1.117-7.464 3.136m0-4.243a4 4 0 110 8 4 4 0 010-8z"></path></svg>
                  <div>
                    <p className="font-semibold">Our Office</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-800">
                  <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"></path></svg>
                  <div>
                    <p className="font-semibold ">Email Us</p>
                    <p>@bminsurancebrokers.com</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-800">
                  <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p>+251 912 34 567</p>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End of Left Column: Contact Information */}

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                  Telephone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+251 (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="comments" className="block text-gray-700 text-sm font-semibold mb-2">
                  How can we help? <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry or comments..."
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-900 resize-y transition-all duration-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div> {/* This closes the container div (line 48) */}

      <style>{`
        
        .bg-pattern {
          background-image: radial-gradient(#ffffff33 1px, transparent 1px), radial-gradient(#ffffff33 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
        }

        /* Animations */
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }

        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
