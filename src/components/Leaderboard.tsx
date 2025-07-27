import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, TrendingUp, Users, Flame } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  streak: number
  avatar: string
  isCurrentUser?: boolean
  change: "up" | "down" | "same"
}

const Leaderboard = () => {
  const weeklyLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Alex Chen", points: 2847, streak: 14, avatar: "AC", change: "up" },
    { rank: 2, name: "Sarah Johnson", points: 2654, streak: 12, avatar: "SJ", change: "same" },
    { rank: 3, name: "Mike Rodriguez", points: 2453, streak: 8, avatar: "MR", change: "down" },
    { rank: 4, name: "Emma Wilson", points: 2234, streak: 15, avatar: "EW", change: "up" },
    { rank: 5, name: "You", points: 1876, streak: 7, avatar: "YU", change: "up", isCurrentUser: true },
    { rank: 6, name: "David Kim", points: 1654, streak: 5, avatar: "DK", change: "down" },
    { rank: 7, name: "Lisa Brown", points: 1432, streak: 9, avatar: "LB", change: "same" },
  ]

  const allTimeLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Sarah Johnson", points: 15647, streak: 45, avatar: "SJ", change: "same" },
    { rank: 2, name: "Alex Chen", points: 14234, streak: 23, avatar: "AC", change: "up" },
    { rank: 3, name: "Emma Wilson", points: 13876, streak: 31, avatar: "EW", change: "down" },
    { rank: 4, name: "Mike Rodriguez", points: 12453, streak: 18, avatar: "MR", change: "same" },
    { rank: 5, name: "David Kim", points: 11234, streak: 22, avatar: "DK", change: "up" },
    { rank: 6, name: "Lisa Brown", points: 10876, streak: 16, avatar: "LB", change: "down" },
    { rank: 7, name: "You", points: 8432, streak: 14, avatar: "YU", change: "up", isCurrentUser: true },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-5 h-5 text-achievement-gold" />
      case 2: return <Medal className="w-5 h-5 text-achievement-silver" />
      case 3: return <Award className="w-5 h-5 text-achievement-bronze" />
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  const getChangeIcon = (change: string) => {
    switch (change) {
      case "up": return <TrendingUp className="w-3 h-3 text-success" />
      case "down": return <TrendingUp className="w-3 h-3 text-destructive rotate-180" />
      default: return <div className="w-3 h-3" />
    }
  }

  const renderLeaderboard = (data: LeaderboardEntry[]) => (
    <div className="space-y-2">
      {data.map((entry) => (
        <div
          key={entry.rank}
          className={`
            flex items-center gap-3 p-3 rounded-lg border transition-all hover:shadow-md
            ${entry.isCurrentUser ? 'bg-primary/5 border-primary/30 ring-1 ring-primary/20' : 'bg-card border-border'}
          `}
        >
          <div className="flex items-center gap-2">
            {getRankIcon(entry.rank)}
            {getChangeIcon(entry.change)}
          </div>

          <Avatar className="w-8 h-8">
            <AvatarFallback className="text-xs">{entry.avatar}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className={`font-medium truncate ${entry.isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                {entry.name}
              </p>
              {entry.isCurrentUser && (
                <Badge variant="secondary" className="text-xs">You</Badge>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{entry.points.toLocaleString()} pts</span>
              <div className="flex items-center gap-1">
                <Flame className="w-3 h-3 text-warning" />
                <span>{entry.streak}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="alltime">All Time</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="mt-4">
            {renderLeaderboard(weeklyLeaderboard)}
          </TabsContent>
          
          <TabsContent value="alltime" className="mt-4">
            {renderLeaderboard(allTimeLeaderboard)}
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <Button variant="outline" size="sm">
            View Full Leaderboard
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Leaderboard