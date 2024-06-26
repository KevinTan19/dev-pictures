"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WatchPage({ params }) {
  return (
    <div>
      <Link href={`/${params.id}`} className="absolute m-2 z-[5]">
        <Image src="/close.png" alt="close button" width={48} height={48} />
      </Link>
      <video width="1280" height="720" controls>
        <source
          src={"https://drm-test.kineticastudios.com/gotg2-trailer.mp4"}
          type="video/mp4"
        />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
