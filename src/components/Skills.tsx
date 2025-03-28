
import { Progress } from "@/components/ui/progress";

interface SkillProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "SQL/NoSQL", percentage: 75 },
  ];

  const softSkills = [
    { name: "Problem Solving", percentage: 95 },
    { name: "Communication", percentage: 85 },
    { name: "Teamwork", percentage: 90 },
    { name: "Adaptability", percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Technologies I've Worked With</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", 
                "Redux", "Next.js", "GraphQL", "REST API", "Git", "Docker", 
                "AWS", "Firebase", "Tailwind CSS", "Jest"].map((tech, index) => (
                <span key={index} className="bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
