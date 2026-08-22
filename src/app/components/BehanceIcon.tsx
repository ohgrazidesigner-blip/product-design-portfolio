type BehanceIconProps = {
  className?: string;
};

export function BehanceIcon({ className = "" }: BehanceIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center font-bold leading-none tracking-[-0.08em] ${className}`}
    >
      Bē
    </span>
  );
}
