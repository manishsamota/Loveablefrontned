import { BarChart3, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const AnalyticsCard = () => {
  const metrics = [
    { value: "89%", label: "Consistency Rate", trend: "↗ +5% this week", positive: true },
    { value: "45min", label: "Avg. Session", trend: "↗ +8min", positive: true },
    { value: "92%", label: "Task Completion", trend: "↗ +3%", positive: true },
    { value: "7.2/10", label: "Engagement Score", trend: "↗ +0.4", positive: true }
  ];

  return (
    <Card className="bg-card/95 backdrop-blur-[20px] border-border shadow-card transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-hover relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-analytics rounded-t-2xl" />
      
      <CardHeader>
        <div className="flex items-center gap-5">
          <div className="w-15 h-15 rounded-2xl bg-gradient-analytics flex items-center justify-center text-white text-3xl shadow-card">
            <BarChart3 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-card-foreground">Learning Analytics</h3>
            <p className="text-sm text-muted-foreground">Performance Insights</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-5">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-5 bg-card border border-border rounded-xl shadow-sm"
            >
              <div className="text-2xl font-bold text-analytics mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground font-medium mb-1">{metric.label}</div>
              <div className={`text-xs font-semibold ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;