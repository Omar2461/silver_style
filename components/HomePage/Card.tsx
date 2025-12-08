interface CardProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

function Card({ children, title, className }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      <div className={`p-6 rounded-2xl ${className}`}>{children}</div>
      <div className="absolute top-7 -right-30 gap-4 flex flex-col">
        <p className="text-lg font-medium pr-2 text-center w-35">{title}</p>
        <button className="text-sm w-26 py-1 border border-gray-500 rounded-full">
          See All →
        </button>
      </div>
    </div>
  );
}

export default Card;
