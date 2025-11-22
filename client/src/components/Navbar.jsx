import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/studycampus.jpeg';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5 supports-[backdrop-filter]:bg-background/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group flex-shrink-0">
                        <img
                            src={logo}
                            alt="Study Campus Malaysia Logo"
                            className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
                            style={{ background: 'transparent' }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                            Home
                        </Link>
                        <Link to="/universities" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                            Universities
                        </Link>
                        <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                            About
                        </Link>
                        <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/login">
                            <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary">
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top">
                        <div className="flex flex-col space-y-3">
                            <Link
                                to="/"
                                className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/universities"
                                className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Universities
                            </Link>
                            <Link
                                to="/about"
                                className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="px-4 py-2 text-foreground/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="flex flex-col gap-2 px-4 pt-2">
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="outline" className="w-full">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
