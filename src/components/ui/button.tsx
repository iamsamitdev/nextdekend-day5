interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}: ButtonProps) {
  const baseStyles = "w-full py-3 rounded-lg transition-colors disabled:opacity-50"
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 