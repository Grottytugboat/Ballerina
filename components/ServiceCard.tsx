interface ServiceCardProps {
  title: string;
  description: string;
  number?: number;
}

export default function ServiceCard({
  title,
  description,
  number,
}: ServiceCardProps) {
  return (
    <div className="space-y-4 border-b border-primary/10 pb-8">
      {number && (
        <div className="text-sm text-accent tracking-wider uppercase">
          {number.toString().padStart(2, "0")}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-medium tracking-wide uppercase">
        {title}
      </h3>
      <p className="text-sm md:text-base text-primary/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
