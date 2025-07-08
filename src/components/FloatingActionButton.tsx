import { useState } from "react";
import { MessageCircle, Phone, Mail, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const contactActions = [
    { icon: Phone, label: "اتصل بنا", action: () => window.open('tel:+1234567890') },
    { icon: Mail, label: "راسلنا", action: () => window.open('mailto:info@bagnodesign.com') },
    { icon: Instagram, label: "انستجرام", action: () => window.open('https://instagram.com') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-4 animate-slide-up">
          {contactActions.map((item, index) => (
            <Button
              key={index}
              size="sm"
              onClick={item.action}
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-5 h-5" />
            </Button>
          ))}
        </div>
      )}
      
      {/* Main button */}
      <Button
        onClick={toggleMenu}
        className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 button-pulse glow ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
};