import React, { useState } from 'react';
import { ChevronRight, Loader2, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
}

export const EarlyAccessForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/gs62vjwn9ixim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              name: formData.name,
              email: formData.email,
              timestamp: new Date().toISOString(),
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '' });

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto p-8 bg-white/5 border border-green-500/30 rounded-2xl text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-500" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p className="text-gray-400">We'll be in touch soon with early access.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-accessify-pink focus:ring-2 focus:ring-accessify-pink/20 transition-all"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-accessify-pink focus:ring-2 focus:ring-accessify-pink/20 transition-all"
        />
      </div>
      {error && (
        <div className="text-red-400 text-sm text-center">{error}</div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full px-8 py-4 bg-accessify-pink text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(237,70,128,0.3)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <span className="flex items-center justify-center">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Get Early Access
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </button>
    </form>
  );
};

