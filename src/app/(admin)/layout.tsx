"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  UserCog,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Menu,
  Bell,
  ChevronRight,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Doctors", href: "/admin/doctors", icon: UserCog },
  { name: "Appointments", href: "/admin/appointments", icon: Calendar },
  { name: "Patients", href: "/admin/patients", icon: Users },
  { name: "Blog", href: "/admin/blog", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Logo */}
      <div className="p-6 border-b">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#6682a3] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-[#6682a3]">
              MINA Hospitals
            </h1>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#6682a3] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Admin Section */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 px-4 py-3">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-[#c9826d] text-white">AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">Admin User</p>
            <Badge variant="gold" className="text-xs">Super Admin</Badge>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Get current page title
  const currentPage = navigation.find(
    (item) => pathname === item.href ||
    (item.href !== "/admin" && pathname.startsWith(item.href))
  )

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r hidden lg:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <SheetTitle className="sr-only">Admin Navigation</SheetTitle>
                  <Sidebar />
                </SheetContent>
              </Sheet>

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm">
                <Link href="/admin" className="text-muted-foreground hover:text-foreground">
                  Admin
                </Link>
                {currentPage && currentPage.href !== "/admin" && (
                  <>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{currentPage.name}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/" target="_blank">View Site</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
