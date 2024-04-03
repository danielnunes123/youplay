import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import youplay from '../src/img/YouTube-removebg-preview.png'
import menu from '../src/img/vecteezy_menu-icon-vector-for-website-symbol-presentation_7622690-removebg-preview.png'
import notifiation from '../src/img/cino.png'
import upload from '../src/img/upload.png'
import video1 from  '../src/videos/1709332393.0405025.mp4'
import VideoPlayer from './components/VideoPlayer';
import imgchannel from '../src/img/channels4_profile (3).jpg'
import verificado from '../src/img/Verificado.png'
import PaginadoCanal from './components/PaginadoCanal';
import Reproducao from './components/Reproducao';

function App() {
  
  const [filter, setFilter] = useState('');
  const [videos, setVideos] = useState([
    { id: 1, title: "the last of us gameplay | Ep1", src:<VideoPlayer src={video1} />,  channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} />, videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} />},
    { id: 2, title: "respondendo comentarios - itachi", src:<VideoPlayer src={video1} />,  channelName: 'Daniel_Nunes_Codar', channelImg: <img  id='channelimg'  src={imgchannel} />, videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 3, title: "video 1", src:<VideoPlayer src={video1} />, channelName: 'Bilson_Curioso', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 4, title: "video 2", src:<VideoPlayer src={video1} />, channelName: 'RetroArk408', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 5, title: "video 3", src:<VideoPlayer src={video1} />, channelName: 'Redzinbr', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 6, title: "video 4", src:<VideoPlayer src={video1} />, channelName: 'Fala_Sério', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 9, title: "video 5", src:<VideoPlayer src={video1} />, channelName: 'Quando_penso_nela', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 8, title: "video 6", src:<VideoPlayer src={video1} />, channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} /> ,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} />},
    { id: 10, title: "video 7", src:<VideoPlayer src={video1} />, channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 11, title: "video 8", src:<VideoPlayer src={video1} />, channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 12, title: "video 9", src:<VideoPlayer src={video1} />, channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
    { id: 13, title: "video 10", src:<VideoPlayer src={video1} />, channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} />,videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} /> },
  ]);

  

  

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function search() {
    return  videos.filter(video =>  video.title.includes(filter));
  }

 
const [pagina,setPagina]=useState(0)

useEffect(
  ()=>{
 const url = window.location.href
 const res=url.split('?')
 setPagina(res[1])
  }
)

const LinksPaginas=(pg)=>{
if(pg==1){
  window.open('http://https://you-play.vercel.app?1', '_self')
}else if(pg==2){
  window.open('http://https://you-play.vercel.app?2', '_self')
}
}

const retornarPagina=()=>{
if(pagina==1){
  return <PaginadoCanal/>
}else if(pagina==2){
  return <Reproducao/>
}else{
  return <div className="App">
  <header className="App-header">
   <div className='w-[100%] h-[56px] bg-white fixed p-[16px] flex  items-center justify-between z-30'>
<span className='flex gap-[30px] items-center justify-center'>   <button><img src={menu} width='20px'/></button>   <a href='#'><img src={youplay} width='100px'/></a></span>
<span className='bg-[white] h-[40px] rounded-[20px]  w-[max-content] flex items-center gap-5 justify-center border-solid border-2 border-[#d9d9d9] pl-[5px]'><input id="textINP" value={filter} onChange={handleFilterChange}   type='text' className='bg-white w-[480px]'/> <button onClick={search} className='bg-gray-300 h-[40px] w-[10%] rounded-tr-[20px] rounded-br-[20px] relative flex items-center justify-center'><img src='https://www.svgrepo.com/show/7109/search.svg' width='20px'/></button></span> 
<span className='flex gap-[30px] items-center justify-center'> <a href=''><img src={upload} width='23px'/></a>
<a href=''><img src={notifiation} className='w-[19px]'/></a>
<a href=''><img src={upload} className='w-[26px]'/></a></span>
   </div>
   <br/>
   <br/>
   <br/>
   <div className='flex flex-wrap  items-center justify-center gap-8'>
   {/* Renderizar os vídeos filtrados */}
   {search().map(video => (
    <div key={video.id}>
   {video.src}
   <br/>
     <span className='flex  gap-5'>  <div>{video.channelImg}</div> <strong id='videotitle'><a onClick={()=>LinksPaginas(2)} className='cursor-pointer'>{video.title}</a></strong></span>
        <br/>
        <text id='channelnome' title={video.channelName} className='text-[#606060] size-[1.4rem] flex items-center gap-1'><a onClick={()=>LinksPaginas(1)} className='cursor-pointer'>{video.channelName}</a>{video.verificado}</text>
        <text id='videoinfo' className='text-[#606060] size-[1.4rem]'>{video.videoinfo}</text>

    </div>
  ))}
  </div>
  </header>
</div>
}
}
  return (
    <>
   {retornarPagina()}
   </>
  );
}

export default App;
