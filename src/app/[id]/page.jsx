"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/navbar";
import Link from "next/link";

import React from "react";
import videos from "../../lib/data-video.json";

export default function DetailPage({ params }) {
  // React.useEffect(() => {
  //   console.log(getVideoData);
  // }, [params]);

  const videoData = videos.find((video) => video.id === params.id);
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen pb-16">
        <div className="w-full">
          <Image
            src="/banner.jpg"
            alt="banner"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="z-[-1] relative"
          />
          <div className="w-full h-[200px] mt-[-200px] bg-gradient-to-b from-transparent to-slate-50 z-[5]"></div>
        </div>
        <div className="flex w-full px-24 py-6 gap-x-6">
          <Link
            href={`/${params.id}/watch`}
            className="flex flex-col items-center"
          >
            <Image
              src="/thumbnail.jpg"
              alt="thumbnail"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="mt-[-164px] shadow-md rounded-lg"
            />
            <Image
              src="/play-button.png"
              alt="play button"
              width={64}
              height={64}
              className="mt-[-164px]"
            />
          </Link>
          <div className="w-full space-y-4">
            <h1 className="text-3xl font-bold">{videoData.name}</h1>
            <div className="flex gap-x-2">
              <div className="px-2 py-1.5 rounded-lg bg-slate-200">
                <p className="text-sm">{videoData.duration} Minutes</p>
              </div>
              {videoData.genre.map((genre) => {
                return (
                  <div
                    className="px-2 py-1.5 rounded-lg bg-slate-200"
                    key={genre}
                  >
                    <p className="text-sm">{genre}</p>
                  </div>
                );
              })}
            </div>
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">Info Film</TabsTrigger>
                <TabsTrigger value="detail">Detail Film</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <p className="text-sm">{videoData.description}</p>
              </TabsContent>
              <TabsContent value="detail">
                <div className="flex gap-x-4">
                  <div className="flex flex-col gap-4 text-sm font-medium max-w-fit">
                    <p>Rating</p>
                    <p>Year</p>
                    <p>Genre</p>
                    <p>Producer</p>
                    <p>Director</p>
                    <p>Cast</p>
                  </div>
                  <div className="flex flex-col gap-4 text-sm">
                    <p>{videoData.rating}</p>
                    <p>{videoData.year}</p>
                    <p>{videoData.genre.join(", ")}</p>
                    <p>{videoData.producer}</p>
                    <p>{videoData.director}</p>
                    <p>{videoData.cast.join(", ")}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </>
  );
}
