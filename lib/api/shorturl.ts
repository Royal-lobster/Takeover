import axios from "axios";

interface ShortURLResponse {
  short_url: string;
  original_url: string;
  domain: string;
}

interface IsGdResponse {
  shorturl: string;
}

export async function createShortURL(longUrl: string): Promise<string> {
  try {
    const response = await axios.post<ShortURLResponse>(
      "https://spoo.me",
      new URLSearchParams({ url: longUrl }),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        timeout: 5000,
      },
    );

    return response.data.short_url;
  } catch (error) {
    console.error("Failed to create short URL with spoo.me:", error);

    try {
      const fallbackResponse = await axios.get<IsGdResponse>(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`,
        { timeout: 5000 },
      );
      return fallbackResponse.data.shorturl;
    } catch (fallbackError) {
      console.error("Fallback also failed:", fallbackError);
      throw new Error("Failed to create short URL");
    }
  }
}
