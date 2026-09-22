import { Button } from "@/components/ui/button";
import { Bell, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import governmentLogo from "@/assets/government-logo.png";

const Header = () => {
  const location = useLocation();
  
  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Search", href: "/search" },
    { name: "Applications", href: "/applications" },
    { name: "Skills", href: "/skills" },
    { name: "Courses", href: "/courses" },
    { name: "Resume Analysis", href: "/resume-analysis" },
  ];

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Government Branding */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <img 
              src={governmentLogo} 
              alt="Government of India Logo" 
              className="h-12 w-12"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">
                Ministry of Corporate Affairs
              </h1>
              <p className="text-sm text-muted-foreground">
                AI-Based Internship Recommendation System
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;