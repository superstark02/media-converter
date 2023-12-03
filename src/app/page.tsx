"use client";

import AddSubtitles from "@/ffmpeg/AddSubtitles";
import Interlace from "@/ffmpeg/Interlace";

export default function Home() {

  return (
    <div>
      <div>
        <AddSubtitles />
      </div>
      <div>
        <Interlace />
      </div>
    </div>
  );
}
