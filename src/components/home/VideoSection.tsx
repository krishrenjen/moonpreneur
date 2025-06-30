"use client";
import { useState } from "react";
import VideoPreview from "@/components/common/media/Video/VideoPreview";
import CustomCarousel from "../common/carousel/carousel";
import useDimensions from "@/hooks/useDimensions";

type VideoSectionItem = {
  section: string;
  videos: string[];
};

type VideoCategory = {
  category: string;
  items: VideoSectionItem[];
};

type VideoSectionProps = {
  video_data: VideoCategory[];
};

export default function VideoSection({ video_data }: VideoSectionProps) {
  const [selectedSection, setSelectedSection] = useState<VideoSectionItem | null>(video_data[0]?.items[0] || null);
  const { width } = useDimensions();

  return (
    <div className="w-full max-w-6xl px-4 py-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-medium mb-4">A Peek Into Moonpreneur</h1>

      {/* Tabs grouped by category */}
      <div className="w-full flex flex-col gap-6">
        {video_data.map((category, catIdx) => (
          <div key={catIdx} className="w-full">
            <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
            <div className="flex gap-2 flex-wrap">
              {category.items.map((item, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded-md text-sm font-light transition ${
                    selectedSection?.section === item.section ? "bg-brand-yellow text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                  }`}
                  onClick={() => setSelectedSection(item)}
                >
                  {item.section}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Show videos for the selected section */}
      {selectedSection && (
        <div className="mt-8 flex flex-col items-center justify-center w-full gap-4">
          <h3 className="text-2xl font-medium">{selectedSection.section}</h3>
          {selectedSection.videos.length > 0 && (
            <p className="text-gray-600 text-center max-w-2xl">
              {selectedSection.videos.length} {selectedSection.videos.length === 1 ? "video" : "videos"} available in this section.
            </p>
          )}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center w-fit">
            {selectedSection.videos.length > 0 ? (
              <CustomCarousel className="w-full" arrows={width > 768 && selectedSection.videos.length > 2} numberOfItemsPerSlide={2}>
                {selectedSection.videos.map((videoId, i) => (
                  <VideoPreview key={i} className="w-96 select-none" videoId={videoId} />
                ))}
              </CustomCarousel>
            ) : (
              <p className="text-gray-500 italic">No videos available yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
