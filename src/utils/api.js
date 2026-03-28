const API_KEY = process.env.AIzaSyBaVElx8O3e8XrA8DtweuGMc67HYpiLi3Y;


// -----------------------------
// 🔹 TEXT ENHANCEMENT
// -----------------------------
export const enhancePrompt = async (input) => {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Enhance this image prompt with style, lighting, camera angle, and artistic details: ${input}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Enhancement failed";
  } catch (error) {
    console.error("Enhance Error:", error);
    return "Error enhancing prompt";
  }
};

// -----------------------------
// 🔹 IMAGE GENERATION
// -----------------------------
export const generateImage = async (prompt) => {
  try {
    const shortPrompt = (prompt || "beautiful scenery").slice(0, 100);
    const finalPrompt = `${shortPrompt} high quality, realistic, 4k`;

    return `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}`;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};

// -----------------------------
// 🔹 IMAGE ANALYSIS
// -----------------------------
export const analyzeImage = async () => {
  try {
    return "A modern scene with vibrant colors, soft lighting, and cinematic composition. Style: professional photography.";
  } catch (error) {
    console.error("Analysis Error:", error);
    return "Analysis failed";
  }
};