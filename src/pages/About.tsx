import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Sample stories images - you can replace these with actual BAGNODESIGN story images
  const storyImages = [
    "/lovable-uploads/d1095dc8-3451-47b4-9277-ff12bfd87ef7.png",
    "/lovable-uploads/5be33a20-22b9-4b6a-aaf2-81f75f80886d.png", 
    "/lovable-uploads/a51864f6-9637-4034-9692-ec6a0bc3d9e5.png",
    "/lovable-uploads/42d3c144-2a91-4e05-bc52-78e9260cbed9.png",
    "/lovable-uploads/d5f6b3ae-a30b-44c2-94c6-dbdb34bd1de5.png",
    "/lovable-uploads/4aa1af44-00df-43a4-92f8-7b9cf8fabbd4.png",
    "/lovable-uploads/8ca1f78e-9660-45af-b2b2-f94fc572a36b.png",
    "/lovable-uploads/4c2bacb3-43c7-441b-8188-489680b11a6e.png",
    "/lovable-uploads/92353d56-6084-49a5-a45a-0bc3636a2b27.png",
    "/lovable-uploads/7fce98d9-2801-42b0-a8e6-a1f6c0d1ce3d.png",
    "/lovable-uploads/a6d3fab7-0404-4cf7-8cba-b0710166f428.png",
    "/lovable-uploads/7114e5a3-0255-4299-b8ef-5d3f1516cf8d.png",
    "/lovable-uploads/9c2848bb-6c0e-4d87-a7fe-e6f1aa1f8382.png",
    "/lovable-uploads/886c01f4-7f8b-4e63-b86f-b8a13bea7e86.png",
    "/lovable-uploads/49a0f7ae-a195-41e7-806d-686296c1c4e0.png",
    "/lovable-uploads/eb4032d8-d075-45e8-91cf-43a1856ab4b0.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <ArrowRight className="w-5 h-5" />
                العودة
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">BAGNODESIGN Stories</h1>
              <p className="text-sm text-muted-foreground">قصص نجاحنا في التصميم</p>
            </div>
            
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Company Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            عن BAGNODESIGN
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            منذ سنوات وهي تقدم أحدث التصاميم للحمامات والمطابخ الفاخرة، 
            BAGNODESIGN تجمع بين الأناقة والوظائف العملية لتحقق رؤى عملائها. 
            اكتشف معنا رحلة من الإبداع والتميز في التصميم الداخلي.
          </p>
        </div>

        {/* Stories Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {storyImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={image} 
                alt={`قصة باجنو ديزاين ${index + 1} - تصميم حمامات ومطابخ فاخرة في مصر`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  عرض التفاصيل
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            مستعدون لتحقيق حلمك؟
          </h3>
          <p className="text-muted-foreground">
            تواصل معنا اليوم للحصول على استشارة مجانية
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg">
                تواصل معنا
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;