const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  // Parse URL
  const parsedUrl = url.parse(req.url);
  // Extract URL path
  let pathname = path.join(__dirname, parsedUrl.pathname);
  
  // If no file extension, serve index.html
  if (req.url === '/' || req.url === '') {
    pathname = path.join(__dirname, 'index.html');
  }
  
  // Get file extension and set content type
  const ext = path.parse(pathname).ext.toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Read file from file system
  fs.readFile(pathname, (err, content) => {
    if (err) {
      if(err.code === 'ENOENT') {
        // Page not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>', 'utf-8');
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Available pages:');
  console.log(`- Home: http://localhost:${PORT}/`);
  console.log(`- About: http://localhost:${PORT}/about.html`);
  console.log(`- Work: http://localhost:${PORT}/work.html`);
  console.log('\nPress Ctrl+C to stop the server');
});
