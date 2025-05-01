
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BookOpen,
  CheckSquare,
  Award,
  Clock,
  PlaySquare
} from 'lucide-react';

const ProgressStats: React.FC = () => {
  return (
    <div className="bg-secondary/30 py-16">
      <div className="container max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Progress</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your journey through the frontend development roadmap
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <span className="text-2xl font-bold">2/6</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base mb-1">Modules Completed</CardTitle>
              <Progress value={33} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">33% of all modules</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 animate-fade-in">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CheckSquare className="h-6 w-6 text-purple-600" />
                <span className="text-2xl font-bold">8/63</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base mb-1">Lessons Completed</CardTitle>
              <Progress value={13} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">13% of all lessons</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-pink-50 to-orange-50 animate-fade-in">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Award className="h-6 w-6 text-pink-600" />
                <span className="text-2xl font-bold">3</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base mb-1">Badges Earned</CardTitle>
              <div className="flex gap-1 mt-2">
                <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-blue-400"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-purple-400"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center opacity-50">
                  <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 animate-fade-in">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Clock className="h-6 w-6 text-orange-600" />
                <span className="text-2xl font-bold">12h</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-base mb-1">Learning Time</CardTitle>
              <Progress value={20} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">Estimated 60h total</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2 animate-fade-in">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed "DOM Manipulation"</p>
                    <p className="text-xs text-muted-foreground">JavaScript Essentials</p>
                  </div>
                  <div className="text-xs text-muted-foreground">2 days ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckSquare className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed "JS Functions Quiz"</p>
                    <p className="text-xs text-muted-foreground">JavaScript Essentials</p>
                  </div>
                  <div className="text-xs text-muted-foreground">3 days ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <PlaySquare className="h-4 w-4 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Watched "CSS Box Model Tutorial"</p>
                    <p className="text-xs text-muted-foreground">HTML & CSS Fundamentals</p>
                  </div>
                  <div className="text-xs text-muted-foreground">5 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm flex-1">Complete "Event Handling Quiz"</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm flex-1">Start "Async JavaScript" lesson</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <PlaySquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm flex-1">Watch "Promises & Async/Await" video</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
