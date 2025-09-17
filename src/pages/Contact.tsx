import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+234 915 172 2634",
      action: "tel:+2349151722634"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@gamezoneelite.com",
      action: "mailto:info@gamezoneelite.com"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Lagos, Nigeria",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Sat: 9AM - 8PM",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our gaming experts for support, recommendations, or any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <Card className="card-gaming">
              <CardHeader>
                <CardTitle className="text-2xl text-glow-secondary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-muted/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 bg-muted/50 border-border/50 focus:border-primary resize-none"
                      placeholder="Tell us about your gaming needs or ask any questions..."
                    />
                  </div>

                  <Button type="submit" className="btn-gaming w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-6 text-glow-secondary">Get in Touch</h2>
              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={item.title} className="card-gaming">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary-gradient">
                          <item.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          {item.action.startsWith('#') ? (
                            <p className="text-muted-foreground">{item.info}</p>
                          ) : (
                            <a 
                              href={item.action}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.info}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <Card className="card-gaming bg-secondary-gradient">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Need Instant Support?</h3>
                  <p className="text-white/80 mb-4">
                    Chat with our gaming experts on WhatsApp for immediate assistance
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="bg-white text-secondary hover:bg-white/90"
                  >
                    <a href="https://wa.me/2349151722634" target="_blank" rel="noopener noreferrer">
                      Start WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Embedded Map */}
            <div className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <Card className="card-gaming overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted/20 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9093705935945!2d3.3792057!3d6.5276316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b36c97cc1c9%3A0x5c1e4b9b8b5d9e6f!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GameZone Elite Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;