// import './App.css'
// import axios from 'axios';
// import { useRef, useState } from 'react';


// function App() {
//   return (
//     <>
//       <div className="mainContainer flexClass flexJustifyContentStart flexalignIteamsCenter flexDirectionColumn mainContainerHeight">
//         <div className="mainHeadingMarginTop mainheading mainFontColor mainHeadingFontSize mainHeadingFontWeight mainHeadingLetterSpacing mainHeadingWordSpacing FontFamily">
//         Download youtube video
//         </div>
//         <div className='fontFamilyContent contentColor contentFontSize mainHeadingContentWidth textAlignCenter FontFamily'>Download your favorite videos directly to your device for uninterrupted offline viewing in stunning high-definition clarity, anytime, anywhere</div>
//         <YoutubeVideoUrlInput />
//       </div>
//     </>
//   )
// }

// export default App


// export function YoutubeVideoUrlInput(){

//   var [youTubeinputValue, setInputValue] = useState('')
//   var [userRequestedVideoPath, setUserVidePath] = useState('')
  
//   const yotubeVideoInputFieldRef = useRef(null)
//   function updateYouTubeUrl(){
    
//       setInputValue(yotubeVideoInputFieldRef.current.value || '')

//   }

//   function HandDownload(){

//     if (youTubeinputValue == ''){

//     }
//     else{

//       postData(youTubeinputValue)

//     }

//   }
  
//   async function postData(urlData: any){

//     const url = urlData;
//     const des = 'noo';
  
//     const body = { url, des };
  
//     try {

//       const response = await axios.post('http://127.0.0.1:8000/api/userUrl', body);

//       console.log(response.data);
      
//       if (response.data.statusCode == 0) {

//         if (response.data.data.data == 'Y') {

//           setUserVidePath(response.data.data.path)

//           setTimeout(() => {
//             autoDownloadVideo() 
//           }, 2000);

//         }
//       }
//       return response.data;
//     } 
//     catch (error) {
//       console.error('Error:', error);
//       return null;
//     }

//   };

//   function autoDownloadVideo(){

//     var downloadLinkButton = document.getElementById('downloadVideo')

//       if (downloadLinkButton){
//         downloadLinkButton.click()
//       }

//   }

//   return(
//     <>
//       <div className='mr-t-1 padding borderColor borderWidth borderStyle mainborderRadius'>
//         <div className='inputFieldWidth flexClass flexJustifyContentbetween'>

//           <input 
//           className='inputFieldFontSize inputFieldWidthCustom mainBackgroundColor secondaryBorderRadius borderColor borderWidth borderStyle inputFieldPadding FontFamily mainFontColor'
//           onInput={updateYouTubeUrl} 
//           ref={yotubeVideoInputFieldRef} 
//           type="text" 
//           name="" 
//           id="youtubeUrl"  
//           placeholder='Enter url' />

//           <select 
//           className='selectFieldWidthCustom secondaryBorderRadius mainBackgroundColor inputFieldPadding borderColor FontFamily' 
//           name="cars" 
//           id="cars">
//             <option className='' value="144">144p</option>
//             <option className='' value="240">240p</option>
//             <option className='' value="360">360p</option>
//             <option className='' value="480">480p</option>
//             <option className='' value="720">720p</option>
//             <option className='' value="1080">1080pHD</option>
//           </select>
//         </div>
//         <div className='flexClass flexJustifyContentCenter'>
//           <button onClick={HandDownload} className='mainbuttonBackgroundColor mainbuttonFontColor mr-t-1'>Confirm</button>
//         </div>

//         <div className="downloadLinkContainer">

//             <a id='downloadVideo' href={userRequestedVideoPath} download> Download </a>

//         </div>

//       </div>

//     </>
//   )
// }


import './App.css';
import axios from 'axios';
import { useRef, useState } from 'react';

function App() {
  return (
    <>
      <div className="mainContainer flexClass flexJustifyContentStart flexalignIteamsCenter flexDirectionColumn mainContainerHeight">
        <div className="mainHeadingMarginTop mainheading mainFontColor mainHeadingFontSize mainHeadingFontWeight mainHeadingLetterSpacing mainHeadingWordSpacing FontFamily">
          Download YouTube video
        </div>
        <div className='fontFamilyContent contentColor contentFontSize mainHeadingContentWidth textAlignCenter FontFamily'>
          Download your favorite videos directly to your device for uninterrupted offline viewing in stunning high-definition clarity, anytime, anywhere
        </div>
        <YoutubeVideoUrlInput />
      </div>
    </>
  );
}

export default App;

export function YoutubeVideoUrlInput() {
  const [youTubeinputValue, setInputValue] = useState('');
  const [userRequestedVideoPath, setUserVidePath] = useState('');

  const yotubeVideoInputFieldRef = useRef<HTMLInputElement>(null);

  const updateYouTubeUrl = () => {
    if (yotubeVideoInputFieldRef.current) {
      setInputValue(yotubeVideoInputFieldRef.current.value || '');
    }
  };

  const handleDownload = () => {
    if (youTubeinputValue !== '') {
      postData(youTubeinputValue);
    }
  };

  const postData = async (urlData: string) => {
    const body = { url: urlData, des: 'noo' };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/userUrl', body);

      console.log(response.data);

      if (response.data.statusCode === 0) {
        if (response.data.data.data === 'Y') {
          setUserVidePath(response.data.data.path);

          setTimeout(() => {
            autoDownloadVideo();
          }, 2000);
        }
      }
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const autoDownloadVideo = () => {
    const downloadLinkButton = document.getElementById('downloadVideo');
    if (downloadLinkButton) {
      downloadLinkButton.click();
    }
  };

  return (
    <>
      <div className='mr-t-1 padding borderColor borderWidth borderStyle mainborderRadius'>
        <div className='inputFieldWidth flexClass flexJustifyContentbetween'>
          <input 
            className='inputFieldFontSize inputFieldWidthCustom mainBackgroundColor secondaryBorderRadius borderColor borderWidth borderStyle inputFieldPadding FontFamily mainFontColor'
            onInput={updateYouTubeUrl} 
            ref={yotubeVideoInputFieldRef} 
            type="text" 
            id="youtubeUrl"  
            placeholder='Enter url' 
          />
          <select 
            className='selectFieldWidthCustom secondaryBorderRadius mainBackgroundColor inputFieldPadding borderColor FontFamily' 
            id="quality">
            <option value="144">144p</option>
            <option value="240">240p</option>
            <option value="360">360p</option>
            <option value="480">480p</option>
            <option value="720">720p</option>
            <option value="1080">1080pHD</option>
          </select>
        </div>
        <div className='flexClass flexJustifyContentCenter'>
          <button onClick={handleDownload} className='mainbuttonBackgroundColor mainbuttonFontColor mr-t-1'>Confirm</button>
        </div>
        <div className="downloadLinkContainer">
          <a id='downloadVideo' href={userRequestedVideoPath} download> Download </a>
        </div>
      </div>
    </>
  );
}
