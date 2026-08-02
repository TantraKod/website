import { TANTRAKOD_LOGO } from '../constants/brand';

/**
 * Reusable Circular Logo Component for TantraKod
 * Renders circular logo container across Navbar (52px), Contact (64px), and Footer (64px).
 *
 * Props:
 * - size: 'sm' | 'navbar' (52px) or 'md' | 'lg' (64px)
 */
export default function LogoContainer({ size = 'md', className = '' }) {
  const dim = size === 'sm' || size === 'navbar' ? '52px' : '64px';

  return (
    <div
      className={`rounded-full bg-white flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105 ${className}`}
      style={{
        width: dim,
        height: dim,
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        padding: '6px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <img
        src={TANTRAKOD_LOGO}
        alt="TantraKod Logo"
        className="w-full h-full object-contain block select-none"
        loading="eager"
      />
    </div>
  );
}
