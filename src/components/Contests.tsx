import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Trophy, Users, Timer, Gift, Crown } from "lucide-react"

interface Contest {
  id: string
  title: string
  description: string
  type: "weekly" | "monthly"
  category: "all" | "education" | "sports" | "music" | "debate"
  timeLeft: string
  totalParticipants: number
  userRank: number
  userProgress: number
  rewards: {
    first: string
    second: string
    third: string
  }
  topParticipants: {
    name: string
    points: number
    avatar: string
  }[]
}

const Contests = () => {
  const activeContests: Contest[] = [
    {
      id: "1",
      title: "Knowledge Champion",
      description: "Compete in all education categories this week",
      type: "weekly",
      category: "education",
      timeLeft: "3d 14h",
      totalParticipants: 2847,
      userRank: 42,
      userProgress: 68,
      rewards: {
        first: "500 bonus points + Exclusive badge",
        second: "300 bonus points + Badge",
        third: "200 bonus points + Badge"
      },
      topParticipants: [
        { name: "Alex Chen", points: 2450, avatar: "AC" },
        { name: "Sarah J.", points: 2234, avatar: "SJ" },
        { name: "Mike R.", points: 2156, avatar: "MR" }
      ]
    },
    {
      id: "2",
      title: "Music Mastery Marathon",
      description: "Monthly music practice challenge",
      type: "monthly",
      category: "music",
      timeLeft: "18d 6h",
      totalParticipants: 1543,
      userRank: 23,
      userProgress: 45,
      rewards: {
        first: "1000 bonus points + Legendary badge",
        second: "600 bonus points + Epic badge",
        third: "400 bonus points + Rare badge"
      },
      topParticipants: [
        { name: "Emma W.", points: 3876, avatar: "EW" },
        { name: "David K.", points: 3654, avatar: "DK" },
        { name: "Lisa B.", points: 3432, avatar: "LB" }
      ]
    }
  ]

  const getContestTypeColor = (type: string) => {
    switch (type) {
      case "weekly": return "bg-warning/20 text-warning border-warning/30"
      case "monthly": return "bg-success/20 text-success border-success/30"
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

  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Crown className="w-4 h-4 text-achievement-gold" />
    }
    return <span className="text-xs font-bold">#{rank}</span>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-achievement-gold" />
          Active Contests
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-4 space-y-6">
            {activeContests.map((contest) => (
              <div key={contest.id} className="p-4 rounded-lg border border-border bg-card space-y-4">
                {/* Contest Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{contest.title}</h4>
                      <Badge className={getContestTypeColor(contest.type)} variant="outline">
                        {contest.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{contest.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        {contest.timeLeft} left
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {contest.totalParticipants.toLocaleString()} participants
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Your Progress</span>
                    <div className="flex items-center gap-2">
                      {getRankIcon(contest.userRank)}
                      <span className="text-sm text-muted-foreground">Rank {contest.userRank}</span>
                    </div>
                  </div>
                  <Progress value={contest.userProgress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{contest.userProgress}% complete</div>
                </div>

                {/* Top Participants */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-foreground">Top Participants</h5>
                  <div className="space-y-1">
                    {contest.topParticipants.map((participant, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded bg-muted/30">
                        <span className="text-xs font-bold w-4">#{index + 1}</span>
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs">{participant.avatar}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm flex-1">{participant.name}</span>
                        <span className="text-xs text-muted-foreground">{participant.points} pts</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rewards */}
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-foreground flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    Rewards
                  </h5>
                  <div className="grid gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3 h-3 text-achievement-gold" />
                      <span>1st: {contest.rewards.first}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3 h-3 text-achievement-silver" />
                      <span>2nd: {contest.rewards.second}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3 h-3 text-achievement-bronze" />
                      <span>3rd: {contest.rewards.third}</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View Contest Details
                </Button>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-4">
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>New contests starting soon!</p>
              <p className="text-sm">Check back tomorrow for exciting new challenges.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default Contests