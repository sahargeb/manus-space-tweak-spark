import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCatalogs = () => {
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
    title: "Bathroom Sanitaryware & Brassware",
    description: "Comprehensive collection of luxury bathroom fixtures and faucets for premium bathrooms",
    image: "/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png",
    category: "Bathrooms",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1fa_w2lJyvsECR_mOZVDkZHBuX1e6y5iO",
    viewLink: "https://drive.google.com/file/d/1fa_w2lJyvsECR_mOZVDkZHBuX1e6y5iO/view?usp=sharing"
  }, {
    id: 2,
    title: "Kitchen LifeStyle",
    description: "Modern kitchen designs that combine elegance with practical functionality",
    image: "/lovable-uploads/8f4ea90d-110a-42bb-9a4c-d29fab5cd69a.png",
    category: "Kitchens",
    color: "green",
    downloadLink: "https://example.com/download/kitchen",
    viewLink: "https://example.com/view/kitchen"
  }, {
    id: 3,
    title: "TILES & SLABS",
    description: "Diverse collection of high-quality tiles and premium slabs",
    image: "/lovable-uploads/9e14421b-af59-459f-b4a2-a5a20bba48fc.png",
    category: "Materials",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO",
    viewLink: "https://drive.google.com/file/d/1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO/view?usp=sharing"
  }, {
    id: 4,
    title: "Outdoor Lighting",
    description: "Advanced outdoor lighting solutions for spaces and gardens",
    image: "/lovable-uploads/183de876-71b4-448d-a15e-10633d816508.png",
    category: "Lighting",
    color: "green",
    downloadLink: "https://drive.google.com/uc?export=download&id=1cpt5lNvGHAAxnTyHeGh7ZQky4xeL_GuM",
    viewLink: "https://drive.google.com/file/d/1cpt5lNvGHAAxnTyHeGh7ZQky4xeL_GuM/view?usp=sharing"
  }, {
    id: 5,
    title: "Tiles & Surfaces",
    description: "Comprehensive collection of tiles and surfaces for interior and exterior spaces",
    image: "/lovable-uploads/8e64104b-7941-4756-b2c8-9b2121983cd5.png",
    category: "Surfaces",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Ss8yi8Y3WrueV12H5IzsKBPoJPizHJd5",
    viewLink: "https://drive.google.com/file/d/1Ss8yi8Y3WrueV12H5IzsKBPoJPizHJd5/view?usp=sharing"
  }, {
    id: 6,
    title: "Small Format Tiles",
    description: "Small format tiles for detailed designs and unique decorative elements",
    image: "/lovable-uploads/a2126c93-c0af-4266-98af-d491626a5d3d.png",
    category: "Tiles",
    color: "gray",
    downloadLink: "https://drive.google.com/uc?export=download&id=1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4",
    viewLink: "https://drive.google.com/file/d/1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4/view?usp=sharing"
  }, {
    id: 7,
    title: "Hokkaido",
    description: "Hokkaido distinctive collection for luxury interior designs",
    image: "/lovable-uploads/8e64104b-7941-4756-b2c8-9b2121983cd5.png",
    category: "Premium",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI",
    viewLink: "https://drive.google.com/file/d/1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI/view?usp=sharing"
  }, {
    id: 8,
    title: "Hotel Amenities",
    description: "Comprehensive collection of advanced hotel amenities and services",
    image: "/lovable-uploads/aa0fdce0-e4b0-42f4-ab29-2288b73266ca.png",
    category: "Hotels",
    color: "blue",
    downloadLink: "https://example.com/download/hotel-amenities",
    viewLink: "https://example.com/view/hotel-amenities"
  }, {
    id: 9,
    title: "Luxury Lifestyle",
    description: "Exclusive luxury lifestyle experience with Bagno Design premium collections",
    image: "/lovable-uploads/cb15b01a-60cb-4c98-a716-adc3a533ffe1.png",
    category: "Luxury",
    color: "purple",
    downloadLink: "https://example.com/download/luxury-lifestyle",
    viewLink: "https://example.com/view/luxury-lifestyle"
  }, {
    id: 10,
    title: "Bathroom & Spa Brands 2025",
    description: "Latest bathroom and spa brands for 2025 from Sanipex Group",
    image: "/lovable-uploads/7faacff0-c062-45be-a06c-6eeea8c452f4.png",
    category: "Spa",
    color: "green",
    downloadLink: "https://example.com/download/bathroom-spa-2025",
    viewLink: "https://example.com/view/bathroom-spa-2025"
  }, {
    id: 11,
    title: "Surfaces BAGNODESIGN 2025",
    description: "Latest surfaces collection from BAGNODESIGN for 2025",
    image: "/lovable-uploads/c1515818-817a-4205-88ba-c92af98c3f54.png",
    category: "Surfaces",
    color: "purple",
    downloadLink: "https://example.com/download/surfaces-bagnodesign-2025",
    viewLink: "https://example.com/view/surfaces-bagnodesign-2025"
  }, {
    id: 12,
    title: "Lighting Price Guide",
    description: "Comprehensive lighting price guide from SANIPEXGROUP",
    image: "/lovable-uploads/9aeb9520-2fde-4256-a34e-02e66cacb4c7.png",
    category: "Lighting",
    color: "green",
    downloadLink: "https://example.com/download/lighting-price-guide",
    viewLink: "https://example.com/view/lighting-price-guide"
  }, {
    id: 13,
    title: "Outdoor Kitchens & BBQs",
    description: "Outdoor kitchen and BBQ solutions from SANIPEXGROUP",
    image: "/lovable-uploads/ebc86740-145f-4948-8f14-80f4872a5697.png",
    category: "Outdoor",
    color: "green",
    downloadLink: "https://example.com/download/outdoor-kitchens-bbqs",
    viewLink: "https://example.com/view/outdoor-kitchens-bbqs"
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <ArrowRight className="w-5 h-5" />
                Back
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">Product Catalogs</h1>
              <p className="text-sm text-muted-foreground">Browse and download our specialized catalogs</p>
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
            Product Catalogs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse and explore our exclusive catalogs to get detailed information 
            about our products and specialized services in interior design
          </p>
        </div>

        {/* Catalogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogData.map(catalog => (
            <Card key={catalog.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <img 
                    src={catalog.image} 
                    alt={catalog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" 
                  />
                </div>
                <div className="absolute top-4 left-4">
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
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 hover:bg-primary/90 transition-colors" 
                    size="default" 
                    onClick={() => handleDownload(catalog.downloadLink!, catalog.title)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors" 
                    size="default" 
                    onClick={() => handleView(catalog.viewLink!, catalog.title)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Our specialized team is ready to help you choose the right products for your project
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProductCatalogs;