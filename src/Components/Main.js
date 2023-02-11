import React from 'react'

const Main = () => {
    // const [prompt, setPrompt] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [imageUrl, setImageUrl] = useState("");

    // const apiKey = "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";

    // const generateImage = async (e)=>{
    //     e.preventDefault();
    //     if(!prompt) return alert("Write Your Prompt");
    //     setLoading(true);
    //     try{
    //             const response = await fetch("https://api.openai.com/v1/images/generations", {
    //               method: "POST",
    //               headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${apiKey}`
    //               },
    //               body: JSON.stringify({
    //                 "model": "image-alpha-001",
    //                 "prompt": prompt,
    //                 "num_images":1,
    //                 "size":"512x512"
    //               }),
    //             });
    //             const json = await response.json();
    //             setImageUrl(json.data[0].url);
    //             setLoading(false);
    //     }catch(error){
    //         setLoading(false);
    //         alert(error.message);
    //     }
    // }
  return (
  <>
  <h1>Hello</h1>
  {/* <div className='container'>
    <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Generate images of your wish..." />
    {!loading ? (
        <button className='btn btn-primary' onClick={generateImage}><span>Generate </span>{" "}</button>
    ) : (
        <button className='btn btn-primary' disabled ><span>Generating... </span></button>
    )}
   </div>
   <br/>
   <div className="output">
    {imageUrl && <img style={{height:'512px',width:'512px'}} src={imageUrl} alt="your pic"/> }
   </div>  */}
  </>
  )
}

export default Main