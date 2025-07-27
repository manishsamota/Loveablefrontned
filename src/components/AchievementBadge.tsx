import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Crown, Award } from "lucide-react"

interface AchievementBadgeProps {
  title: string
  description: string
  type: "gold" | "silver" | "bronze"
  category: string
  isEarned?: boolean
  progress?: number
}

const getAchievementIcon = (type: string) => {
  const icons = {
    gold: Crown,
    silver: Trophy,
    bronze: Award
  }
  const Icon = icons[type as keyof typeof icons] || Star
  return <Icon className="w-5 h-5" />
}

const getAchievementStyles = (type: string, isEarned: boolean) => {
  if (!isEarned) {
    return "bg-muted/50 text-muted-foreground border-muted"
  }
  
  const styles = {
    gold: "bg-achievement-gold/20 text-achievement-gold border-achievement-gold/30 shadow-achievement",
    silver: "bg-achievement-silver/20 text-achievement-silver border-achievement-silver/30",
    bronze: "bg-achievement-bronze/20 text-achievement-bronze border-achievement-bronze/30"
  }
  return styles[type as keyof typeof styles] || styles.bronze
}

const AchievementBadge = ({ title, description, type, category, isEarned = false, progress }: AchievementBadgeProps) => {
  return (
    <div className={`relative p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${getAchievementStyles(type, isEarned)}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full ${isEarned ? 'bg-current/20' : 'bg-muted/30'}`}>
          {getAchievementIcon(type)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-sm truncate">{title}</h4>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>
          <p className="text-xs opacity-80 leading-relaxed">{description}</p>
          
          {!isEarned && progress !== undefined && (
            <div className="mt-2">
              <div className="w-full bg-muted/30 rounded-full h-1">
                <div 
                  className="bg-current h-1 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs opacity-60 mt-1 block">{progress}% complete</span>
            </div>
          )}
        </div>
      </div>
      
      {isEarned && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center">
          <Star className="w-2 h-2 text-success-foreground fill-current" />
        </div>
      )}
    </div>
  )
}

export default AchievementBadge