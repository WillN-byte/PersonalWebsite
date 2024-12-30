"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
];

export function ImageCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square">
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
