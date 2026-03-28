import { useState } from "react";
import { analyzeImage, generateImage } from "../utils/api";

const WorkflowImage = () => {
  const [preview, setPreview] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [generated, setGenerated] = useState("");

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    const result = await analyzeImage(preview);
    setAnalysis(result);
  };

  const handleGenerate = async () => {
    const img = await generateImage(analysis);
    setGenerated(img);
  };

  return (
    <div className="box">
      <h2>Image → Variation</h2>

      <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />

      {preview && <img src={preview} alt="preview" />}

      <button onClick={handleAnalyze}>Analyze</button>

      {analysis && (
        <>
          <p>{analysis}</p>
          <button onClick={handleGenerate}>Generate Variation</button>
        </>
      )}

      {generated && <img src={generated} alt="generated" />}
    </div>
  );
};

export default WorkflowImage;