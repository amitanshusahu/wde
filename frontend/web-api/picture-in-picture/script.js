function enterPIP() {
  const video = document.querySelector("video");

  // check feature 
  if('pictureInPictureEnabled' in document){
    video.requestPictureInPicture();
  }
}



/* SUPPORTED BROWSERS
  -> Chrome
  -> Safari
  -> Opera
  -> FireFox (partial suppoet)
*/
