"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

const slides: Slide[] = [
    {
        id: 1,
        title: "Discover Great Books",
        subtitle: "New Arrivals",
        description: "Explore thousands of titles across every genre. Your next favourite read is just a click away.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
        id: 2,
        title: "Build Your Library",
        subtitle: "Manage Collection",
        description: "Add, edit and organise your personal book collection with ease. Keep track of every book you own.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
        id: 3,
        title: "Read More, Learn More",
        subtitle: "Every Day",
        description: "From fiction to technology, history to self-help — find books that inspire and educate.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    },
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
        <div className="relative h-[70vh] w-full overflow-hidden bg-gray-100">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide ? "opacity-100 translate-x-0" : index < currentSlide ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                    }`}
                >
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center text-white px-4 max-w-3xl mx-auto">
                            <span className="inline-block text-xs uppercase tracking-widest mb-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-medium">
                                {slide.subtitle}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{slide.title}</h1>
                            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-2.5 transition-all">
                <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-2.5 transition-all">
                <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? "bg-white w-6" : "bg-white/50"}`} />
                ))}
            </div>
        </div>
    );
}
