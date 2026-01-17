import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Nostra Group";
  }, []);

  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center bg-nostra-bone">
      <div className="w-full max-w-md mx-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-nostra-ivory flex items-center justify-center">
            <AlertCircle className="h-8 w-8 text-nostra-navy-military" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-nostra-navy-deep mb-4" data-testid="text-404-title">
          Page Not Found
        </h1>
        <p className="text-nostra-slate mb-8" data-testid="text-404-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button
            className="bg-nostra-navy-military text-nostra-light font-semibold"
            data-testid="button-go-home"
          >
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
