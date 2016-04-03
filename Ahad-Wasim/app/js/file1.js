// Usually we have to make a ajax request to an API to fetch data but for this case it is all listed out
// let trendingSongsJSON = {
//   songs:[
//     {
//       artist:"Justin Bieber",
//       song: "Love Yourself",
//       album: "Purpose(Deluxe)",
//       albumArtwork:"http://a3.mzstatic.com/us/r30/Music6/v4/0e/38/b4/0e38b405-ae2c-1da4-5959-866f7abb110e/cover100x100.jpeg",
//       rank:"1"
//     },
//     { 
//       artist:"Adele",
//       song: "Hello",
//       album: "25",
//       albumArtwork:"http://a4.mzstatic.com/us/r30/Music6/v4/8c/91/5d/8c915d9b-d9e4-f735-1b91-81ca1b6e6312/cover100x100.jpeg",
//       rank:"2"
//     },
//     { 
//       artist:"Justin Bieber",
//       song: "Sorry",
//       album: "Purpose(Deluxe)",
//       albumArtwork:"http://a3.mzstatic.com/us/r30/Music6/v4/0e/38/b4/0e38b405-ae2c-1da4-5959-866f7abb110e/cover100x100.jpeg",
//       rank:"3"
//     },
//     { 
//       artist:"twenty one pilots",
//       song: "Stressed Out",
//       album: "Blurryface",
//       albumArtwork:"http://a4.mzstatic.com/eu/r30/Music1/v4/05/40/77/05407725-c184-bbc2-c9b0-90f1832adfd7/cover100x100.jpeg",
//       rank:"4",
//     },
//     { 
//       artist:"Roses (feat.ROZES)",
//       song: "The Chainsmokers",
//       album: "Bouquet",
//       albumArtwork:"http://a2.mzstatic.com/us/r30/Music6/v4/dc/88/a0/dc88a036-ebc3-a0ff-fc97-cc5c8026ee7a/cover100x100.jpeg",
//       rank:"5"
//     },
//     { 
//       artist:"Selena Gomez",
//       song: "Same Old Love",
//       album: "Revival(Deluxe)",
//       albumArtwork:"http://a1.mzstatic.com/us/r30/Music3/v4/ea/6d/61/ea6d61ac-0223-39ae-8a83-622821568144/cover100x100.jpeg",
//       rank:"6"
//     },
//     { 
//       artist:"Rachel Platten",
//       song: "Stand By You",
//       album: "Wildfire",
//       albumArtwork:"http://a3.mzstatic.com/us/r30/Music7/v4/8b/72/67/8b726780-c019-62e4-23f5-ddad13f9c593/cover100x100.jpeg",
//       rank:"7"
//     }
//   ]
// }


// let bannerJSON = {
//   banner: [
//     {
//       bannerID:"1",
//       bannerURL:"http://www.digitaldjtips.com/wp-content/uploads/2012/03/concert-crowd.jpg"
//     },
//     {
//       bannerID:"2",
//       bannerURL: "http://rocksubculture.com/wp-content/uploads/2013/10/Depeche-Mode-Delta-Machine-Tour-2013-Las-Vegas-Pearl-Concert-Theater-Palms-Casino-Resort-September-6-Concert-Review-Photos-136-RSJ.jpg"
//     },
//     {
//       bannerID:"3",
//       bannerURL: "http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/09/selena-cover.jpg"
//     },
//     {
//       bannerID:"4",
//       bannerURL: "http://www.wallpaperfo.com/thumbnails/detail/20120427/music%20steve%20grayscale%20monochrome%20maxell%201920x1200%20wallpaper_www.wallpaperfo.com_12.jpg"
//     }
//   ]
// }

(function(window, $){

  // Debounce method to watch for window resizing! So many function are not called
  window.debounce = function(func, wait, immediate) {
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


   window.letterCount = function(string){
    return string.length > 30 ? string.substring(0, 27) + '...' : string.substring(0, 30); 
   }


  // 30 maximum of letters
  // If window is smaller than certain number of pixels than only spit out the top 3 songs


  let name = 'hello';

/*
     <div class=nav-button>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
  </div>
*/

  let box = $.createElement('DIV').setAttribute('class', 'nav-button');
  
  for(let i = 0;i<3;i++){
    box.appendChild( $.createElement('DIV').setAttribute('class', 'bar'));
  }


  window.addEventListener("resize");

  

 


  let array = [1,2,3,4];

  let newArray = [...array, 5,6,7,8];


  () => {
    let test = 'hello'
  }


}(window, document))
