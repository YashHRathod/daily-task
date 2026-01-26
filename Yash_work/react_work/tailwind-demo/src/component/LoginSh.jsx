import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme/ThemeContext";

export default function LoginSh() {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password || password.length < 6) {
      setIsError(true);
      return;
    }

    setIsError(false);
    navigate("/");
  };

  return (
    <>
        <Button className="ml-0 fixed"type="primary" onClick={toggleTheme}>
                 
              </Button>
    <div className="flex min-h-screen items-center justify-center ">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                className={cn(
                  isError &&
                    "border-red-500 focus-visible:ring-red-500 dark:border-red-400 dark:focus-visible:ring-red-400"
                )}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                className={cn(
                  isError &&
                    "border-red-500 focus-visible:ring-red-500 dark:border-red-400 dark:focus-visible:ring-red-400"
                )}
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              className={cn(
                "w-full",
                isError &&
                  "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
              )}
            >
              Login
            </Button>

            {/* Error message */}
            {isError && (
              <p className="text-sm text-red-600 dark:text-red-400 text-center">
                Please enter valid email and password (min 6 characters).
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
