
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, FileText, ListVideo } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-6xl py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of tutorials, documentation, and community resources
            </p>
          </div>
          
          <Tabs defaultValue="tutorials" className="mb-16">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tutorials">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <Code className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge>HTML & CSS</Badge>
                        <span className="text-xs text-muted-foreground">15 min read</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Building Responsive Layouts</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn how to create responsive web layouts using modern CSS techniques and best practices.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Read Tutorial</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="documentation">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <Badge>JavaScript</Badge>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">JavaScript Core Concepts</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive guide to JavaScript fundamentals, including syntax, functions, and objects.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View Documentation</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                          <ListVideo className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge>React</Badge>
                        <span className="text-xs text-muted-foreground">25 min</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">React Hooks Tutorial</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn how to use React Hooks to manage state and side effects in functional components.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Watch Video</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-64 bg-gray-100"></div>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge>Project</Badge>
                        <span className="text-xs text-muted-foreground">Intermediate</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Portfolio Website</h3>
                      <p className="text-sm text-muted-foreground">
                        Build a responsive portfolio website using HTML, CSS, and JavaScript.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View Project</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Community Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Forum</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our community forum to ask questions, share knowledge, and connect with other learners.
                  </p>
                  <Button variant="outline" className="w-full">Visit Forum</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">Discord Community</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with other learners and mentors in real-time on our Discord server.
                  </p>
                  <Button variant="outline" className="w-full">Join Discord</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold">GitHub Repository</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access code examples, starter projects, and contribute to our open-source learning materials.
                  </p>
                  <Button variant="outline" className="w-full">View GitHub</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
