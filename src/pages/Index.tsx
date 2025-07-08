import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, Mail, MapPin, Star, Award, Users, Clock, Shield, X, Instagram, Download, FileText, ChevronDown, ChevronUp, Search, Heart, Share2, ShoppingCart, Eye } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { FloatingActionButton } from "@/components/FloatingActionButton";

const Index = () => {
  const [language, setLanguage] = useState('ar');
  const [tilesExpanded, setTilesExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [expandedCatalogs, setExpandedCatalogs] = useState<{[key: string]: boolean}>({});

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive functions
  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
    }
  };

  const handleCatalogDownload = (catalogName: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Downloading ${catalogName}`);
    }, 1500);
  };

  const toggleCatalogExpansion = (catalogId: string) => {
    setExpandedCatalogs(prev => ({
      ...prev,
      [catalogId]: !prev[catalogId]
    }));
  };
  
  const translations = {
    ar: {
      // Header
      home: "الرئيسية",
      about: "عن الشركة",
      services: "الخدمات",
      products: "المنتجات",
      catalogs: "الكاتلوجات",
      contact: "تواصل معنا",
      callUs: "اتصل بنا",
      // Hero
      heroTitle: "معرض الحمامات والمطابخ الفاخرة",
      heroDescription: "نقدم لكم أحدث التصاميم العصرية للحمامات والمطابخ بأعلى معايير الجودة والأناقة",
      exploreProducts: "استكشف منتجاتنا",
      contactUs: "تواصل معنا",
      // Stats
      completedProjects: "مشروع مكتمل",
      yearsExperience: "سنة خبرة",
      customerSatisfaction: "رضا العملاء",
      customerService: "خدمة عملاء",
      // About
      aboutTitle: "عن BAGNODESIGN",
      aboutDescription: "نحن في BAGNODESIGN نتخصص في تقديم أحدث التصاميم للحمامات والمطابخ الفاخرة. مع سنوات من الخبرة في هذا المجال، نقدم لعملائنا حلولاً متكاملة تجمع بين الأناقة والوظائف العملية.",
      highQuality: "جودة عالية",
      highQualityDesc: "نستخدم أفضل المواد والخامات في جميع منتجاتنا",
      professionalTeam: "فريق محترف",
      professionalTeamDesc: "فريق من المصممين والفنيين ذوي الخبرة العالية",
      fullService: "خدمة شاملة",
      fullServiceDesc: "من التصميم إلى التركيب والصيانة",
      qualityGuarantee: "ضمان الجودة",
      qualityGuaranteeDesc: "ضمان شامل على جميع منتجاتنا وخدماتنا",
      // Services
      servicesTitle: "خدماتنا",
      servicesDescription: "نقدم مجموعة شاملة من الخدمات المتخصصة في تصميم وتنفيذ الحمامات والمطابخ الفاخرة",
      bathroomDesign: "تصميم وتنفيذ الحمامات الفاخرة",
      bathroomDesc: "نقدم تصاميم حمامات فاخرة بأحدث المعايير العالمية",
      kitchenDesign: "تصميم وتنفيذ المطابخ العصرية",
      kitchenDesc: "مطابخ عملية وأنيقة تجمع بين الجمال والوظائف",
      sanitarySupply: "توريد وتركيب الأدوات الصحية",
      sanitaryDesc: "أفضل الأدوات الصحية من العلامات التجارية الرائدة",
      lightingDesign: "تصميم أنظمة الإضاءة المتطورة",
      lightingDesc: "إضاءة مبتكرة تبرز جمال التصميم الداخلي",
      designConsultation: "استشارات التصميم الداخلي",
      designConsultationDesc: "خدمات استشارية متخصصة لتحقيق رؤيتك",
      learnMore: "اعرف المزيد",
      // Products
      productsTitle: "معرض المنتجات",
      productsDescription: "استكشف مجموعتنا المتنوعة من التصاميم الفاخرة للحمامات والمطابخ",
      viewDetails: "عرض التفاصيل",
      // Catalogs
      catalogsTitle: "كاتلوجات منتجاتنا",
      catalogsDescription: "تصفح مجموعتنا الكاملة من الكاتلوجات المتخصصة",
      downloadCatalog: "تحميل الكاتلوج",
      viewCatalog: "عرض الكاتلوج",
      // Contact
      contactTitle: "تواصل معنا",
      contactDescription: "نحن هنا لخدمتكم ومساعدتكم في تحقيق رؤيتكم",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      instagram: "إنستغرام",
      sendMessage: "إرسال رسالة",
      name: "الاسم",
      message: "الرسالة",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات التواصل",
    },
    en: {
      // Header
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      catalogs: "Catalogs",
      contact: "Contact",
      callUs: "Call Us",
      // Hero
      heroTitle: "Luxury Bathrooms & Kitchens Showroom",
      heroDescription: "We provide the latest modern designs for bathrooms and kitchens with the highest standards of quality and elegance",
      exploreProducts: "Explore Products",
      contactUs: "Contact Us",
      // Stats
      completedProjects: "Completed Projects",
      yearsExperience: "Years Experience",
      customerSatisfaction: "Customer Satisfaction",
      customerService: "Customer Service",
      // About
      aboutTitle: "About BAGNODESIGN",
      aboutDescription: "At BAGNODESIGN, we specialize in providing the latest designs for luxury bathrooms and kitchens. With years of experience in this field, we offer our customers comprehensive solutions that combine elegance and practical functionality.",
      highQuality: "High Quality",
      highQualityDesc: "We use the best materials and components in all our products",
      professionalTeam: "Professional Team",
      professionalTeamDesc: "A team of highly experienced designers and technicians",
      fullService: "Full Service",
      fullServiceDesc: "From design to installation and maintenance",
      qualityGuarantee: "Quality Guarantee",
      qualityGuaranteeDesc: "Comprehensive warranty on all our products and services",
      // Services
      servicesTitle: "Our Services",
      servicesDescription: "We offer a comprehensive range of specialized services in designing and implementing luxury bathrooms and kitchens",
      bathroomDesign: "Design and Implementation of Luxury Bathrooms",
      bathroomDesc: "We provide luxury bathroom designs with the latest international standards",
      kitchenDesign: "Design and Implementation of Modern Kitchens",
      kitchenDesc: "Practical and elegant kitchens that combine beauty and functionality",
      sanitarySupply: "Supply and Installation of Sanitary Equipment",
      sanitaryDesc: "The best sanitary equipment from leading brands",
      lightingDesign: "Advanced Lighting Systems Design",
      lightingDesc: "Innovative lighting that highlights the beauty of interior design",
      designConsultation: "Interior Design Consultations",
      designConsultationDesc: "Specialized consulting services to achieve your vision",
      learnMore: "Learn More",
      // Products
      productsTitle: "Products Gallery",
      productsDescription: "Explore our diverse collection of luxury designs for bathrooms and kitchens",
      viewDetails: "View Details",
      // Catalogs
      catalogsTitle: "Our Product Catalogs",
      catalogsDescription: "Browse our complete collection of specialized catalogs",
      downloadCatalog: "Download Catalog",
      viewCatalog: "View Catalog",
      // Contact
      contactTitle: "Contact Us",
      contactDescription: "We are here to serve you and help you achieve your vision",
      phone: "Phone",
      email: "Email",
      address: "Address",
      instagram: "Instagram",
      sendMessage: "Send Message",
      name: "Name",
      message: "Message",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const stats = [
    { icon: Award, number: "500+", label: t.completedProjects },
    { icon: Users, number: "15+", label: t.yearsExperience },
    { icon: Star, number: "98%", label: t.customerSatisfaction },
    { icon: Clock, number: "24/7", label: t.customerService },
  ];

  const services = [
    {
      title: t.bathroomDesign,
      description: t.bathroomDesc,
    },
    {
      title: t.kitchenDesign,
      description: t.kitchenDesc,
    },
    {
      title: t.sanitarySupply,
      description: t.sanitaryDesc,
    },
    {
      title: t.lightingDesign,
      description: t.lightingDesc,
    },
    {
      title: t.designConsultation,
      description: t.designConsultationDesc,
    },
  ];

  const products = [
    {
      id: 1,
      title: "Luxury Bathroom Suite",
      category: "Bathrooms",
      description: "Complete luxury bathroom suite with premium fixtures",
      image: "/lovable-uploads/3e1561ad-88fc-4549-8a29-117ec509071b.png",
    },
    {
      id: 2,
      title: "Modern Kitchen Design",
      category: "Kitchens",
      description: "Contemporary kitchen with state-of-the-art appliances",
      image: "/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png",
    },
    {
      id: 3,
      title: "Premium Tiles Collection",
      category: "Tiles",
      description: "High-quality tiles in various styles and finishes",
      image: "/lovable-uploads/ced9aa99-e86c-4437-b359-f22d1d0a74fa.png",
    },
  ].filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 100 ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">BAGNODESIGN</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">{t.home}</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.about}</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">{t.services}</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">{t.products}</a>
              <a href="#catalogs" className="text-foreground hover:text-primary transition-colors">{t.catalogs}</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.contact}</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                <span className="mr-2">{language === 'ar' ? 'English' : 'العربية'}</span>
              </Button>
              <Button onClick={() => window.location.href = 'tel:0226134401'}>{t.callUs}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.heroDescription}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              {t.exploreProducts}
            </Button>
            <Button variant="outline" size="lg">
              {t.contactUs}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">{t.aboutTitle}</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {t.aboutDescription}
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.highQuality}</h3>
                <p className="text-sm text-muted-foreground">{t.highQualityDesc}</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.professionalTeam}</h3>
                <p className="text-sm text-muted-foreground">{t.professionalTeamDesc}</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.fullService}</h3>
                <p className="text-sm text-muted-foreground">{t.fullServiceDesc}</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{t.qualityGuarantee}</h3>
                <p className="text-sm text-muted-foreground">{t.qualityGuaranteeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.servicesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.servicesDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" size="sm">{t.learnMore}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.productsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t.productsDescription}
            </p>
            <SearchBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              placeholder="ابحث في المنتجات..."
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full">{t.viewDetails}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogs Section */}
      <section id="catalogs" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.catalogsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.catalogsDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Bathroom Catalog */}
            <Card className="text-center p-4 sm:p-6 lg:p-8 card-hover fade-in">
              <div className="w-full h-48 sm:h-64 lg:h-80 mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src="/lovable-uploads/3e1561ad-88fc-4549-8a29-117ec509071b.png" 
                  alt="Bathroom sanitaryware & brassware"
                  className="w-full h-full object-contain hover-scale"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 uppercase gradient-text">Bathroom sanitaryware & brassware</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm">
                {language === 'ar' ? 'استكشف مجموعتنا الكاملة من أدوات الحمامات الصحية والنحاسية' : 'Explore our complete collection of bathroom sanitaryware and brassware'}
              </p>
              <Button 
                className="w-full mb-2 sm:mb-3 button-pulse glow" 
                size="sm"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1P8lXoFR_VpObvstordjLPxLqabZVpUgl', '_blank')}
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full mb-3 sm:mb-4 button-pulse glass-effect" size="sm" onClick={() => window.open('https://drive.google.com/file/d/1P8lXoFR_VpObvstordjLPxLqabZVpUgl/preview', '_blank')}>
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.viewCatalog}
              </Button>
              
              <Collapsible 
                open={expandedCatalogs['bathroom']} 
                onOpenChange={() => toggleCatalogExpansion('bathroom')}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full mb-3 border border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    size="sm"
                  >
                    <span className="text-xs sm:text-sm font-medium">
                      {language === 'ar' ? 'عرض الكاتلوجات الفرعية' : 'View Sub-catalogs'}
                    </span>
                    {expandedCatalogs['bathroom'] ? 
                      <ChevronUp className="w-4 h-4 ml-2 transition-transform" /> : 
                      <ChevronDown className="w-4 h-4 ml-2 transition-transform" />
                    }
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-3 animate-fade-in">
                  <div className="grid grid-cols-1 gap-3">
                    <Card className="p-3 sm:p-4 card-hover bg-secondary/30 slide-up">
                      <div className="w-full h-24 sm:h-32 mb-2 sm:mb-3 rounded-lg overflow-hidden bg-gray-50">
                        <img 
                          src="/lovable-uploads/bathroom-brands-catalog.png" 
                          alt="Bathroom Brands"
                          className="w-full h-full object-cover hover-scale"
                        />
                      </div>
                      <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-2">Bathroom Brands</h4>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 button-pulse text-xs"
                          onClick={() => handleCatalogDownload('Bathroom Brands')}
                          disabled={isLoading}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          {isLoading ? 'جاري...' : t.downloadCatalog}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 button-pulse glass-effect text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-3 sm:p-4 card-hover bg-secondary/30 slide-up">
                      <div className="w-full h-24 sm:h-32 mb-2 sm:mb-3 rounded-lg overflow-hidden bg-gray-50">
                        <img 
                          src="/lovable-uploads/steam-spa-wellness-catalog.png" 
                          alt="Steam & Spa & Wellness"
                          className="w-full h-full object-cover hover-scale"
                        />
                      </div>
                      <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-2">Steam & Spa & Wellness</h4>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 button-pulse text-xs"
                          onClick={() => handleCatalogDownload('Steam & Spa & Wellness')}
                          disabled={isLoading}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          {isLoading ? 'جاري...' : t.downloadCatalog}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 button-pulse glass-effect text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-3 sm:p-4 card-hover bg-secondary/30 slide-up">
                      <div className="w-full h-24 sm:h-32 mb-2 sm:mb-3 rounded-lg overflow-hidden bg-gray-50">
                        <img 
                          src="/lovable-uploads/03d061ab-8f2d-4612-bb16-5dc5e6874ee7.png" 
                          alt="Concealed-Cistern"
                          className="w-full h-full object-cover hover-scale"
                        />
                      </div>
                      <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-2">Concealed-Cistern</h4>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 button-pulse text-xs"
                          onClick={() => handleCatalogDownload('Concealed-Cistern')}
                          disabled={isLoading}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          {isLoading ? 'جاري...' : t.downloadCatalog}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 button-pulse glass-effect text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Kitchen Catalog */}
            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 sm:h-64 lg:h-80 mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src="/lovable-uploads/8de7e852-c2d4-4322-ac29-3e1854346e43.png" 
                  alt="Kitchen LifeStyle"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 uppercase">Kitchen LifeStyle</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm">
                {language === 'ar' ? 'اكتشف أجهزة المطبخ الفاخرة من العلامات التجارية الرائدة، بما في ذلك الأفران والثلاجات ومبردات النبيذ والأحواض وصنابير المطبخ والمزيد.' : 'Discover our luxury kitchen appliances by leading brands, including ovens, refrigerators, wine coolers, sinks, kitchen taps and more.'}
              </p>
              <Button className="w-full mb-2 sm:mb-3" size="sm">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full mb-3 sm:mb-4" size="sm">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.viewCatalog}
              </Button>
              
              <Collapsible 
                open={expandedCatalogs['kitchen']} 
                onOpenChange={() => toggleCatalogExpansion('kitchen')}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full mb-3 border border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    size="sm"
                  >
                    <span className="text-xs sm:text-sm font-medium">
                      {language === 'ar' ? 'عرض الكاتلوجات الفرعية' : 'View Sub-catalogs'}
                    </span>
                    {expandedCatalogs['kitchen'] ? 
                      <ChevronUp className="w-4 h-4 ml-2 transition-transform" /> : 
                      <ChevronDown className="w-4 h-4 ml-2 transition-transform" />
                    }
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-3 animate-fade-in">
                  <div className="grid grid-cols-1 gap-3">
                    <Card className="p-3 sm:p-4 card-hover bg-secondary/30 slide-up">
                      <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-2">Kitchen Appliances</h4>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 button-pulse text-xs"
                          onClick={() => handleCatalogDownload('Kitchen Appliances')}
                          disabled={isLoading}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          {isLoading ? 'جاري...' : t.downloadCatalog}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 button-pulse glass-effect text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Tiles Catalog */}
            <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="w-full h-64 sm:h-80 lg:h-96 mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-50">
                <img 
                  src="/lovable-uploads/ced9aa99-e86c-4437-b359-f22d1d0a74fa.png" 
                  alt="Surfaces BAGNODESIGN 2025"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 uppercase">TILES & SLABS</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm">
                Discover our tiles and slabs from leading European brands in an array of styles, sizes, and finishes
              </p>
              <Button className="w-full mb-2 sm:mb-3" size="sm">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.downloadCatalog}
              </Button>
              <Button variant="outline" className="w-full mb-3 sm:mb-4" size="sm">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t.viewCatalog}
              </Button>
              
              <Collapsible 
                open={expandedCatalogs['tiles']} 
                onOpenChange={() => toggleCatalogExpansion('tiles')}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full mb-3 border border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    size="sm"
                  >
                    <span className="text-xs sm:text-sm font-medium">
                      {language === 'ar' ? 'عرض الكاتلوجات الفرعية' : 'View Sub-catalogs'}
                    </span>
                    {expandedCatalogs['tiles'] ? 
                      <ChevronUp className="w-4 h-4 ml-2 transition-transform" /> : 
                      <ChevronDown className="w-4 h-4 ml-2 transition-transform" />
                    }
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-3 animate-fade-in">
                  <div className="grid grid-cols-1 gap-3">
                    <Card className="p-3 sm:p-4 card-hover bg-secondary/30 slide-up">
                      <h4 className="text-sm sm:text-lg font-semibold text-foreground mb-2">Ceramic Tiles</h4>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 button-pulse text-xs"
                          onClick={() => handleCatalogDownload('Ceramic Tiles')}
                          disabled={isLoading}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          {isLoading ? 'جاري...' : t.downloadCatalog}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 button-pulse glass-effect text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {t.viewCatalog}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contactDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.phone}</h4>
                  <p className="text-muted-foreground">0226134401</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.email}</h4>
                  <p className="text-muted-foreground">bagnodesign@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.address}</h4>
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.instagram}</h4>
                  <p className="text-muted-foreground">@bagnodesign</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.sendMessage}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.name}</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.email}</label>
                  <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.message}</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <Button className="w-full">{t.sendMessage}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">BAGNODESIGN</h3>
              <p className="text-muted-foreground">
                {language === 'ar' ? 'معرض الحمامات والمطابخ الفاخرة' : 'Luxury Bathrooms & Kitchens Showroom'}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">{t.about}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services}</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">{t.products}</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">{t.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">{t.services}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t.bathroomDesign}</li>
                <li>{t.kitchenDesign}</li>
                <li>{t.sanitarySupply}</li>
                <li>{t.lightingDesign}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">{t.contactInfo}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>0226134401</li>
                <li>bagnodesign@gmail.com</li>
                <li>@bagnodesign</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 BAGNODESIGN. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
          </div>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  );
};

export default Index;