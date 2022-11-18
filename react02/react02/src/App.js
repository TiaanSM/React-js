import { motion } from 'framer-motion';
import {useState} from 'react';

function App() {

  const [move, setMove] = useState(false);

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
    <div className="app">

        <motion.div 
          animate={{ rotate: [0, 200, 200, 0] }}
          transition={{ repeat: 2, duration: 1 }}
        ></motion.div>

    </div>
  )
}

export default App;
