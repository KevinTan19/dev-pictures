"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import videos from "../lib/data-video.json";
import CardVideo from "@/components/card-video";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <Image
          src="/logo.png"
          width={160}
          height={160}
          alt=""
          className="animate-pulse"
        />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen pb-16 space-y-16">
      <Link href="/3" className="w-full">
        <Image
          src="/banner.jpg"
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <div className="w-full px-24 space-y-8">
        <p className="text-2xl font-bold">Drama</p>
        <Carousel>
          <CarouselContent>
            {videos.map((video) => {
              return (
                <CarouselItem className="basis-1/5" key={video.id}>
                  <CardVideo data={video} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
