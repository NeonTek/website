"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Cloud, Globe, Database, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SuggestedPages } from "@/components/suggested-pages"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks and technologies",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"],
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native Performance", "Cross-platform Solutions", "App Store Deployment", "Push Notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["Auto-scaling", "Load Balancing", "Monitoring", "Backup Solutions"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Software Solutions",
      description: "Enterprise software development and system integration",
      features: ["Custom Development", "API Integration", "Legacy Modernization", "Maintenance"],
      technologies: ["Node.js", "Python", "Java", ".NET"],
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Database Management",
      description: "Database design, optimization, and management services",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup & Recovery"],
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Security Solutions",
      description: "Comprehensive security audits and implementation",
      features: ["Security Audits", "Penetration Testing", "SSL Implementation", "Data Encryption"],
      technologies: ["OAuth", "JWT", "SSL/TLS", "Firewall"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and understand your business goals",
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a detailed project plan and timeline",
    },
    {
      step: "03",
      title: "Development",
      description: "Our team builds your solution using best practices",
    },
    {
      step: "04",
      title: "Testing",
      description: "Comprehensive testing ensures quality and performance",
    },
    {
      step: "05",
      title: "Deployment",
      description: "We deploy your solution and provide ongoing support",
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-cyan-100">
              Comprehensive technology solutions to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-cyan-100 rounded-full text-cyan-600 w-fit">{service.icon}</div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how we can help bring your vision to life
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <SuggestedPages currentPage={typeof window !== 'undefined' ? window.location.href : undefined} />
      

      <Footer />
    </div>
  )
}
