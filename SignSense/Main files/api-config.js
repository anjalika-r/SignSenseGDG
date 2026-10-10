// Local development uses the Python server at the current origin. The hosted
// Netlify site uses Cloud Run for the TensorFlow/MediaPipe recognition API.
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);
window.SIGNSENSE_API_BASE = LOCAL_HOSTS.has(window.location.hostname)
  ? ''
  : 'https://signsense-api-222535336822.australia-southeast1.run.app';
