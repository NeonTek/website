"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: "future-of-web-development",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging technologies and methodologies that will shape the web development landscape in the coming years.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 1, 2025",
      author: "Alex Johnson",
      authorAvatar: "/placeholder.png",
      readTime: "8 min read",
      categories: ["Web Development", "Technology Trends"],
      featured: true,
    },
  ];

  const categories = [
    "All Categories",
    "Web Development",
    "Mobile Development",
    "Cloud Services",
    "Cybersecurity",
    "UI/UX Design",
    "Artificial Intelligence",
    "Technology Trends",
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const featuredPost = blogPosts.find((post) => post.featured);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-cyan-100">
              Insights, tutorials, and industry updates from our team of experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {categories.slice(0, 5).map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-cyan-500 hover:bg-cyan-600" : ""}
                >
                  {category}
                </Badge>
              ))}
              <Badge variant="outline">More +</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-cyan-500 text-white">
                          Featured
                        </Badge>
                        {featuredPost.categories.map((category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image
                              src={
                                featuredPost.authorAvatar || "/placeholder.svg"
                              }
                              alt={featuredPost.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{featuredPost.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.categories.map((category, catIndex) => (
                            <Badge
                              key={catIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {category}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <div className="flex items-center mr-4">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/blog/${post.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Subscribe to our newsletter to receive the latest articles,
              tutorials, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-cyan-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
