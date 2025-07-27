import { Flame, Snowflake } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const StreakCalendar = () => {
  const streakStats = [
    { number: "28", label: "Current Streak" },
    { number: "45", label: "Best Streak" },
    { number: "89%", label: "Monthly Rate" },
    { number: "2", label: "Freezes Available" }
  ];

  const calendarDays = Array.from({ length: 28 }, (_, i) => {
    const day = i + 1;
    let status = 'active';
    if (day === 13) status = 'frozen';
    if (day === 28) status = 'today';
    
    return { day, status, title: getTitle(day, status) };
  });

  function getTitle(day: number, status: string) {
    if (status === 'frozen') return `Day ${day} - Streak Freeze Used`;
    if (status === 'today') return `Day ${day} - Today's Activities`;
    const activities = ['Math Quiz', 'Reading Assignment', 'Lab Work', 'Sports Practice', 'Music Lesson'];
    return `Day ${day} - ${activities[day % activities.length]}`;
  }

  const achievements = [
    { icon: "🏆", name: "Perfect Week", desc: "7 days in a row", unlocked: true },
    { icon: "🎯", name: "Goal Crusher", desc: "Exceeded targets", unlocked: true },
    { icon: "🌟", name: "Rising Star", desc: "Top 10% performer", unlocked: true },
    { icon: "💪", name: "Consistency King", desc: "20+ day streak", unlocked: true },
    { icon: "🚀", name: "Level Up", desc: "Reached new level", unlocked: true },
    { icon: "🎪", name: "Multi-Talent", desc: "All domains active", unlocked: true },
    { icon: "👑", name: "Champion", desc: "50+ day streak", unlocked: false },
    { icon: "🎖️", name: "Elite Scholar", desc: "All domains Level 15+", unlocked: false }
  ];

  return (
    <Card className="bg-card/95 backdrop-blur-[20px] border-border shadow-card transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-hover relative overflow-hidden col-span-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-2xl" />
      
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-flicker">🔥</span>
            <h3 className="text-3xl font-bold text-card-foreground">Learning Streak Dashboard</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {streakStats.map((stat, index) => (
              <div key={index} className="text-center p-5 bg-gradient-primary text-white rounded-2xl shadow-glow transition-transform hover:-translate-y-1">
                <span className="text-3xl font-bold block">{stat.number}</span>
                <span className="text-xs uppercase tracking-wider opacity-90">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold text-card-foreground">Last 28 Days Activity</h4>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl text-primary text-sm font-medium">
              <Snowflake className="w-4 h-4" />
              Streak freezes help maintain motivation without stress
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-3 mb-6">
            {calendarDays.map((day) => (
              <div
                key={day.day}
                title={day.title}
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold cursor-pointer transition-all duration-300
                  ${day.status === 'active' ? 'bg-gradient-success text-white shadow-md hover:scale-105' : ''}
                  ${day.status === 'frozen' ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md relative' : ''}
                  ${day.status === 'today' ? 'bg-gradient-to-br from-warning to-orange-600 text-white shadow-lg animate-pulse scale-105' : ''}
                `}
              >
                {day.day}
                {day.status === 'frozen' && (
                  <span className="absolute -top-1 -right-1 text-xs">❄️</span>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-5">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`
                  rounded-2xl p-5 text-center transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${achievement.unlocked 
                    ? 'bg-gradient-to-br from-achievement-gold to-orange-500 hover:scale-105 hover:rotate-2 shadow-achievement' 
                    : 'bg-muted opacity-50 hover:scale-105'
                  }
                `}
              >
                <span className="text-3xl block mb-3 drop-shadow-sm filter">{achievement.icon}</span>
                <div className="text-sm font-semibold text-white">{achievement.name}</div>
                <div className="text-xs text-white/80 mt-1">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCalendar;