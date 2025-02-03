import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  lessons: number;
  image: string;
}

const CourseCard = ({
  title,
  description,
  progress,
  duration,
  lessons,
  image,
}: CourseCardProps) => {
  return (
    <Card className="course-card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-4">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <PlayCircle className="w-4 h-4" />
              <span>{lessons} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          {progress}% completed
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;