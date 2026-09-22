import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain,
  Target,
  Clock,
  CheckCircle2,
  Play,
  BarChart3,
  TrendingUp,
  Award,
  BookOpen
} from "lucide-react";

const SkillAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);

  const skillCategories = [
    {
      id: "product_management",
      title: "Product Management Fundamentals",
      description: "Core PM concepts, strategy, and execution",
      questions: 15,
      duration: "20 minutes",
      difficulty: "Intermediate",
      completed: false,
      score: null
    },
    {
      id: "data_analytics",
      title: "Data Analytics & Metrics",
      description: "Analytics, KPIs, and data-driven decision making",
      questions: 12,
      duration: "15 minutes", 
      difficulty: "Advanced",
      completed: true,
      score: 85
    },
    {
      id: "market_research",
      title: "Market Research & Analysis",
      description: "Customer research, competitive analysis, market sizing",
      questions: 10,
      duration: "12 minutes",
      difficulty: "Beginner",
      completed: true,
      score: 92
    },
    {
      id: "agile_scrum",
      title: "Agile & Scrum Methodology",
      description: "Agile principles, Scrum framework, sprint management",
      questions: 8,
      duration: "10 minutes",
      difficulty: "Intermediate",
      completed: false,
      score: null
    }
  ];

  const sampleQuestions = [
    {
      id: 1,
      question: "What is the primary goal of a product roadmap?",
      options: [
        "To document all features that will ever be built",
        "To communicate product strategy and align stakeholders",
        "To provide exact delivery dates for all features",
        "To serve as a contract with engineering teams"
      ],
      correct: 1,
      explanation: "A product roadmap is primarily a strategic communication tool that aligns stakeholders around the product vision and priorities."
    },
    {
      id: 2,
      question: "Which metric is most important for measuring user engagement?",
      options: [
        "Total number of registered users",
        "Daily Active Users (DAU)",
        "Monthly recurring revenue",
        "Number of features used"
      ],
      correct: 1,
      explanation: "DAU is the most direct measure of user engagement as it shows how many users find value in your product daily."
    },
    {
      id: 3,
      question: "In the context of product prioritization, what does the acronym RICE stand for?",
      options: [
        "Reach, Impact, Confidence, Effort",
        "Revenue, Interest, Cost, Execution",
        "Risk, Implementation, Customer, Engineering",
        "Requirements, Integration, Complexity, Efficiency"
      ],
      correct: 0,
      explanation: "RICE is a prioritization framework: Reach × Impact × Confidence ÷ Effort = Priority Score."
    }
  ];

  const skillProfile = {
    overallScore: 78,
    assessmentsCompleted: 2,
    totalAssessments: 4,
    strengths: ["Market Research", "Customer Analysis", "Data Analytics"],
    improvements: ["Product Strategy", "Technical Skills", "Agile Methodology"],
    recommendations: [
      "Complete Product Management Fundamentals assessment",
      "Take advanced course in Product Strategy",
      "Practice with real product case studies"
    ]
  };

  const handleStartAssessment = () => {
    setAssessmentStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer("");
  };

  const handleNextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setAssessmentCompleted(true);
      setAssessmentStarted(false);
    }
  };

  if (assessmentStarted) {
    const question = sampleQuestions[currentQuestion];
    return (
      <div className="container mx-auto px-6 py-8 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Product Management Assessment</h1>
          <p className="text-muted-foreground">
            Question {currentQuestion + 1} of {sampleQuestions.length}
          </p>
          <Progress value={(currentQuestion / sampleQuestions.length) * 100} className="mt-4 max-w-md mx-auto" />
        </div>

        <Card className="max-w-4xl mx-auto shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{question.question}</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">2 minutes remaining</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {question.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
              <Button 
                disabled={!selectedAnswer}
                onClick={handleNextQuestion}
              >
                {currentQuestion === sampleQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Skill Assessment Center</h1>
        <p className="text-muted-foreground">
          Evaluate your PM skills and get personalized learning recommendations
        </p>
      </div>

      <Tabs defaultValue="assessments" className="space-y-6">
        <TabsList>
          <TabsTrigger value="assessments">Available Assessments</TabsTrigger>
          <TabsTrigger value="profile">Skill Profile</TabsTrigger>
          <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="assessments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.id} className="shadow-card hover:shadow-hover transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {category.description}
                      </CardDescription>
                    </div>
                    {category.completed && (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>📝 {category.questions} questions</span>
                      <span>⏱️ {category.duration}</span>
                    </div>
                    <Badge variant="outline">
                      {category.difficulty}
                    </Badge>
                  </div>

                  {category.completed && category.score && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Your Score</span>
                        <span className="font-bold text-success">{category.score}%</span>
                      </div>
                      <Progress value={category.score} className="h-2" />
                    </div>
                  )}

                  <Button 
                    className="w-full"
                    variant={category.completed ? "outline" : "default"}
                    onClick={handleStartAssessment}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {category.completed ? "Retake Assessment" : "Start Assessment"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overall Score */}
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <CardTitle>Overall Skill Score</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  {skillProfile.overallScore}%
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={skillProfile.overallScore} className="mb-4" />
                <div className="text-center">
                  <Badge variant="secondary">
                    Intermediate Level
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Based on {skillProfile.assessmentsCompleted} completed assessments
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Strengths */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-success flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Top Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {skillProfile.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{strength}</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      Strong
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Areas for Improvement */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-warning flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {skillProfile.improvements.map((area, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{area}</span>
                    <Badge variant="outline" className="text-warning border-warning">
                      Improve
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillProfile.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{rec}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Take Action
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Assessment Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Completed Assessments</span>
                    <span className="font-bold">{skillProfile.assessmentsCompleted}/{skillProfile.totalAssessments}</span>
                  </div>
                  <Progress value={(skillProfile.assessmentsCompleted / skillProfile.totalAssessments) * 100} />
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Certificates Earned</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">8.5</div>
                      <div className="text-sm text-muted-foreground">Avg Score</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <Award className="h-6 w-6 text-success" />
                    <div>
                      <div className="font-medium text-success">Market Research Expert</div>
                      <div className="text-sm text-muted-foreground">Scored 90%+ in Market Research</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-medium text-primary">Data Analytics Proficient</div>
                      <div className="text-sm text-muted-foreground">Completed Data Analytics assessment</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg opacity-50">
                    <Target className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-muted-foreground">PM Fundamentals Master</div>
                      <div className="text-sm text-muted-foreground">Complete PM assessment to unlock</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillAssessment;