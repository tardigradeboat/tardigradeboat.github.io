# Narrowboat Sales Website

A beautiful, modern single-page website designed to showcase and sell your narrowboat. Features responsive design, smooth animations, and engaging visual storytelling.

## Features

- 🎨 **Modern Design**: Clean, professional layout with beautiful gradients and animations
- 📱 **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- 🖼️ **Image Gallery**: Interactive gallery with lightbox functionality
- 🔧 **Technical Specs**: Dedicated section for boat specifications
- 📸 **Before/After Showcase**: Renovation journey documentation
- 🎬 **Smart Features**: Demo sections for GIFs/videos of smart systems
- 💰 **Pricing & Contact**: Clear pricing and easy contact options
- ⚡ **Fast Loading**: Optimized performance and image handling
- 🎭 **Smooth Animations**: Engaging scroll-triggered animations

## Quick Start

1. **Clone/Download** this repository
2. **Add your images** to the `images/` folder (create this folder)
3. **Update content** in `index.html`
4. **Customize styling** in `styles.css` if needed
5. **Open** `index.html` in a web browser

## Customization Guide

### 1. Adding Your Images

Create an `images/` folder and add your photos with these recommended names:

**Hero Section:**
- `boat-hero.jpg` - Your best exterior shot (landscape orientation)

**Gallery:**
- `interior-1.jpg` - Interior view 1
- `interior-2.jpg` - Interior view 2
- `exterior-1.jpg` - Exterior view
- `kitchen.jpg` - Kitchen area
- `bedroom.jpg` - Bedroom area
- `living.jpg` - Living area

**Technical Specs:**
- `solar-panels.jpg` - Solar panel installation

**Renovation:**
- `before-1.jpg` - Before renovation photo 1
- `after-1.jpg` - After renovation photo 1
- `before-2.jpg` - Before renovation photo 2
- `after-2.jpg` - After renovation photo 2

**Smart Features:**
- `lighting-demo.gif` - Dimmable lighting demo
- `water-sensor.gif` - Water tank sensor display
- `battery-display.gif` - Battery monitoring system

### 2. Updating Content

Open `index.html` and customize these sections:

#### Contact Information
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+447XXXXXXXXX">+44 7XXX XXX XXX</a>
```

#### Pricing
```html
<div class="price">£XX,XXX</div>
```

#### Boat Details
Update the technical specifications, features, and descriptions throughout the HTML.

### 3. Color Scheme

The website uses a modern color palette. To change colors, edit these CSS variables in `styles.css`:

**Primary Colors:**
- Hero gradient: `#667eea` to `#764ba2`
- Accent buttons: `#ff6b6b` and `#ee5a24`
- Tech section: `#2c3e50` to `#34495e`

**Key Color Classes:**
- `.hero` - Main hero background
- `.tech-specs` - Technical section background
- `.smart-features` - Smart features background
- `.cta-button` - Call-to-action button
- `.contact-button` - Contact button

### 4. Adding More Images

To add more gallery images:

1. Add the image to your `images/` folder
2. Copy a gallery item in the HTML:
```html
<div class="gallery-item">
    <img src="images/your-new-image.jpg" alt="Description">
    <div class="image-placeholder">📸 Your Description</div>
</div>
```

### 5. Customizing Text

Key sections to customize:

- **Hero Title**: "Stunning Narrowboat for Sale"
- **Hero Subtitle**: "Fully renovated luxury narrowboat in the heart of London"
- **Technical Specs**: Update each spec item with your boat's details
- **Pricing**: Add your asking price and included items
- **Contact**: Add your contact information

### 6. Advanced Customization

#### Adding New Sections
To add a new section, follow this pattern:

```html
<section class="your-section-class">
    <div class="container">
        <h2>Your Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

#### Modifying Animations
Animations are controlled in `script.js`. Key features:
- Scroll-triggered animations
- Lightbox gallery
- Smooth scrolling
- Hover effects

#### Mobile Responsiveness
The site is fully responsive. Check these breakpoints in `styles.css`:
- `1024px` - Tablet landscape
- `768px` - Tablet portrait
- `480px` - Mobile

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use web-optimized formats (JPEG for photos, PNG for graphics)
2. **Image Sizes**: Keep images under 2MB each
3. **GIFs**: Keep GIFs under 5MB for fast loading
4. **Testing**: Test on multiple devices and screen sizes

## File Structure

```
narrowboat-website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Your photos (create this folder)
    ├── boat-hero.jpg
    ├── interior-1.jpg
    ├── lighting-demo.gif
    └── ...
```

## Support

If you need help customizing the website:

1. Check the placeholders in the HTML for guidance
2. All image placeholders show where to place specific photos
3. Comments in the code explain key sections
4. The website works without images - placeholders will show instead

## Tips for Best Results

1. **High-Quality Photos**: Use the best resolution photos you have
2. **Consistent Lighting**: Try to maintain consistent lighting across photos
3. **Before/After**: Make sure before/after photos show the same area
4. **GIF Quality**: Create smooth, looping GIFs for the smart features
5. **Mobile Testing**: Always test on mobile devices

## Deployment

To put your website online:

1. **GitHub Pages**: Upload to GitHub and enable Pages
2. **Netlify**: Drag and drop your folder to Netlify
3. **Web Hosting**: Upload files to any web hosting service

---

**Ready to sell your narrowboat?** Customize this website with your photos and details, and you'll have a professional sales platform that showcases all the hard work you've put into your floating home! 🚤 