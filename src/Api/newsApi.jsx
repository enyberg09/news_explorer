const NEWS_API_BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "4961443979844a5e9d4c2a499a709923";

/**
 * Search news articles by a query
 * Only fetch articles from the last 7 days, newest first.
 * @param {string} query - Search term.
 * @returns {Promise<Array>} - Array of news articles.
 */

export const searchNews = async (query) => {
    if (!query.trim()) return [];

    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);
    
    const month = String(fromDate.getMonth() + 1).padStart(2, "0");
    const day = String(fromDate.getDate()).padStart(2, "0");
    const year = fromDate.getFullYear();
    const from = `${year}-${month}-${day}`;

    const url = `${NEWS_API_BASE_URL}?q=${encodeURIComponent(
    query
  )}&from=${from}&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    console.log("Search URL:", url);
    if (!response.ok) {
        console.error("News API HTTP error:", response.status);
        return [];
    }

    const data = await response.json();
    console.log("API Response:", data);
    console.log("Number of articles:", data.articles?.length);
    
    const filteredArticles = (data.articles || []).filter(
      (article) =>
        article.title?.toLowerCase().includes(query.toLowerCase()) ||
        article.description?.toLowerCase().includes(query.toLowerCase())
    );
    
    console.log("Number of articles after filtering:", filteredArticles.length);
    return filteredArticles;
  } catch (error) {
    console.error("News API fetch error:", error);
    return [];
  }
};