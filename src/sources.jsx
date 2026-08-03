import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode, FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact, DiPython} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb, SiPostgresql, SiOdoo} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { BiLogoDocker } from "react-icons/bi";

export const tabs = [
    {name:"Sobre",id:'about'},
    {name:"Skills",id:'skill'},
    {name:"Serviços",id:'services'},
    {name:"Projetos",id:'projects'},
    {name:"Contato",id:'contact'},
]

export const whyChooseMe = [
  {
    title:"4 Sistemas em Produção",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Design + Desenvolvimento",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Mobile Offline-First",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Expertise ODOO & Fiscal",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"Desenvolvimento Mobile Offline-First",
    icon:<TbBrandReactNative/>,
    description:`Aplicações React Native com operação sem internet. Sincronização automática com retry, histórico imutável e foco em dados críticos. Ideal para logística, gestão de estoque e operações em campo.`,
  },
  {
    name:"Backend ODOO & Customização",
    icon:<SiOdoo/>,
    description:`Desenvolvimento de módulos, customizações e integrações ODOO. Modelagem de dados, regras de negócio em Python e painéis operacionais. Expertise em sistemas de governança fiscal e logística.`,
  },
  {
    name:"Design UI/UX Completo",
    icon:<FaPaintBrush/>,
    description:`Design visual responsável em todos os projetos. Prototipagem em Figma, identidade visual, dashboards e interfaces de alta fidelidade. Do conceito à implementação com feeling para experiência.`,
  },
  {
    name:"Automação Empresarial",
    icon:<RiExchange2Fill/>,
    description:`Orquestração de pipelines ETL com Airflow, RPA com Python, fluxos low-code em n8n e Zeev. Integrações de APIs REST e sincronização entre sistemas complexos.`,
  },
]


