import { TANTRAKOD_LOGO } from '../constants/brand';

/**
 * Reusable Premium Logo Container
 * Matches Stripe, Vercel, Linear enterprise design standards.
 * 
 * Features:
 * - Pure white background (#FFFFFF)
 * - 1px border (#E5E7EB)
 * - Soft shadow: 0 10px 30px rgba(15, 23, 42, 0.08)
 * - Border radius: 10px mobile, 14px desktop
 * - 10-14px internal padding, centering logo at 70-75% container size
 * - Hover: translateY(-2px), elevated shadow, 250ms smooth transition
 */
export default function LogoContainer({ size = 'md', className = '' }) {
  const sizeMap = {
    sm: 'h-10 px-3.5 py-1.5 md:h-11 md:px-4 md:py-2',
    md: 'h-12 px-4 py-2 md:h-14 md:px-5 md:py-2.5',
    lg: 'h-14 px-5 py-2.5 md:h-16 md:px-6 md:py-3',
  };

  return (
    <div
      className={`inline-flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[10px] md:rounded-[14px] shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 transition-all duration-250 ease-out cursor-pointer ${sizeMap[size] || sizeMap.md} ${className}`}
    >
      <img
        src={TANTRAKOD_LOGO}
        alt="TantraKod Official Logo"
        className="h-full w-auto max-w-full object-contain block select-none"
        loading="eager"
      />
    </div>
  );
}
