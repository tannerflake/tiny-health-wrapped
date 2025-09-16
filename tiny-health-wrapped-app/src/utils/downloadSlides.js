import html2canvas from 'html2canvas';
import JSZip from 'jszip';

export const downloadAllSlides = async (setShowToast) => {
  try {
    // Define all slide data
    const slideData = [
      { type: 'archetype', title: 'Your Gut Identity...', content: 'The Fermentation Front-Runner' },
      { type: 'percentile', title: 'Your Microbiome Diversity', content: '86th Percentile' },
      { type: 'insight', title: 'Key Insight', content: 'High Akkermansia levels' },
      { type: 'goal', title: 'Your Gut Goal for 2025', content: 'Balance your short-chain fatty acids' },
      { type: 'overgrowth', title: 'One strain is dominating…', content: 'Your Bacteroides levels are unusually high' },
      { type: 'guard', title: 'Gut Barrier Strength: ⚠️ Medium-Low', content: 'Your gut lining may be a little leaky' },
      { type: 'inflammation', title: 'Low Inflammation Markers — Nice!', content: 'You\'re in the calm zone' },
      { type: 'probiotic', title: 'You\'re Low in Key Probiotics', content: 'Your levels of Lactobacillus and Bifidobacterium are low' },
      { type: 'twins', title: 'You\'re Gut Twins With…', content: 'You\'re microbiome twins with 6.2% of other Tiny Health users' },
      { type: 'share', title: 'Share your gut story with your friends', content: 'Download your personalized gut health summary' }
    ];

    const zip = new JSZip();
    
    // Create a temporary container for rendering slides
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    tempContainer.style.width = '375px';
    tempContainer.style.height = '667px';
    document.body.appendChild(tempContainer);

    // Capture each slide by creating temporary elements
    for (let i = 0; i < slideData.length; i++) {
      const slide = slideData[i];
      
      // Create a temporary slide element
      const tempSlide = document.createElement('div');
      tempSlide.className = 'temp-slide';
      tempSlide.style.width = '375px';
      tempSlide.style.height = '667px';
      tempSlide.style.position = 'relative';
      tempSlide.style.overflow = 'hidden';
      
      // Add slide content based on type
      tempSlide.innerHTML = `
        <div style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          text-align: center;
          background: linear-gradient(135deg, #f2e587, #f9c07d);
          color: #3d3d45;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        ">
          <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 20px; text-shadow: 0 2px 4px rgba(255,255,255,0.3);">
            ${slide.title}
          </h1>
          <p style="font-size: 16px; line-height: 1.5; max-width: 300px; text-shadow: 0 1px 2px rgba(255,255,255,0.3);">
            ${slide.content}
          </p>
          <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 12px; opacity: 0.7;">
            tinyhealth.com
          </div>
        </div>
      `;
      
      tempContainer.appendChild(tempSlide);
      
      // Capture the slide
      const canvas = await html2canvas(tempSlide, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        width: 375,
        height: 667
      });
      
      // Add to zip
      const dataURL = canvas.toDataURL('image/png');
      const base64Data = dataURL.split(',')[1];
      zip.file(`slide-${i + 1}-${slide.type}.png`, base64Data, { base64: true });
      
      // Remove temp slide
      tempContainer.removeChild(tempSlide);
    }
    
    // Clean up temp container
    document.body.removeChild(tempContainer);
    
    // Generate and download zip
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.download = 'my-gut-health-wrapped-all-slides.zip';
    link.href = URL.createObjectURL(zipBlob);
    link.click();
    
    // Show toast notification
    if (setShowToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  } catch (error) {
    console.error('Error downloading slides:', error);
  }
};

export const copyLink = async (setShowToast) => {
  try {
    const link = window.location.href;
    await navigator.clipboard.writeText(link);
    if (setShowToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  } catch (error) {
    console.error('Failed to copy link:', error);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    if (setShowToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  }
};
