import React from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { BsArrowRightCircle } from 'react-icons/bs';

const pageLoaded = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      dumping: 20,
    },
  },
};

const logoAnimation = {
  init: {
    opacity: 0,
    translateY: 100,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
};

const Skill = () => {
  
  return (
    <motion.div variants={pageLoaded} initial="hidden" animate="visible">
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          dumping: 50,
        }}
        className="my-6"
      >
        <h1 className="text-[#0000005b] text-[3.5rem] md:text-[5rem] lg:text-[13rem] text-center font-header">
          Skills.
        </h1>
      </motion.div>
      <div className="max-w-screen">
        <h1 className="font-header text-3xl pb-2 lg:text-left text-center">
          Technical Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
            <div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">HTML & CSS</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "95%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Tailwind CSS</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "92%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Bootstrap</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "90%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Java Script</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "88%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>
                
                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">React JS</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "85%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Node JS</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "82%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Material UI</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "80%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>
                

            </div>
            <div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">SQL</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "75%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Mongo DB</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "73%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Python</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "70%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Java</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "65%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">PHP</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "60%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">C++</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "55%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>

                <div>
                    <h3 className="mt-5 mb-1 font-body font-semibold text-sm">Kotlin</h3>
                    <div className='bg-gray-400 w-80 h-5 rounded-md'>
                        <div style={{width: "45%"}} className='bg-gray-900 h-full rounded-md'></div>
                    </div>
                </div>
                

            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
            <div>
                <h1 className="font-header text-3xl pb-2 lg:text-left text-center">
                Tools
                </h1>
                <ul class="list-disc font-header mx-6">
                    <li class="mb-4">Visual Studio</li>
                    <li class="mb-4">Pychram</li>
                    <li class="mb-4">Github</li>
                    <li class="mb-4">Eclipse</li>
                    <li class="mb-4">Atom</li>
                    <li class="mb-4">Framer Motion</li>
                    <li class="mb-4">Code pen</li>
                    <li class="mb-4">Codesanbox</li>
                    <li class="mb-4">IntelliJ IDEA</li>
                    <li class="mb-4">Postman</li>
                    <li class="mb-4">Figma</li>
                </ul>
            </div>
            <div>
                <h1 className="font-header text-3xl pb-2 lg:text-left text-center">
                    Personal Skills
                </h1>
                <ul class="list-disc font-header mx-6">
                    <li class="mb-4">Leadership Skill</li>
                    <li class="mb-4">Critical Thinking</li>
                    <li class="mb-4">Working Under Pressure</li>
                    <li class="mb-4">Flexibility</li>
                    <li class="mb-4">Willingness to learn</li>
                    <li class="mb-4">Team Work</li>
                </ul>
            </div>
        </div>
        <motion.div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4"></motion.div>
      </div>
    </motion.div>
  );
};

export default Skill;
