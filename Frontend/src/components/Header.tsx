import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  
  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/challenges", label: "Analytics" },
    { path: "/leaderboard", label: "Achievements" },
    { path: "/contests", label: "Leaderboard" },
  ]

  return (
    <header className="bg-card/95 backdrop-blur-[20px] border border-border rounded-2xl sm:rounded-3xl p-3 sm:p-6 mb-4 sm:mb-8 shadow-card">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" >
            <div className="text-xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              🎮 EduQuest
            </div>

            </Link>
            {/* <div className="bg-gradient-success text-success-foreground px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              Research Study
            </div> */}
          </div>

          <div className="hidden md:flex gap-2 bg-primary/8 rounded-2xl p-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'bg-gradient-primary text-white shadow-glow transform -translate-y-0.5' 
                      : 'text-primary hover:bg-primary/15 hover:-translate-y-0.5'
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-achievement-gold to-orange-500 flex items-center justify-center text-white font-bold text-sm sm:text-xl shadow-achievement">
              MS
            </div>
            <div className="hidden sm:block">
              <h3 className="font-semibold text-card-foreground">Research Participant #001</h3>
              <div className="text-sm text-primary font-medium">Level 15 Scholar • Day 28</div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex gap-1 bg-primary/8 rounded-xl p-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className={`px-2 py-1 rounded-xl font-medium text-xs transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'bg-gradient-primary text-white shadow-glow' 
                      : 'text-primary hover:bg-primary/15'
                  }`}
                >
                  {item.label.substring(0, 3)}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header