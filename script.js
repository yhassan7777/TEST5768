
document.addEventListener('DOMContentLoaded', function() {
  // Get the education section and video
  const educationSection = document.getElementById('education');
  const educationVideo = document.getElementById('educationVideo');
  
  // Automatically show and play the video in the education section
  if (educationVideo) {
    // Make the video visible immediately
    const videoBackground = educationSection.querySelector('.section-video-background');
    if (videoBackground) {
      videoBackground.style.opacity = '1';
    }
    
    // Play the video
    educationVideo.play().catch(error => {
      console.log("Auto-play was prevented by the browser: ", error);
      // Add a play button or other UI if autoplay is blocked
    });
  }
  
  // Optional: Pause the video when it's not in view to save resources
  window.addEventListener('scroll', function() {
    const rect = educationSection.getBoundingClientRect();
    const isInView = (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
    
    if (isInView) {
      if (educationVideo && educationVideo.paused) {
        educationVideo.play().catch(e => console.log("Could not play video: ", e));
        
        // Ensure the video is visible
        const videoBackground = educationSection.querySelector('.section-video-background');
        if (videoBackground) {
          videoBackground.style.opacity = '1';
        }
      }
    } else {
      if (educationVideo && !educationVideo.paused) {
        educationVideo.pause();
      }
    }
  });
});