export const skills = [
  {
      title:"Design & Prototipagem",
      data:[
          {
              skill:"Figma",
              level:"Experienced",
          },
          {
              skill:"UI/UX Design",
              level:"Experienced",
          },
          {
              skill:"Identidade Visual",
              level:"Experienced",
          },
          {
              skill:"Dashboards",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Mobile & Frontend",
      data:[
          {
              skill:"React Native",
              level:"Experienced",
          },
          {
              skill:"Expo",
              level:"Experienced",
          },
          {
              skill:"React",
              level:"Experienced",
          },
          {
              skill:"TypeScript",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"SQLite",
              level:"Experienced",
          },
          {
              skill:"Zustand",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Backend & ODOO",
      data:[
          {
              skill:"ODOO",
              level:"Experienced",
          },
          {
              skill:"Python",
              level:"Experienced",
          },
          {
              skill:"Node.js",
              level:"Intermediate",
          },
          {
              skill:"Airflow",
              level:"Intermediate",
          },
          {
              skill:"RPA",
              level:"Intermediate",
          },
          {
              skill:"APIs REST",
              level:"Experienced",
          },
          {
              skill:"n8n",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Banco de Dados & DevOps",
      data:[
          {
              skill:"PostgreSQL",
              level:"Experienced",
          },
          {
              skill:"SQLite",
              level:"Experienced",
          },
          {
              skill:"Docker",
              level:"Intermediate",
          },
          {
              skill:"Git",
              level:"Experienced",
          },
          {
              skill:"Firebase",
              level:"Intermediate",
          },
          {
              skill:"Scrum",
              level:"Experienced",
          },
          {
              skill:"Kanban",
              level:"Experienced",
          },
      ]
  },
]


export const projects = [
  {
    id:1,
    title: 'Conecta Aprendiz',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    category:"Mobile",
    description: `App de gamificação para aprendizes com usuários reais na Google Play Store. Responsável por design visual completo em Figma e implementação React Native. Foco em experiência interativa, engajamento e retenção de usuários através de desafios e rewards.`,
    demoLink: "https://play.google.com/store/apps/details?id=com.alexdevmobile007.senacaprendizagem",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
      {
        name:"Expo",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:2,
    title: 'Estoque+',
    image: 'https://images.unsplash.com/photo-1553531088-a93c38a47b68?w=500&h=300&fit=crop',
    category:"Mobile",
    description:`App mobile logístico em produção com múltiplas lojas. Módulos offline-first para Recebimento, Conferência e Transferência. Sincronização automática com retry, histórico imutável e rastreamento completo. Integração com scanner de barcode, câmera para ocorrências e rotas.`,
    demoLink: "https://github.com/daniewcruz",
    stack:[
      {
        name:"React Native",
        icon: <TbBrandReactNative/>,
        iconColor:"skyblue",
      },
      {
        name:"TypeScript",
        icon: <DiReact/>,
        iconColor:"blue",
      },
      {
        name:"SQLite",
        icon: <SiMongodb/>,
        iconColor:"gray",
      },
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
      {
        name:"Odoo",
        icon: <SiOdoo/>,
        iconColor:"darkred",
      },
    ]
  },
  {
    id:3,
    title: 'LeadTime',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    category:"Web",
    description: `Portal de logística em produção que otimiza processos de agendamento entre compradores e fornecedores. Responsável por design visual e desenvolvimento backend ODOO em equipe usando Scrum. Integrações com sistemas de logística e gestão de entregas.`,
    demoLink: "https://github.com/daniewcruz",
    stack:[
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
      {
        name:"Odoo",
        icon: <SiOdoo/>,
        iconColor:"darkred",
      },
      {
        name:"Python",
        icon: <DiPython/>,
        iconColor:"blue",
      },
      {
        name:"PostgreSQL",
        icon: <SiPostgresql/>,
        iconColor:"lightblue",
      },
      {
        name:"Docker",
        icon: <BiLogoDocker/>,
        iconColor:"skyblue",
      },
    ]
  },
  {
    id:4,
    title: 'Nexped',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70e504c0?w=500&h=300&fit=crop',
    category:"Web",
    description: `Sistema ODOO de pré-entrada de notas em produção. Especializado em governança fiscal com análise automática de críticas (fiscais, comerciais, pricing) e detecção de inconsistências. Dashboard operacional para aprovação de notas com rastreamento completo. Desenvolvimento solo com customizações avançadas.`,
    demoLink: "https://github.com/daniewcruz",
    stack:[
      {
        name:"Odoo",
        icon: <SiOdoo/>,
        iconColor:"darkred",
      },
      {
        name:"Python",
        icon: <DiPython/>,
        iconColor:"blue",
      },
      {
        name:"PostgreSQL",
        icon: <SiPostgresql/>,
        iconColor:"lightblue",
      },
      {
        name:"Figma",
        icon: <CgFigma/>,
        iconColor:"orangered",
      },
      {
        name:"XML",
        icon: <DiReact/>,
        iconColor:"red",
      },
    ]
  },
]

export const contactOptions = [
  {
    title:"Email",
    value:"daniewcruz@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Telefone",
    value:"+55 84 99455-3966",
    icon:<IoCallOutline/>,
  },
  {
    title:"Localização",
    value:"Natal, Rio Grande do Norte",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Linkedin",
      icon:<FaLinkedin />,
      link:"https://www.linkedin.com/in/daniewcruz/",
    },
    {
      name:"Github",
      icon:<FaGithub />,
      link:"https://github.com/daniewcruz",
    },
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"https://www.instagram.com/daniewcruz",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/5584994553966",
    },
];

export const footer = [
  {
    title:"Navegação",
    routes:[
      {name:"Sobre",id:'about'},
      {name:"Skills",id:'skill'},
    ]
  },
  {
      title:"Trabalho",
      routes:[
        {name:"Serviços",id:'services'},
        {name:"Projetos",id:'projects'},
        {name:"Contato",id:'contact'},
      ]
    },
  {
      title:"Contato",
      routes:[
        {name:"daniewcruz@gmail.com"},
        {name:"Natal, RN"},
      ]
    },
]

    