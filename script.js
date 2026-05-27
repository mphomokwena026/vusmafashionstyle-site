// Load Makro Images
function loadMakroImages() {
  // Set main image
  const mainImg = document.getElementById('makro-main-img');
  if (mainImg && MAKRO_IMAGES.main) {
    mainImg.src = MAKRO_IMAGES.main;
  }

  // Populate gallery
  const gallery = document.getElementById('makro-gallery');
  if (gallery && MAKRO_IMAGES.gallery) {
    gallery.innerHTML = MAKRO_IMAGES.gallery.map((imgUrl, index) => `
      <div class="gallery-item">
        <img src="${imgUrl}" alt="Makro Campaign ${index + 1}" loading="lazy">
      </div>
    `).join('');
  }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadMakroImages);