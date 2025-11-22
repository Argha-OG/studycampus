import React from 'react';
import GlassCard from '@/components/GlassCard';
import { Target, Eye, Heart, Users, Award, TrendingUp, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import img1 from '@/assets/team/Abrar.jpeg'
import img2 from "@/assets/team/MASHRAFI.jpeg";
import img3 from "@/assets/team/Shaidul.jpeg";
import img4 from "@/assets/team/SHIFUL.jpeg";
import img5 from "@/assets/team/Sohan.jpeg";
import img6 from "@/assets/team/Sumaiya.jpeg";
import img7 from "@/assets/team/Tajuddin.jpeg";
import img8 from "@/assets/team/Tohidul.jpeg";
import img9 from "@/assets/team/argha-eadventure.jpg";

const About = () => {
    useDocumentTitle('About Us');

    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "SHIFUL ISLAM JUWEL",
            designation: "CEO",
            photo:
                img4,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 2,
            name: "Shaidul Islam",
            designation: "M.D",
            photo:
                img3,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 3,
            name: "MASHRAFI SARKER MOIN",
            designation: "International Representatives",
            photo:
                img2,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 4,
            name: "Sumaiya Afroz",
            designation: "Researcher",
            photo:
                img6,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 5,
            name: "Tohidul Islam",
            designation: "Business Development Executive-Oman",
            photo:
                img8,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 6,
            name: "Tajuddin Munshi",
            designation: "Consultant",
            photo:
                img7,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 7,
            name: "Abrar Hossain",
            designation: "Consultant",
            photo:
                img1,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 8,
            name: "Argha Bishwas",
            designation: "Web Developer",
            photo:
                img9,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
        {
            id: 9,
            name: "Sohan Sheikh",
            designation: "Marketing Team",
            photo:
                img5,
            social: {
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
                whatsapp: "https://wa.me/1234567890",
            },
        },
    ];

    const values = [
        {
            icon: <Target className="h-10 w-10" />,
            title: "Our Mission",
            description: "To empower students with comprehensive information and guidance to make informed decisions about their higher education journey in Malaysia."
        },
        {
            icon: <Eye className="h-10 w-10" />,
            title: "Our Vision",
            description: "To be the leading platform connecting students with Malaysia's top universities, fostering academic excellence and career success."
        },
        {
            icon: <Heart className="h-10 w-10" />,
            title: "Our Values",
            description: "Integrity, excellence, student-centricity, and commitment to helping every student achieve their educational dreams."
        }
    ];

    const achievements = [
        { number: "10+", label: "Years of Experience" },
        { number: "220+", label: "Students Helped" },
        { number: "20+", label: "Partner Universities" },
        { number: "95%", label: "Satisfaction Rate" }
    ];

    return (
        <div className="space-y-16 pb-20">
            {/* Header */}
            {/* Header */}
            <div className="relative py-20 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                </div>
                <div className="relative z-10 space-y-6">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-primary-foreground/80">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Empowering Your <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary">
                            Educational Journey
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Your trusted partner in navigating the path to higher education in Malaysia. We bridge the gap between ambitious students and world-class universities.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <GlassCard className="p-10 space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Founded with a vision to simplify the university selection process, Study Campus Malaysia has been helping
                        students discover their perfect educational path for over a decade. We understand that choosing
                        the right university is one of the most important decisions in a student's life.
                    </p>
                    <p>
                        Our platform brings together comprehensive information about Malaysia's top public and private
                        universities, making it easier for students to compare programs, understand admission requirements,
                        and make informed decisions about their future.
                    </p>
                    <p>
                        With partnerships across 20+ leading Malaysian universities and a track record of helping over
                        50,000 students, we continue to evolve and improve our services to meet the changing needs of
                        modern education seekers.
                    </p>
                </div>
            </GlassCard>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <GlassCard
                        key={index}
                        className="p-8 space-y-4 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer"
                    >
                        <div className="text-primary group-hover:scale-110 transition-transform">
                            {value.icon}
                        </div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                        </p>
                    </GlassCard>
                ))}
            </div>

            {/* Achievements */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Our Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <GlassCard
                            key={index}
                            className="text-center p-8 hover:scale-105 transition-transform cursor-pointer"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                {achievement.number}
                            </div>
                            <div className="text-muted-foreground mt-2 font-medium">
                                {achievement.label}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* What We Offer */}
            <GlassCard className="p-10 space-y-6">
                <h2 className="text-3xl font-bold">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/20 rounded-full mt-1">
                                <Award className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Comprehensive University Database</h4>
                                <p className="text-muted-foreground">
                                    Detailed information about 20+ top Malaysian universities
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/20 rounded-full mt-1">
                                <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Expert Counseling</h4>
                                <p className="text-muted-foreground">
                                    Professional guidance from experienced education counselors
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/20 rounded-full mt-1">
                                <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Program Comparison</h4>
                                <p className="text-muted-foreground">
                                    Easy-to-use tools to compare programs across universities
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-secondary/20 rounded-full mt-1">
                                <Award className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Scholarship Information</h4>
                                <p className="text-muted-foreground">
                                    Up-to-date information on scholarships and financial aid
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-secondary/20 rounded-full mt-1">
                                <Users className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Application Support</h4>
                                <p className="text-muted-foreground">
                                    Step-by-step guidance through the application process
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-secondary/20 rounded-full mt-1">
                                <TrendingUp className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Career Guidance</h4>
                                <p className="text-muted-foreground">
                                    Insights into career prospects for different programs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Why Choose Us */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center">Why Students Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Unbiased, comprehensive information",
                        "Free consultation services",
                        "Partnerships with top universities",
                        "Personalized recommendations",
                        "Regular updates on programs",
                        "Success stories and testimonials"
                    ].map((reason, index) => (
                        <GlassCard
                            key={index}
                            className="p-6 flex items-center gap-4 hover:border-primary/50 transition-all group cursor-pointer"
                        >
                            <div className="p-3 bg-primary/20 rounded-full group-hover:scale-110 transition-transform">
                                <Award className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-medium group-hover:text-primary transition-colors">
                                {reason}
                            </span>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* Our Team Section */}
            <div className="hidden space-y-6">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Meet Our Team
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                        Dedicated professionals committed to your educational success
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {teamMembers.map(member => (
                        <GlassCard key={member.id} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                            <div className="p-6 space-y-4">
                                {/* Photo */}
                                <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white/10 group-hover:border-primary/30 transition-colors"
                                    />
                                </div>

                                {/* Info */}
                                <div className="text-center space-y-1">
                                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {member.designation}
                                    </p>
                                </div>

                                {/* Social Media Links */}
                                <div className="flex justify-center gap-3 pt-2">
                                    <a
                                        href={member.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={member.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={member.social.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
