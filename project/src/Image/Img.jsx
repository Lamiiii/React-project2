import imgs1 from '../img/imgs1.jpg';
import './Img.css'
export const Img=()=>{
  return(
    <div className="img">
    <img src={imgs1} alt="image" />
   <div className='new-season'>
   <h1>New Season Arrivals</h1>
   <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   </div>
  </div>
  )
}