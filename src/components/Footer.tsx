import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-card/95 backdrop-blur-[20px] border border-border rounded-3xl p-8 mt-8 shadow-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              🎮 EduQuest
            </div>
            <p className="text-muted-foreground text-sm">
              Streak-based learning framework for research and educational excellence.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Dashboard
              </Link>
              <Link to="/challenges" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Analytics
              </Link>
              <Link to="/leaderboard" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Achievements
              </Link>
              <Link to="/contests" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Leaderboard
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Research</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">University of Lincoln</p>
              <p className="text-muted-foreground text-sm">Educational Technology</p>
              <p className="text-muted-foreground text-sm">Gamification Studies</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Help Center</p>
              <p className="text-muted-foreground text-sm">Privacy Policy</p>
              <p className="text-muted-foreground text-sm">Terms of Service</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2024 EduQuest Research Platform. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 md:mt-0">
            <span>🔒 Research Ethics Approved</span>
            <span>•</span>
            <span>Data Anonymized</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer