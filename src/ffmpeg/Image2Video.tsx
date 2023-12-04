import { FFmpeg } from "@ffmpeg/ffmpeg";
import { useEffect, useRef, useState } from "react";
import { extension, outputs, path } from "./constants";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export default async function image2Video(args: {
  videoRef: any;
  images: Object[];
  ffmpegRef: any;
}) {
  const { videoRef, images, ffmpegRef } = args;
  //images
  //music

  const ffmpeg = ffmpegRef.current;
  //write file for all images
  Object.keys(images).forEach(async (key, idx) => {
    //console.log(images[parseInt(key)])
  });

  const path = "https://images.pexels.com/photos/1474157/pexels-photo-1474157.jpeg";

  const file = await fetchFile(path);
  const file1 = await fetchFile(path);
  const file2 = await fetchFile(path);
  const file3 = await fetchFile(path);
  const file4 = await fetchFile(path);

  await ffmpeg.writeFile(`img-0.jpeg`, file);
  await ffmpeg.writeFile(`img-1.jpeg`, file1);
  await ffmpeg.writeFile(`img-2.jpeg`, file2);
  await ffmpeg.writeFile(`img-3.jpeg`, file3);
  await ffmpeg.writeFile(`img-4.jpeg`, file4);

  await ffmpeg.exec([
    "-framerate",
    "10",
    "-pattern_type",
    "glob",
    "-i", 
    `img-*.jpeg`,
    `${outputs.video}${extension.video}`,
  ]);

  const data = await ffmpeg.readFile(`${outputs.video}${extension.video}`);

  // @ts-ignore: Object is possibly 'null'.
  videoRef.current.src = URL.createObjectURL(
    // @ts-ignore: Object is possibly 'null'.
    new Blob([data.buffer], { type: "video/mp4" })
  );
}

export const ImageToVideo = () => {
  const videoRef = useRef(null);
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const onChange = (e: any) => {
    const files = e.target.files;
    if (videoRef) {
      image2Video({ videoRef: videoRef, images: files, ffmpegRef: ffmpegRef });
    }
  };

  const load = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      // @ts-ignore
      messageRef!.current!.innerHTML = message;
      console.log(message);
    });

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });
    setLoaded(true);
  };

  useEffect(() => {
    load();
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <label>Upload Images</label>
        <input type="file" multiple name="images" onChange={onChange} />
      </div>
      <div>
        <video ref={videoRef} controls />
      </div>
      <p ref={messageRef}></p>
    </div>
  );
};
