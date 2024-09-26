const industries = [
  {
    slug: "business-and-corporate",
    name: "Business & Corporate",
    banner:
      "https://th.bing.com/th/id/OIP.U86N6WSiV02z2JN_N11tBwHaE8?rs=1&pid=ImgDetMain",
    desc: "We partner with leading companies across various industries, providing customized solutions to improve efficiency, drive innovation, and support sustainable growth.",
    points: [
      {
        title: "Manufacturing",
        desc: "We work with major manufacturing firms such as General Electric and Siemens to optimize production processes, integrate new technologies, and improve energy efficiency.",
      },
      {
        title: "Retail",
        desc: "Proximetra has delivered IT infrastructure and energy management solutions for global retail giants like Walmart and IKEA, enabling them to scale operations and meet sustainability targets.",
      },
      {
        title: "Financial Services",
        desc: "For banking and financial service providers such as JPMorgan Chase and Goldman Sachs, we implement secure IT networks, cybersecurity systems, and energy-saving technologies for data centers.",
      },
    ],
  },
  {
    slug: "government-and-public-sector",
    name: "Government & Public Sector",
    banner:
      "https://www.ucptracers.com/wp-content/uploads/2019/11/AdobeStock_7706734_cropped_web.jpg",
    desc: "Proximetra has been entrusted with delivering large-scale engineering and consulting services to government agencies and public sector projects, helping to shape critical infrastructure and sustainable solutions for future growth.",
    points: [
      {
        title: "Urban Infrastructure Projects",
        desc: "We’ve partnered with government bodies like the U.S. Department of Transportation (DOT) and Infrastructure Canada to design and implement roadway, bridge, and transportation infrastructure projects that support growing urban populations.",
      },
      {
        title: "Public Works & Utilities",
        desc: "Proximetra has worked with organizations such as National Grid and Water UK to modernize utility systems, providing water and energy solutions that meet regulatory standards and community needs.",
      },
      {
        title: "Defense & Security",
        desc: "Our engineering team has contributed to defense-related projects, including power distribution systems for military bases under contracts with the U.S. Department of Defense (DoD) and NATO.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    banner:
      "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg",
    desc: "Proximetra Solutions Ltd. provides comprehensive engineering and technology solutions for healthcare facilities, ensuring that they have the infrastructure and IT systems needed to deliver quality care.",
    points: [
      {
        title: "Hospitals & Healthcare Facilities",
        desc: "We’ve supported major healthcare institutions like Mayo Clinic and Cleveland Clinic with HVAC, power systems, and IT infrastructure upgrades, ensuring that these facilities operate efficiently and meet the demands of modern healthcare.",
      },
      {
        title: "Pharmaceuticals",
        desc: "Our team has worked with pharmaceutical companies such as Pfizer and Novartis, providing engineering support for research facilities and implementing clean energy systems to ensure regulatory compliance.",
      },
      {
        title: "Medical Equipment Manufacturing",
        desc: "We partner with medical device manufacturers like Medtronic and GE Healthcare, assisting with the design and optimization of manufacturing processes for medical equipment.",
      },
    ],
  },
  {
    slug: "energy-and-utilities",
    name: "Energy & Utilities",
    banner:
      "https://th.bing.com/th/id/R.8f010bb67e958ca7a30c4f44940d4e79?rik=ctosGqJJJfcmFg&pid=ImgRaw&r=0",
    desc: "We are at the forefront of providing sustainable energy solutions to both traditional and renewable energy sectors, helping to build the energy infrastructure of the future.",
    points: [
      {
        title: "Renewable Energy",
        desc: "We’ve delivered solar and wind energy projects for companies like NextEra Energy and Iberdrola, offering solutions that drive the transition to clean, renewable energy sources.",
      },
      {
        title: "Oil & Gas",
        desc: "Our engineers have provided consulting and project management services for oil and gas giants such as ExxonMobil and Shell, helping them to enhance operational efficiency while reducing environmental impact.",
      },
      {
        title: "Power Generation & Distribution",
        desc: "Proximetra partners with utilities like Southern Company and Duke Energy to modernize their power generation and distribution systems, including the integration of energy storage and microgrid technologies.",
      },
    ],
  },
  {
    slug: "transportation",
    name: "Transportation",
    banner:
      "https://th.bing.com/th/id/R.17b17582e906c5611f262926678e8ce3?rik=OpzLWXXMQKCQxQ&riu=http%3a%2f%2fwww.cud.ac.ae%2fsites%2fdefault%2ffiles%2fgeneral%2f2016%2ftransportation-1920x1080.jpg&ehk=aUuOL202R2oHlArru%2f1GZkxCdxArf%2fS%2bhTEcrpi1IZs%3d&risl=&pid=ImgRaw&r=0",
    desc: "We help transportation organizations modernize infrastructure and integrate smart technologies that improve safety, efficiency, and sustainability across all transportation modes.",
    points: [
      {
        title: "Rail & Transit",
        desc: "We have delivered advanced systems and design solutions for transit agencies like Amtrak and Transport for London (TfL), improving rail and transit infrastructure while incorporating green energy technologies.",
      },
      {
        title: "Aerospace",
        desc: "Proximetra works with companies such as Boeing and Airbus, offering mechanical and electrical engineering services that support the production and operation of aircraft.",
      },
      {
        title: "Automotive",
        desc: "We partner with major automotive manufacturers like Tesla and Ford, providing engineering support for energy-efficient automotive production plants and electric vehicle (EV) infrastructure.",
      },
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    banner:
      "https://www.esri.com/content/dam/esrisites/en-us/industries/2022/telecommunications/assets/overview/industry-telecom-overview-two-thirds.jpg",
    desc: "We provide engineering and technology services to telecommunications companies, helping them build the infrastructure needed to support growing demand for high-speed internet and data services.",
    points: [
      {
        title: "Network Infrastructure",
        desc: "We’ve supported telecommunications companies like AT&T and Verizon in designing and implementing data centers, fiber optic networks, and mobile communications infrastructure.",
      },
      {
        title: "Data Center Services",
        desc: "Our engineering team specializes in designing power and cooling systems for data centers operated by firms like Google and Amazon Web Services (AWS), ensuring their reliability and efficiency.",
      },
      {
        title: "Smart Cities",
        desc: "We are actively engaged in smart city projects, partnering with municipalities and telecom providers to build IoT-based infrastructure that supports citywide connectivity and intelligent systems.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    banner:
      "https://th.bing.com/th/id/R.2c4907a196bb950b65dceabf1e6e30d5?rik=egkvv0v81N5LzQ&riu=http%3a%2f%2fwww.vanilla3.co.uk%2fwp-content%2fuploads%2f2015%2f08%2feducation-photography-11.jpg&ehk=8423ZDPC%2bNd3VUxGfRS6kv20wTg7fwNoEe2xr6jF2hU%3d&risl=&pid=ImgRaw&r=0",
    desc: "Proximetra supports educational institutions with energy-efficient building designs, advanced IT infrastructure, and sustainability consulting services.",
    points: [
      {
        title: "K-12 Schools",
        desc: "We work with school districts like Los Angeles Unified School District (LAUSD) and Chicago Public Schools to provide energy-efficient HVAC and lighting systems, ensuring a comfortable and sustainable learning environment.",
      },
      {
        title: "Universities & Colleges",
        desc: "Proximetra has delivered infrastructure and IT solutions to top-tier institutions such as Harvard University and Stanford University, modernizing campus facilities while integrating renewable energy systems and cutting-edge IT infrastructure.",
      },
    ],
  },
  {
    slug: "agriculture-and-food-processing",
    name: "Agriculture & Food Processing",
    banner:
      "https://www.siyaindustrialpark.com/img/applications_image/960x5992022-11-26-17-32-2211-food.jpg",
    desc: "We offer specialized engineering services to support the agricultural industry and food processing facilities, ensuring they meet regulatory standards and operate efficiently.",
    points: [
      {
        title: "Agribusiness",
        desc: "Proximetra has partnered with agricultural giants such as John Deere and Cargill, providing mechanical and electrical engineering solutions for large-scale agricultural operations, including irrigation systems and renewable energy integration.",
      },
      {
        title: "Food Processing",
        desc: "We’ve worked with food processing companies like Nestlé and PepsiCo, providing energy-efficient refrigeration systems, water management, and sustainability consulting to optimize production and meet regulatory requirements.",
      },
    ],
  },
];

export default industries;
