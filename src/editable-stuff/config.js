// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // https://colorhunt.co/palette/001c30176b8764ccc5dafffb
  gradientColors: "#001C30, #176B87, #64CCC5, #DAFFFB, #64CCC5, #176B87",
  firstName: "Nico",
  middleName: "",
  lastName: "Engelmann",
  message: '"Any sufficiently advanced technology is indistinguishable from magic." Arthur C. Clarke',
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nengelmann",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nengelmann/",
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
  imageLink: require("../assets/img/profile_img_squared.jpg"),
  imageSize: 375,
  message:
    "I'm fascinated by the ongoing technological advancements, particularly in the areas of image processing and artificial intelligence. My dedication is to contribute to this progress and help shaping the future.",
  resume: "https://drive.google.com/file/d/1at32LtUrX73B4JLqes6_yIGqOh6Q8neQ/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nengelmann", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["MeetingCam", "custom-dataset.com", "M3T", "home", "Fuyu-8B---Exploration"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/profile_img_squared.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/profile_img_squared.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"450",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Linux OS", value: 90 },
    { name: "Computer Vision & OpenCV", value: 95 },
    { name: "Edge Devices & OpenVINO", value: 80 },
    { name: "Git Version Control", value: 90 },
    { name: "Computer Networking", value: 85 },
    { name: "Artificial Intelligence & Pytorch", value: 90 },
    //{ name: "C++", value: 10 },
    { name: "MS Office", value: 75 },
    //{ name: "AWS", value: 40 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 95 },
    { name: "Project Management", value: 75 },
    { name: "Communication", value: 85 },
    { name: "Collaboration", value: 85 },
    { name: "Critical Thinking", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Continuous Learning", value: 95 },
    { name: "Feedback Reception", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Computer Vision or Machine Learning opportunities! If you know of any positions available, if you have any questions, feel free to email me at",
  email: "mail@nico-engelmann.de",
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
