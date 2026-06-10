/* Change this file to get your personal Portfolio */

const settings = {
  isSplash: false,
};

const seo = {
  title: "Deepak Soni",
  description:
    "DevOps Engineer | AWS | Azure | Docker | Kubernetes | Terraform | Jenkins",
  og: {
    title: "Deepak Soni Portfolio",
    type: "website",
    url: "https://whodeepaksoni.github.io/",
  },
};

const greeting = {
  title: "Deepak Soni",
  logo_name: "DeepakSoni",
  nickname: "Clouds & DevOps Engineer",
  subTitle:
    "DevOps Engineer | AWS • Azure • Docker • Kubernetes • Terraform • Jenkins | Building Scalable Cloud Infrastructure and CI/CD Pipelines",
  resumeLink:
    "https://drive.google.com/file/d/1izkkkryWz2I-QULGo7B5lEWtsN7CHhzR/view?usp=sharing",
  portfolio_repository:
    "https://github.com/whodeepaksoni/whodeepaksoni.github.io",
  githubProfile: "https://github.com/whodeepaksoni",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/whodeepaksoni",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/whodeepaksoni/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:whodeepaksoni1@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/who_deepak_soni/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Cloud & DevOps Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and managing scalable cloud infrastructure on AWS and Azure",
        "⚡ Building CI/CD pipelines using Jenkins, GitHub, Docker and Kubernetes",
        "⚡ Automating infrastructure provisioning and configuration using Terraform and Ansible",
        "⚡ Monitoring production environments with Grafana, CloudWatch and centralized logging solutions",
        "⚡ Troubleshooting deployment, server, networking and production issues",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos:terraform-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "logos:ansible",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "logos:grafana",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Infrastructure & System Administration",
      fileName: "DesignImg",
      skills: [
        "⚡ Managing Linux servers, networking, DNS, DHCP and firewall configurations",
        "⚡ Implementing Auto Scaling, Load Balancers and high availability architectures",
        "⚡ Troubleshooting production incidents and optimizing system performance",
        "⚡ Working with Nginx reverse proxy, SSL certificates and domain management",
        "⚡ Supporting IT operations, system administration and user support activities",
      ],
      softwareSkills: [
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CloudWatch",
          fontAwesomeClassname: "logos:aws-cloudwatch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS and Azure cloud platforms",
        "⚡ Hosting and maintaining websites on EC2/VM instances with database integration",
        "⚡ Designing VPC, subnet, security group, NAT Gateway and Load Balancer architecture",
        "⚡ Setting up scalable infrastructure using Auto Scaling, ALB, Route 53 and monitoring tools",
        "⚡ Managing cloud resources, IAM, storage, networking and deployment workflows",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CCNA",
      subtitle: "- Network Bulls",
      logo_path: "nb.png",
      alt_name: "Network Bulls",
      color_code: "#0879bf",
    },
    {
      title: "Devops certification",
      subtitle: "- Intellipaat",
      logo_path: "intellipaat.webp",
      certificate_link:
        "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEyNDEyJnU9MzEyODI1JmV4dD0x",
      alt_name: "Intellipaat",
      color_code: "#00000099",
    },
    {
      title: "Amazon Web Services (AWS) Solutions Architect - Associate",
      subtitle: "- Hands-on Training",
      logo_path: "intellipaat.webp",
      certificate_link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEyOTExJnU9MzEyODI1JmV4dD0x",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "Microsoft Azure Administrator",
      subtitle: "- AZ-104 Learning",
      logo_path: "intellipaat.webp",
      certificate_link: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEzMDM0JnU9MzEyODI1JmV4dD0x",
      alt_name: "Microsoft Azure",
      color_code: "#0089D699",
    },
  ],
};
const degrees = {
  degrees: [
    {
      title: "Indira Gandhi University",
      subtitle: "Bachelor of Business Administration",
      logo_path: "igu.png",
      alt_name: "Indira Gandhi University",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Graduated with a BBA from Indira Gandhi University, Haryana.",
        "⚡ During my academic journey, I developed a strong interest in technology and transitioned into Cloud & DevOps Engineering."
      ],
      website_link: "https://igu.ac.in/",
    },
  ],
};
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/whodeepaksoni",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/deepak-soni-398007270/",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I have hands-on experience in IT operations, cloud infrastructure, networking, system administration and DevOps automation. My work includes managing production infrastructure, building CI/CD pipelines, handling cloud resources, monitoring systems and troubleshooting real-world infrastructure issues.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "DevOps Engineer / IT Manager",
          company: "Vidyakul Learning Space",
          company_url: "https://vidyakul.com/",
          logo_path: "v_logo.jpg",
          duration: "Nov 2024 - Present",
          location: "Gurugram, Haryana",
          description:
            "Working on IT infrastructure, cloud operations and DevOps automation for a production EdTech environment. Managing Linux servers, AWS infrastructure, networking, DNS, SSL, Nginx reverse proxy, monitoring and production troubleshooting. Implemented AWS Auto Scaling architecture using AMI, Launch Template, Load Balancer and Auto Scaling Group to improve availability and reduce infrastructure cost. Built Jenkins CI/CD pipelines integrated with GitHub and Docker for automated build and deployment workflows. Managed Docker deployments, server monitoring using Grafana and AWS CloudWatch, and supported infrastructure operations for 150+ users across multiple locations.",
          color: "#000000",
        },
        {
          title: "IT Infrastructure & Network Support",
          company: "Vidyakul Learning Space",
          company_url: "https://vidyakul.com/",
          logo_path: "v_logo.jpg",
          duration: "Nov 2024 - Present",
          location: "Gurugram, Haryana",
          description:
            "Responsible for day-to-day IT operations including LAN/Wi-Fi management, firewall configuration, DNS, DHCP, VLANs, user support, system troubleshooting, vendor coordination and asset management. Managed office network infrastructure, internet connectivity, access points, firewall policies and live-streaming support infrastructure. Worked on network stability, bandwidth monitoring, SSL/domain management and issue resolution for internal teams.",
          color: "#0879bf",
        },
        {
          title: "Hardware & Software Support Engineer",
          company: "Whiz Works",
          company_url: "",
          logo_path: "ww.png",
          duration: "Previous Role",
          location: "Haryana, India",
          description:
            "Handled hardware, software and system support operations. Worked on Windows support, software installation, printer configuration, basic networking, hardware troubleshooting, user issue resolution and IT maintenance activities. Built a strong foundation in IT support, system administration and troubleshooting before moving into cloud and DevOps engineering.",
          color: "#4285F4",
        },
      ],
    },
  ],
};
const projectsHeader = {

  title: "Projects",
  description:
    "My projects focus on cloud infrastructure, CI/CD automation, containerization, Kubernetes deployment, monitoring and production-ready DevOps workflows using AWS, Azure, Jenkins, Docker, Terraform, Ansible and Linux.",
  avatar_image_path: "projects_image.svg",
};




const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me_deepak.png",
    description:
      "I am available for DevOps, Cloud Engineering and IT Infrastructure roles. You can connect with me for AWS, Azure, Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible and CI/CD related opportunities.",
  },
  blogSection: {
    title: "GitHub Projects",
    subtitle:
      "I document my DevOps learning, cloud projects and real-world troubleshooting experience on GitHub.",
    link: "https://github.com/whodeepaksoni",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Rewari, Haryana, India",
    locality: "Rewari",
    country: "India",
    region: "Haryana",
    postalCode: "123401",
    streetAddress: "Rewari",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Rewari,Haryana,India",
  },
  phoneSection: {
    title: "(+91) 9485954230",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};