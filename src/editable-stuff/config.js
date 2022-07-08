// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "James",
  middleName: "Benjamin",
  lastName: "Pawlik",
  message: "Web, mobile, and business intelligence developer based out of Portland, Oregon",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jbpawlik",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jbpawlik/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/lumberjacks.jpg"),
  imageSize: 375,
  message:
    "My name is Ben Pawlik. I am a software developer based out of Portland, Oregon. My professional interests are web and mobile development, business intelligence, data transformation, Ruby, JavaScript / React [Native], and UI/UX design. In previous careers, I worked in education and human development. In my personal life I am interested in art, design, cooking, and evolution.",
  resume: "https://drive.google.com/file/d/1Uu6xtP1t3HwuvbUJX3YvQ72Y2ILDdyyL/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jbpawlik", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["specialty_foods", "currency-exchanger", "OKBloomer", "numberhood"]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/lumberjacks.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/lumberjacks.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "SQL", value: 75 },
    { name: "NoSQL", value: 65 },
    { name: "React", value: 85 },
    { name: "React Native", value: 85 },
    { name: "Ruby", value: 90 },
    { name: "Rails", value: 75 },
    { name: "HTML/CSS", value: 100 },
  ],
  softSkills: [
    { name: "Teaching (English, Math, Special Education", value: 80 },
    { name: "Equity and Inclusion", value: 90 },
    { name: "Legal Writing", value: 75 },
    { name: "Proofreading/Editing", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Development, Quality Assurance / Testing, and Solutions Architect roles, or other opportunities that blend my technical and human development skills! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "james.benjamin.pawlik@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
