import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, Database, Settings, Trophy } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-20 relative overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 transform -skew-y-12 opacity-10">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="h-40 bg-purple-500/20 animate-pulse" 
                   style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
          
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Jayachandra Srinivas
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-200">Java Developer</p>
            <div className="flex flex-wrap gap-6">
              <a href="mailto:srinivaspalakula6@gmail.com" 
                 className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail className="animate-pulse" size={20} /> srinivaspalakula6@gmail.com
              </a>
              <a href="tel:+919502098831" 
                 className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone className="animate-pulse" size={20} /> +91 9502098831
              </a>
              <a href="https://github.com" 
                 className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Github className="animate-pulse" size={20} /> Github
              </a>
              <a href="https://linkedin.com" 
                 className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Linkedin className="animate-pulse" size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Summary */}
        <Card className="mb-8 bg-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
          <CardHeader className="border-b border-purple-500/20">
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Code className="animate-pulse" /> Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <p className="text-gray-300 leading-relaxed">
              Java developer with 2 years of experience in building, debugging, and delivering scalable applications
              using Spring Boot and database technologies. Skilled in creating RESTful APIs and event-driven
              microservices with a focus on reliability and maintainability. Effective collaborator with cross-functional
              teams, committed to continuous learning and adapting to new technologies.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8 bg-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
          <CardHeader className="border-b border-purple-500/20">
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Settings className="animate-pulse" /> Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Programming Languages",
                  content: "Java",
                  icon: <Code size={20} />
                },
                {
                  title: "Database",
                  content: "SQL, MongoDB",
                  icon: <Database size={20} />
                },
                {
                  title: "Tools",
                  content: "Git, GitLab, Jira, Dynatrace, Postman, Intellij idea, Grafana",
                  icon: <Settings size={20} />
                },
                {
                  title: "Skills",
                  content: "Spring Boot, Junit, Apache Kafka, Docker, Kubernetes",
                  icon: <Code size={20} />
                }
              ].map((skill, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <h3 className="font-semibold mb-2 text-purple-300 flex items-center gap-2">
                    {skill.icon} {skill.title}
                  </h3>
                  <p className="text-gray-300">{skill.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8 bg-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
          <CardHeader className="border-b border-purple-500/20">
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Trophy className="animate-pulse" /> Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="relative pl-4 border-l-2 border-purple-500/30">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-0"></div>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-purple-300">Software Engineer</h3>
                  <div className="text-purple-400">November 2022 – Present</div>
                </div>
                <div className="text-gray-400 mb-2">Infosys Limited, Bengaluru, Karnataka</div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-2 text-purple-200">Income Tax Web Application</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">▹</span>
                      Worked on the ITRWeb microservice within the comprehensive income tax application,
                      developing efficient and scalable backend services using Java Spring Boot.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">▹</span>
                      Designed and implemented RESTful APIs to manage user interactions, data processing, and
                      real-time validations.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">▹</span>
                      Integrated Oracle database for secure storage, retrieval, and management of user data,
                      maintaining data integrity and performance.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">▹</span>
                      Utilized Spring Security to implement authentication and authorization, ensuring secure access
                      to sensitive information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-8 bg-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
          <CardHeader className="border-b border-purple-500/20">
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Code className="animate-pulse" /> Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-purple-300">RideTogether</h3>
                <div className="text-purple-400 text-sm">Java, Spring Boot, Microservices, Apache Kafka, MongoDB, Redis</div>
              </div>
              <ul className="space-y-2 text-gray-300 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">▹</span>
                  Developed a ride-sharing application enabling users to share and book rides.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">▹</span>
                  Increased application performance by improving response times through Redis cache.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">▹</span>
                  Handled concurrency through pessimistic locking to maintain transactional integrity.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8 bg-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
          <CardHeader className="border-b border-purple-500/20">
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Trophy className="animate-pulse" /> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="flex justify-between items-start p-4 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div>
                <h3 className="text-lg font-semibold text-purple-300">Bachelor of Technology – Mechanical Engineering</h3>
                <p className="text-gray-400">Dr.B.R.Ambedkar University, College of Engineering</p>
              </div>
              <div className="text-right">
                <p className="text-purple-400">July 2018 - June 2022</p>
                <p className="text-gray-300">CGPA: 7.13/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-gray-900/50 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all">
          <CardHeader className="border-b border-purple-500/20">
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Trophy className="animate-pulse" /> Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">▹</span>
                Active problem solver on LeetCode and CodingNinjas platforms
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">▹</span>
                Hackerrank 5 star in Java
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
