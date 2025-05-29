"use client";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// Video type definition
interface Video {
  id: number;
  src: string;
  title: string;
  thumbnail: string;
}

// Sample video data - replace with your actual videos
const videos: Video[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/ddcuspzza/video/upload/v1748541733/andrew-unedited_dqspyk.mp4",
    title: "Meet Andrew",
    thumbnail:
      "https://res.cloudinary.com/ddcuspzza/video/upload/v1748541733/andrew-unedited_dqspyk.jpg", // Add thumbnail images
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/ddcuspzza/video/upload/f_mp4/v1748541732/IMG_5740_bcw1lt.mov",
    title: "Book a consultation",
    thumbnail: "/assets/images/video-thumbnail.png",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/ddcuspzza/video/upload/f_mp4/v1748541736/IMG_5745_i9xfel.mov",
    title: "Your most attractive quality",
    thumbnail: "/assets/images/video-thumbnail.png",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/ddcuspzza/video/upload/f_mp4/v1748541747/IMG_5738_tjbnmf.mov",
    title: "Choose your love",
    thumbnail: "/assets/images/video-thumbnail.png",
  },
];

interface VideoThumbnailsProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
  activeVideoId: number;
}

function VideoThumbnails({
  videos,
  onVideoSelect,
  activeVideoId,
}: VideoThumbnailsProps) {
  return (
    <div className="flex gap-6 mt-6 overflow-x-auto pb-2 w-full justify-center items-center flex-col md:flex-row">
      {videos.map(video => (
        <div
          key={video.id}
          className={`w-[80%] p-1 mt-2 md:w-auto flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 ${
            activeVideoId === video.id
              ? "ring-2 ring-blue-500"
              : "hover:shadow-lg"
          }`}
          onClick={() => onVideoSelect(video)}
        >
          <div className="relative w-full h-28 md:w-48 md:h-28 bg-gray-200 rounded-lg overflow-hidden">
            {/* Thumbnail image */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                const nextSibling = target.nextSibling as HTMLVideoElement;
                target.style.display = "none";
                nextSibling.style.display = "block";
              }}
            />
            {/* Fallback video element */}
            <video
              src={video.src}
              className="w-full h-full object-cover hidden"
              muted
              preload="metadata"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-10 transition-all">
              <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-sm font-medium mt-2 text-center px-2 leading-tight">
            {video.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Videos() {
  const [featuredVideo, setFeaturedVideo] = useState(videos[0]);
  const thumbnailVideos = videos;

  const handleVideoSelect = (video: Video): void => {
    setFeaturedVideo(video);
  };

  return (
    <div
      className={`${inter.className} mt-6 md:mt-0 flex flex-col relative justify-center items-center h-content px-4`}
    >
      <div className="md:my-4 w-full max-w-4xl px-4">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <a
            href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden block top-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-lg hover:shadow-xl z-10 text-center mb-4"
          >
            Book a Session
          </a>
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <video
              key={featuredVideo.src}
              controls
              src={featuredVideo.src}
              className="absolute inset-0 w-full h-full object-cover"
            >
              Sorry—your browser doesn&apos;t support embedded videos.
            </video>
            {/* Calendly Button Overlay */}
            <a
              href="https://calendly.com/tarzantechnique/new-client-intake-5-dollars-60-mins-brt-goals"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-lg hover:shadow-xl z-10"
            >
              Book a Session
            </a>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4 text-center">
          {featuredVideo.title}
        </h3>
      </div>

      {/* Video Thumbnails */}
      <div className="w-full max-w-4xl">
        <h4 className="text-lg font-medium mb-2 text-center">More Videos</h4>
        <VideoThumbnails
          videos={thumbnailVideos}
          onVideoSelect={handleVideoSelect}
          activeVideoId={featuredVideo.id}
        />
      </div>
    </div>
  );
}
