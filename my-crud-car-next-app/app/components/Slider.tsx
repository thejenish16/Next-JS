'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Premium Cars",
        subtitle: "2024 Collection",
        description: "Explore our exclusive collection of premium cars. Find your dream car today.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    },
    {
        id: 2,
        title: "Luxury Drives",
        subtitle: "Top Brands",
        description: "TATA, Maruti Suzuki, Mahindra, Kia and more. Best deals on top brands.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
        id: 3,
        title: "Find Your Car",
        subtitle: "Best Prices",
        description: "Browse our inventory and find the perfect car at the best price.",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    }
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[88vh] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 translate-x-0' : index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
                    <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />

                    <div className="absolute inset-0 z-20 flex items-center">
                        <div className="max-w-7xl mx-auto px-8 w-full">
                            <div className="max-w-lg">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 mb-5">
                                    <span className="w-6 h-px bg-blue-400"></span>
                                    {slide.subtitle}
                                </span>
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-base text-white/70 mb-8 leading-relaxed max-w-sm">
                                    {slide.description}
                                </p>
                                <div className="flex gap-3">
                                    <a href="/viewCar" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/30">
                                        View Inventory
                                    </a>
                                    <a href="/addCar" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-xl border border-white/20 transition-all duration-200">
                                        Add Car
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-200">
                <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-200">
                <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-7 left-8 z-30 flex gap-1.5">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-blue-500' : 'w-1.5 bg-white/40'}`} />
                ))}
            </div>
        </div>
    );
}
