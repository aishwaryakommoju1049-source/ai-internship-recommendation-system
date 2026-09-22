import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Send, 
  Eye,
  Calendar,
  FileText,
  Building,
  MapPin,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";

const ApplicationTracker = () => {
  const [selectedApplication, setSelectedApplication] = useState<number | null>(null);

  const applications = [
    {
      id: 1,
      jobTitle: "Product Management Intern",
      company: "Microsoft India",
      location: "Bangalore",
      appliedDate: "2024-09-15",
      status: "interview_scheduled",
      progress: 75,
      nextStep: "Technical Interview",
      nextDate: "2024-09-25",
      stipend: "₹45,000/month",
      timeline: [
        { step: "Application Submitted", date: "2024-09-15", completed: true },
        { step: "Resume Reviewed", date: "2024-09-17", completed: true },
        { step: "HR Screening", date: "2024-09-20", completed: true },
        { step: "Technical Interview", date: "2024-09-25", completed: false, upcoming: true },
        { step: "Final Decision", date: "TBD", completed: false }
      ]
    },
    {
      id: 2,
      jobTitle: "Digital Governance Intern",
      company: "Department of IT",
      location: "Delhi", 
      appliedDate: "2024-09-10",
      status: "under_review",
      progress: 50,
      nextStep: "HR Screening",
      nextDate: "2024-09-22",
      stipend: "₹25,000/month",
      timeline: [
        { step: "Application Submitted", date: "2024-09-10", completed: true },
        { step: "Resume Reviewed", date: "2024-09-12", completed: true },
        { step: "HR Screening", date: "2024-09-22", completed: false, upcoming: true },
        { step: "Technical Interview", date: "TBD", completed: false },
        { step: "Final Decision", date: "TBD", completed: false }
      ]
    },
    {
      id: 3,
      jobTitle: "Product Strategy Intern",
      company: "Razorpay",
      location: "Bangalore",
      appliedDate: "2024-09-18",
      status: "applied",
      progress: 25,
      nextStep: "Resume Review",
      nextDate: "2024-09-24",
      stipend: "₹35,000/month",
      timeline: [
        { step: "Application Submitted", date: "2024-09-18", completed: true },
        { step: "Resume Review", date: "2024-09-24", completed: false, upcoming: true },
        { step: "HR Screening", date: "TBD", completed: false },
        { step: "Technical Interview", date: "TBD", completed: false },
        { step: "Final Decision", date: "TBD", completed: false }
      ]
    },
    {
      id: 4,
      jobTitle: "Business Analyst Intern",
      company: "Tata Consultancy Services",
      location: "Mumbai",
      appliedDate: "2024-09-05",
      status: "rejected",
      progress: 100,
      nextStep: "Closed",
      nextDate: null,
      stipend: "₹30,000/month",
      timeline: [
        { step: "Application Submitted", date: "2024-09-05", completed: true },
        { step: "Resume Reviewed", date: "2024-09-07", completed: true },
        { step: "HR Screening", date: "2024-09-12", completed: true },
        { step: "Application Rejected", date: "2024-09-14", completed: true, rejected: true }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied': return <Send className="h-4 w-4" />;
      case 'under_review': return <Eye className="h-4 w-4" />;
      case 'interview_scheduled': return <Calendar className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'secondary';
      case 'under_review': return 'default';
      case 'interview_scheduled': return 'default';
      case 'rejected': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'applied': return 'Applied';
      case 'under_review': return 'Under Review';
      case 'interview_scheduled': return 'Interview Scheduled';
      case 'rejected': return 'Rejected';
      default: return 'Unknown';
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => ['applied', 'under_review', 'interview_scheduled'].includes(app.status)).length,
    interviews: applications.filter(app => app.status === 'interview_scheduled').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Application Tracker</h1>
        <p className="text-muted-foreground">
          Monitor your internship applications and track their progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold text-primary">{stats.total}</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-warning">{stats.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Interviews</p>
                <p className="text-2xl font-bold text-success">{stats.interviews}</p>
              </div>
              <Calendar className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rejected</p>
                <p className="text-2xl font-bold text-destructive">{stats.rejected}</p>
              </div>
              <XCircle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Applications ({stats.total})</TabsTrigger>
          <TabsTrigger value="pending">In Progress ({stats.pending})</TabsTrigger>
          <TabsTrigger value="interviews">Interviews ({stats.interviews})</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="shadow-card hover:shadow-hover transition-all cursor-pointer"
                  onClick={() => setSelectedApplication(selectedApplication === app.id ? null : app.id)}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {app.jobTitle}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {app.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {app.location}
                      </div>
                      <div>Applied: {new Date(app.appliedDate).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={getStatusColor(app.status) as any} className="mb-2">
                      {getStatusIcon(app.status)}
                      <span className="ml-1">{getStatusText(app.status)}</span>
                    </Badge>
                    <div className="text-sm font-medium text-success">
                      {app.stipend}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{app.progress}%</span>
                  </div>
                  <Progress value={app.progress} className="h-2" />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Next Step:</p>
                    <p className="font-medium">{app.nextStep}</p>
                  </div>
                  {app.nextDate && (
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Scheduled:</p>
                      <p className="font-medium">{new Date(app.nextDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>

                {selectedApplication === app.id && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-semibold mb-4">Application Timeline</h4>
                    <div className="space-y-4">
                      {app.timeline.map((step, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed 
                              ? step.rejected 
                                ? 'bg-destructive text-destructive-foreground'
                                : 'bg-success text-success-foreground'
                              : step.upcoming 
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground'
                          }`}>
                            {step.completed ? (
                              step.rejected ? <XCircle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <span className="text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${step.upcoming ? 'text-primary' : ''}`}>
                              {step.step}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {step.date !== 'TBD' ? new Date(step.date).toLocaleDateString() : 'To be determined'}
                            </p>
                          </div>
                          {step.upcoming && (
                            <Badge variant="outline" className="text-primary border-primary">
                              Upcoming
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Schedule Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Add Note
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending">
          <div className="space-y-4">
            {applications.filter(app => ['applied', 'under_review', 'interview_scheduled'].includes(app.status)).map((app) => (
              <Card key={app.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-foreground">{app.jobTitle}</h3>
                      <p className="text-muted-foreground">{app.company} • {app.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={getStatusColor(app.status) as any}>
                        {getStatusText(app.status)}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        Next: {app.nextStep}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="interviews">
          <div className="space-y-4">
            {applications.filter(app => app.status === 'interview_scheduled').map((app) => (
              <Card key={app.id} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-foreground">{app.jobTitle}</h3>
                      <p className="text-muted-foreground">{app.company} • {app.location}</p>
                      <p className="text-sm text-primary mt-2">
                        Interview Date: {app.nextDate ? new Date(app.nextDate).toLocaleDateString() : 'TBD'}
                      </p>
                    </div>
                    <div>
                      <Button size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Prepare
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Your interview schedule and application deadlines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.filter(app => app.nextDate).map((app) => (
                  <div key={app.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{app.nextStep} - {app.jobTitle}</h4>
                      <p className="text-muted-foreground">{app.company}</p>
                      <p className="text-sm text-primary">
                        {app.nextDate ? new Date(app.nextDate).toLocaleDateString() : 'TBD'}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApplicationTracker;