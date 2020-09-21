import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { commitmentCardList } from './thematicList';
import parser from 'html-react-parser';
import handleThematicData from '../../HOC/handleThematicData';




const CommitmentCard = ({
    fetchingNap1,
    thematicDataNap1 = [],
}) => {

    const generateRandomArrayOfCommitments = (arrOfCommitments, numberOfElements = 2) =>  arrOfCommitments.sort(() => 0.5 - Math.random()).slice(0, numberOfElements);

    const giveArrayElementsKey = (arr) => arr.map((element) => {
        element.animationKey = Math.random().toString(36).slice(2);
        return element;
    })

    const [currentThematicCommitment, setCurrentThematicCommitment] = useState(thematicDataNap1.slice(0, 2))

    useEffect(() => {
      setCurrentThematicCommitment(
        giveArrayElementsKey(generateRandomArrayOfCommitments(thematicDataNap1))
      );
      setInterval(() => {
        setCurrentThematicCommitment(
          giveArrayElementsKey(
            generateRandomArrayOfCommitments(thematicDataNap1)
          )
        );
      }, 6000);
    }, [fetchingNap1]);



    const cardMotionVariant = {
        visible: {
            x: 0,
            transition: {
                x: { type: "tween", duration: 3 }
            }
        },
        initial: {
            x: 100 + window.innerWidth
        },
        exit: {
            x: -100 - window.innerWidth,
            transition: {
                duration: 3.5
            }
        }
    }
    return ( <div className="xs:px-6 xs:py-10 lg:flex lg:justify-center">
        <div className="flex flex-col lg:flex-row xl:w-1146 overflow-visible ">
            <AnimatePresence>
            {
                currentThematicCommitment.map(({title, description, info, animationKey}) => (
                    <motion.div exit="exit" animate="visible" initial="initial" variants={cardMotionVariant} key={animationKey} style={{
                        background: 'linear-gradient(101.65deg, #E0F0E0 44.2%, #ADBAE6 266.91%)'
                    }} className="rounded-lg xs:px-6 xs:py-10 mb-6 last:mb-0 lg:mr-30 lg:last:mr-0 lg:mb-0 xs:w-full lg:w-1/2 flex-shrink-0 ">
                       <h6 className="font-sans font-bold tracking-open text-xl mb-4">{title}</h6>
                       <p>{parser(info)}</p>
                    </motion.div>
                ))
            }
            </AnimatePresence>
        </div>
    </div> );
}
 
export default handleThematicData(CommitmentCard);