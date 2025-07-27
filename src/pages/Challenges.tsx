import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DailyChallenges from "@/components/DailyChallenges"
import Mascot from "@/components/Mascot"
import { Flame, Target, Clock, Gift } from "lucide-react"

const Challenges = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header with Mascot */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Daily Challenges</h1>
          <p className="text-muted-foreground">Complete daily tasks to earn bonus points and keep your streak alive!</p>
        </div>
        <Mascot 
          mood="encouraging" 
          message="You've got this! 💪" 
          showMessage={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Challenges */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="special">Special</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="mt-6">
              <DailyChallenges />
            </TabsContent>
            
            <TabsContent value="weekly" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Weekly Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Weekly challenges reset every Monday!</p>
                    <p className="text-sm">New challenges will be available soon.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="special" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-achievement-gold" />
                    Special Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Gift className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No special events right now</p>
                    <p className="text-sm">Check back during holidays and special occasions!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Challenge Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Challenge Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Daily Streak</span>
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-warning" />
                  <span className="font-bold text-foreground">7 days</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Completed Today</span>
                <span className="font-bold text-foreground">1/3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">This Week</span>
                <span className="font-bold text-foreground">5/21</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Completed</span>
                <span className="font-bold text-foreground">234</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Set Custom Goal
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                View Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Gift className="w-4 h-4 mr-2" />
                Claim Rewards
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Challenges