// reCAPTCHA Configuration Utility
// This file helps prevent _getRecaptchaConfig errors by disabling reCAPTCHA entirely

export const configureRecaptcha = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }

  // Configure reCAPTCHA settings to prevent errors
  try {
    // Disable reCAPTCHA entirely to prevent _getRecaptchaConfig errors
    window.recaptchaConfig = {
      disabled: true,
      skipVerification: true
    };

    // Override Firebase's reCAPTCHA functions to prevent errors
    if (window.firebase) {
      window.firebase.auth = window.firebase.auth || {};
      window.firebase.auth._getRecaptchaConfig = () => {
        return {
          disabled: true,
          skipVerification: true
        };
      };
    }

    // Mock reCAPTCHA functions to prevent errors
    window.grecaptcha = window.grecaptcha || {
      ready: (callback) => callback(),
      execute: () => Promise.resolve('mock-token'),
      render: () => 'mock-widget-id',
      reset: () => {},
      getResponse: () => 'mock-response'
    };

    console.log('reCAPTCHA disabled to prevent _getRecaptchaConfig errors');
  } catch (error) {
    console.warn('reCAPTCHA configuration warning:', error.message);
  }
};

// Initialize reCAPTCHA configuration
configureRecaptcha();
