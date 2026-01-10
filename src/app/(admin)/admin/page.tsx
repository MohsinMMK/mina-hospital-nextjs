import { Metadata } from "next"
import Link from "next/link"
import {
  Users,
  UserCog,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  ArrowRight,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Hospital administration dashboard - manage doctors, appointments, and patients.",
}

const stats = [
  {
    title: "Total Patients",
    value: "12,543",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Appointments Today",
    value: "128",
    change: "+8%",
    trend: "up",
    icon: Calendar,
  },
  {
    title: "Active Doctors",
    value: "48",
    change: "+2",
    trend: "up",
    icon: UserCog,
  },
  {
    title: "Revenue (This Month)",
    value: "Rs. 24.5L",
    change: "+15%",
    trend: "up",
    icon: DollarSign,
  },
]

const recentAppointments = [
  {
    id: 1,
    patient: "Rahul Sharma",
    doctor: "Dr. Rajesh Kumar",
    specialty: "Cardiology",
    time: "10:00 AM",
    status: "in-progress",
  },
  {
    id: 2,
    patient: "Priya Reddy",
    doctor: "Dr. Meera Patel",
    specialty: "Pediatrics",
    time: "10:30 AM",
    status: "waiting",
  },
  {
    id: 3,
    patient: "Mohammed Ali",
    doctor: "Dr. Anil Reddy",
    specialty: "Orthopedics",
    time: "11:00 AM",
    status: "scheduled",
  },
  {
    id: 4,
    patient: "Lakshmi Devi",
    doctor: "Dr. Priya Sharma",
    specialty: "Gynecology",
    time: "11:30 AM",
    status: "scheduled",
  },
]

const topDoctors = [
  {
    name: "Dr. Rajesh Kumar",
    specialty: "Cardiology",
    appointments: 24,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Gynecology",
    appointments: 22,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Dr. Anil Reddy",
    specialty: "Orthopedics",
    appointments: 20,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=100&h=100&q=80",
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#003366]">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Download Report</Button>
          <Button asChild>
            <Link href="/admin/appointments">View All Appointments</Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-[#003366]" />
                </div>
                <Badge
                  variant={stat.trend === "up" ? "success" : "destructive"}
                  className="flex items-center gap-1"
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-[#003366]">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Appointments */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Today&apos;s Appointments</CardTitle>
                <CardDescription>Real-time appointment status</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/appointments">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-gray-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-[#003366] text-white">
                          {appointment.patient.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{appointment.patient}</h4>
                        <p className="text-sm text-muted-foreground">
                          {appointment.doctor} - {appointment.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-3 w-3" />
                          {appointment.time}
                        </div>
                      </div>
                      <Badge
                        variant={
                          appointment.status === "in-progress"
                            ? "default"
                            : appointment.status === "waiting"
                            ? "warning"
                            : "outline"
                        }
                      >
                        {appointment.status === "in-progress" && (
                          <Activity className="h-3 w-3 mr-1 animate-pulse" />
                        )}
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Doctors */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Doctors</CardTitle>
              <CardDescription>This week&apos;s statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topDoctors.map((doctor, index) => (
                <div
                  key={doctor.name}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50"
                >
                  <span className="font-bold text-lg text-muted-foreground w-6">
                    #{index + 1}
                  </span>
                  <Avatar>
                    <AvatarImage src={doctor.image} />
                    <AvatarFallback>{doctor.name.slice(4, 6)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{doctor.name}</p>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{doctor.appointments}</p>
                    <p className="text-xs text-muted-foreground">appointments</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/doctors">Manage Doctors</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
