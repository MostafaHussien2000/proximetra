import { AiOutlineControl, AiOutlineRadarChart } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import { FaDharmachakra, FaProjectDiagram, FaRoad } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiToolbox, GiVendingMachine } from "react-icons/gi";
import { GoCodescan, GoGraph } from "react-icons/go";
import { GrCloudComputer, GrStorage, GrUserManager } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoIosGitNetwork } from "react-icons/io";
import {
  IoAirplane,
  IoDocumentsOutline,
  IoRainyOutline,
} from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import {
  MdDevicesOther,
  MdOutlineEnergySavingsLeaf,
  MdOutlineManageAccounts,
  MdOutlineRateReview,
  MdOutlineSecurity,
  MdOutlineWater,
} from "react-icons/md";
import { PiLightbulbBold, PiSolarRoofLight } from "react-icons/pi";
import { RiGitPullRequestFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import { SiPowerbi } from "react-icons/si";
import { TbFilePower, TbFolderCode, TbSolarPanel2 } from "react-icons/tb";

const banners = {
  engineering:
    "https://th.bing.com/th/id/OIP.d7CTN9gua803gF02qsQcCwHaFj?rs=1&pid=ImgDetMain",
  technology:
    "https://th.bing.com/th/id/R.cd5a272288421105f628272cf1beca93?rik=R0I0WLPi8DvdmA&pid=ImgRaw&r=0",
  consulting: "https://media.graphassets.com/9G49cilXS1eO7oeeWdja",
  management:
    "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  infrastructure:
    "https://images.squarespace-cdn.com/content/v1/600ae182f8894d79eb1eb1ca/1626276114295-VBTA8LPSSGR947HS4T7R/Infrastructure-photography-PDA_210607-3860.jpg",
  energy:
    "https://th.bing.com/th/id/OIP.YJAelqhA0c72JKgMv0nzkwHaE8?rs=1&pid=ImgDetMain",
};

const engineeringSubServices = [
  {
    title: "Civil Engineering",
    cards: [
      {
        icon: () => CgIfDesign,
        name: "Urban Infrastructure Design",
        desc: "We design and manage large-scale urban infrastructure projects, including roadways, bridges, water systems, and public spaces. Our civil engineering team is skilled in integrating sustainable practices into urban planning, ensuring long-term resilience.",
      },
      {
        icon: () => HiOutlineDocumentReport,
        name: "Land Development & Site Planning",
        desc: "Proximetra specializes in the evaluation, planning, and development of land for residential, commercial, and industrial uses. We manage everything from initial site surveys to the final construction stages.",
      },
      {
        icon: () => IoRainyOutline,
        name: "Stormwater Management",
        desc: "We design and implement stormwater control systems to prevent flooding and maintain water quality. Our team creates systems that minimize environmental impact while managing urban and rural runoff.",
      },
    ],
  },
  {
    title: "Mechanical Engineering",
    cards: [
      {
        icon: () => GiVendingMachine,
        name: "HVAC System Design",
        desc: "We provide energy-efficient heating, ventilation, and air conditioning (HVAC) solutions for commercial, industrial, and residential buildings. Our designs focus on optimizing energy usage while ensuring indoor air quality and comfort.",
      },
      {
        icon: () => GiToolbox,
        name: "Industrial Equipment Design",
        desc: "We design mechanical systems and equipment for manufacturing and industrial processes, ensuring optimal performance, efficiency, and compliance with safety regulations.",
      },
      {
        icon: () => FaDharmachakra,
        name: "Sustainable Mechanical Solutions",
        desc: "Our mechanical engineering team is experienced in designing systems that minimize environmental impact by using renewable energy sources, energy recovery, and resource-efficient designs.",
      },
    ],
  },
  {
    title: "Electrical Engineering",
    cards: [
      {
        icon: () => TbFilePower,
        name: "Power Distribution Systems",
        desc: "Proximetra designs and implements safe and reliable electrical power distribution systems for buildings and industrial facilities. We also specialize in renewable energy integration to optimize power use.",
      },
      {
        icon: () => PiLightbulbBold,
        name: "Lighting & Electrical Installations",
        desc: "We create comprehensive lighting systems for both commercial and public spaces, incorporating energy-efficient technologies to reduce operational costs.",
      },
      {
        icon: () => MdOutlineEnergySavingsLeaf,
        name: "Energy Storage & Microgrids",
        desc: "Our team helps businesses and municipalities develop independent energy systems using batteries and microgrids, ensuring uninterrupted energy supply and reducing reliance on centralized grids.",
      },
    ],
  },
];
const technologySubServices = [
  {
    title: "IT Infrastructure Design",
    cards: [
      {
        icon: () => IoIosGitNetwork,
        name: "Network Design & Implementation",
        desc: "Proximetra designs and implements scalable, secure IT networks for businesses of all sizes. We ensure that your IT infrastructure supports growth, ensures data security, and operates efficiently.",
      },
      {
        icon: () => GrCloudComputer,
        name: "Cloud Computing & Virtualization",
        desc: "We help businesses migrate to cloud-based solutions, enabling them to reduce costs, increase data access, and enhance collaboration across teams. Our cloud services include system integration, storage solutions, and data security.",
      },
      {
        icon: () => MdOutlineSecurity,
        name: "Cybersecurity Solutions",
        desc: "Protect your business from cyber threats with our advanced security protocols, including network monitoring, intrusion detection systems, and regular security audits.",
      },
    ],
  },
  {
    title: "Software Development",
    cards: [
      {
        icon: () => GoCodescan,
        name: "Custom Software Solutions",
        desc: "We develop bespoke software tailored to meet specific business requirements, improving efficiency, automating processes, and enhancing customer experiences.",
      },
      {
        icon: () => TbFolderCode,
        name: "Enterprise Resource Planning (ERP)",
        desc: "Our ERP systems help businesses manage their resources more effectively by integrating key business processes, such as procurement, production, and financial management, into a single system.",
      },
      {
        icon: () => MdDevicesOther,
        name: "Mobile & Web Application Development",
        desc: "We design user-friendly mobile and web applications that streamline operations and improve customer engagement. Our development team ensures that your applications are optimized for performance and scalability.",
      },
    ],
  },
  {
    title: "Data Analytics & Artificial Intelligence (AI)",
    cards: [
      {
        icon: () => SiPowerbi,
        name: "Business Intelligence Solutions",
        desc: "We provide businesses with the tools to harness the power of data, enabling them to make informed decisions. Our data analytics services include reporting, predictive analytics, and data visualization.",
      },
      {
        icon: () => LuBrainCircuit,
        name: "AI & Machine Learning Applications",
        desc: "We create comprehensive lighting systems for both commercial and public spaces, incorporating energy-efficient technologies to reduce operational costs.",
      },
    ],
  },
];
const consultingSubServices = [
  {
    title: "Project Feasibility & Planning",
    cards: [
      {
        icon: () => GoGraph,
        name: "Feasibility Studies",
        desc: "We conduct detailed feasibility studies to evaluate the potential of proposed projects. Our team examines technical, financial, and environmental factors to provide clear recommendations and strategic insights.",
      },
      {
        icon: () => IoDocumentsOutline,
        name: "Strategic Planning & Roadmaps",
        desc: "Our consultants work closely with your organization to develop strategic plans that outline project timelines, budgets, and resource allocation, ensuring that your projects are on track to succeed.",
      },
    ],
  },
  {
    title: "Risk Management",
    cards: [
      {
        icon: () => MdOutlineManageAccounts,
        name: "Risk Assessment & Mitigation",
        desc: "We help businesses identify potential risks in their operations and projects, providing solutions that mitigate those risks while maintaining operational continuity.",
      },
      {
        icon: () => TbFolderCode,
        name: "Regulatory Compliance",
        desc: "Proximetra ensures that your projects comply with industry regulations and standards, reducing the risk of legal and financial penalties.",
      },
    ],
  },
  {
    title: "Sustainability Consulting",
    cards: [
      {
        icon: () => AiOutlineRadarChart,
        name: "Sustainable Engineering Practices",
        desc: "We assist businesses in adopting sustainable engineering and operational practices, reducing environmental impact, and meeting regulatory and social responsibilities.",
      },
      {
        icon: () => MdOutlineEnergySavingsLeaf,
        name: "Energy Efficiency & Green Certifications",
        desc: "Our consultants help businesses achieve energy efficiency goals by recommending renewable energy solutions and securing green certifications such as LEED.",
      },
    ],
  },
];
const managementSubServices = [
  {
    title: "Comprehensive Project Management",
    cards: [
      {
        icon: () => GrUserManager,
        name: "End-to-End Management",
        desc: "Proximetra takes responsibility for managing all phases of a project, from planning and design to execution and delivery. We coordinate with stakeholders, ensure resource availability, and monitor project progress to meet deadlines.",
      },
      {
        icon: () => MdOutlineManageAccounts,
        name: "Risk & Change Management",
        desc: "Proximetra Solutions Ltd. works closely with our clients to develop and maintain a diverse team of experts in various fields, ensuring that your projects are successful and that your team stays focused and motivated.",
      },
      {
        icon: () => FaPeopleGroup,
        name: "Stakeholder Communication",
        desc: "Effective communication with all stakeholders is key to project success. We provide regular updates, transparent reporting, and clear communication channels throughout the project lifecycle.",
      },
    ],
  },
  {
    title: "Budgeting & Scheduling",
    cards: [
      {
        icon: () => RiMoneyDollarCircleLine,
        name: "Cost Management",
        desc: "Our team carefully manages project budgets, ensuring that all resources are used efficiently and that projects are delivered within the agreed financial parameters.",
      },
      {
        icon: () => RxLapTimer,
        name: "Time Management & Scheduling",
        desc: "We create detailed project schedules that outline key milestones, deadlines, and resource allocation to ensure timely project delivery.",
      },
    ],
  },
  {
    title: "Quality Assurance & Control",
    cards: [
      {
        icon: () => AiOutlineControl,
        name: "Quality Control Standards",
        desc: "Proximetra implements stringent quality control measures at every stage of the project to ensure compliance with industry standards and client expectations.",
      },
      {
        icon: () => MdOutlineRateReview,
        name: "Post-Project Evaluation",
        desc: "After project completion, we conduct thorough evaluations to ensure that all objectives have been met and that the project delivers long-term value.",
      },
    ],
  },
];
const infrastructureSubServices = [
  {
    title: "Urban Development & Planning",
    cards: [
      {
        icon: () => CgIfDesign,
        name: "Master Planning & Urban Design",
        desc: "We design and execute urban development plans that balance the needs of communities with environmental and economic sustainability. Our team ensures that projects align with local regulations and long-term growth strategies.",
      },
      {
        icon: () => FaProjectDiagram,
        name: "Public Infrastructure Projects",
        desc: "Proximetra specializes in the design and construction of essential public infrastructure, including roadways, bridges, and public transport systems. We focus on creating infrastructure that is both efficient and sustainable.",
      },
    ],
  },
  {
    title: "Water & Wastewater Systems",
    cards: [
      {
        icon: () => RiGitPullRequestFill,
        name: "Water Supply Systems",
        desc: "We design water supply systems that ensure access to clean and reliable water for both urban and rural communities. Our solutions focus on sustainability and resilience to climate-related challenges.",
      },
      {
        icon: () => MdOutlineWater,
        name: "Wastewater Treatment Solutions",
        desc: "Proximetra provides wastewater treatment systems that meet the highest environmental standards, ensuring that wastewater is treated safely and effectively before being returned to the ecosystem.",
      },
    ],
  },
  {
    title: "Transportation Systems",
    cards: [
      {
        icon: () => FaRoad,
        name: "Road & Highway Engineering",
        desc: "We design and build roadways and highways that improve transportation efficiency and reduce traffic congestion. Our team ensures that all designs comply with safety regulations and accommodate future growth.",
      },
      {
        icon: () => IoAirplane,
        name: "Rail & Air Transport Infrastructure",
        desc: "Proximetra provides planning and design services for rail and airport projects, helping to modernize transport systems and improve connectivity.",
      },
    ],
  },
];
const energySubServices = [
  {
    title: "Renewable Energy Solutions",
    cards: [
      {
        icon: () => TbSolarPanel2,
        name: "Solar & Wind Energy",
        desc: "We design and install renewable energy systems, including solar panels and wind turbines, that help businesses and communities transition to clean energy sources.",
      },
      {
        icon: () => GrStorage,
        name: "Energy Storage Systems",
        desc: "Proximetra provides advanced energy storage solutions that enable businesses to store excess energy for later use, improving energy independence and reducing reliance on traditional power grids.",
      },
    ],
  },
  {
    title: "Energy Audits & Efficiency Improvements",
    cards: [
      {
        icon: () => TbFilePower,
        name: "Comprehensive Energy Audits",
        desc: "We design and install renewable energy systems, including solar panels and wind turbines, that help businesses and communities transition to clean energy sources.",
      },
      {
        icon: () => PiSolarRoofLight,
        name: "Green Building Design",
        desc: "We work with businesses to incorporate energy-efficient designs and materials into new buildings and renovations, reducing operational costs and environmental impact.",
      },
    ],
  },
];

const services = [
  {
    name: "Engineering Services",
    banner: banners.engineering,
    desc: "Our core expertise lies in providing high-quality engineering solutions that address complex challenges in infrastructure, industrial, and commercial projects. We work closely with clients to deliver projects that are safe, reliable, and future-proof.",
    subServices: engineeringSubServices,
  },
  {
    name: "Technology Solutions",
    banner: banners.technology,
    desc: "We provide innovative technology services that help our clients transform their operations. From designing IT infrastructures to developing custom software solutions, Proximetra ensures that businesses remain competitive in a rapidly evolving digital landscape.",
    subServices: technologySubServices,
  },
  {
    name: "Consulting Services",
    banner: banners.consulting,
    desc: "Proximetra Solutions Ltd. offers comprehensive consulting services to help businesses navigate challenges, improve operations, and achieve their long-term goals. Our consulting expertise spans various industries, ensuring that we deliver tailored, actionable advice to our clients.",
    subServices: consultingSubServices,
  },
  {
    name: "Project Management",
    banner: banners.management,
    desc: "Our project management services ensure the successful execution of projects, from initial concept through to completion. We manage all aspects of the project lifecycle, ensuring that projects are delivered on time, within budget, and to the highest quality standards.",
    subServices: managementSubServices,
  },
  {
    name: "Infrastructure Development",
    banner: banners.infrastructure,
    desc: "We offer world-class infrastructure development services that transform cities, industries, and businesses. Our team is experienced in delivering large-scale infrastructure projects that promote sustainable growth and improve the quality of life for communities.",
    subServices: infrastructureSubServices,
  },
  {
    name: "Energy Solutions",
    banner: banners.energy,
    desc: "At Proximetra Solutions Ltd., we believe in creating sustainable energy solutions that power businesses and communities. Our energy services focus on increasing efficiency, reducing costs, and promoting the use of renewable energy.",
    subServices: energySubServices,
  },
];

export default services;
