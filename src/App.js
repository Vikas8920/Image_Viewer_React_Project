import React from 'react';
import './App.css'
import ImageViewer from './Components/ImageViewer/ImageViewer';

const App = () => {
  const images = ['https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg', 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701907200&semt=sph', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg', 'https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg', 'https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg', 'https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg', 'https://i.pinimg.com/originals/1a/b0/89/1ab089aaf438547bc56b14d3e597807d.jpg', 'https://w0.peakpx.com/wallpaper/265/481/HD-wallpaper-nature.jpg', 'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg', 'https://png.pngtree.com/thumb_back/fh260/background/20210528/pngtree-yellow-flower-caesalpinia-nature-hd-photo-wallpaper-free-download-image_721955.jpg', 'https://i.pinimg.com/originals/cf/5d/f7/cf5df7e4e7804644a43be3f66a224b9d.jpg', 'https://e0.pxfuel.com/wallpapers/163/906/desktop-wallpaper-beautiful-nature-with-girl-beautiful-girl-with-nature-and-moon-high-resolution-beautiful.jpg', 'https://w.forfun.com/fetch/62/624e27fde335d49e2dd3c6b75c6027a3.jpeg', 'https://wallpapers.com/images/hd/hd-nature-trees-on-grass-rwujzayqg8ip7kyy.jpg', 'https://images3.alphacoders.com/130/1300702.jpg', 'https://images.picxy.com/cache/2021/5/13/d1e500286c501f3064af38f36fc90909.jpg', 'https://www.avikalp.com/cdn/shop/products/Awi1517_wallpaper2.jpg?v=1549007316', 'https://wallpapers.com/images/hd/1080p-nature-background-nfkrrkh7da3eonyn.jpg', 'https://wallpaperset.com/w/full/0/c/6/163868.jpg', 'https://t3.ftcdn.net/jpg/05/87/09/12/360_F_587091230_4K2V0Yv1Zf5X4eOYKqm0l1eXXZYEEKPJ.jpg']


  return(
    <div>
      <h1>Image viewer</h1>
      <ImageViewer images={images}/>
    </div>
  )
}


export default App;
