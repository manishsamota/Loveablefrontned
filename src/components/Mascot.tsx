import { useState, useEffect } from "react"
import { Star, Zap, Heart, Trophy } from "lucide-react"

interface MascotProps {
  mood?: "happy" | "excited" | "encouraging" | "celebrating"
  message?: string
  showMessage?: boolean
}

const Mascot = ({ mood = "happy", message, showMessage = false }: MascotProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(message)

  useEffect(() => {
    if (showMessage && message) {
      setCurrentMessage(message)
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [message, showMessage])

  const getMascotColor = () => {
    switch (mood) {
      case "excited": return "text-warning"
      case "encouraging": return "text-success"
      case "celebrating": return "text-achievement-gold"
      default: return "text-primary"
    }
  }

  const getMascotIcon = () => {
    switch (mood) {
      case "excited": return Zap
      case "encouraging": return Heart
      case "celebrating": return Trophy
      default: return Star
    }
  }

  const Icon = getMascotIcon()

  return (
    <div className="relative">
      {/* Mascot Character */}
      <div className={`
        relative w-16 h-16 rounded-full bg-gradient-primary p-4 
        ${getMascotColor()} transition-all duration-300 hover:scale-110
        ${isAnimating ? 'animate-bounce' : ''}
      `}>
        <Icon className="w-full h-full" />
        
        {/* Sparkle Effects */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-achievement-gold rounded-full animate-ping opacity-75" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full animate-pulse" />
      </div>

      {/* Speech Bubble */}
      {showMessage && currentMessage && (
        <div className={`
          absolute -top-16 left-1/2 transform -translate-x-1/2 
          bg-card border border-border rounded-lg px-3 py-2 shadow-lg
          transition-all duration-300 z-10
          ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
          <p className="text-sm text-foreground whitespace-nowrap">{currentMessage}</p>
          {/* Speech bubble arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                         border-l-4 border-r-4 border-t-4 border-transparent border-t-border" />
        </div>
      )}
    </div>
  )
}

export default Mascot