import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter, 
  MapPin, 
  Building, 
  Clock, 
  IndianRupee,
  Briefcase,
  GraduationCap,
  Star
} from "lucide-react";

const AdvancedSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stipendRange, setStipendRange] = useState([0]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const companyTypes = [
    { id: "mnc", label: "Multinational Companies", count: 145 },
    { id: "government", label: "Government Organizations", count: 87 },
    { id: "startup", label: "Startups", count: 234 },
    { id: "psu", label: "Public Sector Units", count: 56 },
    { id: "ngo", label: "NGOs & Non-Profits", count: 43 }
  ];

  const skillSuggestions = [
    "Product Management", "Data Analytics", "Market Research", "Agile", "Scrum",
    "UI/UX Design", "Business Analysis", "Digital Marketing", "Python", "SQL",
    "Project Management", "Strategic Planning", "Customer Research", "A/B Testing"
  ];

  const locations = [
    "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune", 
    "Kolkata", "Ahmedabad", "Gurgaon", "Noida", "Remote"
  ];

  const searchResults = [
    {
      id: 1,
      title: "Senior Product Management Intern",
      company: "Microsoft India",
      type: "MNC",
      location: "Bangalore",
      stipend: 45000,
      duration: "6 months",
      rating: 4.8,
      skills: ["Product Strategy", "Data Analytics", "Agile"],
      posted: "2 days ago",
      applicants: 234,
      match: 96
    },
    {
      id: 2,
      title: "Digital Governance Intern",
      company: "Department of Electronics & IT",
      type: "Government",
      location: "Delhi",
      stipend: 25000,
      duration: "4 months",
      rating: 4.6,
      skills: ["Policy Analysis", "Digital Strategy", "Research"],
      posted: "1 week ago",
      applicants: 89,
      match: 92
    },
    {
      id: 3,
      title: "Product Strategy Intern",
      company: "Razorpay",
      type: "Startup",
      location: "Bangalore",
      stipend: 35000,
      duration: "5 months",
      rating: 4.9,
      skills: ["Product Planning", "Market Analysis", "User Research"],
      posted: "3 days ago",
      applicants: 156,
      match: 94
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Advanced Internship Search</h1>
        <p className="text-muted-foreground">
          Find the perfect PM internship with advanced filtering and AI-powered matching
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Company Type */}
              <div>
                <h3 className="font-medium mb-3">Company Type</h3>
                <div className="space-y-2">
                  {companyTypes.map((type) => (
                    <div key={type.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id={type.id} />
                        <label htmlFor={type.id} className="text-sm">
                          {type.label}
                        </label>
                      </div>
                      <span className="text-xs text-muted-foreground">({type.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-medium mb-3">Location</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Stipend Range */}
              <div>
                <h3 className="font-medium mb-3">
                  Stipend Range: ₹{stipendRange[0] * 1000}/month
                </h3>
                <Slider
                  value={stipendRange}
                  onValueChange={setStipendRange}
                  max={50}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹0</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <h3 className="font-medium mb-3">Duration</h3>
                <div className="space-y-2">
                  {["1-3 months", "3-6 months", "6+ months"].map((duration) => (
                    <div key={duration} className="flex items-center space-x-2">
                      <Checkbox id={duration} />
                      <label htmlFor={duration} className="text-sm">
                        {duration}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <h3 className="font-medium mb-3">Experience Level</h3>
                <div className="space-y-2">
                  {["Fresher", "0-1 years", "1-2 years", "2+ years"].map((exp) => (
                    <div key={exp} className="flex items-center space-x-2">
                      <Checkbox id={exp} />
                      <label htmlFor={exp} className="text-sm">
                        {exp}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search Bar */}
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search internships, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>Search</Button>
              </div>

              {/* Skills Tags */}
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Suggested skills:</p>
                <div className="flex flex-wrap gap-2">
                  {skillSuggestions.slice(0, 8).map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => {
                        if (!selectedSkills.includes(skill)) {
                          setSelectedSkills([...selectedSkills, skill]);
                        }
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {searchResults.length} Internships Found
            </h2>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="stipend">Highest Stipend</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {searchResults.map((result) => (
              <Card key={result.id} className="shadow-card hover:shadow-hover transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {result.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {result.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {result.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-warning" />
                          {result.rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success">
                        {result.match}% Match
                      </div>
                      <Badge variant={result.type === 'Government' ? 'default' : 'secondary'}>
                        {result.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-success" />
                      <span className="text-sm">₹{result.stipend.toLocaleString()}/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{result.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{result.applicants} applicants</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Posted {result.posted}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {result.skills.map((skill, idx) => (
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
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;