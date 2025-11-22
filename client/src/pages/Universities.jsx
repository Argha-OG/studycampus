import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchUniversities } from '@/lib/api';
import { MapPin, CheckCircle, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const Universities = () => {
    useDocumentTitle('Universities');
    const [universities, setUniversities] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);

    // Filter States
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('all');
    const [selectedOfferTypes, setSelectedOfferTypes] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    // Expanded State for Dropdown
    const [expandedUniversities, setExpandedUniversities] = useState(new Set());
    const [selectedCategories, setSelectedCategories] = useState({});

    useEffect(() => {
        fetchUniversities().then(data => {
            setUniversities(data || []);
            setDisplayItems(data.map(u => ({ type: 'university', data: u })) || []);
        });
    }, []);

    // Extract unique locations for dropdown
    const locations = ['all', ...new Set(universities.map(u => u.location.split(',')[1]?.trim() || u.location))];

    const levels = [
        "Certificate",
        "Diploma",
        "Advance Diploma",
        "Foundation",
        "Bachelor",
        "Masters",
        "PhD"
    ];

    const handleLevelChange = (level) => {
        setSelectedLevels(prev =>
            prev.includes(level)
                ? prev.filter(l => l !== level)
                : [...prev, level]
        );
    };

    const handleOfferTypeChange = (type) => {
        setSelectedOfferTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const toggleExpand = (id) => {
        setExpandedUniversities(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    useEffect(() => {
        let results = [];

        universities.forEach(uni => {
            let matchesUni = true;

            // Level filter
            if (selectedLevels.length > 0) {
                if (!uni.levels || !uni.levels.some(level => selectedLevels.includes(level))) {
                    matchesUni = false;
                }
            }

            // Location filter
            if (selectedLocation !== 'all') {
                if (!uni.location.includes(selectedLocation)) {
                    matchesUni = false;
                }
            }

            // Offer Type filter
            if (selectedOfferTypes.length > 0) {
                let typeMatch = false;
                if (selectedOfferTypes.includes('Free Offer Letter') && uni.offerLetterFee === 'Free') typeMatch = true;
                if (selectedOfferTypes.includes('Offer Letter Fees Apply') && uni.offerLetterFee === 'Paid') typeMatch = true;
                if (!typeMatch) matchesUni = false;
            }

            if (matchesUni) {
                // Search & Price Filter Logic
                const query = searchQuery.toLowerCase();
                const minPrice = priceRange.min ? parseInt(priceRange.min) : 0;
                const maxPrice = priceRange.max ? parseInt(priceRange.max) : Infinity;

                // Check if university matches search
                const uniNameMatch = uni.name.toLowerCase().includes(query);
                const uniLocationMatch = uni.location.toLowerCase().includes(query);

                // Check matching courses
                const matchingCourses = uni.programs.filter(program => {
                    const titleMatch = program.title.toLowerCase().includes(query);
                    const priceMatch = program.fee >= minPrice && program.fee <= maxPrice;
                    return titleMatch && priceMatch;
                });

                // If search query is present
                if (searchQuery) {
                    // If courses match, add them as separate items
                    if (matchingCourses.length > 0) {
                        matchingCourses.forEach(course => {
                            results.push({
                                type: 'course',
                                data: uni,
                                course: course
                            });
                        });
                    }
                    // If university matches name/location (and no specific course search or generic search), add university
                    else if (uniNameMatch || uniLocationMatch) {
                        results.push({ type: 'university', data: uni });
                    }
                } else {
                    // No search query: Filter by price only
                    if (priceRange.min || priceRange.max) {
                        // Show courses that match price
                        const priceMatchingCourses = uni.programs.filter(program =>
                            program.fee >= minPrice && program.fee <= maxPrice
                        );
                        priceMatchingCourses.forEach(course => {
                            results.push({
                                type: 'course',
                                data: uni,
                                course: course
                            });
                        });
                    } else {
                        // Default: Show university
                        results.push({ type: 'university', data: uni });
                    }
                }
            }
        });

        setDisplayItems(results);
    }, [searchQuery, selectedLevels, selectedLocation, selectedOfferTypes, priceRange, universities]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <div className="w-full lg:w-1/4 space-y-6">
                    <GlassCard className="p-6 space-y-6 sticky top-24">
                        <h2 className="text-xl font-bold text-primary">Filter Your Best Search</h2>

                        {/* Search by Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Search by University or Course</label>
                            <div className="relative">
                                <Input
                                    placeholder="Type Name or Course"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-white/5 border-white/10"
                                />
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground">Course Price (RM)</label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                                    className="bg-white/5 border-white/10"
                                />
                                <span className="text-muted-foreground">-</span>
                                <Input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                                    className="bg-white/5 border-white/10"
                                />
                            </div>
                        </div>

                        {/* Level of Interest */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground">Level of Interest</label>
                            <div className="space-y-2">
                                {levels.map((level) => (
                                    <div key={level} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={level}
                                            checked={selectedLevels.includes(level)}
                                            onCheckedChange={() => handleLevelChange(level)}
                                        />
                                        <label
                                            htmlFor={level}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                                        >
                                            {level}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Search by Location */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Search by location</label>
                            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                <SelectTrigger className="bg-white/5 border-white/10">
                                    <SelectValue placeholder="All Locations" />
                                </SelectTrigger>
                                <SelectContent>
                                    {locations.map(loc => (
                                        <SelectItem key={loc} value={loc}>
                                            {loc === 'all' ? 'All Locations' : loc}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Offer Letter Type */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground">Offer Letter Type</label>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="free-offer"
                                        checked={selectedOfferTypes.includes('Free Offer Letter')}
                                        onCheckedChange={() => handleOfferTypeChange('Free Offer Letter')}
                                    />
                                    <label htmlFor="free-offer" className="text-sm font-medium leading-none text-muted-foreground">
                                        Free Offer Letter
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="paid-offer"
                                        checked={selectedOfferTypes.includes('Offer Letter Fees Apply')}
                                        onCheckedChange={() => handleOfferTypeChange('Offer Letter Fees Apply')}
                                    />
                                    <label htmlFor="paid-offer" className="text-sm font-medium leading-none text-muted-foreground">
                                        Offer Letter Fees Apply
                                    </label>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Main Content */}
                <div className="w-full lg:w-3/4 space-y-6">
                    <h2 className="text-2xl font-bold">
                        {displayItems.length} {displayItems.length === 1 ? 'Result' : 'Results'} Found
                    </h2>

                    <div className="space-y-4">
                        {displayItems.map((item, index) => {
                            const university = item.data;
                            const isCourse = item.type === 'course';
                            const course = item.course;
                            const isExpanded = expandedUniversities.has(university.id);

                            return (
                                <GlassCard key={`${university.id}-${index}`} className="p-6 hover:border-primary/50 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Logo */}
                                        <div className="w-full md:w-auto flex justify-center md:justify-start">
                                            <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white p-2 rounded-lg">
                                                <img
                                                    src={university.logo}
                                                    alt={`${university.name} logo`}
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(university.name)}&size=200&background=random&color=fff&bold=true`;
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-2 w-full">
                                            <h3 className="text-xl font-bold text-foreground">{university.name}</h3>

                                            {isCourse && (
                                                <div className="text-lg font-semibold text-primary">
                                                    {course.title}
                                                </div>
                                            )}

                                            <div className="flex items-center text-muted-foreground text-sm">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                {university.location}
                                            </div>

                                            <div className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 mr-1 text-primary" />
                                                <span className="text-muted-foreground">Offer Letter Applicable: </span>
                                                <span className="ml-1 font-medium text-foreground">
                                                    {university.offerLetterFee === 'Free' ? 'Yes' : 'Fees Apply'}
                                                </span>
                                            </div>

                                            {isCourse && (
                                                <div className="flex items-center text-sm mt-2">
                                                    <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                                                    <span className="text-muted-foreground">Course Fee: </span>
                                                    <span className="ml-1 font-bold text-foreground">
                                                        RM {course.fee.toLocaleString()}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Dropdown Toggle for University Cards */}
                                            {!isCourse && (
                                                <div
                                                    className="flex items-center text-primary text-sm cursor-pointer mt-2 hover:underline w-fit"
                                                    onClick={() => toggleExpand(university.id)}
                                                >
                                                    {isExpanded ? 'Hide Courses' : 'View Available Courses'}
                                                    {isExpanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                                                </div>
                                            )}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col gap-2 w-full md:w-auto min-w-[120px]">
                                            <Link to={`/apply/${university.id}`}>
                                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                                    Apply Now
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                className="w-full border-primary text-primary hover:bg-primary/10"
                                                onClick={() => window.open(university.website, '_blank')}
                                            >
                                                Details
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Expanded Course List */}
                                    {!isCourse && isExpanded && (
                                        <div className="mt-6 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="font-semibold text-foreground">Available Programs</h4>
                                                <Select
                                                    defaultValue="all"
                                                    onValueChange={(value) => {
                                                        // Store selected category in a local state map if needed, 
                                                        // but for simplicity, we can just filter in render or use a small component.
                                                        // Since we are mapping, we might need a state for each card.
                                                        // To avoid complex state management here, let's create a sub-component or use a simple approach.
                                                        // Let's use a data attribute or similar if we don't want to refactor too much,
                                                        // BUT React way is state. Let's add a state for selected categories.
                                                        setExpandedUniversities(prev => {
                                                            const newSet = new Set(prev);
                                                            // We are just using this to trigger re-render if needed, but actually we need a new state.
                                                            return newSet;
                                                        });
                                                        // Actually, we need a new state: const [selectedCategories, setSelectedCategories] = useState({});
                                                        // Let's assume we added this state at the top.
                                                        setSelectedCategories(prev => ({ ...prev, [university.id]: value }));
                                                    }}
                                                >
                                                    <SelectTrigger className="w-[180px] h-8 text-sm bg-white/5 border-white/10">
                                                        <SelectValue placeholder="All Categories" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Categories</SelectItem>
                                                        <SelectItem value="Certificate">Certificate</SelectItem>
                                                        <SelectItem value="Diploma">Diploma</SelectItem>
                                                        <SelectItem value="Advance Diploma">Advance Diploma</SelectItem>
                                                        <SelectItem value="Foundation">Foundation</SelectItem>
                                                        <SelectItem value="Bachelor">Bachelor Degree</SelectItem>
                                                        <SelectItem value="Masters">Masters Degree</SelectItem>
                                                        <SelectItem value="PhD">PhD / Doctorate</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid gap-2 sm:grid-cols-2">
                                                {university.programs
                                                    .filter(program => {
                                                        const category = selectedCategories[university.id] || 'all';
                                                        return category === 'all' || program.category === category || (category === 'PhD' && program.category === 'Doctoral Degree (PhD)');
                                                    })
                                                    .map((program, idx) => (
                                                        <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-medium">{program.title}</span>
                                                                <span className="text-xs text-muted-foreground">{program.category}</span>
                                                            </div>
                                                            <span className="text-sm text-primary font-bold">RM {program.fee.toLocaleString()}</span>
                                                        </div>
                                                    ))}
                                                {university.programs.filter(program => {
                                                    const category = selectedCategories[university.id] || 'all';
                                                    return category === 'all' || program.category === category;
                                                }).length === 0 && (
                                                        <div className="col-span-2 text-center text-sm text-muted-foreground py-2">
                                                            No programs found for this category.
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    )}
                                </GlassCard>
                            );
                        })}

                        {displayItems.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground">
                                No results found matching your criteria.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Universities;
