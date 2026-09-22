import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter,
  Play,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Video,
  FileText,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", count: 45 },
    { id: "product_management", name: "Product Management", count: 12 },
    { id: "data_analytics", name: "Data Analytics", count: 8 },
    { id: "market_research", name: "Market Research", count: 6 },
    { id: "agile_scrum", name: "Agile & Scrum", count: 7 },
    { id: "business_analysis", name: "Business Analysis", count: 5 },
    { id: "technical_skills", name: "Technical Skills", count: 7 }
  ];

  const courses = [
    {
      id: 1,
      title: "Product Management Fundamentals",
      provider: "NPTEL",
      instructor: "Prof. Rajesh Kumar",
      description: "Comprehensive introduction to product management concepts, strategy, and execution",
      category: "product_management",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 15420,
      price: "Free",
      certificate: true,
      skills: ["Product Strategy", "Market Analysis", "Roadmapping"],
      modules: 12,
      videos: 45,
      assignments: 8,
      enrolled: false,
      progress: 0,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Advanced Data Analytics for PMs",
      provider: "Swayam",
      instructor: "Dr. Priya Sharma",
      description: "Learn to use data analytics for product decisions and performance measurement",
      category: "data_analytics",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 8750,
      price: "Free",
      certificate: true,
      skills: ["SQL", "Python", "Data Visualization", "KPI Analysis"],
      modules: 15,
      videos: 62,
      assignments: 12,
      enrolled: true,
      progress: 65,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Agile Project Management",
      provider: "Coursera (Government Sponsored)",
      instructor: "Sarah Johnson",
      description: "Master Agile methodologies and Scrum framework for product development",
      category: "agile_scrum",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 23100,
      price: "Free",
      certificate: true,
      skills: ["Scrum", "Kanban", "Sprint Planning", "Team Management"],
      modules: 10,
      videos: 38,
      assignments: 6,
      enrolled: true,
      progress: 100,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Market Research & Customer Insights",
      provider: "IIM Bangalore (NPTEL)",
      instructor: "Prof. Amit Verma",
      description: "Learn to conduct market research and generate actionable customer insights",
      category: "market_research",
      duration: "7 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 12850,
      price: "Free",
      certificate: true,
      skills: ["Survey Design", "Customer Interviews", "Market Sizing"],
      modules: 14,
      videos: 41,
      assignments: 9,
      enrolled: false,
      progress: 0,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Business Analysis Essentials",
      provider: "Swayam",
      instructor: "Dr. Kavita Patel",
      description: "Essential business analysis techniques for product managers",
      category: "business_analysis",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 9400,
      price: "Free",
      certificate: true,
      skills: ["Requirements Analysis", "Process Mapping", "Stakeholder Management"],
      modules: 8,
      videos: 32,
      assignments: 5,
      enrolled: false,
      progress: 0,
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Technical Skills for Non-Tech PMs",
      provider: "NPTEL",
      instructor: "Prof. Suresh Reddy",
      description: "Gain technical understanding essential for modern product managers",
      category: "technical_skills",
      duration: "9 weeks",
      level: "Intermediate",
      rating: 4.4,
      students: 7650,
      price: "Free",
      certificate: true,
      skills: ["API Basics", "Database Fundamentals", "System Architecture"],
      modules: 16,
      videos: 54,
      assignments: 10,
      enrolled: false,
      progress: 0,
      image: "/api/placeholder/300/200"
    }
  ];

  const enrolledCourses = courses.filter(course => course.enrolled);
  const completedCourses = courses.filter(course => course.enrolled && course.progress === 100);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Course Catalog</h1>
        <p className="text-muted-foreground">
          Free government-approved courses to enhance your PM skills
        </p>
      </div>

      <Tabs defaultValue="catalog" className="space-y-6">
        <TabsList>
          <TabsTrigger value="catalog">Course Catalog</TabsTrigger>
          <TabsTrigger value="enrolled">My Courses ({enrolledCourses.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="catalog" className="space-y-6">
          {/* Search and Filters */}
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="shadow-card hover:shadow-hover transition-all">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-t-lg flex items-center justify-center">
                    <Play className="h-16 w-16 text-primary" />
                  </div>
                  {course.enrolled && (
                    <Badge className="absolute top-2 right-2 bg-success">
                      Enrolled
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.provider}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    by {course.instructor}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-warning" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span>📹 {course.videos} videos</span>
                      <span>📝 {course.assignments} assignments</span>
                    </div>
                    {course.certificate && (
                      <Award className="h-4 w-4 text-primary" />
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Skills you'll learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {course.enrolled && course.progress > 0 ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <Button className="w-full" size="sm">
                        Continue Learning
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      className="w-full" 
                      size="sm"
                      variant={course.enrolled ? "outline" : "default"}
                    >
                      {course.enrolled ? "Start Learning" : "Enroll Now - FREE"}
                    </Button>
                  )}

                  <div className="text-center">
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <Award className="h-3 w-3 mr-1" />
                      Certificate Available
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enrolled" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.provider}</p>
                    </div>
                    {course.progress === 100 && (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">
                      {course.progress === 100 ? "Review Course" : "Continue"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="bg-success/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-success" />
                  </div>
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.provider}</p>
                  <Badge variant="secondary" className="bg-success/10 text-success mb-4">
                    Certificate Earned
                  </Badge>
                  <div className="space-y-2">
                    <Button size="sm" variant="outline" className="w-full">
                      Download Certificate
                    </Button>
                    <Button size="sm" variant="ghost" className="w-full">
                      View Course Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseCatalog;