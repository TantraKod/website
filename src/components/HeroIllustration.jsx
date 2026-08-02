import { motion } from 'framer-motion';

/**
 * Custom technical architecture SVG illustration.
 * Every shape represents a real engineering concept:
 *   - Cloud infrastructure node
 *   - API gateway endpoint
 *   - AI processor chip
 *   - Database storage
 *   - Analytics dashboard card
 *   - Workflow connection nodes & lines
 *
 * Colors restricted to brand palette: Blue, Orange, White, Slate.
 */
export default function HeroIllustration() {
  const float = (delay = 0) => ({
    y: [0, -6, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
  });

  return (
    <motion.svg
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    >
      {/* ── Connection Lines ── */}
      <g stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="6 4">
        {/* Cloud → API */}
        <line x1="260" y1="95" x2="140" y2="195" />
        {/* Cloud → AI Chip */}
        <line x1="260" y1="95" x2="380" y2="195" />
        {/* API → Database */}
        <line x1="140" y1="235" x2="100" y2="320" />
        {/* API → Analytics */}
        <line x1="140" y1="235" x2="260" y2="320" />
        {/* AI Chip → Analytics */}
        <line x1="380" y1="235" x2="260" y2="320" />
        {/* AI Chip → Workflow */}
        <line x1="380" y1="235" x2="420" y2="320" />
      </g>

      {/* ── Accent Connection Lines (Blue) ── */}
      <g stroke="#2563EB" strokeWidth="1.5" opacity="0.3">
        <line x1="260" y1="95" x2="260" y2="320" />
      </g>

      {/* ── Cloud Infrastructure Node ── */}
      <motion.g animate={float(0)}>
        <rect x="195" y="30" width="130" height="65" rx="16" fill="white" stroke="#2563EB" strokeWidth="1.5" />
        {/* Cloud icon shape */}
        <path
          d="M242 52c-3.5 0-6.5 2.2-7.6 5.3A5.5 5.5 0 0 0 229 63a5.5 5.5 0 0 0 5.5 5.5h15a4.5 4.5 0 0 0 .8-8.9A6 6 0 0 0 244.5 54 6 6 0 0 0 242 52z"
          fill="#DBEAFE"
          stroke="#2563EB"
          strokeWidth="1"
        />
        <text x="270" y="62" fontSize="9" fontWeight="600" fill="#2563EB" fontFamily="var(--font-heading)">CLOUD</text>
        <text x="270" y="73" fontSize="7" fill="#94A3B8" fontFamily="var(--font-body)">Infrastructure</text>
      </motion.g>

      {/* ── API Gateway Node ── */}
      <motion.g animate={float(0.8)}>
        <rect x="70" y="185" width="140" height="55" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* API brackets */}
        <text x="92" y="217" fontSize="14" fontWeight="700" fill="#2563EB" fontFamily="monospace">{"{ }"}</text>
        <text x="125" y="211" fontSize="9" fontWeight="600" fill="#0F172A" fontFamily="var(--font-heading)">REST API</text>
        <text x="125" y="223" fontSize="7" fill="#94A3B8" fontFamily="var(--font-body)">Gateway</text>
      </motion.g>

      {/* ── AI Processor Chip ── */}
      <motion.g animate={float(1.2)}>
        <rect x="310" y="185" width="140" height="55" rx="14" fill="white" stroke="#F97316" strokeWidth="1.5" />
        {/* Chip icon - small square grid */}
        <rect x="328" y="203" width="20" height="20" rx="4" fill="#FEF3C7" stroke="#F97316" strokeWidth="1" />
        <line x1="338" y1="203" x2="338" y2="223" stroke="#F97316" strokeWidth="0.75" />
        <line x1="328" y1="213" x2="348" y2="213" stroke="#F97316" strokeWidth="0.75" />
        {/* Connection pins */}
        <line x1="332" y1="200" x2="332" y2="197" stroke="#F97316" strokeWidth="1" />
        <line x1="338" y1="200" x2="338" y2="197" stroke="#F97316" strokeWidth="1" />
        <line x1="344" y1="200" x2="344" y2="197" stroke="#F97316" strokeWidth="1" />
        <text x="356" y="211" fontSize="9" fontWeight="600" fill="#0F172A" fontFamily="var(--font-heading)">AI ENGINE</text>
        <text x="356" y="223" fontSize="7" fill="#94A3B8" fontFamily="var(--font-body)">ML Processing</text>
      </motion.g>

      {/* ── Database Storage ── */}
      <motion.g animate={float(1.6)}>
        <rect x="35" y="305" width="130" height="55" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Database cylinder */}
        <ellipse cx="70" cy="325" rx="12" ry="5" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1" />
        <rect x="58" y="325" width="24" height="14" fill="#DBEAFE" stroke="none" />
        <line x1="58" y1="325" x2="58" y2="339" stroke="#2563EB" strokeWidth="1" />
        <line x1="82" y1="325" x2="82" y2="339" stroke="#2563EB" strokeWidth="1" />
        <ellipse cx="70" cy="339" rx="12" ry="5" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1" />
        <text x="92" y="331" fontSize="9" fontWeight="600" fill="#0F172A" fontFamily="var(--font-heading)">DATABASE</text>
        <text x="92" y="343" fontSize="7" fill="#94A3B8" fontFamily="var(--font-body)">PostgreSQL</text>
      </motion.g>

      {/* ── Analytics Dashboard Card ── */}
      <motion.g animate={float(2.0)}>
        <rect x="195" y="305" width="130" height="65" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Mini bar chart */}
        <rect x="215" y="335" width="8" height="18" rx="2" fill="#DBEAFE" />
        <rect x="227" y="328" width="8" height="25" rx="2" fill="#60A5FA" />
        <rect x="239" y="322" width="8" height="31" rx="2" fill="#2563EB" />
        <text x="260" y="333" fontSize="9" fontWeight="600" fill="#0F172A" fontFamily="var(--font-heading)">ANALYTICS</text>
        <text x="260" y="345" fontSize="7" fill="#94A3B8" fontFamily="var(--font-body)">Real-Time</text>
      </motion.g>

      {/* ── Workflow Automation Node ── */}
      <motion.g animate={float(2.4)}>
        <rect x="355" y="305" width="130" height="55" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        {/* Workflow nodes */}
        <circle cx="380" cy="332" r="6" fill="#FEF3C7" stroke="#F97316" strokeWidth="1" />
        <circle cx="396" cy="332" r="6" fill="#FDBA74" stroke="#F97316" strokeWidth="1" />
        <line x1="386" y1="332" x2="390" y2="332" stroke="#F97316" strokeWidth="1" />
        <text x="410" y="331" fontSize="9" fontWeight="600" fill="#0F172A" fontFamily="var(--font-heading)">WORKFLOW</text>
        <text x="410" y="343" fontSize="7" fill="#94A3B8" fontFamily="var(--font-body)">Automation</text>
      </motion.g>

      {/* ── Small Floating Status Indicators ── */}
      <motion.g animate={float(0.5)}>
        <rect x="15" y="140" width="48" height="20" rx="10" fill="#F0FDF4" stroke="#16A34A" strokeWidth="0.75" />
        <circle cx="27" cy="150" r="3" fill="#16A34A" />
        <text x="34" y="153" fontSize="6" fontWeight="600" fill="#16A34A">LIVE</text>
      </motion.g>

      <motion.g animate={float(1.8)}>
        <rect x="460" y="155" width="50" height="20" rx="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="0.75" />
        <text x="472" y="168" fontSize="6" fontWeight="600" fill="#2563EB">SECURE</text>
      </motion.g>
    </motion.svg>
  );
}
