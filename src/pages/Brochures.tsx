import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";
const Brochures = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  // Main catalogs
  const mainCatalogs = [{
    id: 13,
    title: "BAGNODESIGN MEA 2025 RETAIL PRICE LIST",
    description: "Comprehensive retail price list for BAGNODESIGN products in the Middle East and Africa region for 2025",
    image: "/lovable-uploads/8953b084-5a94-41d1-9203-72e89ceadde2.png",
    category: "Pricing",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1giLSFZsd6WfVI6nFgMucO4HlXGDHgkCD",
    viewLink: "https://drive.google.com/file/d/1giLSFZsd6WfVI6nFgMucO4HlXGDHgkCD/view?usp=drive_link"
  }, {
    id: 10,
    title: "Bathroom & Spa Brands 2025",
    description: "Latest bathroom and spa brands for 2025 from Sanipex Group",
    image: "/lovable-uploads/6939ead1-fd0f-48e5-9337-59c386513e79.png",
    category: "Spa",
    color: "green",
    downloadLink: "https://drive.google.com/uc?export=download&id=16__y5Dz5XPXAxRNff5IGweScdyz1KCVB",
    viewLink: "https://drive.google.com/file/d/16__y5Dz5XPXAxRNff5IGweScdyz1KCVB/view?usp=sharing"
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
    id: 9,
    title: "Luxury Lifestyle",
    description: "Exclusive luxury lifestyle experience with Bagno Design premium collections",
    image: "/lovable-uploads/a37b5d24-c094-4a1a-91f3-3a60e0ded97a.png",
    category: "Luxury",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1ZhUk5iw4MkdIzzvX5UQRaxrY-HhNyyUP",
    viewLink: "https://drive.google.com/file/d/1ZhUk5iw4MkdIzzvX5UQRaxrY-HhNyyUP/view?usp=sharing"
  }, {
    id: 14,
    title: "LIGHTING PRICE GUIDE",
    description: "Complete lighting solutions price guide featuring premium lighting fixtures and innovative designs",
    image: "/lovable-uploads/f320eda3-39ed-4b08-a0a5-c5453d9a5d31.png",
    category: "Lighting",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1DtP7DWEjDpdlWXbQ1N889WI0aUBABWS-",
    viewLink: "https://drive.google.com/file/d/1DtP7DWEjDpdlWXbQ1N889WI0aUBABWS-/view?usp=drive_link"
  }, {
    id: 12,
    title: "Outdoor Kitchens & BBQs",
    description: "Complete collection of outdoor kitchen solutions and BBQ equipment for luxury outdoor living spaces",
    image: "/lovable-uploads/ffa18a22-a607-4458-b323-58bb5ec9e1f3.png",
    category: "Outdoor",
    color: "green",
    downloadLink: "https://drive.google.com/uc?export=download&id=1vmFd1wJC-JR1tX8jzy1hep_iCKDkdQpe",
    viewLink: "https://drive.google.com/file/d/1vmFd1wJC-JR1tX8jzy1hep_iCKDkdQpe/view?usp=drive_link"
  }, {
    id: 8,
    title: "Hotel Amenities",
    description: "Comprehensive collection of advanced hotel amenities and services",
    image: "/lovable-uploads/25d08403-9ecd-4938-8bf8-b4d51fb5b323.png",
    category: "Hotels",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1Os3ikexV41YRpt4yH61cbyrW-BtbCW9v",
    viewLink: "https://drive.google.com/file/d/1Os3ikexV41YRpt4yH61cbyrW-BtbCW9v/view?usp=sharing"
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
    id: 1,
    title: "Kitchen LifeStyle",
    description: "Comprehensive collection of luxury bathroom fixtures and faucets for premium bathrooms",
    image: "/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png",
    category: "Bathrooms",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1fa_w2lJyvsECR_mOZVDkZHBuX1e6y5iO",
    viewLink: "https://drive.google.com/file/d/1fa_w2lJyvsECR_mOZVDkZHBuX1e6y5iO/view?usp=sharing"
  }];

  // Sub catalogs
  const subCatalogs = [{
    id: 6,
    title: "Small Format Tiles",
    description: "Small format tiles for detailed designs and unique decorative elements",
    image: "/lovable-uploads/a2126c93-c0af-4266-98af-d491626a5d3d.png",
    category: "Tiles",
    color: "gray",
    downloadLink: "https://drive.google.com/uc?export=download&id=1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4",
    viewLink: "https://drive.google.com/file/d/1j_kCzc7eUC4hewxhndMW7ffubb_zCtG4/view?usp=sharing"
  }, {
    id: 3,
    title: "TILES & SLABS",
    description: "Diverse collection of high-quality tiles and premium slabs",
    image: "/lovable-uploads/7058d7eb-e395-40b6-9281-e87803d9d8fd.png",
    category: "Materials",
    color: "purple",
    downloadLink: "https://drive.google.com/uc?export=download&id=1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO",
    viewLink: "https://drive.google.com/file/d/1e-u2LV1wWQAF9wisS4NmNzoCfQblLfKO/view?usp=sharing"
  }, {
    id: 7,
    title: "Hokkaido",
    description: "Hokkaido distinctive collection for luxury interior designs",
    image: "/lovable-uploads/5ff0543d-f01e-4ef0-931d-3e5e61c0ad35.png",
    category: "Premium",
    color: "blue",
    downloadLink: "https://drive.google.com/uc?export=download&id=1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI",
    viewLink: "https://drive.google.com/file/d/1pkix8V4fDqdcOXXDL1ssZsDAmDcaYVmI/view?usp=sharing"
  }, {
    id: 11,
    title: "Outdoor & Landscape",
    description: "Build breathtaking landscapes with our range of outdoor porcelain tiles and slabs. Whether you are designing elegant patios, pool areas, or requiring custom outdoor solutions, our collection has you covered.",
    image: "/lovable-uploads/36bf498f-73e8-4ed3-baf5-e94f48cbde7d.png",
    category: "Outdoor",
    color: "green",
    downloadLink: "https://drive.google.com/uc?export=download&id=1EH2HLYGCLZ2tqSUL1cMhcnDb7x94bGEx",
    viewLink: "https://drive.google.com/file/d/1EH2HLYGCLZ2tqSUL1cMhcnDb7x94bGEx/view?usp=drive_link"
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
      <header className="bg-white border-b sticky top-0 z-50" id="top">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <ArrowRight className="w-5 h-5" />
                Back
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">Catalogs & Brochures</h1>
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

        {/* Main Catalogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainCatalogs.map(catalog => <Card key={catalog.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <img src={catalog.image} alt={catalog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" />
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
                
                <div className="space-y-3 pt-2">
                  {catalog.downloadLink ? <Button className="w-full hover:bg-primary/90 transition-colors" size="default" onClick={() => handleDownload(catalog.downloadLink!, catalog.title)}>
                      <Download className="w-4 h-4 mr-2" />
                      Download Catalog
                    </Button> : <Button className="w-full opacity-50 cursor-not-allowed" size="default" disabled>
                      <Download className="w-4 h-4 mr-2" />
                      Download Catalog
                    </Button>}
                  {catalog.viewLink ? <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors" size="default" onClick={() => handleView(catalog.viewLink!, catalog.title)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Catalog
                    </Button> : <Button variant="outline" className="w-full opacity-50 cursor-not-allowed" size="default" disabled>
                      <Eye className="w-4 h-4 mr-2" />
                      View Catalog
                    </Button>}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Sub Catalogs Section */}
        <div className="mb-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {subCatalogs.map(catalog => <Card key={catalog.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                    <img src={catalog.image} alt={catalog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" />
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
                  
                  <div className="space-y-3 pt-2">
                    {catalog.downloadLink ? <Button className="w-full hover:bg-primary/90 transition-colors" size="default" onClick={() => handleDownload(catalog.downloadLink!, catalog.title)}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Catalog
                      </Button> : <Button className="w-full opacity-50 cursor-not-allowed" size="default" disabled>
                        <Download className="w-4 h-4 mr-2" />
                        Download Catalog
                      </Button>}
                    {catalog.viewLink ? <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors" size="default" onClick={() => handleView(catalog.viewLink!, catalog.title)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Catalog
                      </Button> : <Button variant="outline" className="w-full opacity-50 cursor-not-allowed" size="default" disabled>
                        <Eye className="w-4 h-4 mr-2" />
                        View Catalog
                      </Button>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-4">
          
          <p className="text-muted-foreground">
            Our specialized team is ready to help you choose the right products for your project
          </p>
          
        </div>
      </main>
    </div>;
};
export default Brochures;