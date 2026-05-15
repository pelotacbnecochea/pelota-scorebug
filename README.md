# Pelota Scorebug Overlay

A live streaming overlay widget for Pelota matches, featuring a scorebug display and remote control panel using Ably real-time messaging.

## Components

### 1. Gateway (index.html)
- Password-protected entry point (password: `****`)
- Provides links to the overlay and remote control panels

### 2. Overlay Widget (overlay.html)
- Transparent overlay for live streaming software (e.g., Prism Video)
- Displays scorebug or next match information
- Updates in real-time via Ably

### 3. Remote Control (remote.html)
- Web-based control panel for updating overlay content
- Real-time synchronization with overlay
- Features for score management, team info, and routing

## Setup

---

## Usage

### For Streaming
1. In your live streaming software (e.g., Prism Video), add a browser source
2. Set the URL to `https://pelotacbnecochea.github.io/pelota-scorebug/overlay.html?auth=****`
3. Position and size the overlay as needed
4. Use the remote control panel to update content in real-time

### Remote Control
1. Open `https://pelotacbnecochea.github.io/pelota-scorebug/remote.html?auth=****` in a separate browser/tab
2. Use the interface to update scores, team names, and overlay settings
3. Changes are instantly reflected in the overlay

## Features

- Real-time score updates
- Team logo support (via URL)
- Scalable overlay
- Next match preview box
- Hide/show various elements
- Persistent state via Ably channels

## Configuration

The Ably API key is hardcoded in the JavaScript by default. For production use, consider environment variables or secure key management.

You can override the built-in Ably key at runtime by appending `?ablyKey=YOUR_VALID_KEY` to both `remote.html` and `overlay.html`.

## Troubleshooting

- Ensure the local server is running
- Check browser console for Ably connection errors
- Verify CORS settings if accessing from different domains
- For Prism Video: Ensure the browser source allows transparency and has the correct dimensions

## Dependencies

- Ably JavaScript SDK (loaded via CDN)