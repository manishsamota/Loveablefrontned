import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Flame, Gift, CheckCircle } from "lucide-react"

interface Challenge {
  id: string
  title: string
  description: string
  category: "education" | "sports" | "music" | "debate"
  difficulty: "easy" | "medium" | "hard"
  points: number
  timeLeft: string
  progress: number
  isCompleted: boolean
}

const DailyChallenges = () => {
  const challenges: Challenge[] = [
    {
      id: "1",
      title: "Math Marathon",
      description: "Complete 5 algebra problems",
      category: "education",
      difficulty: "medium",
      points: 150,
      timeLeft: "8h 32m",
      progress: 60,
      isCompleted: false
    },
    {
      id: "2",
      title: "Musical Minutes",
      description: "Practice piano for 30 minutes",
      category: "music",
      difficulty: "easy",
      points: 100,
      timeLeft: "8h 32m",
      progress: 100,
      isCompleted: true
    },
    {
      id: "3",
      title: "Debate Champion",
      description: "Win 2 debate rounds",
      category: "debate",
      difficulty: "hard",
      points: 300,
      timeLeft: "8h 32m",
      progress: 50,
      isCompleted: false
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-success/20 text-success border-success/30"
      case "medium": return "bg-warning/20 text-warning border-warning/30"
      case "hard": return "bg-destructive/20 text-destructive border-destructive/30"
      default: return "bg-muted/20 text-muted-foreground border-muted/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education": return "text-primary"
      case "sports": return "text-success"
      case "music": return "text-secondary"
      case "debate": return "text-warning"
      default: return "text-muted-foreground"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-warning" />
          Daily Challenges
          <Badge variant="secondary" className="ml-auto">
            Resets in 8h 32m
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`p-4 rounded-lg border transition-all hover:shadow-md ${
              challenge.isCompleted ? 'bg-success/5 border-success/30' : 'bg-card border-border'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-foreground">{challenge.title}</h4>
                  {challenge.isCompleted && (
                    <CheckCircle className="w-4 h-4 text-success" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                <div className="flex items-center gap-2">
                  <Badge className={getDifficultyColor(challenge.difficulty)} variant="outline">
                    {challenge.difficulty}
                  </Badge>
                  <Badge variant="secondary">
                    <Gift className="w-3 h-3 mr-1" />
                    {challenge.points} pts
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <Clock className="w-3 h-3" />
                  {challenge.timeLeft}
                </div>
              </div>
            </div>

            {!challenge.isCompleted && (
              <>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Continue Challenge
                </Button>
              </>
            )}

            {challenge.isCompleted && (
              <div className="text-center">
              <Badge variant="secondary" className="w-full justify-center bg-success/20 text-success border-success/30">
                Challenge Completed! +{challenge.points} points
              </Badge>
              </div>
            )}
          </div>
        ))}

        <div className="pt-4 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            Complete all daily challenges for a bonus reward!
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DailyChallenges