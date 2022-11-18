import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {

  const [move, setMove] = useState(false);

  const { ref, inView } = useInView({  // Intersection observer api
    threshold: 0.2  // 20% of element must be visible to trigger
  });

  const animation = useAnimation();  

  useEffect(() => {
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView) {
      animation.start({ x: '-100vw' })
    }
    console.log("use effect, inView =", inView);
  },[inView])

  // transition={{ delay: 0.5 }} => delays animation.
  // transition={{ type:"tween", duration: 5 }} => animationn duration
  // transition={{ type:"spring", bounce: 100 }} => animation physics

  /* EXAMPLE ANIMATION 
    animate={{ x: move ? 200 : -200 }}  // animates on render
    transition={{ type:"inertia", velocity: 40 }}  // animation properties
    onClick={() => {setMove(!move)}}  // animation trigger
  */

  // whileHover={{ scale : 2 }} => "event" types
  // whileDrag => with the drag added it allows to drag element. 
  // drag="x" => drags element x direction, works with y. 

  // for keyframe animation => animate={{ rotate: [0, 200, 200, 0] }} // use an array.

  // repeat: 2, => repeats the animation based on given amount. Infinity to keep it going.
  
  return (

    <div className="app" ref={ref}>

        <motion.div className="div"
          animate={{ rotate: [0, 200, 200, 0] }}
          transition={{ repeat: 2, duration: 1 }}
        ></motion.div>

        <motion.div className="div"
          animate={animation}>   
        </motion.div>

    </div>
  )
}

export default App;
