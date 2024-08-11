import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import { motion } from 'framer-motion';
import SelectCard from './SelectCard';

const Select = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger effect
      },
    }),
  };

  const cards = [
    { bg: BoraBora, text: 'Bora Bora' },
    { bg: BoraBora2, text: 'Maldives' },
    { bg: Maldives, text: 'Antigua' },
    { bg: Maldives2, text: 'Cozumel' },
    { bg: Maldives3, text: 'Jamaica' },
    { bg: KeyWest, text: 'Key West' },
  ];

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cards.map((card, index) => (
        <motion.div
        key={index}
        custom={index}
        initial="hidden"
        whileInView="visible" // Animate when the component is in view
        viewport={{ once: true }} // Ensures the animation happens only once
        variants={cardVariants}
        >
          <SelectCard bg={card.bg} text={card.text} />
        </motion.div>
      ))}
    </div>
  );
};

export default Select;
