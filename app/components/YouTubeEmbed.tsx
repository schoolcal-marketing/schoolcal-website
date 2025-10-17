interface YouTubeEmbedProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  // Handle youtu.be URLs (like https://youtu.be/9F6VvnPtot0?si=...)
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (youtuBeMatch) {
    return youtuBeMatch[1];
  }
  
  // Handle youtube.com URLs (like https://www.youtube.com/watch?v=9F6VvnPtot0&si=...)
  const youtubeMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (youtubeMatch) {
    return youtubeMatch[1];
  }
  
  // Handle embed URLs
  const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) {
    return embedMatch[1];
  }
  
  return null;
}

export default function YouTubeEmbed({ videoUrl, title = "Video", className = "" }: YouTubeEmbedProps) {
  const videoId = getYouTubeVideoId(videoUrl);
  
  // Debug logging
  console.log('YouTubeEmbed Debug:', {
    videoUrl,
    videoId,
    title
  });
  
  if (!videoId) {
    return (
      <div className={`aspect-video bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-gray-500">Invalid YouTube URL: {videoUrl}</p>
      </div>
    );
  }

  return (
    <div className={`aspect-video rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
