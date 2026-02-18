import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS ={
    subtittle : {min:100 , max :400 , default : 100},
    title : { min:400 , max :900 , default :400}
}
const renderText =( text , classname , baseweight = 400) =>{
    return [ ...text ].map((char ,i) =>(
     <span  
     key={i} 
     className={classname} 
   style={{ fontVariationSettings : `'wght' ${baseweight}`}}>

        {
      char === " " ? "\u00A0" : char
         }
     </span>

    ));
};

const setupTextHover =( container , type )=>{
  if (!container) return () => {};
  const letters = container.querySelectorAll("span");
  const {min ,max ,default: base} =FONT_WEIGHTS[type];

  const animateLetter = ( letter , weight , duration = 0.25) => {
    return gsap.to(letter , {duration , ease : "power2.out", fontVariationSettings : `'wght' ${weight}`,
        });
  };

  const resetLetters = () => {
    letters.forEach((letter) => animateLetter(letter , base , 0.3));
  };

  const handlePointerMove = (e) => {
    const rect = container.getBoundingClientRect();
    const isInside = e.clientX >= rect.left
      && e.clientX <= rect.right
      && e.clientY >= rect.top
      && e.clientY <= rect.bottom;

    if (!isInside) {
      resetLetters();
      return;
    }

    const pointerX = e.clientX - rect.left;
    letters.forEach((letter) => {
      const {left : l , width : w } = letter.getBoundingClientRect();
      const letterCenter = (l - rect.left) + w / 2;
      const distance = Math.abs(pointerX - letterCenter);
      const intensity = Math.exp(-(distance ** 2) /2000);

      animateLetter(letter , min + (max - min) * intensity);
    });
  };

  window.addEventListener("pointermove" , handlePointerMove);

  return () => {
    window.removeEventListener("pointermove" , handlePointerMove);
  };
};

    const Welcome =()=> {
   const titleRef = useRef(null);
   const subtittleRef = useRef(null);
 
   useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current , 'title');
    const subtitleCleanup = setupTextHover(subtittleRef.current , 'subtittle');
  
    return () => {
      titleCleanup();
      subtitleCleanup();
    };
  
  }, []); 
    return (
      <section id="welcome">
        <p ref={subtittleRef}>
            {renderText(
         "Hey, I'm kamran! welcome to my",
         'text-3xl font-georama', 
         100, 
           )}
         </p>
        <h1 ref={titleRef} className='mt-7'>
          {renderText ( "Portfolio" , 'text-9xl italic font-georama' , 400)}
        </h1>


        
        <div className='small-screen'>
          <p>
            This portfolio is designed for desktop/tablet screen only.
          </p>
         
        </div>


      </section>
    )
}

export default Welcome;