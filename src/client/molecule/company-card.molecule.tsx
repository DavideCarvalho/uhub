import Link from 'next/link';

interface CardMoleculeProps {
  title: string;
  subtitle: string;
  href: string;
  className?: string;
}

export function CompanyCardMolecule({
  title,
  subtitle,
  href,
  className = '',
}: CardMoleculeProps): JSX.Element {
  return (
    <div className={`card w-96 bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Link href={href} />
    </div>
  );
}
