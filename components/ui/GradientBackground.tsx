/**
 * Global fixed background — pure CSS radial gradients, zero filter:blur() cost.
 * Achieves the same soft-orb look at a fraction of the GPU composite budget.
 */
export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <div className="gradient-bg-base absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-20" />
    </div>
  );
}
