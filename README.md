# Hyunwook (Dennis) Lee - Academic Personal Website

A professional academic personal website hosted on GitHub Pages at [hyunwooklee.org](https://hyunwooklee.org).

## Table of Contents

- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Updating Content](#updating-content)
  - [Updating Your Bio](#updating-your-bio)
  - [Adding Research Projects](#adding-research-projects)
  - [Adding Experience Entries](#adding-experience-entries)
  - [Updating CV/About Page](#updating-cvabout-page)
  - [Updating Contact Information](#updating-contact-information)
- [Adding Your Headshot](#adding-your-headshot)
- [Adding Your CV PDF](#adding-your-cv-pdf)
- [Customizing the Design](#customizing-the-design)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [File Naming Conventions](#file-naming-conventions)

---

## File Structure

```
/
├── index.html          # Home page
├── about.html          # CV/About page
├── research.html       # Research projects page
├── experience.html     # Professional experience page
├── contact.html        # Contact information page
├── CNAME               # Custom domain configuration
├── README.md           # This file
├── css/
│   └── style.css       # All styles for the website
├── js/
│   └── script.js       # JavaScript for mobile navigation
├── images/
│   └── headshot.jpg    # Your professional headshot
└── files/
    └── cv.pdf          # Your downloadable CV
```

---

## Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/yourusername/mywebsite.git
   cd mywebsite
   ```

2. **Add your headshot**: Place your professional photo in the `images/` folder as `headshot.jpg`

3. **Add your CV**: Place your CV PDF in the `files/` folder as `cv.pdf`

4. **Update placeholder content**: Edit the HTML files to replace `[bracketed placeholders]` with your actual information

5. **Push changes**: Commit and push to deploy
   ```bash
   git add .
   git commit -m "Update personal information"
   git push origin main
   ```

---

## Updating Content

### Updating Your Bio

**File:** `index.html`

Find the hero section and update the bio paragraphs:

```html
<p>
    Welcome to my academic portfolio. I am an undergraduate researcher at Indiana
    University Bloomington with research interests in <strong>national security policy</strong>,
    <!-- Update this text with your actual bio -->
</p>
```

### Adding Research Projects

**File:** `research.html`

To add a new research project, copy this template and paste it in the appropriate section:

```html
<article class="research-item">
    <span class="research-status in-progress">In Progress</span>
    <h3>Your Research Title Here</h3>
    <p>
        Brief description of your research project. Include the research question,
        methodology, and significance. (2-3 sentences recommended)
    </p>
    <p class="text-muted">
        <em>Co-authors: Name, Name | Advisor: Prof. Name</em>
    </p>
</article>
```

**Status Options:**
- `in-progress` - Green badge for ongoing research
- `working-paper` - Orange badge for papers in draft/review
- `published` - Dark blue badge for published work

Change both the class and the text:
```html
<span class="research-status working-paper">Working Paper</span>
<span class="research-status published">Published</span>
```

### Adding Experience Entries

**File:** `experience.html`

To add a new experience entry, use this template:

```html
<div class="experience-item">
    <h3>Position Title</h3>
    <span class="organization">Organization Name</span>
    <span class="date">Start Date - End Date</span>
    <ul>
        <li>First responsibility or achievement</li>
        <li>Second responsibility or achievement</li>
        <li>Third responsibility or achievement</li>
    </ul>
</div>
```

**Sections available:**
- Research Experience
- Internships
- Leadership & Activities
- Teaching Experience (uncomment to enable)
- Volunteer Experience (uncomment to enable)

### Updating CV/About Page

**File:** `about.html`

**Education:**
```html
<div class="education-item">
    <p class="institution">University Name</p>
    <p class="degree">Degree Type</p>
    <p><strong>Major:</strong> Your Major</p>
    <p><strong>Minors:</strong> Your Minors</p>
    <p class="date">Expected Graduation: Month Year</p>
</div>
```

**Skills:**
Update the skills lists in each category:
```html
<div class="skill-category">
    <h4>Category Name</h4>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
    </ul>
</div>
```

**Awards:**
```html
<li><strong>Award Name</strong> - Organization, Year</li>
```

### Updating Contact Information

**File:** `contact.html`

**Email:** Update the mailto link:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

**LinkedIn:** Update the URL:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
    Connect on LinkedIn
</a>
```

**Enable Contact Form:**
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Replace `action="#"` with your Formspree URL:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## Adding Your Headshot

1. Prepare your photo:
   - Professional headshot recommended
   - Ideal size: 400x500 pixels (will display at 200x250)
   - Supported formats: JPG, PNG

2. Name the file `headshot.jpg`

3. Place it in the `images/` folder

4. The website will automatically display it on the home page

---

## Adding Your CV PDF

1. Export your CV as a PDF file

2. Name it `cv.pdf`

3. Place it in the `files/` folder

4. The download button on the home and about pages will link to it automatically

5. Update the "Last updated" text in `about.html`:
```html
<p class="text-muted mt-2"><em>Last updated: Month Year</em></p>
```

---

## Customizing the Design

**File:** `css/style.css`

### Changing Colors

Edit the CSS variables at the top of the file:

```css
:root {
    --color-primary: #1a1a2e;        /* Headers and brand */
    --color-accent: #0f4c75;          /* Links and buttons */
    --color-text: #333333;            /* Body text */
    --color-background: #ffffff;      /* Page background */
}
```

### Changing Fonts

Update the font variables:

```css
:root {
    --font-heading: 'Georgia', serif;
    --font-body: 'Helvetica Neue', Arial, sans-serif;
}
```

To use Google Fonts, add the link in the `<head>` of each HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

---

## Deploying to GitHub Pages

### Initial Setup (Already Done)

1. The repository is already configured for GitHub Pages
2. Custom domain `hyunwooklee.org` is set in the CNAME file

### Making Updates

1. Edit files locally or directly on GitHub
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```
3. GitHub Pages will automatically deploy (usually within 1-2 minutes)

### Custom Domain Setup

If you need to reconfigure the custom domain:

1. Go to repository Settings > Pages
2. Under "Custom domain", enter `hyunwooklee.org`
3. Enable "Enforce HTTPS"
4. Configure your domain's DNS:
   - Add an A record pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record: `yourusername.github.io`

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| HTML pages | lowercase, hyphenated | `about.html`, `research.html` |
| Images | lowercase, descriptive | `headshot.jpg`, `project-diagram.png` |
| PDFs | lowercase, descriptive | `cv.pdf`, `paper-title.pdf` |
| CSS/JS | lowercase | `style.css`, `script.js` |

**Tips:**
- Avoid spaces in file names (use hyphens instead)
- Use lowercase for all file names
- Keep names short but descriptive

---

## Quick Reference

### Common Tasks

| Task | File to Edit |
|------|--------------|
| Update bio | `index.html` |
| Add research project | `research.html` |
| Add experience | `experience.html` |
| Update CV info | `about.html` |
| Change email | `contact.html` |
| Change colors | `css/style.css` |
| Update headshot | Replace `images/headshot.jpg` |
| Update CV PDF | Replace `files/cv.pdf` |

### Placeholder Markers

Look for these patterns to find content that needs updating:
- `[Text in brackets]` - Replace with your information
- HTML comments `<!-- INSTRUCTION -->` - Follow the instructions
- Commented sections `<!-- ... -->` - Uncomment to enable features

---

## Support

For questions about HTML/CSS, consult:
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)

For GitHub Pages issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

*Last updated: January 2025*
