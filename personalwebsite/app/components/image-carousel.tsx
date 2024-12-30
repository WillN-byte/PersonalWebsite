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
import test from "../images/test.png";
const images = [
  test,
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
];

export function ImageCarousel() {
  return (
    <Carousel className="relative w-full">
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
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200" />
    </Carousel>
  );
}
