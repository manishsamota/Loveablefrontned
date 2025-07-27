import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import ActivityCard from "./ActivityCard"
import AchievementBadge from "./AchievementBadge"
import { TrendingUp, Flame, Calendar, Users } from "lucide-react"

const Dashboard = () => {
  const activities = [
    { title: "Mathematics", type: "education" as const, level: 12, progress: 78, streak: 7, points: 2450, isActive: true },
    { title: "Basketball", type: "sports" as const, level: 8, progress: 45, streak: 3, points: 1320 },
    { title: "Piano", type: "music" as const, level: 6, progress: 92, streak: 14, points: 980 },
    { title: "Debate Club", type: "debate" as const, level: 4, progress: 23, streak: 2, points: 560 }
  ]

  const achievements = [
    { title: "Study Streak Master", description: "Complete 30 days of consecutive study", type: "gold" as const, category: "Education", isEarned: true },
    { title: "Music Virtuoso", description: "Practice for 100 hours", type: "silver" as const, category: "Music", isEarned: true },
    { title: "Sports Champion", description: "Win 10 competitions", type: "bronze" as const, category: "Sports", isEarned: false, progress: 70 },
    { title: "Debate Expert", description: "Win 5 debate matches", type: "silver" as const, category: "Debate", isEarned: false, progress: 40 }
  ]

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 space-y-6 sm:space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardContent className="p-3 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-xs sm:text-sm">Total Points</p>
                <p className="text-lg sm:text-2xl font-bold">5,310</p>
              </div>
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-secondary text-secondary-foreground">
          <CardContent className="p-3 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-foreground/80 text-xs sm:text-sm">Current Streak</p>
                <p className="text-lg sm:text-2xl font-bold">14 days</p>
              </div>
              <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-secondary-foreground/80" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-xs sm:text-sm">Activities</p>
                <p className="text-lg sm:text-2xl font-bold text-foreground">12</p>
              </div>
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-xs sm:text-sm">Rank</p>
                <p className="text-lg sm:text-2xl font-bold text-foreground">#42</p>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Weekly Progress
            <Badge variant="secondary">85% completed</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">This week's goal: 2000 points</span>
                <span className="text-foreground">1,700 / 2,000</span>
              </div>
              <Progress value={85} className="h-3" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">300 points to go!</span>
              <Button variant="secondary" size="sm" className="bg-success/20 text-success border-success/30 hover:bg-success/30">
                Keep Going!
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Active Activities */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Your Activities</h2>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">View All</Button>
          </div>
          <div className="grid gap-4">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Achievements</h2>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">View All</Button>
          </div>
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard