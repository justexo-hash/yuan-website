export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold-primary/60" />
      <div className="w-2 h-2 rotate-45 border border-gold-primary/60 bg-gold-primary/20" />
      <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold-primary/60" />
    </div>
  );
}
