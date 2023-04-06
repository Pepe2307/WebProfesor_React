import './Slider.css';

import Carousel from 'nuka-carousel';
import Imagen1 from '../../images/angel.png'

export const Slider = () => {
    /* const slides = [
      'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
      'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
      'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'
    ]
  
    const params = {
      wrapAround: true,
      animation: 'zoom',
      slidesToShow: 2,
    } */
  
    return (
      <div>
        {/* <Carousel {...params}>
          {slides.map((slide) => (
            <img className='slider_img' src={slide} key={slide}/>
          ))}
        </Carousel> */}

        <Carousel wrapAround={true} slidesToShow={1} autoplay={true}>
            {/* <img className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg" />
            <img className='slider_img' src="https://jesuitasaru.org/wp-content/uploads/2020/03/Colegio-Maximo.jpg" />
            <img className='slider_img' src="../../images/angel.png" />
            <img className='slider_img' src="../../images/mobile-screenshot2.png" />
            <img className='slider_img' src="../../images/mobile-screenshot4.png" />
            <img className='slider_img' src="../../images/mobile-screenshot3.png" /> */}
            <img  className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg" />
            <img  className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" />
            <img  className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" />
            {/* <img  className='slider_img' src={Imagen1} /> */}            
        </Carousel>

        {/* <Carousel wrapAround={true} slidesToShow={1} animation={'zoom'} >
            <img  className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg" />
            <img  className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg" />
            <img  className='slider_img' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" />
        </Carousel> */}

      </div>
    )
  }

