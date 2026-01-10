import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Login",
  description: `Login to your ${siteConfig.shortName} patient portal to manage appointments, view medical records, and more.`,
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <div className="text-left">
                <h1 className="font-display text-xl font-bold text-[#003366]">
                  MINA Hospitals
                </h1>
                <p className="text-xs text-muted-foreground">Patient Portal</p>
              </div>
            </Link>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display text-[#003366]">
                Welcome Back
              </CardTitle>
              <CardDescription>
                Login to access your patient portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-[#003366] hover:text-[#C78A3B] transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Login
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>

              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400">
                  OR
                </span>
              </div>

              <Button variant="outline" className="w-full" size="lg">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <p className="text-center text-sm text-gray-600 mt-6">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-[#003366] font-medium hover:text-[#C78A3B] transition-colors"
                >
                  Register now
                </Link>
              </p>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-gray-400 mt-6">
            By logging in, you agree to our{" "}
            <Link href="/terms-of-service" className="underline hover:text-gray-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline hover:text-gray-600">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 bg-[#003366] relative items-center justify-center p-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
            alt="Healthcare"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-white text-center max-w-md">
          <h2 className="font-display text-3xl font-bold mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-gray-300 mb-8">
            Access your medical records, book appointments, and manage your healthcare
            journey all in one place.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C78A3B] rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>Book appointments online</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C78A3B] rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>View medical records & reports</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C78A3B] rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>Message your doctors securely</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C78A3B] rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>Manage bills & payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
