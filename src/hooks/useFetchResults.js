import { useState } from "react";
import axios from "axios";

export default function useFetchSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (keyword) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pre-onboarding-12th-3rd-server.vercel.app/api/sick?q=${encodeURIComponent(
          keyword
        )}`
      );
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { searchResults, error, loading, fetchSearchResults };
}
