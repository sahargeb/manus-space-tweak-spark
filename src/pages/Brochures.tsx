import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Brochures = () => {
  const catalogData = [
    {
      id: 1,
      title: "Bathroom sanitaryware & brassware",
      description: "مجموعة شاملة من الأدوات الصحية والصنابير للحمامات الفاخرة",
      image: "/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png",
      category: "Bathrooms",
      color: "blue"
    },
    {
      id: 2, 
      title: "Kitchen LifeStyle",
      description: "تصاميم مطابخ عصرية تجمع بين الأناقة والوظائف العملية",
      image: "/lovable-uploads/8f4ea90d-110a-42bb-9a4c-d29fab5cd69a.png",
      category: "Kitchens",
      color: "green"
    },
    {
      id: 3,
      title: "TILES & SLABS",
      description: "مجموعة متنوعة من البلاط والألواح عالية الجودة",
      image: "/lovable-uploads/9e14421b-af59-459f-b4a2-a5a20bba48fc.png", 
      category: "Materials",
      color: "purple",
      downloadLink: "https://drive.google.com/uc?export=download&id=1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO",
      viewLink: "https://drive.google.com/file/d/1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO/view"
    },
    {
      id: 4,
      title: "Outdoor Lighting",
      description: "حلول إضاءة خارجية متطورة للمساحات والحدائق",
      image: "/lovable-uploads/183de876-71b4-448d-a15e-10633d816508.png",
      category: "Lighting",
      color: "green",
      downloadLink: "https://drive.google.com/uc?export=download&id=1EH2HLYGCLZ2tqSUL1cMhcnDb7x94bGEx",
      viewLink: "https://drive.google.com/file/d/1EH2HLYGCLZ2tqSUL1cMhcnDb7x94bGEx/view"
    },
    {
      id: 5,
      title: "Tiles & Surfaces",
      description: "مجموعة شاملة من البلاط والأسطح للمساحات الداخلية والخارجية",
      image: "/lovable-uploads/8e64104b-7941-4756-b2c8-9b2121983cd5.png",
      category: "Surfaces", 
      color: "purple"
    },
    {
      id: 6,
      title: "Small Format Tiles",
      description: "بلاط صغير الحجم للتصاميم التفصيلية والديكورات الفريدة",
      image: "/lovable-uploads/a2126c93-c0af-4266-98af-d491626a5d3d.png",
      category: "Tiles",
      color: "gray",
      downloadLink: "https://drive.google.com/uc?export=download&id=1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4",
      viewLink: "https://drive.google.com/file/d/1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4/view"
    },
    {
      id: 7,
      title: "Hokkaido",
      description: "مجموعة هوكايدو المميزة للتصاميم الداخلية الفاخرة",
      image: "/lovable-uploads/8e64104b-7941-4756-b2c8-9b2121983cd5.png",
      category: "Premium",
      color: "blue",
      downloadLink: "https://drive.google.com/uc?export=download&id=1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI",
      viewLink: "https://drive.google.com/file/d/1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI/view"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'green': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'purple': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'gray': return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
      default: return 'bg-primary/10 text-primary border-primary/20';
    }
  };

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
              <h1 className="text-2xl font-bold text-foreground">الكاتلوجات والبروشيرز</h1>
              <p className="text-sm text-muted-foreground">استعرض وحمل كاتلوجاتنا المتخصصة</p>
            </div>
            
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            كاتلوجات المنتجات
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تصفح واستعرض كاتلوجاتنا الحصرية للحصول على معلومات تفصيلية 
            عن منتجاتنا وخدماتنا المتخصصة في التصميم الداخلي
          </p>
        </div>

        {/* Catalogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogData.map((catalog) => (
            <Card key={catalog.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-right">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <img 
                    src={catalog.image} 
                    alt={catalog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" 
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getColorClasses(catalog.color)}>
                    {catalog.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {catalog.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {catalog.description}
                </p>
                
                <div className="space-y-3 pt-2">
                  {catalog.downloadLink ? (
                    <a href={catalog.downloadLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full flex-row-reverse" size="default">
                        <Download className="w-4 h-4 ml-2" />
                        تحميل الكاتلوج
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full flex-row-reverse" size="default" disabled>
                      <Download className="w-4 h-4 ml-2" />
                      تحميل الكاتلوج
                    </Button>
                  )}
                  {catalog.viewLink ? (
                    <a href={catalog.viewLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full flex-row-reverse" size="default">
                        <Eye className="w-4 h-4 ml-2" />
                        عرض الكاتلوج
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="w-full flex-row-reverse" size="default" disabled>
                      <Eye className="w-4 h-4 ml-2" />
                      عرض الكاتلوج
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            تحتاج مساعدة في الاختيار؟
          </h3>
          <p className="text-muted-foreground">
            فريقنا المتخصص مستعد لمساعدتك في اختيار المنتجات المناسبة لمشروعك
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg">
                استشارة مجانية
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

export default Brochures;