import React from "react";
import { motion } from "framer-motion";
import tw from 'twin.macro';
import styled from "styled-components";
import { PrimaryButton } from '../misc/Buttons.jsx';

const CreateButton = styled(PrimaryButton)`
  ${tw`shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-100 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`}
`;

// const OpenModalButton = styled(motion.button)`
//   font-size: 1.2rem;
//   padding: 20px;
//   border-radius: 50px;
//   border: none;
//   background-color: #5c3aff;
//   color: white;
// `;
const AnimatedOpenButton = ({ children, handleButtonClick }) => {
  return (
    <CreateButton onClick={handleButtonClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </CreateButton>
  );
};

export default AnimatedOpenButton;
