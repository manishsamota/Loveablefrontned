import { Palette } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const ArtsProgressCard = () => {
  const activities = [
    { name: "Piano Recital Performance", time: "Completed 1 hour ago", points: 140 },
    { name: "Contemporary Dance Show", time: "Completed 4 hours ago", points: 110 },
    { name: "Debate Competition", time: "Completed yesterday", points: 125 },
    { name: "Choir Singing Practice", time: "Completed 2 days ago", points: 90 },
    { name: "Art Exhibition Submission", time: "Completed 3 days ago", points: 105 }
  ];

  const achievements = [
    { icon: "🎹", name: "Pianist", desc: "5 recitals performed", color: "bg-purple-500" },
    { icon: "💃", name: "Dancer", desc: "10 dance performances", color: "bg-pink-500" },
    { icon: "🎤", name: "Vocalist", desc: "Join choir group", color: "bg-blue-500" },
    { icon: "🗣️", name: "Debater", desc: "Win 3 debates", color: "bg-analytics" },
    { icon: "🎨", name: "Artist", desc: "Exhibit artwork", color: "bg-warning" },
    { icon: "🌟", name: "Virtuoso", desc: "Master all arts", color: "bg-muted", locked: true }
  ];

  return (
    <Card className="bg-card/95 backdrop-blur-[20px] border-border shadow-card transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-hover relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-arts rounded-t-2xl" />
      
      <CardHeader>
        <div className="flex items-center gap-5">
          <div className="w-15 h-15 rounded-2xl bg-gradient-arts flex items-center justify-center text-white text-3xl shadow-card">
            <Palette className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-card-foreground">Arts & Performance</h3>
            <p className="text-sm text-muted-foreground">Music, Dance, Singing & Debate</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-arts">Level 10</div>
          <div className="text-sm text-muted-foreground font-medium">650/800 XP to Level 11</div>
        </div>
        
        <div className="w-full h-3 bg-muted rounded-lg overflow-hidden mb-5 relative">
          <div 
            className="h-full bg-gradient-arts rounded-lg transition-all duration-700 relative"
            style={{ width: '81%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-4 border-b border-muted last:border-b-0 transition-all duration-300 hover:bg-arts/5 hover:rounded-xl hover:px-3 hover:-mx-3"
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

        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`${achievement.color} ${achievement.locked ? 'opacity-50' : ''} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-achievement cursor-pointer relative overflow-hidden`}
            >
              <span className="text-2xl block mb-2 drop-shadow-sm">{achievement.icon}</span>
              <div className="text-xs font-semibold text-white line-height-tight">{achievement.name}</div>
              <div className="text-[10px] text-white/80 mt-1 opacity-80">{achievement.desc}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtsProgressCard;