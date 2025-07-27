import Contests from "@/components/Contests"
import Mascot from "@/components/Mascot"
import SocialShare from "@/components/SocialShare"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Gift, Crown } from "lucide-react"

const ContestsPage = () => {
  const sampleAchievement = {
    title: "Contest Winner",
    description: "Won 1st place in weekly education contest",
    type: "gold" as const,
    category: "Contest"
  }

  const sampleUserStats = {
    totalPoints: 5310,
    streak: 14,
    level: 12
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header with Mascot */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Contests & Competitions</h1>
          <p className="text-muted-foreground">Compete with learners worldwide and win amazing prizes!</p>
        </div>
        <Mascot 
          mood="celebrating" 
          message="Time to compete! 🏆" 
          showMessage={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Contests */}
        <div className="lg:col-span-2 space-y-6">
          <Contests />
          
          {/* Sample Social Share for Contest Win */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Share Your Victory!</h2>
            <SocialShare 
              achievement={sampleAchievement}
              userStats={sampleUserStats}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contest Stats */}
          <Card className=" text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Your Contest Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-secondary-foreground/80 text-sm">Contests Joined</span>
                <span className="font-bold">23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary-foreground/80 text-sm">Wins</span>
                <span className="font-bold">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary-foreground/80 text-sm">Top 3 Finishes</span>
                <span className="font-bold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary-foreground/80 text-sm">Contest Points</span>
                <span className="font-bold">2,450</span>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-achievement-gold" />
                  <span className="font-medium text-sm">Championship Finals</span>
                </div>
                <p className="text-xs text-muted-foreground">Starts in 2 weeks</p>
              </div>
              <div className="p-3 rounded border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">Summer Sports Challenge</span>
                </div>
                <p className="text-xs text-muted-foreground">Starts next month</p>
              </div>
            </CardContent>
          </Card>

          {/* Prize History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Gift className="w-5 h-5 text-success" />
                Your Prizes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Bonus Points Earned</span>
                <span className="font-bold text-foreground">2,100</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Exclusive Badges</span>
                <span className="font-bold text-foreground">7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Special Titles</span>
                <span className="font-bold text-foreground">3</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                View All Prizes
              </Button>
            </CardContent>
          </Card>

          {/* Contest Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contest Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Join contests early for better practice time</p>
              <p>• Focus on your strongest categories first</p>
              <p>• Consistent daily activity beats cramming</p>
              <p>• Check contest rules for bonus point opportunities</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContestsPage