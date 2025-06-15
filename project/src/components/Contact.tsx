import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  email: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    isSubmitting: false,
    isSubmitted: false,
    error: ''
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formState.email)) {
      setFormState(prev => ({
        ...prev,
        error: 'Please enter a valid email address'
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      error: ''
    }));

    // Simulate API call
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true
      }));
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          email: '',
          isSubmitting: false,
          isSubmitted: false,
          error: ''
        });
      }, 3000);
    }, 1000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      email: e.target.value,
      error: ''
    }));
  };

  if (formState.isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with our IT solutions? 
            Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    formState.error 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-gray-200 focus:border-blue-300'
                  }`}
                  disabled={formState.isSubmitting}
                  aria-describedby={formState.error ? 'email-error' : undefined}
                  aria-invalid={formState.error ? 'true' : 'false'}
                />
              </div>
              
              {formState.error && (
                <div id="email-error" className="mt-2 flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{formState.error}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={formState.isSubmitting || !formState.email.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {formState.isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Connecting...
                </div>
              ) : (
                "Let's Connect"
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600 mb-4">Or reach out directly:</p>
            <div className="flex justify-center">
              <a 
                href="mailto:solutions@techcruisers.com" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                solutions@techcruisers.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;