import React from 'react';
import { cn } from "@/lib/utils"

const GlassCard = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl rounded-xl p-6 transition-all duration-500",
                "hover:shadow-2xl hover:shadow-primary/20 hover:bg-white/10 hover:scale-[1.02] hover:border-primary/30",
                "group relative overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GlassCard;
