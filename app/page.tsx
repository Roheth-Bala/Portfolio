import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import SkillBadge from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              RB
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI Engineer & Software Developer
            </h1>
            <p className="text-xl text-muted-foreground">
              Master's in Artificial Intelligence with 2 years of software development experience. Passionate about
              building intelligent systems and solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/Roheth-Bala" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/roheth-bala-47574520a/" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <img src="/placeholder.svg?height=256&width=256" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-muted-foreground">My technical skills and areas of expertise</p>
          </div>

          <Tabs defaultValue="ai-ml" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ai-ml">AI & ML</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="tools">Tools & Frameworks</TabsTrigger>
              <TabsTrigger value="soft-skills">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="ai-ml" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillBadge name="Machine Learning" />
                <SkillBadge name="Deep Learning" />
                <SkillBadge name="Natural Language Processing" />
                <SkillBadge name="Computer Vision" />
                <SkillBadge name="Reinforcement Learning" />
                <SkillBadge name="TensorFlow" />
                <SkillBadge name="PyTorch" />
                <SkillBadge name="Scikit-learn" />
                <SkillBadge name="Keras" />
                <SkillBadge name="NLTK" />
                <SkillBadge name="OpenCV" />
                <SkillBadge name="Hugging Face" />
              </div>
            </TabsContent>
            <TabsContent value="programming" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillBadge name="Python" />
                <SkillBadge name="Java" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="C++" />
                <SkillBadge name="SQL" />
                <SkillBadge name="HTML/CSS" />
                <SkillBadge name="R" />
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillBadge name="Git" />
                <SkillBadge name="Docker" />
                <SkillBadge name="AWS" />
                <SkillBadge name="GCP" />
                <SkillBadge name="Pandas" />
                <SkillBadge name="NumPy" />
                <SkillBadge name="Matplotlib" />
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="Flask" />
                <SkillBadge name="Django" />
                <SkillBadge name="CI/CD" />
              </div>
            </TabsContent>
            <TabsContent value="soft-skills" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillBadge name="Problem Solving" />
                <SkillBadge name="Communication" />
                <SkillBadge name="Teamwork" />
                <SkillBadge name="Project Management" />
                <SkillBadge name="Research" />
                <SkillBadge name="Critical Thinking" />
                <SkillBadge name="Time Management" />
                <SkillBadge name="Adaptability" />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <p className="text-muted-foreground">My professional journey</p>
          </div>

          <div className="space-y-6">
            <ExperienceCard
              title="Member of Technical Staff"
              company="Zoho Corporation, Chennai, India"
              period="Feb 2022 - June 2024"
              description="Developed and deployed machine learning models for predictive analytics. Optimized backend systems using Python and Docker, improving efficiency by 30%. Collaborated with data scientists to integrate AI models into production."
              skills={["Python", "Docker", "Machine Learning", "API Development", "CI/CD"]}
            />

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">Showcasing my AI and software development work</p>
          </div>

          {/* Collaborative Projects */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">Collaborative Projects</h3>
                <p className="text-muted-foreground">Projects developed as part of a team</p>
              </div>
              <Button asChild>
                <Link href="/projects/collaborative">
                  View All Collaborative Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="T20I Cricket Performance Dashboard"
                description="This dashboard analyzes T20 International cricket performance data from January 2019 to January 2025, focusing on players from the top 10 T20I teams."
                image="/placeholder.svg?height=200&width=300"
                tags={["D3", "React", "Data Visualization"]}
                githubUrl="https://github.com/suryaansh2002/CS5346-Project"
                demoUrl="https://cs-5346-project.vercel.app/"
              />

              <ProjectCard
                title="Poker AI: RichieRich"
                description="RichieRich is an advanced AI-powered No-Limit Texas Hold'em Poker game. It uses cutting-edge algorithms like Counterfactual Regret Minimization (CFR), Monte Carlo Markov Chain (MCMC) sampling, and Deep Q-Networks (DQN)"
                image="/placeholder.svg?height=200&width=300"
                tags={["Python", "Reinforcement Learning"]}
                githubUrl="https://github.com/Rishbah-76/RichieRich/tree/main"
                //demoUrl="https://demo-link.com"
              />
            </div>
          </div>

          {/* Individual Projects */}
          <div className="space-y-6 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold">Personal Projects</h3>
                <p className="text-muted-foreground">Projects developed independently</p>
              </div>
              <Button asChild>
                <Link href="/projects/personal">
                  View All Personal Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <p>rohethb@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline">
                  linkedin.com/in/roheth-bala-47574520a/
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/Roheth-Bala" target="_blank" className="hover:underline">
                  github.com/Roheth-Bala
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
