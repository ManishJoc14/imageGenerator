import React,{useState} from 'react'
import DownloadImage from './DownloadImage';

const Home = (props) => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const apiKey = process.env.REACT_APP_API_KEY;

    const generateImage = async (e)=>{
        e.preventDefault();
        if(!prompt) return alert("Write Your Prompt");
        setLoading(true);
        props.setProgress(20);
        try{
                const response = await fetch("https://api.openai.com/v1/images/generations", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                  },
                  body: JSON.stringify({
                    "model": "image-alpha-001",
                    "prompt": prompt,
                    "num_images":1,
                    "size":"256x256"
                  }),
                });
                props.setProgress(40);
                const json = await response.json();
                props.setProgress(50);
                setImageUrl(json.data[0].url);
                props.setProgress(80);
                setLoading(false);
                setTimeout(() => {
                  props.setProgress(100);
                }, 2000);
        }catch(error){
            setLoading(false);
            props.setProgress(0);
            alert(error.message);
        }
    }

  return (
   <>
   <div className="container mt-5 mb-2">
   <h1 className='my-lg-5 my-4 pt-5' id='heading' style={{color:props.mode==='light'?'black':'white'}}>Generate images of your choice </h1>
 
   <div className='container'>
   <div className="mb-3">
   <input type="text" className="form-control mb-2"value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Describe your image here..."  aria-label="Recipient's username" aria-describedby="button-addon2" />
    {!loading ? (
          <button className="btn btn-outline-success mx-1" type="button" id="button-addon2" onClick={generateImage}><span>Generate </span></button>

    ) : (
        <button className="btn btn-outline-success mx-1" type="button" id="button-addon2" disabled ><span>Generating... </span></button>
    )}
    {imageUrl && <DownloadImage imageUrl={imageUrl}/> }
</div>

   </div>
   <br/>
    </div>
   <div className=''style={{height:'256px',width:'100vw',display:'flex',justifyContent:"center"}}>
    {imageUrl && <img id='image' style={{height:'256px',width:'256px',}} src={imageUrl} alt="your pic"/> }
   </div>
    
   </>
  )
}

export default Home