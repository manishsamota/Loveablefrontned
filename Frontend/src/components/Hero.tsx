import { Button } from "@/components/ui/button"
import { Play, Award, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import heroImage from "@/assets/hero-education.jpg"
import Mascot from "./Mascot"

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-10 sm:py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="px-2 sm:px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs sm:text-sm text-primary-glow animate-pulse-glow">
              ✨ Transform Learning into Adventure
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Gamify Your
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Education</span>
          </h1>
          
          <p className="text-sm sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
            Unlock your potential through engaging challenges, achievements, and streaks. 
            Track progress across education, sports, music, dance, singing, and debate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Link to="/challenges">
              <Button variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contests">
              <Button variant="outline" size="lg">
                <Award className="w-5 h-5" />
                View Contests
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-foreground">10K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-foreground">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Skill Categories</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-foreground">1M+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Achievements Earned</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements & Mascot */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-achievement-gold/20 rounded-full animate-bounce-gentle hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/20 rounded-lg animate-bounce-gentle hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-success/20 rounded-full animate-pulse hidden lg:block" />
      
      {/* Floating Mascot */}
      <div className="absolute top-1/3 right-16 hidden lg:block">
        <Mascot 
          mood="happy" 
          message="Welcome to EduGameX! 🎮" 
          showMessage={true}
        />
      </div>
    </section>
  )
}

export default Hero