import { DiFirebase, DiAndroid, DiCss3, DiGit, DiHtml5, DiJava, DiJavascript, DiMongodb, DiNodejs, DiPython, DiReact, DiBootstrap, DiMysql } from "react-icons/di";

export const projects = [
  {
    title: "Memories App",
    description:
      "Memories App is a social media application , built with MERN stack , in this app you can share your favorite places you visited with others , you can like ,edit , delete your memories . the app is fully responsive and uses mongoDB for storing the data , React for the frontend , and Node with express for the backend , we used Redux , google OAuth and JWT . ",
    image: "/images/memories.png",
    tags: ["React", "Nodejs", "MongoDB", "Express", "Redux", "OAuth2", "JWT"],
    visit: "https://github.com/OsamahKhOdeh/MemoriesMernApp",
    source: "https://memories-mern-app-osama.vercel.app",
    id: 0,
  },
  {
    title: "Ecommerce",
    description: "A simple and beautiful ecommerce web app built with React (Nextjs) for the front-end and i used Sanity CMS for managing the backend",
    image: "/images/nextjs-sanity.png",
    tags: ["React", "NextJS", "Sanity", "Material-UI", "Context API"],
    visit: "https://github.com/OsamahKhOdeh/ecommerce_sanity-stripe",
    source: "https://nextjs-sanity-store.vercel.app/",
    id: 1,
  },
  {
    title: "Online Clothing Store ",
    description: "Developed an eCommerce application using MERN stack that allows users to buy cloths , Developed an Admin dashboard that allows the owner of the app to control the products , users and provide the admin with Analytics and Reports ",
    image: "/images/clothing.png",
    tags: ["React", "Nodejs", "MongoDB", "Redux", "Firebase", "Style-components"],
    source: "https://github.com/OsamahKhOdeh/Clothing_Shop_MERN ",
    visit: "https://clothing-shop-mern.vercel.app",
    id: 2,
  },
  {
    title: "Food Ordering App",
    description: "Developed using nextjs and mongoDB ,The app allow the user to choose any kind of piazza then choose the size , add to cart , then pay with paypal or cach ,created admin dashboard to get orders and change there status , also add and edit the restaurant products",
    image: "/images/foodOredering.jpg",
    tags: ["Nextjs", "Cloudinary", "MongoDB", "PatPal", "React"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2014, text: "Started Software Engineering at Al-baath University " },
  { year: 2019, text: "Bachelor's degree in Information Technology Engineering " },
  { year: 2020, text: "Web development Teacher at Al-baath University" },
  { year: 2021, text: "MERN Stack Developer (Intern) at Swan Technology, Homs ,Syria " },
  { year: 2022, text: "React Js Developer (Freelance)" },
];

export const MySkills = [
  { text: "React", icon: <DiReact /> },
  { text: "Nodejs", icon: <DiNodejs /> },
  { text: "Express", icon: <DiNodejs /> },
  { text: "Mongo", icon: <DiMongodb /> },
  { text: "MERN", icon: "" },
  { text: "Nextjs", icon: <DiReact /> },
  { text: "Redux", icon: "" },

  { text: "HTML", icon: <DiHtml5 /> },
  { text: "CSS", icon: <DiCss3 /> },
  { text: "JavaScript", icon: <DiJavascript /> },
  { text: "BootStrap", icon: <DiBootstrap /> },
  { text: "MySQL", icon: <DiMysql /> },
  { text: "Java", icon: <DiJava /> },
  { text: "Python", icon: <DiPython /> },
  { text: "Git", icon: <DiGit /> },
  { text: "Android", icon: <DiAndroid /> },
  { text: "Firebase", icon: <DiFirebase /> },
];
