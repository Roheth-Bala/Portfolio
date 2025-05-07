interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="p-4 border rounded-lg flex items-center justify-center bg-card hover:bg-accent transition-colors duration-200">
      <span className="font-medium">{name}</span>
    </div>
  )
}
