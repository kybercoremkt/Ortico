import React, { useState } from 'react';
import { ProjectType, BudgetRange, ContactFormData, ProjectTimeline } from '../types';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  id?: string;
  variant?: 'default' | 'hero';
}

export const ContactForm: React.FC<ContactFormProps> = ({ id = 'contact-form', variant = 'default' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+52',
    projectType: '',
    timeline: ProjectTimeline.SHORT, // Valor por defecto
    budget: BudgetRange.MEDIUM,
    message: ''
  });

  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length > 10) {
        errorMessage = 'No puede exceder 10 dígitos';
      } else if (numericValue.length > 0 && numericValue.length < 10) {
        errorMessage = 'Debe tener 10 dígitos';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        errorMessage = 'Correo electrónico inválido';
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
    
    try {
      const response = await fetch('https://hook.us2.make.com/jtmm2vvgb2dgplh1b41gsdriqsv1gvaj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          window.location.href = 'https://wa.me/529997740016';
        }, 2000);
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo o contáctanos por WhatsApp.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  if (isSuccess) {
    const successContent = (
      <div className="text-center p-8 h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">¡Recibido!</h3>
        <p className="text-white mb-6">
          Hemos recibido tu información correctamente.<br/>
          <span className="font-semibold text-primary-500">Te estamos redirigiendo a WhatsApp...</span>
        </p>
        <button 
          onClick={() => window.location.href = 'https://wa.me/529997740016'}
          className="text-primary-500 font-semibold hover:underline text-sm"
        >
          Si no se redirige automáticamente, haz clic aquí.
        </button>
      </div>
    );

    if (variant === 'hero') {
      return (
        <div className="bg-black/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 h-full min-h-[400px]">
          {successContent}
        </div>
      );
    }

    return (
      <div id={id} className="py-20 bg-black min-h-[400px] flex items-center justify-center">
        {successContent}
      </div>
    );
  }

  // Estilos limpios: Sin SLATE. Solo Zinc (neutro), Blanco y Negro.
  const inputClasses = "w-full px-3 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm placeholder:text-zinc-400";
  const selectClasses = "w-full px-3 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:ring-2 focus:ring-primary-500 outline-none text-sm";
  const labelClasses = "block text-xs font-bold text-white uppercase tracking-wide mb-1";

  const formJSX = (
    <form onSubmit={handleSubmit} className={variant === 'hero' ? '' : 'max-w-4xl mx-auto'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="col-span-1 sm:col-span-2">
          <label className={labelClasses}>Nombre Completo</label>
          <input 
            required 
            name="fullName" 
            value={formData.fullName}
            type="text" 
            onChange={handleInputChange} 
            className={inputClasses} 
            placeholder="Tu nombre" 
          />
        </div>
        
        <div>
          <label className={labelClasses}>Teléfono (WhatsApp)</label>
          <div className="flex">
            <select 
              name="countryCode" 
              value={formData.countryCode}
              onChange={handleInputChange}
              className="px-2 py-2.5 rounded-l-lg border border-r-0 border-zinc-300 bg-white text-zinc-900 text-sm focus:ring-2 focus:ring-primary-500 outline-none w-24"
            >
              <option value="+52">🇲🇽 +52</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+34">🇪🇸 +34</option>
              <option value="+54">🇦🇷 +54</option>
              <option value="+57">🇨🇴 +57</option>
              <option value="">Otro</option>
            </select>
            <input 
              required 
              name="phone" 
              value={formData.phone}
              type="tel" 
              onChange={handleInputChange} 
              onBlur={handleBlur}
              className={`w-full px-3 py-2.5 rounded-r-lg border bg-white text-zinc-900 focus:ring-2 focus:border-transparent outline-none transition-all text-sm placeholder:text-zinc-400 ${
                errors.phone 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-zinc-300 focus:ring-primary-500'
              }`}
              placeholder="10 dígitos" 
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
           <label className={labelClasses}>Correo Electrónico</label>
           <input 
             required 
             name="email" 
             value={formData.email}
             type="email" 
             onChange={handleInputChange} 
             onBlur={handleBlur}
             className={`w-full px-3 py-2.5 rounded-lg border bg-white text-zinc-900 focus:ring-2 focus:border-transparent outline-none transition-all text-sm placeholder:text-zinc-400 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500/50' 
                  : 'border-zinc-300 focus:ring-primary-500'
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

        <div className="col-span-1 sm:col-span-2">
          <label className={labelClasses}>Tipo de Proyecto</label>
          <select 
            name="projectType" 
            value={formData.projectType}
            onChange={handleInputChange} 
            className={selectClasses}
            required
          >
            <option value="" disabled className="text-zinc-400"></option>
            {/* Solo mostramos Residencial, Comercial y Otro */}
            <option value={ProjectType.RESIDENCIAL}>{ProjectType.RESIDENCIAL}</option>
            <option value={ProjectType.COMERCIAL}>{ProjectType.COMERCIAL}</option>
            <option value={ProjectType.OTRO}>{ProjectType.OTRO}</option>
          </select>
        </div>

        <div className="col-span-1 sm:col-span-2">
          <label className={labelClasses}>¿En cuánto tiempo te gustaría iniciar?</label>
          <select 
            required
            name="timeline" 
            value={formData.timeline}
            onChange={handleInputChange} 
            className={selectClasses}
          >
            {Object.values(ProjectTimeline).map(val => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>

        <div className="col-span-1 sm:col-span-2">
           <label className={labelClasses}>Presupuesto Estimado</label>
           <select 
             required
             name="budget" 
             value={formData.budget}
             onChange={handleInputChange} 
             className={selectClasses}
            >
             {Object.values(BudgetRange).map(val => (
               <option key={val} value={val}>{val}</option>
             ))}
           </select>
        </div>
        
        <div className="col-span-1 sm:col-span-2">
          <label className={labelClasses}>Cuéntanos brevemente sobre tu proyecto</label>
          <textarea 
            required
            name="message" 
            value={formData.message}
            rows={variant === 'hero' ? 2 : 3} 
            onChange={handleInputChange}
            className={inputClasses}
            placeholder="Ej: Quiero construir una casa de 2 pisos en Mérida..."
          ></textarea>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting || !!errors.phone || !!errors.email}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-zinc-900 transition-all duration-200 bg-primary-500 rounded-lg hover:bg-primary-600 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5 shadow-primary-500/10"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar
            <Send className="w-5 h-5 ml-2" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-center text-white">
        Respuesta en menos de 24 horas.
      </p>
    </form>
  );

  if (variant === 'hero') {
    return (
      <div id={id} className="bg-black/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
        <h3 className="text-xl font-bold text-white mb-2">Construye con nosotros</h3>
        {formJSX}
      </div>
    );
  }

  // Fondo cambiado a zinc-900 (gris neutro oscuro) en lugar de slate-900
  return (
    <section id={id} className="py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Construye con nosotros
          </h2>
        </div>
        <div className="bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-xl border border-white/10 max-w-4xl mx-auto">
          {formJSX}
        </div>
      </div>
    </section>
  );
};