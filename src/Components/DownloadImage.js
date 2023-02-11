import React, { useState } from 'react';

function DownloadImage({ imageUrl }) {
  const [imageSrc, setImageSrc] = useState(null);

  const handleDownload = () => {
    setImageSrc(URL.createObjectURL(new Blob([imageUrl])));
  };

  return (
    <>
      {imageUrl && (
        <a href={imageSrc} download="image.jpg" className="mx-1">
          <button className="btn btn-outline-success" type="button" onClick={handleDownload}><span>Download Image</span></button>
        </a>
      )}
    </>
  );
}

export default DownloadImage;
