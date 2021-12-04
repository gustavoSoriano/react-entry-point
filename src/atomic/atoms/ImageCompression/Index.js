import { useRef } from "react";
import imageCompression from "browser-image-compression";
import DropZone from "../DropZone/Index"

const ImageCompression = ({
  accept = "image/*",
  maxSizeMB = 0.2,
  maxWidthOrHeight = 1920,
  useWebWorker = true,
  maxIteration = 10,
  onProgress = console.log,
  onError = console.error,
  onFinish = console.log,
  children,
}) => {
  const input = useRef(null);

  const handleCompression = async (_file, _progress) => {
    console.log(_file)
    try {
      return await imageCompression(_file, {
        maxSizeMB,
        maxWidthOrHeight,
        useWebWorker,
        maxIteration,
        onProgress:_progress,
      });
    } catch (error) {
      onError(error, _file);
      return null;
    }
  };
  

  const handleUpload = async files => {
    const list = []
    for( let index in Array.from(files))
    {
      list.push( 
        await handleCompression(files[index], progress => {
          if(files.length > 1)
          {
            return onProgress( ( ( parseInt(index) + 1 ) * 100) / files.length )
          }
          onProgress(progress)
        }) 
      )
    }
    onFinish( list );
    input.current.value = ""
  }

  return (
    <>
      <input
        ref={input}
        type="file"
        onChange={ ({ target }) => handleUpload(target.files) }
        accept={accept}
        style={{ display: "none" }}
        multiple
      />

      <DropZone over={ () => null } leave={handleUpload}>
        <div onClick={() => input.current.click()}>{children}</div>
      </DropZone>
    </>
  );
};
export default ImageCompression;
