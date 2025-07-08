import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Award, Users, Clock, Shield } from "lucide-react";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "حمام فاخر بالرخام الطبيعي",
      category: "حمامات",
      image: "/lovable-uploads/d1095dc8-3451-47b4-9277-ff12bfd87ef7.png",
      description: "تصميم حمام فاخر مع رخام طبيعي وإضاءة ذهبية مميزة"
    },
    {
      id: 2,
      title: "حمام عصري بتصميم أنيق",
      category: "حمامات",
      image: "/lovable-uploads/5be33a20-22b9-4b6a-aaf2-81f75f80886d.png",
      description: "حمام عصري بمغسلة سوداء وخامات متميزة"
    },
    {
      id: 3,
      title: "مطبخ فاخر متكامل",
      category: "مطابخ",
      image: "/lovable-uploads/a51864f6-9637-4034-9692-ec6a0bc3d9e5.png",
      description: "مطبخ عصري مع جزيرة وإضاءة متطورة"
    },
    {
      id: 4,
      title: "معرض الأدوات الصحية",
      category: "أدوات صحية",
      image: "/lovable-uploads/42d3c144-2a91-4e05-bc52-78e9260cbed9.png",
      description: "مجموعة متنوعة من الأدوات الصحية الحديثة"
    },
    {
      id: 5,
      title: "عينات الخامات الفاخرة",
      category: "خامات",
      image: "/lovable-uploads/d5f6b3ae-a30b-44c2-94c6-dbdb34bd1de5.png",
      description: "مجموعة متنوعة من الرخام والخامات الطبيعية"
    },
    {
      id: 6,
      title: "حمام ذهبي فاخر",
      category: "حمامات",
      image: "/lovable-uploads/4aa1af44-00df-43a4-92f8-7b9cf8fabbd4.png",
      description: "تصميم حمام فاخر بمغسلة ذهبية ورخام مميز"
    },
    {
      id: 7,
      title: "حمام بتصميم معاصر",
      category: "حمامات",
      image: "/lovable-uploads/8ca1f78e-9660-45af-b2b2-f94fc572a36b.png",
      description: "حمام عصري مع إضاءة مدمجة وتصميم أنيق"
    },
    {
      id: 8,
      title: "حمام فاخر بالإضاءة الذهبية",
      category: "حمامات",
      image: "/lovable-uploads/4c2bacb3-43c7-441b-8188-489680b11a6e.png",
      description: "تصميم حمام مع إضاءة ذهبية ورخام كلاسيكي"
    },
    {
      id: 9,
      title: "حمام أسود أنيق",
      category: "حمامات",
      image: "/lovable-uploads/92353d56-6084-49a5-a45a-0bc3636a2b27.png",
      description: "حمام عصري بحوض أسود وتصميم درامي"
    },
    {
      id: 10,
      title: "معرض الإكسسوارات",
      category: "إكسسوارات",
      image: "/lovable-uploads/7fce98d9-2801-42b0-a8e6-a1f6c0d1ce3d.png",
      description: "مجموعة من الإكسسوارات والإضاءة المنزلية"
    }
  ];

  const stats = [
    { icon: Award, number: "500+", label: "مشروع مكتمل" },
    { icon: Clock, number: "15+", label: "سنة خبرة" },
    { icon: Users, number: "100%", label: "رضا العملاء" },
    { icon: Shield, number: "24/7", label: "خدمة عملاء" }
  ];

  const services = [
    {
      title: "تصميم وتنفيذ الحمامات الفاخرة",
      description: "نقدم تصاميم حمامات فاخرة بأحدث المعايير العالمية"
    },
    {
      title: "تصميم وتنفيذ المطابخ العصرية",
      description: "مطابخ عملية وأنيقة تجمع بين الجمال والوظائف"
    },
    {
      title: "توريد وتركيب الأدوات الصحية",
      description: "أفضل الأدوات الصحية من العلامات التجارية الرائدة"
    },
    {
      title: "تصميم أنظمة الإضاءة المتطورة",
      description: "إضاءة مبتكرة تبرز جمال التصميم الداخلي"
    },
    {
      title: "استشارات التصميم الداخلي",
      description: "خدمات استشارية متخصصة لتحقيق رؤيتك"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">BAGNO DESIGN</h1>
                <p className="text-sm text-muted-foreground">معرض الحمامات والمطابخ الفاخرة</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">عن الشركة</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">الخدمات</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">المنتجات</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">تواصل معنا</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <span className="mr-2">العربية</span>
              </Button>
              <Button>اتصل بنا</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            معرض الحمامات والمطابخ الفاخرة
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            نقدم لكم أحدث التصاميم العصرية للحمامات والمطابخ بأعلى معايير الجودة والأناقة
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              استكشف منتجاتنا
            </Button>
            <Button variant="outline" size="lg">
              تواصل معنا
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
            <h2 className="text-4xl font-bold text-foreground mb-8">عن BAGNO DESIGN</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              نحن في BAGNO DESIGN نتخصص في تقديم أحدث التصاميم للحمامات والمطابخ الفاخرة. مع سنوات من الخبرة في هذا المجال، نقدم لعملائنا حلولاً متكاملة تجمع بين الأناقة والوظائف العملية.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">جودة عالية</h3>
                <p className="text-sm text-muted-foreground">نستخدم أفضل المواد والخامات في جميع منتجاتنا</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">فريق محترف</h3>
                <p className="text-sm text-muted-foreground">فريق من المصممين والفنيين ذوي الخبرة العالية</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">خدمة شاملة</h3>
                <p className="text-sm text-muted-foreground">من التصميم إلى التركيب والصيانة</p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">ضمان الجودة</h3>
                <p className="text-sm text-muted-foreground">ضمان شامل على جميع منتجاتنا وخدماتنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة في تصميم وتنفيذ الحمامات والمطابخ الفاخرة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" size="sm">اعرف المزيد</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">معرض المنتجات</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              استكشف مجموعتنا المتنوعة من التصاميم الفاخرة للحمامات والمطابخ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full">عرض التفاصيل</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق حلمك بالحصول على حمام أو مطبخ مثالي
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">اتصل بنا</h3>
              <p className="text-muted-foreground">+966 50 123 4567</p>
            </div>
            
            <div className="text-center p-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">راسلنا</h3>
              <p className="text-muted-foreground">info@bagnodesign.sa</p>
            </div>
            
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">زورنا</h3>
              <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">B</span>
                </div>
                <span className="font-bold text-lg">BAGNO DESIGN</span>
              </div>
              <p className="text-background/70">
                معرض الحمامات والمطابخ الفاخرة - نحو تصميم أفضل لمنزلك
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-background/70">
                <li>تصميم الحمامات</li>
                <li>تصميم المطابخ</li>
                <li>الأدوات الصحية</li>
                <li>الإضاءة</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-background/70">
                <li>عن الشركة</li>
                <li>المنتجات</li>
                <li>المعرض</li>
                <li>تواصل معنا</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">معلومات التواصل</h4>
              <ul className="space-y-2 text-background/70">
                <li>+966 50 123 4567</li>
                <li>info@bagnodesign.sa</li>
                <li>الرياض، السعودية</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            <p>&copy; 2024 BAGNO DESIGN. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;