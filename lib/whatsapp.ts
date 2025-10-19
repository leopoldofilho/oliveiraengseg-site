export const buildWhatsAppLink = (phoneE164: string, text: string) => {
  const p = phoneE164.replace(/[^0-9]/g, "");
  const t = encodeURIComponent(text);
  return `https://wa.me/${p}?text=${t}`;
};
