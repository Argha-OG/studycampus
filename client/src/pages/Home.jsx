import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Users, Award, BookOpen, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const Home = () => {
    useDocumentTitle('Home');
    const features = [
        {
            icon: <GraduationCap className="h-12 w-12" />,
            title: "20+ Top Universities",
            description: "Access to Malaysia's leading public and private universities"
        },
        {
            icon: <BookOpen className="h-12 w-12" />,
            title: "100+ Programs",
            description: "Wide range of courses from engineering to business and arts"
        },
        {
            icon: <Users className="h-12 w-12" />,
            title: "Expert Guidance",
            description: "Professional counseling to help you make the right choice"
        },
        {
            icon: <Award className="h-12 w-12" />,
            title: "Scholarship Info",
            description: "Information on scholarships and financial aid opportunities"
        }
    ];

    const steps = [
        { number: "01", title: "Explore Universities", description: "Browse through our comprehensive list of Malaysian universities" },
        { number: "02", title: "Choose Your Program", description: "Find the perfect course that matches your career goals" },
        { number: "03", title: "Get Expert Advice", description: "Consult with our education counselors for personalized guidance" },
        { number: "04", title: "Apply & Succeed", description: "Submit your application and start your academic journey" }
    ];

    const stats = [
        { value: "20+", label: "Universities" },
        { value: "100+", label: "Programs" },
        { value: "220+", label: "Students" },
        { value: "95%", label: "Success Rate" }
    ];

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                    <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-accent/10 rounded-full blur-[80px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                    <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <span className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm md:text-base font-medium text-primary-foreground/90 shadow-lg">
                            ✨ Your Gateway to Global Education
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
                            Unlock Your Future
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary">
                            Study in Malaysia
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                        Connect with top-tier universities, discover world-class programs, and embark on an unforgettable academic journey with <span className="text-foreground font-semibold">Study Campus Malaysia</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                        <Link to="/universities">
                            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 rounded-full">
                                Find Your University
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm hover:border-white/40 transition-all hover:scale-105 rounded-full">
                                Free Consultation
                            </Button>
                        </Link>
                    </div>

                    {/* Floating Stats/Badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">20+</div>
                            <div className="text-sm text-muted-foreground">Partner Universities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-sm text-muted-foreground">Free Consultation</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">500+</div>
                            <div className="text-sm text-muted-foreground">Students Placed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm text-muted-foreground">Support Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <GlassCard key={index} className="text-center p-8 hover:scale-105 transition-transform cursor-pointer">
                        <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            {stat.value}
                        </div>
                        <div className="text-muted-foreground mt-2 font-medium">{stat.label}</div>
                    </GlassCard>
                ))}
            </section>

            {/* Features Section */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Study Campus Malaysia?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We provide comprehensive support for your higher education journey
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <GlassCard
                            key={index}
                            className="p-8 text-center space-y-4 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer"
                        >
                            <div className="text-primary mx-auto group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Your journey to higher education in 4 simple steps
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <GlassCard
                            key={index}
                            className="p-8 space-y-4 hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/20 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                                {step.number}
                            </div>
                            <div className="relative z-10 space-y-4">
                                <div className="text-5xl font-bold text-primary group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* University Categories */}
            <section className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">University Categories</h2>
                    <p className="text-muted-foreground text-lg">
                        Choose between public and private institutions
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <GlassCard className="p-6 sm:p-8 lg:p-10 space-y-6 hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/20 group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-secondary/20 rounded-full group-hover:scale-110 transition-transform">
                                <GraduationCap className="h-8 w-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">Public Universities</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Affordable tuition fees (RM 700 - RM 5,000/year)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Government-funded with excellent facilities</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Strong research programs and international recognition</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Includes UM, USM, UKM, UPM, and more</span>
                            </li>
                        </ul>
                        <Link to="/universities">
                            <Button className="w-full bg-secondary hover:bg-secondary/90 transition-colors text-sm sm:text-base h-11 sm:h-12">
                                View Public Universities
                            </Button>
                        </Link>
                    </GlassCard>

                    <GlassCard className="p-6 sm:p-8 lg:p-10 space-y-6 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-primary/20 rounded-full group-hover:scale-110 transition-transform">
                                <Globe className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Private Universities</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Flexible programs with industry partnerships</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">International collaborations and dual degrees</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Modern facilities and innovative teaching methods</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm sm:text-base">Includes Taylor's, Sunway, Monash, UCSI, and more</span>
                            </li>
                        </ul>
                        <Link to="/universities">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-colors text-sm sm:text-base h-11 sm:h-12">
                                View Private Universities
                            </Button>
                        </Link>
                    </GlassCard>
                </div>
            </section>

            {/* CTA Section */}
            <section>
                <GlassCard className="p-12 text-center space-y-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of students who have found their perfect university through Study Campus Malaysia
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link to="/universities">
                            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                                Explore Universities Now
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-primary/50 hover:bg-primary/10">
                                Get Free Consultation
                            </Button>
                        </Link>
                    </div>
                </GlassCard>
            </section>
        </div>
    );
};

export default Home;
