import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export default function ExperienceCard({ title, company, period, description, skills }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Building className="h-4 w-4" />
              <span>{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
