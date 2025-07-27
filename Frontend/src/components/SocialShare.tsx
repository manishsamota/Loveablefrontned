import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, Twitter, Facebook, Copy, CheckCircle } from "lucide-react"

interface SocialShareProps {
  achievement: {
    title: string
    description: string
    type: "gold" | "silver" | "bronze"
    category: string
  }
  userStats: {
    totalPoints: number
    streak: number
    level: number
  }
}

const SocialShare = ({ achievement, userStats }: SocialShareProps) => {
  const [copied, setCopied] = useState(false)

  const getShareText = () => {
    return `🎉 Just earned the "${achievement.title}" ${achievement.type} achievement on EduGameX! 
${achievement.description}

📊 My stats:
• ${userStats.totalPoints.toLocaleString()} total points
• ${userStats.streak} day streak
• Level ${userStats.level}

#Gamification #Education #Achievement #Learning`
  }

  const getShareUrl = () => {
    return `${window.location.origin}?shared_achievement=${achievement.title}`
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleTwitterShare = () => {
    const text = encodeURIComponent(getShareText())
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
  }

  const handleFacebookShare = () => {
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  }

  const getAchievementGradient = () => {
    switch (achievement.type) {
      case "gold": return "bg-gradient-to-r from-achievement-gold/20 to-achievement-gold/10"
      case "silver": return "bg-gradient-to-r from-achievement-silver/20 to-achievement-silver/10"
      case "bronze": return "bg-gradient-to-r from-achievement-bronze/20 to-achievement-bronze/10"
      default: return "bg-gradient-to-r from-primary/20 to-primary/10"
    }
  }

  return (
    <Card className={`${getAchievementGradient()} border-2 border-dashed border-primary/30`}>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="capitalize">
              {achievement.type} Achievement
            </Badge>
            <Badge variant="secondary">
              {achievement.category}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <div className="text-lg font-bold text-foreground">{userStats.totalPoints.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Total Points</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">{userStats.streak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">{userStats.level}</div>
            <div className="text-xs text-muted-foreground">Level</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-center text-sm text-muted-foreground mb-3">
            Share your achievement with friends!
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleTwitterShare}
              className="flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleFacebookShare}
              className="flex items-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyLink}
              className="flex items-center gap-2"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 text-success" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SocialShare