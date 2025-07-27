import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const SportsProgressCard = () => {
  const activities = [
    { name: "Soccer Match Victory", time: "Completed 3 hours ago", points: 150 },
    { name: "Swimming Laps", time: "Completed yesterday", points: 85 },
    { name: "Basketball Practice", time: "Completed 2 days ago", points: 75 },
    { name: "Marathon Training", time: "Completed 3 days ago", points: 120 }
  ];

  const achievements = [
    { icon: "⚽", name: "Team Player", desc: "5 team activities", color: "bg-gradient-sports" },
    { icon: "🏊‍♂️", name: "Swimmer", desc: "10 swimming sessions", color: "bg-analytics" },
    { icon: "🏃‍♂️", name: "Runner", desc: "Marathon complete", color: "bg-warning" },
    { icon: "🏆", name: "Sports Champion", desc: "Win 10 competitions", color: "bg-muted", locked: true }
  ];

  return (
    <Card className="bg-card/95 backdrop-blur-[20px] border-border shadow-card transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-hover relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-sports rounded-t-2xl" />
      
      <CardHeader>
        <div className="flex items-center gap-5">
          <div className="w-15 h-15 rounded-2xl bg-gradient-sports flex items-center justify-center text-white text-3xl shadow-card">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-card-foreground">Sports & Athletics</h3>
            <p className="text-sm text-muted-foreground">Physical Activities & Team Sports</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-sports">Level 8</div>
          <div className="text-sm text-muted-foreground font-medium">420/600 XP to Level 9</div>
        </div>
        
        <div className="w-full h-3 bg-muted rounded-lg overflow-hidden mb-5 relative">
          <div 
            className="h-full bg-gradient-sports rounded-lg transition-all duration-700 relative"
            style={{ width: '70%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-4 border-b border-muted last:border-b-0 transition-all duration-300 hover:bg-sports/5 hover:rounded-xl hover:px-3 hover:-mx-3"
            >
              <div>
                <div className="font-semibold text-card-foreground">{activity.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{activity.time}</div>
              </div>
              <div className="bg-gradient-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                +{activity.points} XP
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`${achievement.color} ${achievement.locked ? 'opacity-50' : ''} rounded-2xl p-5 text-center transition-all duration-300 hover:scale-105 hover:shadow-achievement cursor-pointer relative overflow-hidden`}
            >
              <span className="text-2xl block mb-3 drop-shadow-sm">{achievement.icon}</span>
              <div className="text-sm font-semibold text-white line-height-tight">{achievement.name}</div>
              <div className="text-xs text-white/80 mt-1 opacity-80">{achievement.desc}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SportsProgressCard;