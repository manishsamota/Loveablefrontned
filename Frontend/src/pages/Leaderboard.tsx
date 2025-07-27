import Leaderboard from "@/components/Leaderboard"
import Mascot from "@/components/Mascot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Trophy, TrendingUp, Target } from "lucide-react"

const LeaderboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header with Mascot */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Leaderboard</h1>
          <p className="text-muted-foreground">See how you stack up against other learners!</p>
        </div>
        <Mascot 
          mood="excited" 
          message="You're climbing! 🚀" 
          showMessage={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Leaderboard */}
        <div className="lg:col-span-2">
          <Leaderboard />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Your Rank Card */}
          <Card className=" text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Your Ranking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">#5</div>
                <p className="text-primary-foreground/80 text-sm">This Week</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold">1,876</div>
                  <div className="text-xs text-primary-foreground/80">Points</div>
                </div>
                <div>
                  <div className="text-lg font-bold">+3</div>
                  <div className="text-xs text-primary-foreground/80">Positions</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5" />
                Category Rankings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Mathematics</span>
                <Badge variant="secondary">#3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Music</span>
                <Badge variant="secondary">#7</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Sports</span>
                <Badge variant="secondary">#12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Debate</span>
                <Badge variant="secondary">#8</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Friends */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                Friends & Following
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Friends Invited</span>
                <span className="font-bold text-foreground">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Following</span>
                <span className="font-bold text-foreground">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Followers</span>
                <span className="font-bold text-foreground">23</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3">
                Invite Friends
              </Button>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="w-5 h-5 text-achievement-gold" />
                Leaderboard Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-achievement-gold" />
                <span className="text-sm">Top 10 Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-sm">Rising Star</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <Trophy className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Top 3 Weekly</span>
                <span className="text-xs text-muted-foreground ml-auto">Locked</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardPage