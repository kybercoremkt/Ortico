import React, { useState } from 'react';
import { X, Send, Loader2, AlertCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+52',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length > 10) {
        errorMessage = 'Máximo 10 dígitos';
      } else if (numericValue.length > 0 && numericValue.length < 10) {
        errorMessage = 'Debe tener 10 dígitos';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        errorMessage = 'Correo inválido';
      }
    }

    setErrors(prev => ({ ...prev, [name]: errorMessage }));
    return errorMessage === '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPhoneValid = validateField('phone', formData.phone);
    const isEmailValid = validateField('email', formData.email);

    if (!isPhoneValid || !isEmailValid || errors.phone || errors.email) {
        return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      source: 'whatsapp_widget',
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('https://hook.us2.make.com/jtmm2vvgb2dgplh1b41gsdriqsv1gvaj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Error sending data to webhook:", error);
    } finally {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      const targetNumber = '529997740016'; 
      const message = `Hola, mi nombre es ${formData.fullName}. Me gustaría recibir información.`;
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;

      window.location.href = whatsappUrl;
      setIsSubmitting(false);
      setIsOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
        const numericValue = value.replace(/\D/g, '');
        setFormData(prev => ({ ...prev, [name]: numericValue }));
        validateField(name, numericValue);
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'email') validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-900 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="0" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-14 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             WhatsApp
        </span>
      </button>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm relative overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="0" fill="currentColor" className="w-6 h-6 text-white">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-semibold">Iniciar chat en WhatsApp</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-sm text-zinc-400 mb-4">
                Por favor completa tus datos para redirigirte a nuestro chat de atención personalizada.
              </p>

              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">Nombre</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-800 focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none text-sm text-white placeholder:text-zinc-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">WhatsApp</label>
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="px-2 py-2 rounded-l-lg border border-r-0 border-zinc-700 bg-zinc-800 text-zinc-300 text-sm focus:ring-2 focus:ring-[#25D366] outline-none w-20"
                  >
                    <option value="+52">MX</option>
                    <option value="+1">US</option>
                    <option value="">OT</option>
                  </select>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 py-2 rounded-r-lg border bg-zinc-800 text-white focus:ring-2 focus:border-transparent outline-none text-sm placeholder:text-zinc-500 ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-500/50' 
                          : 'border-zinc-700 focus:ring-[#25D366]'
                    }`}
                    placeholder="Número"
                  />
                </div>
                {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.phone}
                    </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wide mb-1">Correo</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 rounded-lg border bg-zinc-800 text-white focus:ring-2 focus:border-transparent outline-none text-sm placeholder:text-zinc-500 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500/50' 
                      : 'border-zinc-700 focus:ring-[#25D366]'
                  }`}
                  placeholder="correo@ejemplo.com"
                />
                 {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.email}
                    </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !!errors.phone || !!errors.email}
                className="w-full mt-2 flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-lg transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Ir a WhatsApp
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};