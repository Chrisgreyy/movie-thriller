# Thriller Movie Platform

## 1. The Design Language: "The Thriller Aesthetic"

Modern thriller platforms (like Netflix or Mubi) don't just use black; they use **"Layers of Shadow."**

### Primary Palette
- **Deep Charcoal** (#0a0a0a)
- **Blood Red accents** (#e50914)
- **Neon Cyan** or **Cold White** for high-priority UI elements

### Typography
Use bold, high-contrast Sans-Serif fonts (like **Inter** or **Bebas Neue**) for titles to create a "cinematic" feel.

### Texture
Add a very subtle **"Film Grain"** overlay to the entire site using a fixed div with a low-opacity noise GIF.

## 2. Technical Setup & TMDB Integration

To get only thrillers and organize your "Top 10," use these specific TMDB (v3) configurations.

### Essential API Logic

**Genre Filtering:** The TMDB ID for Thriller is `53`.

**Endpoint:** `https://api.themoviedb.org/3/discover/movie?with_genres=53`

### Top 10 Logic

- **Daily:** `/trending/movie/day` (Filter for genre 53 in your frontend)
- **Weekly:** `/trending/movie/week` (Filter for genre 53)
- **Monthly:** Use `/discover/movie` with `primary_release_date.gte` and `primary_release_date.lte` set to the current month, sorted by `popularity.desc`

### Data Fetching Tip
Use **React Query (TanStack Query)**. It's the industry standard for Vite/React apps to handle caching, so your "Top 10" lists don't reload every time a user switches tabs.

## 3. The "Fancy" UI Components

### Hero Section (Swiper JS)
Instead of a basic slider, use a **"Fade Effect"** or **"Creative Effect"** in Swiper.

**The Idea:** The background image changes with a slow zoom (Ken Burns effect), while the text (Title, Description) slides in using Framer Motion.

**Pro Tip:** Use the Swiper component with `parallax={true}` to make the movie title move at a different speed than the background poster.

### Movie Cards (Framer Motion)
Give your posters a **"Hover & Reveal"** interaction.

**Animation:** On hover, scale the card to 1.1 and show a "Play" button with a Glitch Effect (perfect for Thrillers).

**Layout:** Use a Grid with auto-fill to ensure responsiveness.

```jsx
// Quick Framer Motion card example
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="relative rounded-lg overflow-hidden border border-white/10"
>
  <img src={posterUrl} alt="thriller" />
  <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity" />
</motion.div>
```

## 4. Recommendation System

To make the platform feel "smart," implement these two recommendation layers:

### User-Based (Similar)
When a user clicks a movie, fetch:
- `/movie/{id}/similar` — This finds movies with similar themes/metadata.

### Algorithm-Based (Recommendations)
- `/movie/{id}/recommendations` — This uses TMDB's actual user behavior data (what people watched after watching this one).

## 5. YouTube Integration

Since your videos are from YouTube, you need to link the TMDB data to a player.

### Steps:
1. For any movie, call `/movie/{id}/videos`
2. Filter the results for `type: "Trailer"` and `site: "YouTube"`
3. Use the **react-player** library. It is much more modern and customizable than standard iframes.

```jsx
import ReactPlayer from 'react-player/youtube';

// Inside your component
<ReactPlayer
  url={`https://www.youtube.com/watch?v=${trailerKey}`}
  playing={true}
  controls={true}
  width="100%"
  height="100%"
/>
```

## 6. Guidelines for the "Modern" Touch

### Skeleton Screens
Don't show a "Loading..." spinner. Use gray shimmering boxes that match your movie card shapes while the TMDB data fetches.

### Glassmorphism
Use `backdrop-filter: blur(10px)` on your navigation bar and movie detail modals. It gives a premium, "Apple-style" depth.

### Scroll-Triggered Animations
Use Framer Motion's `whileInView` prop so that movie rows "slide up" into view as the user scrolls down.