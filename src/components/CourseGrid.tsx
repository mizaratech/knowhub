import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    progress: 75,
    duration: "6h 30m",
    lessons: 12,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "Master React.js fundamentals and build interactive web applications.",
    progress: 45,
    duration: "8h 15m",
    lessons: 15,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Learn essential design principles and create beautiful user interfaces.",
    progress: 30,
    duration: "5h 45m",
    lessons: 10,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts and patterns.",
    progress: 15,
    duration: "7h 20m",
    lessons: 14,
    image: "/placeholder.svg",
  },
];

const CourseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseGrid;