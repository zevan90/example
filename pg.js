const fs = require('fs');
const path = require('path');

// Load the JSON file
const data = require('./all.json');

// Ensure output folder exists
const outputDir = path.join(__dirname, 'pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Generate HTML files
data.forEach(item => {
  const rawTitle = typeof item.Title === 'string' ? item.Title : 'untitled';
  const safeTitle = rawTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  const filename = `${safeTitle}.html`;
  const filePath = path.join(outputDir, filename);

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${rawTitle}</title>
 <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/dpage.css">
  
</head>
<body>
<header>
    <nav class="navbar">
      <div class="navbar-top">
        <a href="#" class="logo">🎬 Moviewala</a>
        <div class="menu-toggle" id="menu-toggle">
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>
      </div>

      <ul class="nav-links" id="nav-links">
        <li><a href="/index.html">Home</a></li>
        <li>
          <a href="#">Hollywood ▾</a>
          <div class="dropdown-content">
            <a href="#">Action</a>
            <a href="#">Drama</a>
            <a href="#">Sci-Fi</a>
          </div>
        </li>
        <li><a href="#">Bollywood</a></li>
        <li><a href="#">Webseries</a></li>
        <li><a href="#">New</a></li>
      </ul>

      <!-- Search bar -->
      <form action="https://www.google.com/search" class="search">
        <input name="q" type="search" placeholder="Search Here ..." />
        <button type="submit">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="Search" width="24" height="24">
        </button>
      </form>
    </nav>
  </header>

 <div class="container">
    <div class="header">
      <div class="poster">
        <img src="${item.Poster}">
      </div>
      <div class="details">
        <h1>${rawTitle}</h1>
        <div class="meta">
          <span><strong>Language:</strong> ${item.Language}</span>
          <span><strong>Release Date:</strong> ${item["Release Date"]}</span>
          <span><strong>Cast: </strong>${item.Cast}</span>
          <span><strong>Genre: </strong>${item.Genre}</span>
          <span><strong>Duration: </strong>${item.Duration}</span>
          <span><strong>More details: </strong>${item["More details"]}</span>          

        </div>
        <div class="description">
                ${item.Description}
        </div>
      </div>
    </div>

    <div class="downloads">
      <h2>Download Links</h2>
      <a href="/html/Maintainence.html">⬇️ 480p WEBRip – 400MB – [Hindi + English]</a>
      <a href="/html/Maintainence.html">⬇️ 720p WEBRip – 800MB – [Hindi + English]</a>
      <a href="/html/Maintainence.html">⬇️ 1080p WEBRip – 1.5GB – [Hindi + English]</a>
      <a href="/html/Maintainence.html">⬇️ 2160p 4K – 4.5GB – [Hindi + English]</a>
      <a href="/html/Maintainence.html">🎧 Hindi Audio Track – 96MB – AAC</a>
      <a href="/html/Maintainence.html">📜 English Subtitles – SRT File</a>
    </div>
  </div>
  <script>
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  </script>
</body>
</html>
`;

  fs.writeFileSync(filePath, htmlContent.trim());
  console.log(`Created: ${filename}`);
});

