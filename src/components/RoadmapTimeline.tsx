
import React from 'react';
import { 
  Code, 
  BookOpen, 
  Layers, 
  Palette, 
  Star, 
  Code2, 
  FileText, 
  Grid2x2, 
  CheckSquare, 
  PlayCircle, 
  ListVideo, 
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface RoadmapItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  status: 'locked' | 'in-progress' | 'completed';
  progress: number;
  lessons: number;
  modules: { title: string; type: 'lesson' | 'quiz' | 'video'; completed: boolean }[];
}

const statusColors = {
  'locked': 'bg-gray-300',
  'in-progress': 'bg-blue-500',
  'completed': 'bg-green-500',
};

const ModuleIcon = ({ type }: { type: 'lesson' | 'quiz' | 'video' }) => {
  switch (type) {
    case 'lesson':
      return <FileText className="h-4 w-4" />;
    case 'quiz':
      return <CheckSquare className="h-4 w-4" />;
    case 'video':
      return <ListVideo className="h-4 w-4" />;
  }
};

const RoadmapItem: React.FC<RoadmapItemProps> = ({ 
  title, 
  description, 
  icon, 
  position, 
  status, 
  progress,
  lessons,
  modules
}) => {
  const { toast } = useToast();

  const handleStartLesson = () => {
    if (status === 'locked') {
      toast({
        title: "Module Locked",
        description: "Complete the previous modules to unlock this one.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Module Selected",
      description: `Starting ${title} module.`,
    });
  };
  
  return (
    <div className="roadmap-step mb-16">
      <div className={`roadmap-marker ${statusColors[status]}`}></div>
      
      <div className={`roadmap-connector ${position === 'left' ? 'roadmap-connector-right' : 'roadmap-connector-left'}`}></div>
      
      <div className={`md:w-[calc(50%-2rem)] ${position === 'left' ? 'md:ml-auto' : ''}`}>
        <div className="animate-fade-in">
          <Card className="roadmap-card overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant={status === 'locked' ? "outline" : "secondary"}>
                    {status === 'locked' ? 'Locked' : status === 'in-progress' ? 'In Progress' : 'Completed'}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{lessons} lessons</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">{description}</p>
            
            <Progress value={progress} className="mb-6 h-2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {modules.slice(0, 4).map((module, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-2 p-3 rounded-lg text-sm border ${
                    module.completed ? 'border-green-200 bg-green-50 text-green-700' : 'border-gray-200'
                  }`}
                >
                  <ModuleIcon type={module.type} />
                  <span className="truncate">{module.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <Button 
                className="w-full" 
                variant={status === 'locked' ? "outline" : "default"}
                onClick={handleStartLesson}
              >
                {status === 'locked' ? 'Locked' : status === 'completed' ? 'Review' : 'Continue'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const RoadmapTimeline: React.FC = () => {
  const roadmapItems: RoadmapItemProps[] = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Learn the building blocks of web development with HTML structure and CSS styling basics.",
      icon: <Code className="h-5 w-5" />,
      position: "left",
      status: "completed",
      progress: 100,
      lessons: 8,
      modules: [
        { title: "HTML Document Structure", type: "lesson", completed: true },
        { title: "Semantic HTML Elements", type: "lesson", completed: true },
        { title: "CSS Selectors & Properties", type: "lesson", completed: true },
        { title: "Box Model Quiz", type: "quiz", completed: true },
        { title: "Responsive Design Basics", type: "video", completed: true }
      ]
    },
    {
      title: "JavaScript Essentials",
      description: "Master core JavaScript concepts including DOM manipulation, events, and asynchronous programming.",
      icon: <Code2 className="h-5 w-5" />,
      position: "right",
      status: "in-progress",
      progress: 60,
      lessons: 12,
      modules: [
        { title: "JS Syntax & Variables", type: "lesson", completed: true },
        { title: "Functions & Objects", type: "lesson", completed: true },
        { title: "DOM Manipulation", type: "lesson", completed: true },
        { title: "Event Handling Quiz", type: "quiz", completed: false },
        { title: "Async JavaScript", type: "video", completed: false }
      ]
    },
    {
      title: "Modern JavaScript Frameworks",
      description: "Explore React, Node.js, and Next.js for building dynamic web applications.",
      icon: <Layers className="h-5 w-5" />,
      position: "left",
      status: "locked",
      progress: 0,
      lessons: 15,
      modules: [
        { title: "React Components", type: "lesson", completed: false },
        { title: "State Management", type: "lesson", completed: false },
        { title: "Node.js Basics", type: "lesson", completed: false },
        { title: "API Integration Quiz", type: "quiz", completed: false },
        { title: "Next.js SSR", type: "video", completed: false }
      ]
    },
    {
      title: "Styling & CSS Frameworks",
      description: "Master advanced styling with Tailwind CSS, Sass, and modern CSS techniques.",
      icon: <Palette className="h-5 w-5" />,
      position: "right",
      status: "locked",
      progress: 0,
      lessons: 10,
      modules: [
        { title: "Tailwind CSS Basics", type: "lesson", completed: false },
        { title: "Responsive Layouts", type: "lesson", completed: false },
        { title: "Sass Variables & Mixins", type: "lesson", completed: false },
        { title: "CSS Animation Quiz", type: "quiz", completed: false },
        { title: "Dark Mode Implementation", type: "video", completed: false }
      ]
    },
    {
      title: "UI/UX Design Fundamentals",
      description: "Learn essential design principles and techniques for creating user-friendly interfaces.",
      icon: <Grid2x2 className="h-5 w-5" />,
      position: "left",
      status: "locked",
      progress: 0,
      lessons: 8,
      modules: [
        { title: "Design Principles", type: "lesson", completed: false },
        { title: "Color Theory", type: "lesson", completed: false },
        { title: "Typography Basics", type: "lesson", completed: false },
        { title: "UI Components Quiz", type: "quiz", completed: false },
        { title: "Usability Testing", type: "video", completed: false }
      ]
    },
    {
      title: "No-Code Development",
      description: "Build functional websites and apps without writing code using modern no-code platforms.",
      icon: <Star className="h-5 w-5" />,
      position: "right",
      status: "locked",
      progress: 0,
      lessons: 10,
      modules: [
        { title: "Webflow Basics", type: "lesson", completed: false },
        { title: "Framer Components", type: "lesson", completed: false },
        { title: "WordPress Customization", type: "lesson", completed: false },
        { title: "Site Builder Quiz", type: "quiz", completed: false },
        { title: "AI Design Tools", type: "video", completed: false }
      ]
    },
  ];

  return (
    <div className="py-16">
      <div className="container max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Learning Path</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Follow this structured roadmap to master frontend development from coding to no-code tools</p>
        </div>
        
        <div className="relative">
          {roadmapItems.map((item, idx) => (
            <RoadmapItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
