import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  BookOpen,
  Award
} from "lucide-react";

const ResumeAnalyzer = () => {
  const analysisData = {
    overallScore: 78,
    sections: [
      { name: "Contact Information", score: 100, status: "complete" },
      { name: "Professional Summary", score: 85, status: "good" },
      { name: "Work Experience", score: 70, status: "needs_improvement" },
      { name: "Education", score: 95, status: "excellent" },
      { name: "Skills", score: 60, status: "needs_improvement" },
      { name: "Projects", score: 80, status: "good" }
    ],
    skillGaps: [
      "Product Analytics",
      "Market Research",
      "Agile Methodology",
      "User Experience Design"
    ],
    strengths: [
      "Strong educational background",
      "Good technical skills",
      "Leadership experience",
      "Relevant project work"
    ],
    recommendations: [
      "Add more quantified achievements in work experience",
      "Include relevant PM certifications",
      "Expand skills section with PM-specific tools",
      "Add metrics to project descriptions"
    ]
  };

  const recommendedCourses = [
    {
      title: "Product Management Fundamentals",
      provider: "NPTEL",
      duration: "8 weeks",
      rating: 4.8,
      isFree: true,
      skills: ["Product Strategy", "Market Analysis"]
    },
    {
      title: "Agile Project Management",
      provider: "Coursera",
      duration: "6 weeks", 
      rating: 4.7,
      isFree: true,
      skills: ["Scrum", "Kanban", "Sprint Planning"]
    },
    {
      title: "Data Analytics for Product Managers",
      provider: "Swayam", 
      duration: "10 weeks",
      rating: 4.6,
      isFree: true,
      skills: ["Product Analytics", "KPI Analysis"]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Resume Analyzer</h1>
        <p className="text-muted-foreground">
          Get AI-powered insights and recommendations to optimize your resume for PM internships
        </p>
      </div>

      {/* Upload Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Your Resume
          </CardTitle>
          
          <CardDescription>
            Support for PDF, DOC, and DOCX formats. Maximum size: 5MB
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg mb-2">Drop your resume here or click to browse</p>
            <p className="text-sm text-muted-foreground mb-4">
              We'll analyze your resume and provide personalized recommendations
            </p>
            <Button>Choose File</Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Overall Score */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-lg">Overall Resume Score</CardTitle>
            <div className="text-4xl font-bold text-primary mt-4">
              {analysisData.overallScore}%
            </div>
            <Progress value={analysisData.overallScore} className="mt-4" />
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Good Resume
              </Badge>
              <p className="text-sm text-muted-foreground">
                Your resume is well-structured but has room for improvement in key areas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section Breakdown */}
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle>Section Analysis</CardTitle>
            <CardDescription>
              Detailed breakdown of each resume section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysisData.sections.map((section, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  {section.status === 'complete' && <CheckCircle className="h-5 w-5 text-success" />}
                  {section.status === 'good' && <CheckCircle className="h-5 w-5 text-primary" />}
                  {section.status === 'needs_improvement' && <AlertCircle className="h-5 w-5 text-warning" />}
                  <span className="font-medium">{section.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={section.score} className="w-20" />
                  <span className="text-sm font-medium w-12">{section.score}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Strengths */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-success flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {analysisData.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Skill Gaps */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-warning flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Skill Gaps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Skills commonly required for PM roles that are missing from your resume:
              </p>
              <div className="flex flex-wrap gap-2">
                {analysisData.skillGaps.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-warning border-warning">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            AI Recommendations
          </CardTitle>
          <CardDescription>
            Actionable steps to improve your resume for PM internships
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysisData.recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                <div className="bg-primary/10 p-2 rounded-full">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm">{rec}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommended Courses */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Recommended Free Courses
          </CardTitle>
          <CardDescription>
            Enhance your skills with these government-approved courses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-muted-foreground">{course.provider}</p>
                </div>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  FREE
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm">⭐ {course.rating}</span>
                <span className="text-sm text-muted-foreground">📅 {course.duration}</span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Skills you'll learn:</p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Button size="sm" className="bg-primary hover:bg-primary-dark">
                Enroll Now
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeAnalyzer;