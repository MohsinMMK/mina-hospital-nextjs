import { Metadata } from "next"
import Link from "next/link"
import {
  Calendar,
  FileText,
  MessageSquare,
  CreditCard,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your appointments, medical records, and healthcare journey.",
}

// Sample data - In production, this would come from Supabase
const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Rajesh Kumar",
    specialty: "Cardiology",
    date: "Jan 15, 2026",
    time: "10:00 AM",
    type: "Follow-up",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 2,
    doctor: "Dr. Meera Patel",
    specialty: "Pediatrics",
    date: "Jan 20, 2026",
    time: "2:30 PM",
    type: "Consultation",
    status: "pending",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=100&h=100&q=80",
  },
]

const recentRecords = [
  {
    id: 1,
    title: "Blood Test Report",
    date: "Jan 5, 2026",
    type: "Lab Report",
  },
  {
    id: 2,
    title: "ECG Report",
    date: "Dec 28, 2025",
    type: "Diagnostic",
  },
  {
    id: 3,
    title: "Prescription",
    date: "Dec 28, 2025",
    type: "Prescription",
  },
]

const quickActions = [
  { name: "Book Appointment", href: "/appointments/new", icon: Calendar },
  { name: "View Records", href: "/medical-records", icon: FileText },
  { name: "Send Message", href: "/messages", icon: MessageSquare },
  { name: "Pay Bills", href: "/billing", icon: CreditCard },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#003366]">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Here&apos;s an overview of your healthcare activity
          </p>
        </div>
        <Button asChild>
          <Link href="/appointments/new">
            <Calendar className="h-4 w-4 mr-2" />
            Book Appointment
          </Link>
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Link key={action.name} href={action.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-xl flex items-center justify-center mb-3">
                  <action.icon className="h-6 w-6 text-[#003366]" />
                </div>
                <span className="font-medium text-sm">{action.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled visits</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/appointments">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center gap-4 p-4 rounded-lg border bg-gray-50/50"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={appointment.image} />
                      <AvatarFallback>{appointment.doctor.slice(4, 6)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium truncate">{appointment.doctor}</h4>
                        <Badge
                          variant={appointment.status === "confirmed" ? "success" : "warning"}
                          className="shrink-0"
                        >
                          {appointment.status === "confirmed" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <AlertCircle className="h-3 w-3 mr-1" />
                          )}
                          {appointment.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {appointment.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No upcoming appointments</p>
                  <Button className="mt-4" asChild>
                    <Link href="/appointments/new">Book Now</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Records & Messages */}
        <div className="space-y-6">
          {/* Recent Records */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base">Recent Records</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/medical-records">
                  View All
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentRecords.map((record) => (
                <div
                  key={record.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{record.title}</p>
                    <p className="text-xs text-muted-foreground">{record.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {record.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Messages */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base">Messages</CardTitle>
              <Badge variant="secondary">2 New</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  You have 2 unread messages
                </p>
                <Button className="mt-3" size="sm" asChild>
                  <Link href="/messages">View Messages</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Outstanding Bills */}
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Outstanding Bills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[#003366]">Rs. 2,500</p>
              <p className="text-sm text-muted-foreground mb-3">Due by Jan 20, 2026</p>
              <Button size="sm" className="w-full" asChild>
                <Link href="/billing">Pay Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
