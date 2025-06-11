"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Heart, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality",
      description:
        "We maintain the highest standards in every project, ensuring excellence in all deliverables",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients as partners to achieve shared success",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Efficiency",
      description:
        "We optimize processes and leverage automation to deliver results faster",
    },
  ];

  const team = [
    {
      name: "Wesley Weiss",
      role: "Developer",
      image: "/images/favicon.png",
      bio: "Experience in Software Engineering and business strategy",
    },
    {
      name: "George Ongoro",
      role: "Developer",
      image: "/images/favicon.png",
      bio: "Experience in full-stack development",
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
    },
    {
      number: "20+",
      label: "Happy Clients",
      description: "Long-term partnerships built on trust and results",
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Proven track record in technology solutions",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock support for all our clients",
    },
  ];

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
              About NeonTek
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100">
              Transforming businesses through innovative technology solutions
              since 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023 with a vision to bridge the gap between
                innovative technology and practical business solutions, NeonTek
                has grown from a small startup to a trusted technology partner
                for businesses worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began when our founders recognized the need for more
                personalized, efficient, and scalable technology solutions.
                Today, we continue to push boundaries and deliver exceptional
                results for our clients.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should empower businesses, not
                complicate them. That's why we focus on creating solutions that
                are not only technically excellent but also user-friendly and
                business-focused.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company
              culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-cyan-100 rounded-full text-cyan-600 w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client
              success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-cyan-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
