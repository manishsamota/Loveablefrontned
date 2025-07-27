import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const AcademicProgressCard = () => {
  const activities = [
    { name: "Calculus Problem Set", time: "Completed 2 hours ago", points: 120 },
    { name: "Physics Lab Report", time: "Completed 5 hours ago", points: 95 },
    { name: "Chemistry Quiz", time: "Completed yesterday", points: 80 }
  ];

  return (
    <Card className="bg-card/95 backdrop-blur-[20px] border-border shadow-card transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-hover relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-2xl" />
      
      <CardHeader>
        <div className="flex items-center gap-5">
          <div className="w-15 h-15 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-3xl shadow-card">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-card-foreground">Academic Progress</h3>
            <p className="text-sm text-muted-foreground">Mathematics & Sciences</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-primary">Level 12</div>
          <div className="text-sm text-muted-foreground font-medium">850/1000 XP to Level 13</div>
        </div>
        
        <div className="w-full h-3 bg-muted rounded-lg overflow-hidden mb-5 relative">
          <div 
            className="h-full bg-gradient-primary rounded-lg transition-all duration-700 relative"
            style={{ width: '85%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-4 border-b border-muted last:border-b-0 transition-all duration-300 hover:bg-primary/5 hover:rounded-xl hover:px-3 hover:-mx-3"
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
      </CardContent>
    </Card>
  );
};

export default AcademicProgressCard;