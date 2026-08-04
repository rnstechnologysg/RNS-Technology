"use client";

import { motion, Variants } from "framer-motion";
import { Code, Zap, Shield, Globe, Layers, BarChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Global Edge Network",
    description: "Deploy your application globally in milliseconds with our advanced edge network.",
    icon: Globe,
  },
  {
    title: "Zero-Trust Security",
    description: "Enterprise-grade security built-in from day one. Your data is always encrypted and protected.",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "Optimized for Core Web Vitals out of the box. Sub-second load times guaranteed.",
    icon: Zap,
  },
  {
    title: "Modern Stack",
    description: "Built on Next.js 15, React 19, and Tailwind CSS v4. The bleeding edge of web development.",
    icon: Code,
  },
  {
    title: "Composable Architecture",
    description: "Modular components that snap together perfectly. Build complex UIs in minutes.",
    icon: Layers,
  },
  {
    title: "Advanced Analytics",
    description: "Real-time insights into your application's performance and user behavior.",
    icon: BarChart,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function FeatureGrid() {
  return (
    <section className="py-24 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything you need to build at scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform provides the foundational blocks required to launch, scale, and maintain enterprise applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card hover:bg-accent/50 transition-colors duration-300 border-border/50 overflow-hidden group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
