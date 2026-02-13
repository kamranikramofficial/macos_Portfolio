import { Weight } from '#node_modules/lucide-react/dist/lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';

const FONT_WEIGHTS ={
    subtittle : {min:100 , max :400 , default : 100},
    title : { min:400 , max :900 , default :400}
}
const renderText =( text , classname , baseweight = 400) =>{
    return [ ...text ].map((char ,i) =>(
     <span  
     key={i} 
     className={classname} 
     style={{ fontVariationSettings : `'whgt ${baseweight}`}}>

        {
            char === "  " ? "/u00A0" : char
         }
     </span>

    ));
};
const setupTextHover =( container , type )=>{
    if (!container) return;
    const lettet = container.querySelectorAll("span");
    const {min ,max ,default: base} =FONT_WEIGHTS[type];

    const animateLetter = ( lettet , Weight , duration = 0,25) => {
        return gsap.to(lettet , {duration , ease : "power2.out ", fontVariationSettings : `'whgt ${Weight}`,
        });
 };

};

    const Welcome =()=> {
   const titleRef = useRef(null);
   const subtittleRef = useRef(null);

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
            {renderText ( "Portfolio" , 'text-9xl italic font-gerorman' , 400)}
        </h1>


        
        <div className='small-screen'>
          <p>
            This portfolio is designed for desktop/tablad screen only.
          </p>
         
        </div>


      </section>
    )
}

export default Welcome