"use client";

import AddSubtitles from "@/ffmpeg/AddSubtitles";
import { ImageToVideo } from "@/ffmpeg/Image2Video";
import Interlace from "@/ffmpeg/Interlace";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <div>Add text over video</div>
        <AddSubtitles />
      </div>
      <div>
        <div>Interlace 2 videos</div>
        <Interlace />
      </div>
      <div>
        <div>Image To Video</div>
        <ImageToVideo />
      </div>
    </div>
  );
}
