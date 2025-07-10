import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal, Home, Info, Package, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const categories = [
    "SPA & WELLNESS",
    "HOTEL AMENITIES", 
    "KITCHEN LIFESTYLE",
    "TILES & SLABS",
    "LIGHTING",
    "OUTDOOR LIVING"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Background Image Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ed3c1ddb-a2c1-4761-bb51-f56697ca9381.png')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          {/* 3-Dot Menu */}
          <div className="absolute top-8 right-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <MoreHorizontal className="h-8 w-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur">
                <DropdownMenuItem className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  About
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Products
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider">
              BAGNO<span className="text-gray-400">DESIGN</span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 font-light">
              EXPERTLY CRAFTED BATHROOMS
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold text-white tracking-wider">
                    {category}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* BAGNODESIGN'S STORY Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            BAGNODESIGN'S STORY
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6 text-lg">
              BAGNODESIGN offers the complete solution for creating dream bathrooms. Our knowledgeable and talented team has drawn on their many years of experience to bring you the very best in design-led, contemporary and classic collections.
            </p>
            
            <p className="mb-6 text-lg">
              For three decades, BAGNODESIGN has expanded to service the Middle East, Africa, Europe, Asia and Oceania through Retail, Trade, Projects and Digital channels, combining the highest quality solutions with exceptional customer service. The company now encompasses flagship showrooms in key locations including Dubai, Abu Dhabi and London, alongside an established presence with partner retailers worldwide.
            </p>
            
            <p className="mb-6 text-lg">
              Find the inspiration you need from an extensive range of sanitaryware, furniture, brassware, accessories, bath & shower components and spa solutions. Turning the most personal spaces into spa-like sanctuaries, BAGNODESIGN is where comfort meets quality and where function meets the latest in artisanal thinking.
            </p>
            
            <p className="mb-6 text-lg">
              From sculptural washbasins crafted from the finest materials in a wonderful array of colours; beautiful, functional furniture to suit any scheme; baths and showers that invite rejuvenation and stunning brassware and accessories in an enviable range of trendsetting finishes.
            </p>
            
            <p className="text-lg">
              Backed by a reputable product portfolio and strategically located logistics centres, BAGNODESIGN is poised to deliver your next project, serving architects, designers, developers, retailers, and consumers across all sectors from large commercial to private residential projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;