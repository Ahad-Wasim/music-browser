(function(window, $){

  window._ = {};

  // Grabs the currentTime
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // Underscore Debounce method to watch for window resizing! So many function are not called
  _.debounce = function(func, wait, immediate) {

     var timeout, args, context, timestamp, result;

     var later = function() {
       var last = _.now() - timestamp;

       if (last < wait && last >= 0) {
         timeout = setTimeout(later, wait - last);
       } else {
         timeout = null;
         if (!immediate) {
           result = func.apply(context, args);
           if (!timeout) context = args = null;
         }
       }
     };

     return function() {
       context = this;
       args = arguments;
       timestamp = _.now();
       var callNow = immediate && !timeout;
       if (!timeout) timeout = setTimeout(later, wait);
       if (callNow) {
         result = func.apply(context, args);
         context = args = null;
       }

       return result;
     };
   };


   // 30 maximum of letters
   _.letterCount = function(string){
    return string.length > 27 ? string.substring(0, 27) + '...' : string.substring(0, 30); 
   }








   // Template for top songs
   
   /*
   <div class="song">
     <div class='album-artwork-wrapper'>
       <img src="http://a1.mzstatic.com/us/r30/Music3/v4/ea/6d/61/ea6d61ac-0223-39ae-8a83-622821568144/cover100x100.jpeg" />
     </div>

     <div class='song-info-wrapper'>
       
       <div class='song-name'>
         <p>Same Old Love</p>
       </div>

       <div class='song-data'>
         <p>Selena Gomez - Revival(Deluxe)</p>
       </div>

     </div>
   </div>
   */



  // In normal cases I would use a template rendering library!

  let topSongsRender = (list) => {

    list.forEach((song, index, collection) => {

      // Album Artwork
      let albumArtworkWrapper = $.createElement("DIV");
      let albumImage = $.createElement("IMG");

      albumArtworkWrapper.setAttribute("class", "album-artwork-wrapper");
      albumImage.setAttribute("src", song.albumArtwork)
      albumArtworkWrapper.appendChild(albumImage);

      // Song Info Container
      let songInfoContainer = $.createElement("DIV");
      songInfoContainer.setAttribute("class", "song-info-wrapper")

      // Song
      let songNameWrapper = $.createElement("DIV")
      let songTitle = $.createElement("P");

      songNameWrapper.setAttribute("class", "song-name")
      songTitle.appendChild($.createTextNode(song.song));
      songNameWrapper.appendChild(songTitle);


      // Song Data Wrapper
      let songDataWrapper = $.createElement("DIV");
      let artistData = $.createElement("P");

      songDataWrapper.setAttribute("class", "song-data");  
      let string = _.letterCount(`${song.artist} - ${song.album}`)  
      artistData.appendChild($.createTextNode(string))
      songDataWrapper.appendChild(artistData)
      

      // Appending artwork and song data to container
      songInfoContainer.appendChild(songNameWrapper);
      songInfoContainer.appendChild(songDataWrapper);


      let songWrapper = $.createElement("DIV");
      songWrapper.setAttribute("class", "song");
      songWrapper.appendChild(albumArtworkWrapper);
      songWrapper.appendChild(songInfoContainer)


      $.querySelector(".top-songs-wrapper").appendChild(songWrapper)
    });
  }

  topSongsRender.call(this, trendingSongsJSON.songs)



  // Window resize
  let debouncedPage = _.debounce((e)=>{
    if(window.innerWidth <= 640 ) {
      [...$.querySelectorAll('.song')].forEach( (v, i) => {
        if(i > 2){
          v.style.display = 'none';
        }
      })
    } else {
      [...$.querySelectorAll('.song')].forEach( (v, i) => {
        if(i > 2){
          v.style.display = 'block';
        }
      })  
    }
  }, 100)

  window.addEventListener("resize", debouncedPage);

  

 


}(window, document))
