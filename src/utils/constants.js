export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}` // Use environment variable for API key
  }
};

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY; // Use environment variable for OpenAI key

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", label: "English" },
  { identifier: "kannada", label: "Kannada" },
  { identifier: "spanish", label: "Spanish" }]