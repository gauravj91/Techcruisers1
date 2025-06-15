import React from 'react';
import { 
  Cloud, 
  Smartphone, 
  Database, 
  Shield, 
  Headphones, 
  Cpu,
  ArrowRight 
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Comprehensive cloud migration and management services to optimize performance, reduce costs, and ensure scalability for your growing business needs.",
      benefits: ["99.9% Uptime", "Cost Reduction", "Auto Scaling"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications designed to deliver exceptional user experiences across iOS and Android devices with modern functionality.",
      benefits: ["Cross-Platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions, machine learning models, and business intelligence dashboards.",
      benefits: ["Real-time Insights", "ML Integration", "Custom Dashboards"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat assessment, incident response, and ongoing monitoring to protect your digital assets and infrastructure.",
      benefits: ["24/7 Monitoring", "Threat Detection", "Compliance Ready"]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Technical Support",
      description: "Round-the-clock technical support and maintenance services ensuring your systems run smoothly with minimal downtime and maximum productivity.",
      benefits: ["24/7 Support", "Quick Response", "Proactive Maintenance"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Infrastructure Management",
      description: "Complete IT infrastructure management including server administration, network optimization, and performance monitoring for maximum efficiency.",
      benefits: ["Server Management", "Network Optimization", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT outsourcing solutions designed to accelerate your business growth 
            and digital transformation journey with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-blue-600 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="group/btn text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust us with their IT infrastructure and digital transformation needs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;