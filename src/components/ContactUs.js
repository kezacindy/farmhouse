import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen   bg-gray-800 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">
        <div className="w-1/2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.14364439932!2d29.5448!3d-1.431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zHkg2OCtDNzMsIEtpbmdp!5e0!3m2!1sen!2srw!4v1691500769612!5m2!1sen!2srw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-bold text-green-950 mb-4">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label className="block text-black">Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-black">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-black">Phone Number</label>
              <input type="tel" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-black">Message</label>
              <textarea className="w-full px-3 py-2 border rounded-lg" rows="5"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
