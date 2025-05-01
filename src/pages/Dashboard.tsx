
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy,
  User,
  Calendar,
  Clock,
  BookOpen,
  CheckSquare,
  Star,
  Medal,
  Crown,
  Award,
  Users,
  MessageSquare,
  Code,
  Code2,
  Layers
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container max-w-6xl py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* User Profile Section */}
          <div className="w-full md:w-1/4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend Explorer</h3>
                  <p className="text-muted-foreground">Beginner Level</p>
                  
                  <div className="mt-4 w-full">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Level 2</span>
                      <span>300 XP to Level 3</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-6 w-full text-center">
                    <div className="p-2 rounded-lg bg-primary/5">
                      <div className="font-bold text-lg">14</div>
                      <div className="text-xs text-muted-foreground">Days Streak</div>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/5">
                      <div className="font-bold text-lg">3</div>
                      <div className="text-xs text-muted-foreground">Badges</div>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/5">
                      <div className="font-bold text-lg">2</div>
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/5">
                      <div className="font-bold text-lg">18%</div>
                      <div className="text-xs text-muted-foreground">Total Progress</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-500" /> Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-100">
                      <CheckSquare className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">HTML Master</p>
                      <p className="text-xs text-muted-foreground">Completed all HTML modules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">7-Day Streak</p>
                      <p className="text-xs text-muted-foreground">Learned for 7 days in a row</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100">
                      <Star className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">First Project</p>
                      <p className="text-xs text-muted-foreground">Completed first milestone project</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="w-full md:w-3/4">
            <Tabs defaultValue="progress" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="progress">My Progress</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="progress" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-bold">JavaScript Essentials</h4>
                        <p className="text-sm text-muted-foreground mb-3">Event Handling Quiz</p>
                        
                        <div className="flex justify-between text-sm mb-1">
                          <span>60% complete</span>
                          <span>8 of 12 lessons</span>
                        </div>
                        <Progress value={60} className="h-2 mb-4" />
                        
                        <Button>Continue Learning</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Module Progress</CardTitle>
                    <CardDescription>Track your journey through each learning module</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-green-100 text-green-600">
                            <Code className="h-4 w-4" />
                          </div>
                          <span>HTML & CSS Fundamentals</span>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Completed</Badge>
                      </div>
                      <Progress value={100} className="h-2" />
                      
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                            <Code2 className="h-4 w-4" />
                          </div>
                          <span>JavaScript Essentials</span>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">In Progress</Badge>
                      </div>
                      <Progress value={60} className="h-2" />
                      
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                            <Layers className="h-4 w-4" />
                          </div>
                          <span>Modern JavaScript Frameworks</span>
                        </div>
                        <Badge variant="outline">Locked</Badge>
                      </div>
                      <Progress value={0} className="h-2" />
                      
                      <Button variant="outline" className="mt-4 w-full">View All Modules</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="leaderboard">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Leaderboard</CardTitle>
                    <CardDescription>Top performers this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="font-bold text-lg text-amber-500 w-6 text-center">1</div>
                        <div className="p-2 rounded-full bg-amber-100">
                          <Crown className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">CodeMaster42</p>
                          <p className="text-xs text-muted-foreground">Completed 18 modules this week</p>
                        </div>
                        <div className="text-lg font-bold">2,450 XP</div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-gray-50 border rounded-lg">
                        <div className="font-bold text-lg text-gray-500 w-6 text-center">2</div>
                        <div className="p-2 rounded-full bg-gray-100">
                          <Medal className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">WebDevPro</p>
                          <p className="text-xs text-muted-foreground">Completed 15 modules this week</p>
                        </div>
                        <div className="text-lg font-bold">2,120 XP</div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-amber-50/50 border border-amber-100 rounded-lg">
                        <div className="font-bold text-lg text-amber-700 w-6 text-center">3</div>
                        <div className="p-2 rounded-full bg-amber-100/50">
                          <Award className="h-5 w-5 text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">CSSNinja</p>
                          <p className="text-xs text-muted-foreground">Completed 12 modules this week</p>
                        </div>
                        <div className="text-lg font-bold">1,890 XP</div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-gray-50 border rounded-lg">
                        <div className="font-bold text-lg text-gray-500 w-6 text-center">14</div>
                        <div className="p-2 rounded-full bg-primary/10">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">You (Frontend Explorer)</p>
                          <p className="text-xs text-muted-foreground">Completed 5 modules this week</p>
                        </div>
                        <div className="text-lg font-bold">780 XP</div>
                      </div>
                      
                      <Button variant="outline" className="w-full">View Full Leaderboard</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="community">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Discussions</CardTitle>
                    <CardDescription>Engage with fellow learners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-full bg-blue-100">
                              <Users className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="font-medium">JavaScript Group</span>
                          </div>
                          <span className="text-xs text-muted-foreground">15 min ago</span>
                        </div>
                        <p className="mt-2 text-sm">Anyone struggling with callback functions? I'm having trouble understanding how they work.</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <MessageSquare className="h-3 w-3" /> 12 replies
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-full bg-green-100">
                              <Users className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="font-medium">HTML & CSS Group</span>
                          </div>
                          <span className="text-xs text-muted-foreground">1 hour ago</span>
                        </div>
                        <p className="mt-2 text-sm">Check out my first responsive website project! Looking for feedback on the layout.</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <MessageSquare className="h-3 w-3" /> 8 replies
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-1 rounded-full bg-purple-100">
                              <Users className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="font-medium">React Development</span>
                          </div>
                          <span className="text-xs text-muted-foreground">3 hours ago</span>
                        </div>
                        <p className="mt-2 text-sm">What's the best way to manage state in a larger React application? Context API or Redux?</p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <MessageSquare className="h-3 w-3" /> 24 replies
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">View All Discussions</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="certificates">
                <Card>
                  <CardHeader>
                    <CardTitle>Certificates & Achievements</CardTitle>
                    <CardDescription>Track your learning milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mt-10 -mr-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -mb-8 -ml-8"></div>
                        
                        <h3 className="text-xl font-bold mb-2">HTML & CSS Fundamentals</h3>
                        <p className="text-sm text-muted-foreground mb-4">Successfully completed all modules and projects</p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground">Issued on</div>
                            <div className="font-medium">April 25, 2025</div>
                          </div>
                          <Button size="sm">View Certificate</Button>
                        </div>
                      </div>
                      
                      <div className="p-6 border border-dashed rounded-lg bg-gray-50">
                        <div className="flex items-center justify-center h-32">
                          <div className="text-center">
                            <p className="text-muted-foreground mb-2">Complete more courses to earn certificates</p>
                            <Button variant="outline">Continue Learning</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
