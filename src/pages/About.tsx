import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years in Business', value: '15+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '100K+' },
    { label: 'Countries Served', value: '25+' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the highest quality equipment from trusted manufacturers worldwide.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your fitness journey is our priority. We provide exceptional service and support.'
    },
    {
      icon: Target,
      title: 'Expert Knowledge',
      description: 'Our team consists of fitness professionals who understand your needs.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of fitness trends to bring you the latest and most effective equipment.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About GymForge
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            For over 15 years, we've been empowering fitness enthusiasts with premium gym equipment. 
            From home gyms to commercial facilities, we provide the tools to forge your fitness destiny.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-b border-border/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GymForge was founded in 2009 by fitness enthusiasts who were frustrated with the lack of quality, 
                  affordable gym equipment available to home users and small gym owners. What started as a small 
                  warehouse operation has grown into one of the most trusted names in fitness equipment.
                </p>
                <p>
                  We believe that everyone deserves access to professional-grade fitness equipment, regardless of 
                  their budget or space constraints. That's why we work directly with manufacturers to bring you 
                  commercial-quality equipment at prices that won't break the bank.
                </p>
                <p>
                  Today, we're proud to serve customers in over 25 countries, helping them build stronger bodies 
                  and healthier lives. Every piece of equipment we sell is personally tested by our team to ensure 
                  it meets our rigorous standards for quality and performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-lg border border-border/50">
                <img
                  src="/api/placeholder/500/400"
                  alt="GymForge warehouse"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground text-center">
                  Our state-of-the-art warehouse and testing facility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their fitness with GymForge equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-primary hover:shadow-button">
                Shop Equipment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;