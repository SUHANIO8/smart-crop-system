import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const imageService = {
  async getCropImage(cropName) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          query: `${cropName} crop agriculture`,
          per_page: 1,
          client_id: ACCESS_KEY
        }
      });
      // Return the image URL or a standard farming placeholder if not found
      return response.data.results[0]?.urls?.regular || 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000';
    } catch (error) {
      return 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000';
    }
  }
};