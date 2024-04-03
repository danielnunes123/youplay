
import React, { useState } from 'react';
import videoo from  '../videos/1709332393.0405025.mp4'
import VideoPlayer from './VideoPlayer';
import imgchannel from '../img/channels4_profile (3).jpg'
import verificado from '../img/Verificado.png'
import likemg from '../img/like.svg'
import likeactive from '../img/1555605-200.svg'


export default function Reproducao() {
   const [filter, setFilter] = useState('');
   const [videos, setVideos] = useState([
      { id: 1, title: "the last of us gameplay | Ep1", src:<VideoPlayer src={videoo} />,  channelName: 'MrBeast', channelImg: <img  id='channelimg'  src={imgchannel} />, videoinfo: '312 mil visualizações há 1 ano', verificado: <img id='verificado' title='Verificado no YouPlay' src={verificado} />, inscritos: '646 mil inscritos'},
   ]);



    const [views, setViews] = useState(0);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    function formatViws(views) {
      if (views > 900) {
        return (views / 1000).toFixed(1) + ' mil';
      } else {
        return views.toString();
      }
    }
    
  
    const adicionarViws = () => {
      setViews(views + 1);
    };
  


    function  adicionarInscricao(){
        let inscricao = document.getElementById("inscricao");
      if (inscricao.innerHTML=== `inscrito`) {
      inscricao.innerHTML= `inscrever`
      } else {
      inscricao.innerHTML= `inscrito`
      }
    };
  
let likebtn = document.getElementById("likebtn");

function formatLikes(likes) {
  if (likes > 900) {
    return (likes / 1000).toFixed(1) + ' mil';
  } else {
    return likes.toString();
  }
}

    const  adicionarLike= () => {
        if (!isLiked) {
          setLikes(likes + 1);
        } else {
          setLikes(likes - 1);
        }
        setIsLiked(!isLiked);
      };  
    return (
      <div >
        <div >
          <video
            src={videoo}
            controls
            onPlay={adicionarViws}
            onEnded={adicionarViws} 
          />
          <div>
          {videos.map(video => (
        <div key={video.id}>
          <text className='text-[1.4rem]' id='reptitle'>{video.title}</text>
          <div className='flex items-center gap-20 '>
            <div>
          <span className='flex  gap-4'>  <div>{video.channelImg}</div> <strong id='videotitle' ><a  className='cursor-pointer flex items-center gap-1'>{video.channelName}{video.verificado}</a></strong></span>
          <br/>
          <text id='videoinfo' className='text-[#606060] size-[1.2rem]'>{video.inscritos}</text>
          </div>
          <button  onClick={adicionarInscricao} className='bg-[black] relative bottom-[20px] p-[8px] rounded-[20px] w-[120px]'>  <span className='text-white' id='inscricao'>inscrever</span></button>
          <div className='w-[120px] p-[8px] rounded-[20px] bg-[#F2F2F2] flex items-center justify-center gap-3 hover: bg-[#e6e5e5]'>
          <button id='likebtn'
            onClick={adicionarLike}
          >
         {isLiked ? <img src={likeactive} width="20px" alt="Liked" /> : <img src={likemg} width="20px" alt="Not Liked" />}
         
          </button>
          <span>{formatLikes(likes)}</span>
        </div>
          </div>


          


         


          </div>
      ))}
           
          </div>
          <div>
            viws
            {formatViws(views)} 
          </div>
        </div>
      
      </div>
    );
}
