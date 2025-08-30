import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Users, BarChart3, TreePine, Shield, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mangroves.jpg";

const Home = () => {
  const features = [
    {
      icon: AlertCircle,
      title: "Report Damage",
      description: "Easily report mangrove damage with photos and location data",
      color: "text-coral"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor conservation efforts and see real impact data",
      color: "text-ocean-deep"
    },
    {
      icon: Users,
      title: "Community Power",
      description: "Join a growing community of environmental protectors",
      color: "text-mangrove"
    }
  ];

  const stats = [
    { label: "Reports Submitted", value: "1,247", icon: MapPin },
    { label: "Active Protectors", value: "892", icon: Users },
    { label: "Areas Protected", value: "156", icon: Shield },
    { label: "Impact Score", value: "94%", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protect Our
            <span className="block bg-gradient-to-r from-mangrove-light to-ocean-light bg-clip-text text-transparent">
              Mangrove Forests
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the global community monitoring and protecting vital mangrove ecosystems. 
            Every report makes a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button size="lg" className="bg-gradient-mangrove hover:shadow-floating transition-slow text-lg px-8 py-3">
                <AlertCircle className="mr-2 h-5 w-5" />
                Report Damage
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-slow text-lg px-8 py-3">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center shadow-nature hover:shadow-floating transition-slow">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-mangrove bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple tools for powerful conservation impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center shadow-nature hover:shadow-floating transition-slow group">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-slow">
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <TreePine className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of environmental protectors monitoring mangrove health worldwide
          </p>
          <Link to="/report">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-floating transition-slow text-lg px-8 py-3">
              Start Protecting Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;