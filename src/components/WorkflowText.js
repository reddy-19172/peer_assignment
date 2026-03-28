import { useState } from "react";
import { enhancePrompt, generateImage } from "../utils/api";

const WorkflowText = () => {
  const [input, setInput] = useState("");
  const [enhanced, setEnhanced] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEnhance = async () => {
    setLoading(true);
    const result = await enhancePrompt(input);
    setEnhanced(result);
    setLoading(false);
  };

  const handleGenerate = async () => {
    setLoading(true);
    const img = await generateImage(enhanced);
    setImage(img);
    setLoading(false);
  };

  return (
    <div className="box">
      <h2>Text → Image</h2>

      <textarea
        placeholder="Enter prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleEnhance}>Enhance</button>

      {enhanced && (
        <>
          <textarea
            value={enhanced}
            onChange={(e) => setEnhanced(e.target.value)}
          />
          <button onClick={handleGenerate}>Generate Image</button>
        </>
      )}

      {loading && <p>Loading...</p>}

      {image && <img src={image} alt="generated" />}
    </div>
  );
};

export default WorkflowText;