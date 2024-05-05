import { FaBoxOpen } from "react-icons/fa6";
import { PiBroomFill } from "react-icons/pi";
import { MdCleaningServices } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";

import { TbSpeedboat } from "react-icons/tb";
import { FaHouseChimney } from "react-icons/fa6";
import { ImBoxRemove } from "react-icons/im";

// Define pricing information for different cleaning services
export const pricing = [
    {
        name: 'Regular Cleaning',
        icon: <MdCleaningServices size={'100px'} color='#3e414a' />, // Using MdCleaningServices icon from react-icons
        details: `Regular cleaning encompasses vacuuming, mopping, moving and rolling furniture not exceeding 40 lbs, detailed bathroom cleaning, and hard surfaces cleaning.`,
        rates: ['1 room ($115 or $120)', '2 rooms ($135 to $150)', '3 rooms ($160 to $180)', '4 rooms ($190 to $210)'],
    },
    {
        name: 'Deep Cleaning',
        icon: <PiBroomFill size={'100px'} color='#3e414a' />, // Using PiBroomFill icon from react-icons
        details: `Deep cleaning includes all regular cleaning tasks plus baseboard, light fixtures, fans, and all doors cleaning. Additionally, exterior kitchen cabinet and room A/C cleaning are covered.`,
        rates: ['1 room ($140 to $160)', '2 rooms ($170 to $200)', '3 rooms ($210 to $240)', '4 rooms ($250 to $300)'],
    },
    {
        name: 'Move-Out Cleaning',
        icon: <FaBoxOpen size={'100px'} color='#3e414a' />, // Using FaBoxOpen icon from react-icons
        details: `Move-out cleaning covers room cleaning, appliance cleaning, cabinets, countertops, baseboards, and windowsills cleaning to ensure a fresh start in your new home.`,
        rates: ['1 room ($160 to $180)', '2 rooms ($190 to $230)', '3 rooms ($250 to $280)', '4 rooms ($300 to $360)'],
    },
    {
        name: 'Post-Construction Cleaning',
        icon: <LuConstruction size={'100px'} color='#3e414a' />, // Using LuConstruction icon from react-icons
        details: `Post-construction cleaning entails thorough dusting, sweeping, vacuuming, and meticulous cleaning to eliminate construction residues, ensuring a dust-free, polished environment.`,
        rates: ['1 room ($250 to $300)', '2 rooms ($350 to $400)', '3 rooms ($450 to $550)', '4 rooms ($600 to $750)'],
    },
];


export const services = [
    {
        name: 'Residential Cleaning',
        details: `Discover the joy of a spotless and inviting home with Done with Dust's expert residential cleaning. Our dedicated team ensures a fresh and organized living space, leaving no corner untouched. From thorough dusting to meticulous vacuuming, we create an environment that delights.`,
        icon: <FaHouseChimney style={{ fontSize: '100px', color: '#3e414a' }} />,
    },
    {
        name: 'Yacht Cleaning',
        details: `Elevate your yacht's allure with our specialized interior cleaning. Our professionals craft an impeccable atmosphere, from polished surfaces to pristine upholstery. Experience luxury at its finest on every voyage, surrounded by sophistication and elegance.`,
        icon: <TbSpeedboat style={{ fontSize: '100px', color: '#3e414a' }} />,
    },
    {
        name: 'Move-In/Move-Out Cleaning',
        details: `Relish the excitement of a new home without the hassle. Our move-in/move-out cleaning guarantees a fresh start. We prepare your new space for you or leave your old space flawless for the next occupant. Embrace your journey; we'll handle the cleaning.`,
        icon: <ImBoxRemove style={{ fontSize: '100px', color: '#3e414a' }} />,
    },
];
