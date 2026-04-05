import React, { useEffect, useRef, useState } from "react"
import { withPrefix } from "gatsby"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/NVIDIA.scss"
import NvidiaModal from "./NvidiaModal"

const AnimatedTitle = ({ text, letterClass }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className={`about-letter ${letterClass}`}
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
)

// Videos hosted on GitHub Releases (keeps repo lightweight)
const RELEASES_BASE =
  "https://github.com/Asma199-alt/portfolio/releases/download/videos";

const h1FlipGif = `${RELEASES_BASE}/Archelology2.mp4`;
const frankaMoveitVideo = `${RELEASES_BASE}/sim.mp4`;
const newton = `${RELEASES_BASE}/singularity.mp4`;
const claw = `${RELEASES_BASE}/gripper.mp4`;
const urLousdVideo = withPrefix("/bimanual-object-handling.mp4");
const siggraphTalk = `${RELEASES_BASE}/bimanualpickplace.mp4`;



// Helper to detect video media
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = [".webm", ".mp4", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

const NvidiaPreviewVideo = ({ src, className, previewStart, previewEnd }) => {
  const videoRef = useRef(null);
  const hasPreviewWindow =
    typeof previewStart === "number" && typeof previewEnd === "number";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasPreviewWindow) return;

    const safeStart = Math.max(0, previewStart);
    const safeEnd = Math.max(safeStart, previewEnd);

    const seekToStartIfNeeded = () => {
      try {
        if (
          Number.isFinite(video.currentTime) &&
          (video.currentTime < safeStart || video.currentTime > safeEnd)
        ) {
          video.currentTime = safeStart;
        }
      } catch (_) {
        // ignore
      }
    };

    const handleLoadedMetadata = () => {
      seekToStartIfNeeded();
      video.play().catch(() => { });
    };

    const handleTimeUpdate = () => {
      // Add a tiny cushion so it loops cleanly
      if (video.currentTime >= safeEnd - 0.05) {
        try {
          video.currentTime = safeStart;
          video.play().catch(() => { });
        } catch (_) {
          // ignore
        }
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // If metadata is already available, apply immediately
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [hasPreviewWindow, previewStart, previewEnd, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      loop={!hasPreviewWindow}
      playsInline
      preload="metadata"
      loading="lazy"
    />
  );
};

const NVIDIA = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [letterClass, setLetterClass] = useState("text-animate-hover");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setLetterClass("text-animate");
          const timer = setTimeout(() => setLetterClass("text-animate-hover"), 3000);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasAnimated]);

  // Media mapping
  const mediaMap = {
    h1FlipGif,
    frankaMoveitVideo,
    claw,
    urLousdVideo,
    newton,
    siggraphTalk
  };

  // Prepare items with resolved media
  const items = data.nvidiaCarouselItems.map((item) => {
    const baseMedia = mediaMap[item.media];
    const galleryKeys = item.gallery || [];
    const galleryMedia = galleryKeys
      .map((key) => mediaMap[key])
      .filter(Boolean);

    const mediaList = [baseMedia, ...galleryMedia];

    return {
      ...item,
      media: baseMedia,
      mediaList,
      title: getText(item.title, language),
      description: getText(item.description, language),
      tags: item.tags || [],
    };
  });

  return (
    <div className="section" id="nvidia" ref={sectionRef}>
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>
            <AnimatedTitle text={getText(data.sections.nvidia, language)} letterClass={letterClass} />
          </h1>
        </Fade>

        <div className="nvidia-wrapper">
          <div className="nvidia-projects">
            {items.map((item, index) => (
              <button
                type="button"
                className="nvidia-project"
                key={index}
                aria-label={`Open details for ${item.title}`}
                onClick={() => {
                  setSelectedIndex(index);
                  setOpenModal(true);
                }}
              >
                <Fade bottom distance="20px">
                  <div className="nvidia-media">
                    {isVideoFile(item.media) ? (
                      <NvidiaPreviewVideo
                        className="nvidia-media-element"
                        src={item.media}
                        previewStart={item.previewStart}
                        previewEnd={item.previewEnd}
                      />
                    ) : (
                      <img
                        className="nvidia-media-element"
                        src={item.media}
                        alt={item.title}
                        loading="lazy"
                      />
                    )}

                    <div className="nvidia-media-overlay">
                      <div className="nvidia-media-overlay-button">
                        View
                      </div>
                    </div>
                  </div>
                </Fade>

                <Fade bottom distance="20px">
                  <div className="nvidia-project-body">
                    <h2 className="nvidia-project-title">{item.title}</h2>
                    {item.tags && item.tags.length > 0 && (
                      <div className="nvidia-project-tags">
                        {item.tags.map((tag, tIndex) => (
                          <span
                            className="nvidia-project-tag"
                            key={`${item.title}-${tIndex}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="nvidia-project-description">
                      Click for more
                    </p>
                  </div>
                </Fade>
              </button>
            ))}
          </div>

          {openModal && (
            <NvidiaModal
              item={items[selectedIndex]}
              id={selectedIndex}
              totalItems={items.length}
              onPrevious={() =>
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
              onNext={() =>
                setSelectedIndex((prev) =>
                  prev < items.length - 1 ? prev + 1 : prev
                )
              }
              closeModal={setOpenModal}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default NVIDIA
