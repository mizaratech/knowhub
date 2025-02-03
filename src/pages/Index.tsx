import { Button } from "@/components/ui/button";
import CourseGrid from "@/components/CourseGrid";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Learn at Your Own Pace
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Access high-quality courses and advance your skills with our interactive learning platform.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              <GraduationCap className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Your Courses</h2>
          <p className="text-muted-foreground">
            Continue where you left off or start a new course.
          </p>
        </div>
        <CourseGrid />
      </main>
    </div>
  );
};

export default Index;