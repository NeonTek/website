"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";

const projectsData = [
  {
    id: "",
    title: "",
    description: "",
    fullDescription: "",
    challenge: "",
    solution: "",
    images: ["/placeholder.png", "/placeholder.png", "/placeholder.png"],
    category: "",
    technologies: [],
    features: [],
    testimonials: [
      {
        name: "",
        role: "",
        avatar: "",
        content: "",
        rating: 5,
      },
    ],
    results: [],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;

  //project by ID
  const project = projectsData.find((p) => p.id === projectId);

  //show error
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-cyan-100 hover:text-white mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-cyan-100 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-white/20 hover:bg-white/30 text-white">
                {project.category}
              </Badge>
              {project.technologies.slice(0, 5).map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <Badge className="bg-white/10 hover:bg-white/20 text-white">
                  +{project.technologies.length - 5} more
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-cyan-600 hover:bg-gray-100">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Site
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={image || "/placeholder.png"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-muted-foreground mb-6">
                    {project.fullDescription}
                  </p>

                  <h3 className="text-xl font-bold mb-3">The Challenge</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.challenge}
                  </p>

                  <h3 className="text-xl font-bold mb-3">Our Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </motion.div>
              </TabsContent>
              <TabsContent value="features" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="mr-4 mt-1 bg-cyan-100 text-cyan-600 p-2 rounded-full dark:bg-cyan-900 dark:text-cyan-300">
                              <div className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-300"></div>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{feature}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-sm py-1 px-3"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="testimonials" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">
                    Client Testimonials
                  </h2>
                  <div className="space-y-6">
                    {project.testimonials.map((testimonial, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h3 className="font-semibold">
                                    {testimonial.name}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {testimonial.role}
                                  </p>
                                </div>
                                <div className="flex">
                                  {[...Array(testimonial.rating)].map(
                                    (_, i) => (
                                      <Star
                                        key={i}
                                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                      />
                                    )
                                  )}
                                  {[...Array(5 - testimonial.rating)].map(
                                    (_, i) => (
                                      <Star
                                        key={i}
                                        className="h-4 w-4 text-gray-300"
                                      />
                                    )
                                  )}
                                </div>
                              </div>
                              <p className="text-muted-foreground italic">
                                {testimonial.content}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="results" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Project Results</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.results.map((result, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <div className="mr-4 bg-cyan-100 text-cyan-600 p-2 rounded-full dark:bg-cyan-900 dark:text-cyan-300">
                              <div className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-300"></div>
                            </div>
                            <p className="font-medium">{result}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with our expertise
              and innovative approach
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-cyan-600 hover:bg-gray-100"
              >
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
