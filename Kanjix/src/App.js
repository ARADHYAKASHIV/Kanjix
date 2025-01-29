// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';
// import Particles from 'react-tsparticles';
// import { loadFull } from "tsparticles";
// import './App.css';
// import './fonts.css'; // Import the custom font CSS file
// import logoImage from './assets/logo.jpg';
// import backgroundImage from './assets/kanjix.png';
// import blogoImage from './assets/Blogo.png'; // Import the Blogo image
// import kanjixGif from './assets/kanjix.gif'; // Import the GIF for mobile
// import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
// // import CheckerApp from './checker-app/CheckerApp'; // Ensure this path is correct

// // Add a keyframe animation for slide-in
// const slideInFromRight = keyframes`
//   0% {
//     background-position: 250% center;
//     opacity: 0;
//   }
//   20% {
//     opacity: 0.5;
//   }
//   100% {
//     background-position: 125% center;
//     opacity: 1;
//   }
// `;

// // Add a slide-in animation for the quote words
// const slideInFromLeft = keyframes`
//   from {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// // Add color scheme configurations
// const colorSchemes = {
//   default: {
//     primary: '#f7f7f7',
//     background: '#000',
//     particle: '#ffffff',
//     gradient: 'linear-gradient(120deg, #f7f7f7, #ffffff)'
//   },
//   hover: {
//     primary: '#4169E1',  // Royal Blue
//     background: '#0A0B1E',
//     particle: '#4169E1',
//     gradient: 'linear-gradient(120deg, #4169E1, #1E90FF)'  // Royal Blue to Dodger Blue
//   }
// };

// const AppContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: #000;
//   color: #fff;
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
//   font-family: 'GangOfThree', sans-serif; // Apply the custom font

//   @media (max-width: 768px) {
//     height: 100dvh; // Dynamic viewport height for mobile
//   }
// `;

// const Logo = styled(motion.img)`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   width: 80px;
//   height: auto;
//   z-index: 2;
//   border-radius: 50%;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
//   @media (max-width: 768px) {
//     width: 60px;
//   }
// `;

// const SocialMediaContainer = styled.div`
//   position: absolute;
//   bottom: 50px;
//   right: 50px;
//   display: flex;
//   gap: 20px;
//   z-index: 2;

//   @media (max-width: 768px) {
//     bottom: 30px;
//     right: 50%;
//     transform: translateX(50%);
//     gap: 15px;
//   }

//   @media (max-width: 480px) {
//     bottom: 25px;
//     gap: 12px;
//   }
// `;

// const TwitterIcon = styled(motion.svg)`
//   path {
//     fill: #1DA1F2;  // Twitter Blue
//   }
// `;

// const DiscordIcon = styled(motion.svg)`
//   path {
//     fill: #4169E1;  // Royal Blue
//   }
// `;

// const OpenSeaIcon = styled(motion.svg)`
//   path {
//     fill: #1E90FF;  // Dodger Blue
//   }
// `;

// const InstagramIcon = styled(motion.svg)`
//   path {
//     fill: #4682B4;  // Steel Blue
//   }
// `;

// const SocialIcon = styled(motion.a)`
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: rgba(255, 255, 255, 0.15);
//   border-radius: 12px;
//   backdrop-filter: blur(10px);
//   transition: all 0.3s ease;
//   text-decoration: none;
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       135deg,
//       rgba(255, 255, 255, 0.2) 0%,
//       rgba(255, 255, 255, 0.05) 50%,
//       rgba(255, 255, 255, 0.2) 100%
//     );
//     opacity: 0;
//     transition: opacity 0.3s ease, transform 0.6s ease;
//     transform: translateX(-100%);
//   }
  
