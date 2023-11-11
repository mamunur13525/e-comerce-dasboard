import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext('');

interface Props {
    multiple: boolean,
    crop: boolean,
    setImageData: Function,
    btnName: string,
    btnClass: string
}
function UploadImage({ multiple = false, crop = false, setImageData, btnName = "Upload Image", btnClass = "" }: Props) {
  const [loaded, setLoaded] = useState(false);

  const [cloudName] = useState("dltuyk98s");
  const [uploadPreset] = useState("product");

  const [uwConfig] = useState({
      cloudName,
      uploadPreset,
      cropping: crop, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      multiple: multiple,  //restrict upload to a single file
      // folder: "products", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      clientAllowedFormats: ["images", "img", 'png', 'jpg', 'jpeg', 'JPG', 'JPEG', 'PNG', 'svg', 'SVG'], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
  });

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            setImageData(result.info.url);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={loaded}>
      <span
        id="upload_widget"
        className={`cloudinary-button ${btnClass} text-center`}
        onClick={initializeCloudinaryWidget}
      >
        { btnName }
      </span>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadImage;
export { CloudinaryScriptContext };
