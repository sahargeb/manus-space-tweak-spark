import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";
const Brochures = () => {
  interface CatalogItem {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    color: string;
    downloadLink?: string;
    viewLink?: string;
  }
  const catalogData = [{
    id: 1,
    title: "Bathroom sanitaryware & brassware",
    description: "مجموعة شاملة من الأدوات الصحية والصنابير للحمامات الفاخرة",
    image: "/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png",
    category: "Bathrooms",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1fa_w2lJyvsECR_mOZVDkZHBuX1e6y5iO",
    viewLink: "https://drive.google.com/file/d/1fa_w2lJyvsECR_mOZVDkZHBuX1e6y5iO/view?usp=sharing"
  }, {
    id: 2,
    title: "Kitchen LifeStyle",
    description: "تصاميم مطابخ عصرية تجمع بين الأناقة والوظائف العملية",
    image: "/lovable-uploads/8f4ea90d-110a-42bb-9a4c-d29fab5cd69a.png",
    category: "Kitchens",
    color: "green"
  }, {
    id: 3,
    title: "TILES & SLABS",
    description: "مجموعة متنوعة من البلاط والألواح عالية الجودة",
    image: "/lovable-uploads/9e14421b-af59-459f-b4a2-a5a20bba48fc.png",
    category: "Materials",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO",
    viewLink: "https://drive.google.com/file/d/1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO/view?usp=sharing"
  }, {
    id: 4,
    title: "Outdoor Lighting",
    description: "حلول إضاءة خارجية متطورة للمساحات والحدائق",
    image: "/lovable-uploads/183de876-71b4-448d-a15e-10633d816508.png",
    category: "Lighting",
    color: "green",
    downloadLink: "https://drive.google.com/uc?export=download&id=1cpt5lNvGHAAxnTyHeGh7ZQky4xeL_GuM",
    viewLink: "https://drive.google.com/file/d/1cpt5lNvGHAAxnTyHeGh7ZQky4xeL_GuM/view?usp=sharing"
  }, {
    id: 5,
    title: "Tiles & Surfaces",
    description: "مجموعة شاملة من البلاط والأسطح للمساحات الداخلية والخارجية",
    image: "/lovable-uploads/8e64104b-7941-4756-b2c8-9b2121983cd5.png",
    category: "Surfaces",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Ss8yi8Y3WrueV12H5IzsKBPoJPizHJd5",
    viewLink: "https://drive.google.com/file/d/1Ss8yi8Y3WrueV12H5IzsKBPoJPizHJd5/view?usp=sharing"
  }, {
    id: 6,
    title: "Small Format Tiles",
    description: "بلاط صغير الحجم للتصاميم التفصيلية والديكورات الفريدة",
    image: "/lovable-uploads/a2126c93-c0af-4266-98af-d491626a5d3d.png",
    category: "Tiles",
    color: "gray",
    downloadLink: "https://drive.google.com/uc?export=download&id=1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4",
    viewLink: "https://drive.google.com/file/d/1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4/view?usp=sharing"
  }, {
    id: 7,
    title: "Hokkaido",
    description: "مجموعة هوكايدو المميزة للتصاميم الداخلية الفاخرة",
    image: "/lovable-uploads/8e64104b-7941-4756-b2c8-9b2121983cd5.png",
    category: "Premium",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI",
    viewLink: "https://drive.google.com/file/d/1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI/view?usp=sharing"
  }, {
    id: 8,
    title: "Hotel Amenities",
    description: "مجموعة شاملة من وسائل الراحة والخدمات الفندقية المتطورة",
    image: "/lovable-uploads/25d08403-9ecd-4938-8bf8-b4d51fb5b323.png",
    category: "Hotels",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Os3ikexV41YRpt4yH61cbyrW-BtbCW9v",
    viewLink: "https://drive.google.com/file/d/1Os3ikexV41YRpt4yH61cbyrW-BtbCW9v/view?usp=sharing"
  }, {
    id: 9,
    title: "Luxury Lifestyle",
    description: "تجربة حياة فاخرة مع تصاميم باجنو ديزاين الحصرية",
    image: "/lovable-uploads/a37b5d24-c094-4a1a-91f3-3a60e0ded97a.png",
    category: "Luxury",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1ZhUk5iw4MkdIzzvX5UQRaxrY-HhNyyUP",
    viewLink: "https://drive.google.com/file/d/1ZhUk5iw4MkdIzzvX5UQRaxrY-HhNyyUP/view?usp=sharing"
  }, {
    id: 10,
    title: "Bathroom & Spa Brands 2025",
    description: "أحدث ماركات الحمامات والسبا لعام 2025 من سانيبكس جروب",
    image: "/lovable-uploads/6939ead1-fd0f-48e5-9337-59c386513e79.png",
    category: "Spa",
    color: "green",
    downloadLink: "https://drive.google.com/uc?export=download&id=16__y5Dz5XPXAxRNff5IGweScdyz1KCVB",
    viewLink: "https://drive.google.com/file/d/16__y5Dz5XPXAxRNff5IGweScdyz1KCVB/view?usp=sharing"
  }];
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'green':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'purple':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'gray':
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };
  const handleDownload = (downloadLink: string, title: string) => {
    console.log(`Downloading: ${title} from ${downloadLink}`);
    window.open(downloadLink, '_blank');
  };
  const handleView = (viewLink: string, title: string) => {
    console.log(`Viewing: ${title} from ${viewLink}`);
    window.open(viewLink, '_blank');
  };
  return <div className="min-h-screen bg-background">
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
          {catalogData.map(catalog => <Card key={catalog.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-right">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <img src={catalog.image} alt={catalog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" />
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
                  {catalog.downloadLink ? <Button className="w-full flex-row-reverse hover:bg-primary/90 transition-colors" size="default" onClick={() => handleDownload(catalog.downloadLink!, catalog.title)}>
                      <Download className="w-4 h-4 ml-2" />
                      تحميل الكاتلوج
                    </Button> : <Button className="w-full flex-row-reverse opacity-50 cursor-not-allowed" size="default" disabled>
                      <Download className="w-4 h-4 ml-2" />
                      تحميل الكاتلوج
                    </Button>}
                  {catalog.viewLink ? <Button variant="outline" className="w-full flex-row-reverse hover:bg-accent hover:text-accent-foreground transition-colors" size="default" onClick={() => handleView(catalog.viewLink!, catalog.title)}>
                      <Eye className="w-4 h-4 ml-2" />
                      عرض الكاتلوج
                    </Button> : <Button variant="outline" className="w-full flex-row-reverse opacity-50 cursor-not-allowed" size="default" disabled>
                      <Eye className="w-4 h-4 ml-2" />
                      عرض الكاتلوج
                    </Button>}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-4">
          
          <p className="text-muted-foreground">
            فريقنا المتخصص مستعد لمساعدتك في اختيار المنتجات المناسبة لمشروعك
          </p>
          
        </div>
      </main>
    </div>;
};
export default Brochures;