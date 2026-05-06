/**
 * Site genelinde kullanılan kişisel bilgiler.
 * Yayına almadan önce bu değerleri kendi gerçek bilgilerinizle güncelleyin.
 */
export const siteConfig = {
  name: "Emre Atilla",
  title: "Mobile Developer",
  domain: "emreatill.com.tr",
  url: "https://emreatill.com.tr",
  location: "İstanbul, Türkiye",

  contact: {
    email: "iletisim@emreatill.com.tr",
    phone: "+905555555555", // E.164 formatında, başında + ve ülke kodu
    whatsapp: "905555555555", // wa.me linki için, başında + olmadan
  },

  social: {
    github: "https://github.com/emreatilla",
    linkedin: "https://linkedin.com/in/emreatilla",
  },

  whatsappMessage: "Merhaba Emre, websitenden ulaşıyorum.",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;
