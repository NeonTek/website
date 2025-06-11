"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Payment Integration",
        "Inventory Management",
        "Admin Dashboard",
        "Mobile Responsive",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Software Development",
    "Cloud Services",
    "Data Analytics",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100">
              Showcasing our expertise through successful projects and
              innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category === activeCategory ? "default" : "outline"}
                className={
                  category === activeCategory
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.png"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-500 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-cyan-500 hover:bg-cyan-600"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have a Project in Mind?
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
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