//   &::after {
//     content: '';
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(
//       circle,
//       rgba(255, 255, 255, 0.1) 0%,
//       transparent 70%
//     );
//     opacity: 0;
//     transition: opacity 0.3s ease;
//     pointer-events: none;
//   }
  
//   svg {
//     width: 24px;
//     height: 24px;
//     transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//     filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
//     z-index: 1;

//     @media (max-width: 768px) {
//       width: 20px;
//       height: 20px;
//     }

//     @media (max-width: 480px) {
//       width: 18px;
//       height: 18px;
//     }
//   }
  
//   &:hover {
//     transform: translateY(-5px) scale(1.05);
//     background: rgba(255, 255, 255, 0.2);
//     box-shadow: 
//       0 8px 32px rgba(31, 38, 135, 0.2),
//       0 0 20px rgba(255, 255, 255, 0.1);
    
//     &::before {
//       opacity: 1;
//       transform: translateX(100%);
//     }
    
//     &::after {
//       opacity: 1;
//     }
    
//     svg {
//       transform: scale(1.15) rotate(8deg);
//       filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
//     }
//   }
  
//   &:active {
//     transform: translateY(-2px) scale(0.95);
//   }
// `;

// const ParticleBackground = styled(Particles)`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   z-index: 2;
// `;

// const QuoteContainer = styled(motion.div)`
//   position: absolute;
//   top: 30%;
//   left: 8%;
//   z-index: 2;

//   @media (max-width: 768px) {
//     top: 15%;
//     left: 5%;
//     width: 90%;
//   }

//   @media (max-width: 480px) {
//     top: 12%;
//   }
// `;

// const QuoteText = styled.div`
//   font-family: 'GangOfThree', serif; // Apply the custom font
//   line-height: 0.8;
//   text-align: left;
  
//   .word {
//     font-size: 5.9rem;
//     font-weight: 800;
//     letter-spacing: 5px;
//     margin: 0;
//     padding: 0;
//     display: block;
//     margin-bottom: 0px;
//     opacity: 0;
    
//     @media (max-width: 768px) {
//       font-size: 3rem;
//       line-height: 1.1;
//       text-align: center;
//     }

//     @media (max-width: 480px) {
//       font-size: 2.5rem;
//       line-height: 1.3;
//     }
//   }

//   .word:nth-child(1) {
//     animation: ${slideInFromLeft} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//     animation-delay: 0.2s;
//   }

//   .word:nth-child(2) {
//     animation: ${slideInFromLeft} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//     animation-delay: 0.4s;
//   }

//   .word:nth-child(3) {
//     animation: ${slideInFromLeft} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//     animation-delay: 0.6s;
//   }
  
//   @media (max-width: 1400px) {
//     .word {
//       font-size: 5rem;
//     }
//   }
  
//   @media (max-width: 1200px) {
//     .word {
//       font-size: 4.5rem;
//     }
//   }
  
//   @media (max-width: 768px) {
//     .word {
//       font-size: 3.5rem;
//       letter-spacing: 1px;
//     }
//   }
  
//   @media (max-width: 480px) {
//     .word {
//       font-size: 3.5rem;
//       line-height: 1;
//       text-align: left;
//     }
//   }
// `;

// // Add new styled component for the Kanjix image
// const KanjixImage = styled(motion.img)`
//   position: absolute;
//   right: 0;  // Negative right margin to extend beyond the viewport
//   top: 15%;
//   transform: translateY(-50%);
//   height: 90vh;  // Adjust size as needed
//   object-fit: contain;
  
//   transform: translateZ(20px);
//   box-shadow: none;
//   -webkit-box-shadow: none;
//   -moz-box-shadow: none;
//   -webkit-filter: drop-shadow(0 0 8px rgba(216, 214, 214, 0.6));
//   z-index: 1;

//   @media (max-width: 480px) {
//     right: 13%;
//     top: 20%;
//     transform: translateY(-50%);
//     height: 62vh; // Set height to a smaller value for the GIF
//     width: auto; // Maintain aspect ratio
//     max-width: 100%; // Ensure it doesn't exceed the viewport width
//     object-fit: cover; // Ensure the image covers the area without distortion
//     object-position: right;
//     content: url(${kanjixGif}); // Use the GIF for mobile
//   }
// `;

// // Add this gradient keyframe animation
// const gradientMove = keyframes`
//   0% { background-position: 0% center; }
//   50% { background-position: 100% center; }
//   100% { background-position: 0% center; }
// `;

// // Add this new styled component for the button container
// const ButtonContainer = styled(motion.div)`
//   position: absolute;
//   top: 43%;
//   left: 10%;
//   z-index: 2;
//   margin-top: 180px;

//   @media (max-width: 768px) {
//     top: auto;
//     bottom: 120px;
//     left: 50%;
//     transform: translateX(-50%);
//     margin-top: 0;
//   }

//   @media (max-width: 480px) {
//     bottom: 100px;
//   }
// `;

// // Add this new styled component for the interactive button
// const InteractiveButton = styled(motion.button)`
//   font-family: 'GangOfThree', sans-serif; // Apply the custom font
//   font-size: 1.2rem;
//   font-weight: 600;
//   padding: 15px 45px;
//   background: transparent;
//   border: 2px solid ${props => props.isHovered ? '#fff' : '#DAA520'};
//   color: ${props => props.isHovered ? '#fff' : '#DAA520'};
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   isolation: isolate;
//   margin-left: 5px;
//   transition: all 1.1s cubic-bezier(0.165, 0.84, 0.44, 1);
//   z-index: 2;
//   display: flex;  // Use flexbox for alignment
//   align-items: center;  // Center items vertically
//   justify-content: center;  // Center items horizontally

//   &:hover {
//     color: #fff;
//     text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
//     letter-spacing: 1px;
//     transform: translateY(-3px);
//     box-shadow: 
//       0 0 15px rgba(255, 255, 255, 0.3),
//       0 0 30px rgba(255, 255, 255, 0.1);
//   }

//   &:active {
//     transform: scale(0.96) translateY(2px);
//     box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
//   }

//   @media (max-width: 768px) {
//     font-size: 1rem;
//     padding: 12px 35px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.2rem;
//     padding: 8px 30px;
//     margin-left: -115px;  // Center the button
//   }
// `;

// // Add a new styled component for the page fill effect
// const PageFill = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(130deg, #DAA520, #B8860B);
//   z-index: -1;
//   clip-path: circle(0% at var(--mouse-x) var(--mouse-y));
//   transition: clip-path 1.1s cubic-bezier(0.165, 0.84, 0.44, 1);
//   opacity: 0.95;
//   pointer-events: none;

//   &.active {
//     clip-path: circle(150% at var(--mouse-x) var(--mouse-y));
//   }
// `;

// // Add this styled component for the signature
// // const Signature = styled.div`
// //   position: fixed;
// //   bottom: 15px;
// //   left: 15px;
// //   font-family: 'Orbitron', sans-serif;
// //   font-size: 0.65rem;
// //   color: rgba(255, 255, 255, 0.5);
// //   z-index: 10;
// //   opacity: 0;
// //   animation: fadeIn 0.5s ease forwards;
// //   animation-delay: 2s;
// //   letter-spacing: 0.5px;

// //   @keyframes fadeIn {
// //     from {
// //       opacity: 0;
// //       transform: translateY(10px);
// //     }
// //     to {
// //       opacity: 1;
// //       transform: translateY(0);
// //     }
// //   }

// //   a {
// //     color: rgba(218, 165, 32, 0.4);
// //     text-decoration: none;
// //     transition: color 0.3s ease;

// //     &:hover {
// //       color: rgba(255, 255, 255, 0.6);
// //     }
// //   }

// //   @media (max-width: 768px) {
// //     bottom: 12px;
// //     left: 50%;
// //     transform: translateX(-50%);
// //     font-size: 0.6rem;
// //   }

// //   @media (max-width: 480px) {
// //     bottom: 10px;
// //     left: 10px;
// //     font-size: 0.55rem;
// //   }
// // `;

// const XCard = styled(SocialIcon)`
//   background: rgba(29, 161, 242, 0.1); // Light blue background
//   border-radius: 12px;
//   padding: 10px;
//   display: flex;
//   align-items: center; // Center the icon vertically
//   justify-content: flex-start; // Align items to the start
//   gap: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// function App() {
//   const [currentColorScheme, setCurrentColorScheme] = useState(colorSchemes.default);
//   const [isHovered, setIsHovered] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });
//   const [showIframe, setShowIframe] = useState(false); // State to manage iframe visibility

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const particlesConfig = {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800
//         }
//       },
//       color: {
//         value: "#ffffff"
//       },
//       opacity: {
//         value: 0.3,
//         random: true,
//         animation: {
//           enable: true,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: 4.5,
//         random: true,
//         animation: {
//           enable: true,
//           speed: 2,
//           size_min: 0.5,
//           sync: false
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.15,
//         width: 1.5
//       },
//       move: {
//         enable: true,
//         speed: 1.5,
//         direction: "none",
//         random: true,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "grab"
//         },
//         onclick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         grab: {
//           distance: 140,
//           line_linked: {
//             opacity: 0.5
//           }
//         },
//         push: {
//           particles_nb: 4
//         }
//       }
//     },
//     retina_detect: true,
//     background: {
//       color: "transparent"
//     }
//   };

//   // Update particles config to use theme colors
//   const getParticlesConfig = (color) => ({
//     particles: {
//       ...particlesConfig.particles,
//       color: {
//         value: color
//       },
//       line_linked: {
//         ...particlesConfig.particles.line_linked,
//         color: color
//       }
//     },
//     ...particlesConfig
//   });

//   const handleMouseEnter = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((rect.left + rect.right) / 2) + 'px';
//     const y = ((rect.top + rect.bottom) / 2) + 'px';
//     setMousePos({ x, y });
//     setIsHovered(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/checker-app" element={<CheckerApp />} /> */}
//         <Route path="/" element={
//           <AppContainer colorScheme={currentColorScheme}>
//             <ParticleBackground
//               id="tsparticles"
//               init={particlesInit}
//               options={getParticlesConfig(currentColorScheme.particle)}
//             />
            
//             <Logo 
//               src={logoImage}
//               alt="Logo"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             />

//             <KanjixImage
//               src={window.innerWidth <= 480 ? kanjixGif : backgroundImage} // Use GIF for mobile, PNG for desktop
//               alt="Kanjix"
//               initial={{ x: 200, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 50,
//                 damping: 20,
//                 duration: 1.5
//               }}
//             />

//             <QuoteContainer
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//             >
//               <QuoteText colorScheme={currentColorScheme}>
//                 <span className="word">Rise</span>
//                 <span className="word">Beyond</span>
//                 <span className="word">Limits</span>
//               </QuoteText>
//             </QuoteContainer>

//             <ButtonContainer
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 1,
//                 delay: 1.2,
//                 ease: "easeInOut"
//               }}
//             >
//               <InteractiveButton
//                 isHovered={isHovered}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={() => setIsHovered(false)}
//                 whileHover={{ 
//                   scale: 1.02,
//                   transition: { 
//                     duration: 0.4,
//                     ease: "easeInOut"
//                   }
//                 }}
//                 whileTap={{ 
//                   scale: 0.96,
//                   y: 2,
//                   transition: { 
//                     duration: 0.1,
//                     ease: "easeInOut"
//                   }
//                 }}
//                 onClick={() => setShowIframe(true)} // Set iframe visibility on click
//               >
//                 <span style={{ color: 'rgb(194, 144, 22)', textDecoration: 'none', fontSize: '1.2em' }}>Check Wallet</span>
//                 <img 
//                   src={blogoImage} 
//                   alt="Blogo" 
//                   style={{ 
//                     width: '50px',  
//                     height: '30px', 
//                     marginLeft: '0px',
//                     marginRight: '-10px', 
//                     objectFit: 'contain' 
//                   }} 
//                 />
//               </InteractiveButton>
//             </ButtonContainer>

//             {showIframe && (
//               <div style={{ 
//                 position: 'fixed', 
//                 top: 0, 
//                 left: 0, 
//                 width: '100%', 
//                 height: '100%', 
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)', 
//                 zIndex: 9999, 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 alignItems: 'center' 
//               }}>
//                 <div style={{ 
//                   position: 'relative', 
//                   width: '90%', 
//                   height: '90%', 
//                   backgroundColor: '#000', 
//                   borderRadius: '10px', 
//                   overflow: 'auto', 
//                   boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' 
//                 }}>
//                   <button style={{ 
//                     position: 'absolute', 
//                     top: 10, 
//                     right: 10, 
//                     cursor: 'pointer', 
//                     backgroundColor: '#4CAF50', 
//                     color: '#fff', 
//                     border: 'none', 
//                     padding: '5px 10px', 
//                     borderRadius: '50%', 
//                     fontSize: '0.8em' 
//                   }} onClick={() => setShowIframe(false)}>✖</button>
//                   <iframe 
//                     src="https://nft-wallet-checker.vercel.app/" 
//                     style={{ 
//                       width: '100%', 
//                       height: 'calc(100% - 40px)', 
//                       border: 'none' 
//                     }} 
//                     title="Wallet-Checker"
//                   />
//                 </div>
//               </div>
//             )}

//             <SocialMediaContainer>
//               <XCard 
//                 href="https://x.com/KanjiiX"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 200 250">
//                   <g fill="#1DA1F2" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
//                     <g transform="scale(5.12,5.12)">
//                       <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
//                     </g>
//                   </g>
//                 </svg>
//               </XCard>

//               <SocialIcon 
//                 href="https://discord.gg/kanjix"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <DiscordIcon width="28" height="28" viewBox="0 0 24 24">
//                   <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"/>
//                 </DiscordIcon>
//               </SocialIcon>

//               {/* <SocialIcon 
//                 href="https://opensea.io"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <OpenSeaIcon width="28" height="28" viewBox="0 0 24 24">
//                   <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12s12-5.374 12-12S18.626 0 12 0zM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528c-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199a.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962c-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132c-.026.226.017.459.125.67c.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992c.156-.274.308-.566.43-.86c.024-.052.043-.107.065-.161c.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787c0-.108-.004-.221-.014-.327c-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312a6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972a5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197a4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05l.192.054l.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202a.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017c.034.024.084.062.147.108c.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691c.065.074.127.146.192.226c.062.079.132.156.19.232c.079.104.16.212.235.324c.033.053.074.108.105.161c.096.142.178.288.257.435c.034.067.067.141.096.213c.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254c-.075.17-.161.343-.264.502c-.034.06-.075.122-.113.182c-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209c-.081.098-.161.19-.242.278c-.048.058-.1.118-.156.17c-.052.06-.108.113-.156.161c-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298c.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"/>
//                 </OpenSeaIcon>
//               </SocialIcon>

//               <SocialIcon 
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <InstagramIcon width="28" height="28" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </InstagramIcon>
//               </SocialIcon> */}
//             </SocialMediaContainer>

//             <PageFill 
//               className={isHovered ? 'active' : ''} 
//               style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y }}
//             />

//             {/* <Signature>
//              by <a href="https://aradhya.vercel.app/" target="_blank" rel="noopener noreferrer">Aradhya</a>
//             </Signature> */}
//           </AppContainer>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;