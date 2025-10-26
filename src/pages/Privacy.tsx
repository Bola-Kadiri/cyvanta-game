import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Ownership",
      content: [
        "All content, designs, and trademarks under Cyvanta Technologies are owned exclusively by Cyvanta Technologies Ltd."
      ]
    },
    {
      icon: Lock,
      title: "Payments & Pricing",
      content: [
        "All payments must be made to verified Cyvanta Technologies accounts. Prices are subject to change based on currency fluctuation and product availability."
      ]
    },
    {
      icon: Eye,
      title: "Warranty & Returns",
      content: [
        "Customers are entitled to returns or exchanges only for defective products reported within 48 hours of purchase, with valid proof of payment."
      ]
    },
    {
      icon: UserCheck,
      title: "Liability",
      content: [
        "Cyvanta Technologies will not be held liable for product misuse or damages caused by improper installation not handled by our team."
      ]
    },
     {
      icon: UserCheck,
      title: "Privacy",
      content: [
        "Customer data is kept strictly confidential and used only for service or order processing."
      ]
    },
     {
      icon: UserCheck,
      title: "Dispute Resolution",
      content: [
        "Any disputes arising from transactions with Cyvanta Technologies shall be resolved under Nigerian law"
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