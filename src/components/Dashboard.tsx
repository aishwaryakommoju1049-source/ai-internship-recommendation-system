import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Award,
  Building,
  BookOpen,
  IndianRupee,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Profile Completion",
      value: "85%",
      progress: 85,
      icon: FileText,
      description: "Complete your profile to get better matches"
    },
    {
      title: "Skill Match Score",
      value: "92%",
      progress: 92,
      icon: TrendingUp,
      description: "Your skills align well with PM roles"
    },
    {
      title: "Applications Sent",
      value: "12",
      icon: Users,
      description: "Active applications this month"
    },
    {
      title: "Certificates Earned",
      value: "8",
      icon: Award,
      description: "From recommended courses"
    }
  ];

  const recommendedInternships = [
    {
      id: 1,
      title: "Product Management Intern",
      company: "Tech Mahindra",
      type: "MNC",
      stipend: "₹25,000/month",
      duration: "6 months",
      location: "Bangalore",
      skills: ["Product Strategy", "Market Research", "Agile"],
      matchScore: 95,
      isPaid: true
    },
    {
      id: 2,
      title: "Digital Product Intern",
      company: "Government of Karnataka",
      type: "Government",
      stipend: "₹18,000/month",
      duration: "3 months",
      location: "Bangalore",
      skills: ["Digital Governance", "Policy Analysis", "Data Analytics"],
      matchScore: 88,
      isPaid: true
    },
    {
      id: 3,
      title: "Product Development Intern",
      company: "Zerodha",
      type: "Startup",
      stipend: "₹30,000/month",
      duration: "4 months",
      location: "Bangalore",
      skills: ["Product Design", "User Research", "Analytics"],
      matchScore: 92,
      isPaid: true
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back, Rahul Sharma</h2>
        <p className="text-lg opacity-90">
          Ready to find your next PM internship? We've found 23 new matches for you.
        </p>
        <Button variant="secondary" className="mt-4">
          View All Recommendations
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <IconComponent className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                {stat.progress && (
                  <Progress value={stat.progress} className="mb-2" />
                )}
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recommended Internships */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            AI-Recommended Internships
          </CardTitle>
          <CardDescription>
            Based on your skills, preferences, and career goals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendedInternships.map((internship) => (
            <div key={internship.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{internship.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{internship.company}</span>
                    <Badge 
                      variant={internship.type === 'Government' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {internship.type}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-success">
                    {internship.matchScore}% Match
                  </div>
                  <Progress value={internship.matchScore} className="w-20 mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-success" />
                  <span className="text-sm">{internship.stipend}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{internship.duration}</span>
                </div>
                <div className="text-sm text-muted-foreground">📍 {internship.location}</div>
                <Badge variant="outline" className="w-fit">
                  {internship.isPaid ? 'Paid' : 'Unpaid'}
                </Badge>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm" className="bg-primary hover:bg-primary-dark">
                  Apply Now
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="ghost" size="sm">
                  Save for Later
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-hover transition-all cursor-pointer">
          <CardHeader className="text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Analyze Resume</CardTitle>
            <CardDescription>
              Get AI-powered feedback on your resume
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/resume-analysis">
              <Button className="w-full">Upload Resume</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all cursor-pointer">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Skill Development</CardTitle>
            <CardDescription>
              Take recommended courses to improve your profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">View Courses</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all cursor-pointer">
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Student Network</CardTitle>
            <CardDescription>
              Connect with other students and professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Explore Network</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;