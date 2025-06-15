import React from 'react';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-emerald-600/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with
                <span className="text-blue-600 block">Expert IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Partner with us to accelerate innovation, reduce costs, and scale your technology infrastructure with confidence. We deliver world-class IT outsourcing solutions tailored to your business needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 border-2 border-blue-600">
                View Our Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Custom Development</h3>
                  <p className="text-sm text-gray-600">Tailored software solutions built to your exact specifications</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade security measures protecting your data</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Rapid deployment without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;