import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information such as name, email address, and phone number when you contact us or make inquiries",
        "Order information including shipping addresses and product preferences",
        "Communication records from WhatsApp, email, or phone conversations",
        "Website usage data through cookies and analytics tools",
        "Device information and IP addresses for security purposes"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your gaming product orders and inquiries",
        "Provide customer support and technical assistance",
        "Send product updates, gaming tips, and promotional offers (with your consent)",
        "Improve our website, products, and services",
        "Comply with legal obligations and prevent fraud"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Information may be shared with trusted delivery partners for order fulfillment",
        "We may share data with payment processors for secure transactions",
        "Legal authorities may receive information if required by law",
        "Service providers helping us operate our website may access necessary data"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and review the personal information we have about you",
        "Request corrections to any inaccurate or incomplete information",
        "Request deletion of your personal data (subject to legal requirements)",
        "Opt-out of marketing communications at any time",
        "Withdraw consent for data processing where applicable"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-primary mr-4" />
            <h1 
              className="text-4xl md:text-6xl font-bold text-glow"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="card-gaming animate-slide-in">
            <CardContent className="p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                At GameZone Elite, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, and 
                safeguard your data when you interact with our website, products, and services.
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Last updated:</strong> September 15, 2025
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          {sections.map((section, index) => (
            <Card 
              key={section.title} 
              className="card-gaming animate-slide-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-glow-secondary">
                  <section.icon className="h-6 w-6 text-primary mr-3" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Data Security */}
          <Card className="card-gaming animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-glow-secondary">
                <Lock className="h-6 w-6 text-primary mr-3" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• SSL encryption for all data transmissions</li>
                <li>• Secure servers with regular security updates</li>
                <li>• Limited access to personal data on a need-to-know basis</li>
                <li>• Regular security audits and monitoring</li>
                <li>• Secure payment processing through trusted partners</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-gaming bg-secondary-gradient animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h2>
              <p className="text-white/90 mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/2349151722634" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-secondary px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-medium"
                >
                  WhatsApp Us
                </a>
                <a 
                  href="mailto:privacy@gamezoneelite.com"
                  className="bg-white text-secondary px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-medium"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Last Updated Notice */}
          <Card className="card-gaming animate-slide-in" style={{ animationDelay: '0.7s' }}>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm">
                <strong>Updates to This Policy:</strong> We may update this Privacy Policy from time to time. 
                Any changes will be posted on this page with an updated "Last updated" date. We encourage 
                you to review this policy periodically to stay informed about how we protect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;