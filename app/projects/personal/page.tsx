import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Mail } from "lucide-react"

export default function PersonalProjectsPage() {
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
          <h1 className="text-3xl font-bold">Personal Projects</h1>
        </div>

        <p className="text-muted-foreground mb-8 max-w-3xl">
          These projects were developed independently, showcasing my ability to take initiative, solve problems, and
          deliver complete solutions. Each project represents my personal interests and demonstrates my technical skills
          in AI and software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Stock Price Prediction"
            description="Developed an LSTM-based model for stock price prediction. Achieved 85% directional accuracy on test data."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "LSTM", "Time Series", "Pandas"]}
            githubUrl="https://github.com/yourusername/stock-prediction"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Sentiment Analysis Dashboard"
            description="Created a dashboard for real-time sentiment analysis of social media data. Used NLP techniques and visualization tools."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "NLP", "React", "D3.js"]}
            githubUrl="https://github.com/yourusername/sentiment-dashboard"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Reinforcement Learning for Game AI"
            description="Trained an agent to play Atari games using Deep Q-Learning. Achieved superhuman performance on several games."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "PyTorch", "RL", "OpenAI Gym"]}
            githubUrl="https://github.com/yourusername/rl-game-ai"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Chatbot with Intent Recognition"
            description="Built a chatbot with intent recognition capabilities. Integrated with a customer service platform."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "Rasa", "NLP", "APIs"]}
            githubUrl="https://github.com/yourusername/intent-chatbot"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Image Generation with GANs"
            description="Implemented a Generative Adversarial Network to create realistic images from text descriptions."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "GANs", "PyTorch", "Computer Vision"]}
            githubUrl="https://github.com/yourusername/gan-image-gen"
            demoUrl="https://demo-link.com"
          />

          <ProjectCard
            title="Anomaly Detection in IoT Data"
            description="Developed an anomaly detection system for IoT sensor data using autoencoders and statistical methods."
            image="/placeholder.svg?height=200&width=300"
            tags={["Python", "TensorFlow", "Time Series", "IoT"]}
            githubUrl="https://github.com/yourusername/anomaly-detection"
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
