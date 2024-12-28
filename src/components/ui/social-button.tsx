import Image from 'next/image'

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  provider: 'line' | 'google';
}

export function SocialButton({ 
  children, 
  provider,
  className = '', 
  ...props 
}: SocialButtonProps) {
  const icons = {
    line: "/images/line.webp",
    google: "/images/google.webp"
  }

  return (
    <button 
      className={`w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors ${className}`}
      {...props}
    >
      <Image 
        src={icons[provider]} 
        alt={provider.charAt(0).toUpperCase() + provider.slice(1)} 
        width={24} 
        height={24} 
      />
      <span className="flex-1 text-left">{children}</span>
    </button>
  )
} 