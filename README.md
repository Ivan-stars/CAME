# Camenae Asia Website

A modern, responsive website for Camenae Asia showcasing their portfolio with an interactive carousel and clean design.

## Project Structure

```
CAME/
├── index.html          # Home page
├── about.html          # About Us page
├── work-simple.html    # Our Work page with simplified carousel
├── style.css           # Main stylesheet
└── images/
    ├── company logo.jpeg  # Company logo
    ├── Our work 1.png   # Portfolio image 1
    ├── Our work 2.png   # Portfolio image 2
    ├── Our work 3.png   # Portfolio image 3
    ├── Our work 4.png   # Portfolio image 4
    └── Our work 5.png   # Portfolio image 5
```

## Features

### Carousel (work-simple.html)
- **Responsive Image Gallery**: Displays portfolio images without cropping
- **Interactive Navigation**:
  - Next/Previous buttons
  - Dot indicators for direct slide access
  - Touch swipe support for mobile devices
  - Keyboard navigation (left/right arrows)
- **Auto-play**: Auto-advances every 2 seconds
  - Pauses on hover
  - Resets timer on manual navigation
- **Smooth Transitions**: Fade effects between slides
- **Responsive Design**: Adapts to all screen sizes

### General Features
- Modern, clean design
- Mobile-first responsive layout
- Fast loading and optimized performance
- Accessible navigation
- Consistent styling across all pages

## Setup Instructions

1. **Local Development**:
   - Run a local server to view the website (required for carousel functionality)
   - Using Python: `python3 -m http.server 3000`
   - Then open `http://localhost:3000` in your browser

2. **Image Requirements**:
   - Place your portfolio images in the `images/` folder
   - Name them: `Our work 1.png` through `Our work 5.png`
   - Recommended dimensions: Minimum 1200x800px for optimal quality
   - Format: PNG with transparent background preferred

2. **Logo**:
   - Replace `images/company logo.jpeg` with your company logo
   - Recommended size: At least 200px width, transparent background

3. **Customization**:
   - Update the color scheme in the CSS variables if needed
   - Adjust the carousel timing by modifying the `slideDuration` variable in work.html

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome for Android

## Technical Details

- **Carousel Implementation**:
  - Pure JavaScript (no external dependencies)
  - CSS transitions for smooth animations
  - Event delegation for dynamic elements
  - Touch event handling for mobile devices

- **Performance Optimizations**:
  - Efficient DOM manipulation
  - Event listener cleanup
  - Optimized image loading

## Notes

- The website uses modern CSS features and requires a modern browser
- Images should be optimized for web use
- The contact form currently shows a success message - you'll need to implement server-side handling
