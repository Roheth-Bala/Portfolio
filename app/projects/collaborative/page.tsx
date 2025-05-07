import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Mail } from "lucide-react"

export default function CollaborativeProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              AI.Portfolio
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="/#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-10">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Collaborative Projects</h1>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          These projects were developed as part of a team, showcasing my ability to collaborate, communicate
          effectively, and contribute to larger codebases. Each project involved working with other developers,
          designers, and stakeholders to deliver high-quality solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Fake News Detection using NLP"
            description="Built a transformer-based model to classify fake news with 92% accuracy. Deployed as a web app using Flask."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "BERT", "Flask", "NLP"]}
            githubUrl="https://github.com/yourusername/fake-news-detection"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Real-time Object Detection"
            description="Implemented YOLOv5 for real-time object detection. Optimized for edge devices with TensorFlow Lite."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "YOLOv5", "TensorFlow", "Computer Vision"]}
            githubUrl="https://github.com/yourusername/object-detection"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Recommendation System"
            description="Built a content-based and collaborative filtering recommendation system for an e-commerce platform."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "Scikit-learn", "Pandas", "Flask"]}
            githubUrl="https://github.com/yourusername/recommendation-system"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Healthcare Data Analytics Platform"
            description="Developed a platform for analyzing healthcare data to identify patterns and improve patient outcomes."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "TensorFlow", "React", "D3.js"]}
            githubUrl="https://github.com/yourusername/healthcare-analytics"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Autonomous Drone Navigation"
            description="Implemented computer vision algorithms for autonomous drone navigation in indoor environments."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "OpenCV", "ROS", "Robotics"]}
            githubUrl="https://github.com/yourusername/drone-navigation"
            demoUrl="https://demo-link.com"
          />
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:your.email@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
