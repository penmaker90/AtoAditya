import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Google Apps Script Web App URL - Replace with your actual URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxlLhixHbfu-5TILetokyCO0kkvNM6oW0-bxkdLhC2Cewi3gcySz0ojJYWBP9MJZLr8/exec";

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Indian phone number validation regex (10 digits starting with 6, 7, 8, or 9)
  const indianPhoneRegex = /^[6-9]\d{9}$/;

  // Validate individual fields
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters long' : '';
      case 'email':
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        if (value.trim() === '') return ''; // Optional field
        return !indianPhoneRegex.test(value.replace(/\D/g, '')) ? 'Please enter a valid 10-digit Indian mobile number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters long' : '';
      default:
        return '';
    }
  };

  // Validate entire form
  const validateForm = () => {
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
    
    setFormErrors(errors);
    const isValid = !Object.values(errors).some(error => error !== '');
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please fix the errors below and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Prepare form data
    const submitData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'Not provided',
      message: formData.message.trim(),
      timestamp: new Date().toISOString()
    };
    
    console.log('🚀 Submitting form data:', submitData);
    console.log('📍 Google Script URL:', GOOGLE_SCRIPT_URL);
    
    try {
      // Send data to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
        mode: 'no-cors' // Required for Google Apps Script
      });
      
      console.log('📬 Request sent successfully (no-cors mode)');
      
      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. Your message has been saved to our records and we'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormErrors({ name: "", email: "", phone: "", message: "" });
      setIsFormValid(false);
      
      // Log success for debugging
      console.log('✅ Form submission completed');
      
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue submitting your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    
    // For phone field, only allow digits and limit to 10 digits
    if (name === 'phone') {
      processedValue = value.replace(/\D/g, '').slice(0, 10);
    }
    
    setFormData({
      ...formData,
      [name]: processedValue
    });

    // Real-time validation for all fields
    const error = validateField(name, processedValue);
    setFormErrors({
      ...formErrors,
      [name]: error
    });
  };

  const handleWhatsAppClick = () => {
    console.log('📱 handleWhatsAppClick function called!');
    
    // ⚠️ IMPORTANT: Replace this with your actual WhatsApp number
    // Format: Country code + phone number (without + and spaces)
    // Example: For India +91 98765 43210, use "919876543210"
    const phoneNumber = "918542005199"; // 🔴 CHANGE THIS TO YOUR ACTUAL WHATSAPP NUMBER
    
    const message = "Hi! I'm interested in A2Z Solutions services. Could you please provide more information about your merchandise and printing services?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Debug: Log the WhatsApp URL to console
    console.log('📱 WhatsApp URL:', whatsappUrl);
    console.log('📞 Phone Number:', phoneNumber);
    console.log('💬 Message:', message);
    
    try {
      // Open WhatsApp
      const opened = window.open(whatsappUrl, '_blank');
      if (opened) {
        console.log('✅ WhatsApp opened successfully!');
      } else {
        console.log('❌ Failed to open WhatsApp - popup blocked?');
        // Fallback: try to navigate in same window
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error('❌ Error opening WhatsApp:', error);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Business Park", "New Delhi, India", "110001"],
      color: "text-red-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 11 2345 6789"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@a2zsolutions.com", "sales@a2zsolutions.com"],
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Closed"],
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-animated">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10"></div>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-8">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop&crop=center" 
            alt="Contact us - Modern office workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-background/50"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you! Reach out to us for inquiries, collaborations, or custom solutions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="card-neon">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gradient mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className={`input-neon w-full ${formErrors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {formErrors.name && (
                        <div className="flex items-center space-x-2 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <span>{formErrors.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number (Indian)</Label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        maxLength={10}
                        className={`input-neon w-full ${formErrors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {formErrors.phone && (
                        <div className="flex items-center space-x-2 text-red-500 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <span>{formErrors.phone}</span>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">10-digit Indian mobile number (6/7/8/9xxxxxxxxx)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className={`input-neon w-full ${formErrors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {formErrors.email && (
                      <div className="flex items-center space-x-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      className={`input-neon w-full resize-none ${formErrors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    />
                    {formErrors.message && (
                      <div className="flex items-center space-x-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.message}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSubmit(e);
                      }}
                      className={`relative w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer z-20 ${
                        isSubmitting 
                          ? 'bg-gray-500 cursor-not-allowed text-white' 
                          : 'bg-gradient-to-r from-neon-blue to-neon-pink hover:from-neon-blue/80 hover:to-neon-pink/80 text-white shadow-lg hover:shadow-neon transform hover:-translate-y-1'
                      }`}
                      style={{ pointerEvents: 'auto' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    
                    {/* Form Status Messages */}
                    <div className="mt-3 text-center">
                      {Object.values(formErrors).some(error => error) && (
                        <p className="text-orange-500 text-sm flex items-center justify-center space-x-2">
                          <AlertCircle className="h-4 w-4" />
                          <span>Please review the form fields above</span>
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gradient mb-2">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Get in touch with us through any of these channels
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-neon">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-neon-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gradient mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="card-neon bg-gradient-to-br from-green-500/10 to-green-600/10 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gradient">
                        WhatsApp Chat
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Chat with us instantly
                      </p>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('🔥 WhatsApp button clicked!');
                      handleWhatsAppClick();
                    }}
                    className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer relative z-20 focus:outline-none focus:ring-2 focus:ring-green-400"
                    style={{ pointerEvents: 'auto' }}
                  >
                    Chat with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Located in the heart of New Delhi's business district
            </p>
            
            {/* Get Directions Button */}
            <button 
              onClick={() => window.open('https://www.google.com/maps/dir//123+Business+Park,+New+Delhi,+India', '_blank')}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mb-8"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Get Directions
            </button>
          </div>
          
          {/* Google Map */}
          <div className="card-neon overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391655747!2d77.04417565!3d28.52758045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A2Z Solutions Office Location - 123 Business Park, New Delhi, India"
              className="rounded-lg"
            ></iframe>
            
            {/* Map Overlay with Address Info */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md rounded-lg p-4 border border-border/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    A2Z Solutions
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    123 Business Park, New Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Let's Create Something Amazing Together!</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to take your brand to the next level? We're here to help you succeed.
          </p>
          <button className="btn-neon text-background font-semibold text-lg px-8 py-4">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;