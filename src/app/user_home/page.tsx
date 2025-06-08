import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Droplets,
  Thermometer,
  Shield,
  Activity,
  Brain,
  Wind,
  Apple,
  Pill,
  User,
  BarChart3,
  Bell,
  Settings,
  TrendingUp,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HealthDashboard = () => {
  // Sample data for charts (simplified representation)
  const chartData = Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    value: Math.floor(Math.random() * 40) + 60,
  }));

  const SimpleChart = ({
    data,
    color = "rgb(59, 130, 246)",
  }: {
    data: any[];
    color?: string;
  }) => (
    <div className="flex items-end justify-between h-16 gap-1">
      {data.map((point, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div
            className="w-full rounded-t-sm"
            style={{
              height: `${(point.value / 100) * 64}px`,
              backgroundColor: color,
              opacity: 0.7,
            }}
          />
          <span className="text-xs text-gray-500 mt-1">{point.day}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
        {/* Logo */}
        <h2 className="text-xl font-bold text-gray-900">Healio</h2>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <span className="font-medium text-gray-900">Sophia</span>
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <div className="w-48 min-h-screen p-4">
          {/* Navigation */}
          <nav className="space-y-2 mt-4">
            {/* Overview (Active) */}
            <div className="flex items-center p-2 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
              <BarChart3 className="w-6 h-6 mr-3" />
              <span>Overview</span>
            </div>

            {/* Other Navigation Items */}
            <div className="flex items-center p-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
              <Activity className="w-6 h-6 mr-3" />
              <span>Vital Dashboard</span>
            </div>

            <div className="flex items-center p-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
              <Heart className="w-6 h-6 mr-3" />
              <span>Health Timeline</span>
            </div>

            <div className="flex items-center p-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
              <Bell className="w-6 h-6 mr-3" />
              <span>Conditions & Alert</span>
            </div>

            <div className="flex items-center p-2 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200">
              <Settings className="w-6 h-6 mr-3" />
              <span>Settings</span>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, Sophia
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Today</span>
              <span className="text-sm font-medium">This week</span>
            </div>
          </div>

          {/* Vitals Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Vitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {/* Heart Rate */}
              <Card className="bg-red-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">HEART RATE</p>
                      <p className="text-2xl font-bold">72 bpm</p>
                    </div>
                    <Heart className="w-8 h-8 opacity-90" />
                  </div>
                  <div className="mt-2">
                    <div className="w-full h-8 opacity-60">
                      <svg viewBox="0 0 100 20" className="w-full h-full">
                        <polyline
                          fill="none"
                          stroke="white"
                          strokeWidth="1"
                          points="0,10 20,10 25,5 30,15 35,10 55,10 60,5 65,15 70,10 100,10"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Blood Pressure */}
              <Card className="bg-teal-600 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">BLOOD PRESSURE</p>
                      <p className="text-2xl font-bold">120/80 mmHg</p>
                    </div>
                    <Activity className="w-8 h-8 opacity-90" />
                  </div>
                </CardContent>
              </Card>

              {/* SpO2 */}
              <Card className="bg-cyan-400 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">SPO2</p>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-xs opacity-75">Normal</p>
                    </div>
                    <Droplets className="w-8 h-8 opacity-90" />
                  </div>
                </CardContent>
              </Card>

              {/* Temperature */}
              <Card className="bg-orange-400 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">TEMPERATURE</p>
                      <p className="text-2xl font-bold">36.4°F</p>
                      <p className="text-xs opacity-75">Normal</p>
                    </div>
                    <Thermometer className="w-8 h-8 opacity-90" />
                  </div>
                </CardContent>
              </Card>

              {/* Risk Status */}
              <Card className="bg-yellow-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90">RISK STATUS</p>
                      <p className="text-lg font-bold">LOW</p>
                      <p className="text-xs opacity-75">
                        No immediate concerns
                      </p>
                    </div>
                    <Shield className="w-8 h-8 opacity-90" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trends Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blood Pressure Trend */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium">
                      Blood Pressure
                    </CardTitle>
                    <TrendingDown className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">120/80 mmHg</span>
                    <span className="text-sm text-green-600">-2%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <SimpleChart data={chartData} color="rgb(59, 130, 246)" />
                </CardContent>
              </Card>

              {/* Heart Rate Trend */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium">
                      Heart Rate
                    </CardTitle>
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">72 bpm</span>
                    <span className="text-sm text-red-600">+1%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <SimpleChart data={chartData} color="rgb(239, 68, 68)" />
                </CardContent>
              </Card>

              {/* SpO2 Levels */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium">
                      SpO2 Levels
                    </CardTitle>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">98%</span>
                    <span className="text-sm text-green-600">+0.5%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <SimpleChart data={chartData} color="rgb(34, 197, 94)" />
                </CardContent>
              </Card>

              {/* VOC/Respiratory Metrics */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm font-medium">
                      VOC/Respiratory Metrics
                    </CardTitle>
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">2.5</span>
                    <span className="text-sm text-red-600">-6.2%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <SimpleChart data={chartData} color="rgb(168, 85, 247)" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Condition Detection */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Condition Detection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="text-center p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Cardiovascular
                  </p>
                  <p className="text-xs text-gray-500">Low Risk</p>
                </div>
              </Card>

              <Card className="text-center p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <Brain className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Neurological/Metabolic
                  </p>
                  <p className="text-xs text-gray-500">Low Risk</p>
                </div>
              </Card>

              <Card className="text-center p-4 border-green-200 bg-green-50">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <Wind className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Respiratory
                  </p>
                  <p className="text-xs text-green-600">NEW</p>
                </div>
              </Card>

              <Card className="text-center p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                    <Apple className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Liver/Alcohol
                  </p>
                  <p className="text-xs text-gray-500">Low Risk</p>
                </div>
              </Card>

              <Card className="text-center p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Pill className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Other</p>
                  <p className="text-xs text-gray-500">Medications</p>
                </div>
              </Card>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>
                  AI-generated recommendation for Stay active & maintain
                  heart...
                </strong>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Upcoming reminders - Check out our AI-Based AI feature at 7 PM.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Privacy Notice: This information is secure and confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
