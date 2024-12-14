export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Passionate about software development and problem-solving.",
      description: "I focus on creating impactful and efficient solutions.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm highly flexible with time zone communications and adapt seamlessly to collaborative team environments.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Constantly learning and growing in web development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 5,
      title: "Currently exploring Next.js and DSA.",
      description: "Focusing on mastering web technologies.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: " h-screen absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/bb5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Let’s build something amazing together!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Attendance Tracker System",
      des: "A robust system for tracking student attendance using PostgreSQL, Drizzle ORM, and Next.js.",
      img: "/attendance.png",
      iconLists: ["/postgresql.svg", "/react.svg", "/next.svg", "/js.svg","/tail.svg"],
      link: "https://github.com/mahesh-bhosale/fullstack-attendance-management-nextjs-react",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      des: "An online shopping platform built with HTML, CSS, JavaScript, and PHP.",
      img: "/ecommerce.png",
      iconLists: ["/html.svg", "/css.svg", "/js.svg", "/php.svg","/mysql.svg"],
      link: "https://github.com/mahesh-bhosale/ecommerce-website-html-css-js-php-mysql",
    },
    {
      id: 3,
      title: "Quiz Management System",
      des: "A Java-based system for managing and conducting quizzes.",
      img: "/Quiz.png",
      iconLists: ["/java.svg","/mysql.svg"],
      link: "https://github.com/mahesh-bhosale/online-exam-system-in-java",
    },
    {
        id: 4,
        title: "Mahesh Portfolio",
        des: "A showcase of my skills, projects, and experience as a developer, highlighting my journey and achievements.",
        img: "/portfolio.png",
        iconLists: ["/next.svg", "/react.svg", "/ts.svg","/tail.svg" ],
        link: "https://github.com/mahesh-bhosale/mahesh-portfolio",
      },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Mahesh Bhosale was an enriching experience. His technical expertise, creativity, and dedication stood out throughout our project. His leadership skills and innovative mindset made a significant impact on the project’s success.",
      name: "Mausam Yadav",
      title: "Teammate at Terna Engineering College",
    },
    {
      quote:
        "Working with Mahesh Bhosale was a pleasure. His ability to solve complex problems and bring innovative solutions was truly inspiring. His collaborative approach ensured the project's success.",
      name: "Vikas Maurya",
      title: "Teammate at Terna Engineering College",
    },
    {
      quote:
        "Mahesh Bhosale’s enthusiasm and dedication to every aspect of the project were remarkable. His technical acumen and teamwork ensured the project was completed successfully and on time.",
      name: "Pranjal Bhatt",
      title: "Collaborator at Terna Engineering College",
    },
    {
        quote:
          "Mahesh Bhosale is a dedicated and talented developer. His problem-solving skills and innovative ideas were instrumental in achieving our project goals. It was a privilege to work alongside him.",
        name: "Inataza Chaudhary",
        title: "Collaborator at Terna Engineering College",
      },
      {
        quote:
          "Working with Mahesh Bhosale was an exceptional experience. His technical proficiency and collaborative spirit ensured the success of our project. He is a true asset to any team.",
        name: "Akshay Diwan",
        title: "Collaborator at Terna Engineering College",
      },
  ];
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  export const workExperience = [
    {
      id: 1,
      title: "JavaScript Developer Intern",
      desc: "Worked on dynamic web applications using JavaScript, React, and Node.js.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Development Intern at Rentkar",
      desc: "Developed scalable web applications using MERN stack and AWS.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
      },
      {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
      },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];