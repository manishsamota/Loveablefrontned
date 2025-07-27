import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Music, Trophy, Mic, Users as Dance, MessageSquare } from "lucide-react"

interface ActivityCardProps {
  title: string
  type: "education" | "sports" | "music" | "dance" | "singing" | "debate"
  level: number
  progress: number
  streak: number
  points: number
  isActive?: boolean
}

const getActivityIcon = (type: string) => {
  const icons = {
    education: BookOpen,
    sports: Trophy,
    music: Music,
    dance: Dance,
    singing: Mic,
    debate: MessageSquare
  }
  const Icon = icons[type as keyof typeof icons] || BookOpen
  return <Icon className="w-6 h-6" />
}

const getActivityColor = (type: string) => {
  const colors = {
    education: "bg-primary/20 text-primary border-primary/30",
    sports: "bg-success/20 text-success border-success/30",
    music: "bg-secondary/20 text-secondary border-secondary/30",
    dance: "bg-warning/20 text-warning border-warning/30",
    singing: "bg-primary-glow/20 text-primary-glow border-primary-glow/30",
    debate: "bg-muted text-muted-foreground border-muted-foreground/30"
  }
  return colors[type as keyof typeof colors] || colors.education
}

const ActivityCard = ({ title, type, level, progress, streak, points, isActive }: ActivityCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${isActive ? 'ring-2 ring-primary shadow-glow' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${getActivityColor(type)}`}>
              {getActivityIcon(type)}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">Level {level}</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {points} pts
          </Badge>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-warning rounded-full" />
              <span className="text-sm text-muted-foreground">{streak} day streak</span>
            </div>
            <Button variant="ghost" size="sm" className="group-hover:bg-accent/50">
              Continue
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ActivityCard