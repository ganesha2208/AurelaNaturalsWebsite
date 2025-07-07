import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../../FirebaseConfig";
import { toast } from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
    companyName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      return toast.error("Please fill in all required fields");
    }

    // Regex validation for 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      return toast.error("Please enter a valid 10-digit phone number");
    }

    // New validation for phone number length
    if (formData.phone.length !== 10) {
      return toast.error("Please enter exactly 10 digits for the phone number");
    }

    try {
      // Prepare contact data
      const contactData = {
        ...formData,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        status: "new",
      };

      // Prepare user data
      const userData = {
        name: formData.name,
        phoneNumber: formData.phone,
        email: formData.email || "",
        companyName: formData.companyName || "",
        role: "user",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Add to both collections
      const contactRef = collection(fireDB, "contacts");
      const userRef = collection(fireDB, "user");

      await Promise.all([
        addDoc(contactRef, contactData),
        addDoc(userRef, userData),
      ]);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        message: "",
        email: "",
        companyName: "",
      });
      setShowAdditionalDetails(false);

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our natural skincare
            products
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:9067 00 6013"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    9067 00 6013
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:aurelanaturals05@gmail.com"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    aurelanaturals05@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    No 1 to 6, Satara - Koregaon Rd,
                    <br />
                    Srinagar Colony, Sangamnagar,
                    <br />
                    Satara, Maharashtra 415003
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <FaClock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Find Us
            </h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890123!2d74.12345678901234!3d17.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzM0LjQiTiA3NMKwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurela Naturals Location"
                className="w-full h-96"
              ></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=No+1+to+6,+Satara+-+Koregaon+Rd,+Srinagar+Colony,+Sangamnagar,+Satara,+Maharashtra+415003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
