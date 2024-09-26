import { FaRegHospital } from "react-icons/fa";
import { GiBank } from "react-icons/gi";
import { GoTools } from "react-icons/go";
import { LuSchool } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";

const projects = [
  {
    category: "Government & Public Sector Projects",
    slug: "government-and-public-sector",
    cover:
      "https://wonderfulengineering.com/wp-content/uploads/2014/03/engineering-pictures-11.jpg",
    icon: () => RiGovernmentLine,
    projects: [
      {
        name: "Harris County Infrastructure Upgrade",
        location: "Houston, TX",
        client: "Harris County Engineering Department",
        scope:
          "Proximetra Solutions was commissioned to assist Harris County in modernizing its public infrastructure, focusing on roadways, bridges, and stormwater management systems. Our team implemented sustainable design practices to enhance flood control measures and improve traffic flow in heavily populated areas.",
        outcome:
          "The project improved the county’s ability to handle severe weather events and increased transportation efficiency for residents and businesses.",
      },
      {
        name: "Dallas Area Rapid Transit (DART) Expansion",
        location: "Dallas, TX",
        client: "Dallas Area Rapid Transit (DART)",
        scope:
          "In partnership with DART, Proximetra helped design and implement key expansions to the city’s light rail network. Our work involved laying new track lines, upgrading power systems, and integrating sustainable energy solutions into station designs.",
        outcome:
          "The expansion increased public transportation capacity by 35% and improved energy efficiency, benefiting tens of thousands of daily commuters.",
      },
    ],
  },
  {
    category: "Healthcare Projects",
    slug: "healthcare",
    cover:
      "https://th.bing.com/th/id/OIP.TOskQy9yW3nc3fma4JjsrAHaFF?rs=1&pid=ImgDetMain",
    icon: () => FaRegHospital,
    projects: [
      {
        name: "Houston Methodist Hospital Energy Optimization",
        location: "Houston, TX",
        client: "Houston Methodist Hospital",
        scope:
          "Proximetra Solutions worked closely with the facilities management team at Houston Methodist Hospital to optimize their energy use, focusing on upgrading HVAC, electrical systems, and integrating renewable energy. The project aimed to reduce the hospital’s operational costs while ensuring an uninterrupted power supply for critical medical operations.",
        outcome:
          "The hospital reported a 20% reduction in energy consumption and significantly increased system reliability, especially in the critical care units.",
      },
      {
        name: "Baylor University Medical Center Renovation",
        location: "Dallas, TX",
        client: "Baylor Scott & White Health",
        scope:
          "We provided structural engineering support for the renovation of the Baylor University Medical Center, ensuring that the hospital’s infrastructure could handle state-of-the-art medical equipment. This involved upgrading power systems, implementing earthquake-resistant features, and improving facility layout for patient care efficiency.",
        outcome:
          "The renovation enhanced patient care facilities and allowed for the addition of advanced imaging and treatment centers, making Baylor one of the leading healthcare providers in Dallas.",
      },
    ],
  },
  {
    category: "Commercial Projects",
    slug: "commercial",
    cover:
      "https://th.bing.com/th/id/OIP._vloRnTlN7XaDJFQZsRb9AHaEL?rs=1&pid=ImgDetMain",
    icon: () => GiBank,
    projects: [
      {
        name: "ExxonMobil Campus Energy Retrofit",
        location: "Houston, TX",
        client: "ExxonMobil",
        scope:
          "Proximetra Solutions was engaged to retrofit the energy systems at ExxonMobil’s sprawling Houston campus. Our engineers introduced new energy-saving technologies, including solar panel arrays, advanced HVAC systems, and energy-efficient lighting across the 385-acre campus.",
        outcome:
          "ExxonMobil achieved a 25% reduction in its overall energy consumption, reducing its carbon footprint while creating a more comfortable work environment for employees.",
      },
      {
        name: "Dallas Galleria Redevelopment",
        location: "Dallas, TX",
        client: "Galleria Dallas",
        scope:
          "Proximetra played a key role in the redevelopment of the Dallas Galleria, a landmark shopping center in the heart of Dallas. We provided electrical, structural, and mechanical engineering services, ensuring the facility met modern sustainability and safety standards.",
        outcome:
          "The redevelopment project revitalized the Galleria, attracting new retail tenants and improving energy efficiency by 30%, making it a premier destination for shoppers and businesses alike.",
      },
    ],
  },
  {
    category: "Industrial Projects",
    slug: "industrial",
    cover:
      "https://masoudraoufi.ae/wp-content/uploads/Masoud-Raoufi-Photography1119-1366x911.webp",
    icon: () => GoTools,
    projects: [
      {
        name: "Phillips 66 Refinery Modernization",
        location: "Houston, TX",
        client: "Phillips 66",
        scope:
          "Our team partnered with Phillips 66 to modernize one of their largest refining operations in Houston. This included upgrading control systems, implementing more efficient refining processes, and introducing waste-reduction technologies.",
        outcome:
          "The refinery increased production efficiency by 15%, reduced waste output by 10%, and achieved significant cost savings through more efficient processes.",
      },
      {
        name: "Toyota North America Manufacturing Facility Expansion",
        location: "Dallas, TX",
        client: "Toyota North America",
        scope:
          "Proximetra supported Toyota’s expansion of their North American manufacturing facility in Dallas. We designed new production lines for electric vehicles (EVs) and introduced advanced automation and robotics systems to improve efficiency.",
        outcome:
          "The expanded facility allowed Toyota to increase EV production capacity by 40%, positioning the company to meet the growing demand for environmentally friendly vehicles.",
      },
    ],
  },
  {
    category: "Educational Institutions Projects",
    slug: "educational",
    cover:
      "https://th.bing.com/th/id/R.2c4907a196bb950b65dceabf1e6e30d5?rik=egkvv0v81N5LzQ&riu=http%3a%2f%2fwww.vanilla3.co.uk%2fwp-content%2fuploads%2f2015%2f08%2feducation-photography-11.jpg&ehk=8423ZDPC%2bNd3VUxGfRS6kv20wTg7fwNoEe2xr6jF2hU%3d&risl=&pid=ImgRaw&r=0",
    icon: () => LuSchool,
    projects: [
      {
        name: "University of Texas at Austin Solar Array Installation",
        location: "Austin, TX",
        client: "University of Texas System",
        scope:
          "Proximetra Solutions partnered with the University of Texas to install a large-scale solar array on the Austin campus, reducing the university’s reliance on traditional energy sources.",
        outcome:
          "The solar array generates enough power to cover 25% of the campus’s energy needs, making it one of the most sustainable universities in Texas.",
      },
      {
        name: "THouston Independent School District (HISD) Sustainable Classroom Project",
        location: "Houston, TX",
        client: "Houston ISD",
        scope:
          "We assisted Houston ISD in creating energy-efficient classrooms, focusing on integrating smart lighting systems, energy-efficient HVAC, and renewable energy sources to reduce operational costs across several campuses.",
        outcome:
          "The project reduced HISD’s energy expenditures by 15% and provided a healthier, more sustainable learning environment for students and staff.",
      },
    ],
  },
  {
    category: "Energy & Utilities Projects",
    slug: "energy",
    cover:
      "https://th.bing.com/th/id/R.a4b1ed8654e4c5fe5f8d3fcda9d45dd3?rik=Ojc0lFkNswniOQ&pid=ImgRaw&r=0",
    icon: () => MdElectricBolt,
    projects: [
      {
        name: "CenterPoint Energy Grid Modernization",
        location: "Houston, TX",
        client: "CenterPoint Energy",
        scope:
          "Proximetra Solutions was tasked with modernizing CenterPoint Energy’s electrical grid in the greater Houston area. This included implementing smart grid technologies, improving system reliability, and incorporating renewable energy sources into the grid.",
        outcome:
          "The grid modernization increased energy reliability for over 2 million customers and allowed for more efficient integration of renewable energy into the grid.",
      },
      {
        name: "Oncor Electric Delivery Smart Metering Initiative",
        location: "Dallas, TX",
        client: "Oncor Electric Delivery",
        scope:
          "In collaboration with Oncor, Proximetra helped implement a smart metering system across the Dallas area, allowing for real-time monitoring of energy usage and more efficient energy distribution.",
        outcome:
          "The smart metering initiative helped reduce energy consumption in Dallas by 10% and gave customers more control over their energy use.",
      },
    ],
  },
];

export default projects;
