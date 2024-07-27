import {
  FaListAlt,
  FaAward,
  FaFileContract,
  FaFileSignature,
  FaFileMedical,
  FaFileInvoice,
} from "react-icons/fa";
import {
  BsPieChartFill,
  BsFillDiagram3Fill,
  BsCardChecklist,
  BsFillFileEarmarkCodeFill,
  BsJournalCode,
  BsFileEarmarkPersonFill,
} from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiRank3 } from "react-icons/gi";

/*static data*/
export const navBarLink = [
  {
    id: 1,
    name: "Class",
    icon: <BsFillDiagram3Fill />,
    link: "/class",
  },
  {
    id: 2,
    name: "Dashboard",
    icon: <BsPieChartFill />,
    link: "/dashboard",
  },
  {
    id: 3,
    name: "Tasks",
    icon: <BsCardChecklist />,
    link: "/task",
  },
  {
    id: 4,
    name: "Webcode",
    icon: <BsFillFileEarmarkCodeFill />,
    link: "/webcode",
  },
  {
    id: 5,
    name: "Capstone",
    icon: <MdOutlineDeveloperMode />,
    link: "/capstone",
  },
  {
    id: 6,
    name: "Queries",
    icon: <FaListAlt />,
    link: "/queries",
  },
  {
    id: 7,
    name: "Requirements",
    icon: <FaFileContract />,
    link: "/requirements",
  },
  {
    id: 8,
    name: "Portfolio-submission",
    icon: <BsFileEarmarkPersonFill />,
    link: "/portfolio",
  },
  {
    id: 9,
    name: "Application",
    icon: <FaFileSignature />,
    link: "/application",
  },
  {
    id: 10,
    name: "Interviewtasks",
    icon: <BsCardChecklist />,
    link: "/interviewtasks",
  },
  {
    id: 11,
    name: "Leave-applications",
    icon: <FaFileMedical />,
    link: "/leave",
  },
  {
    id: 12,
    name: "Mock-interview",
    icon: <FaFileInvoice />,
    link: "/mock",
  },
  {
    id: 13,
    name: "Certificate",
    icon: <FaAward />,
    link: "/certificate",
  },
  {
    id: 15,
    name: "Leaderboard",
    icon: <GiRank3 />,
    link: "/learderboard",
  },
  {
    id: 16,
    name: "Syllabus",
    icon: <BsJournalCode />,
    link: "/syllabus",
  },
];

//RoadMap Data
export const roadMapData = [
  {
    day: 1,
    title: "Javascript - Day -1 : Introduction to Browser & web",
    time: "01/10/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Introduction to Web, Browser Wars\nDOM tree VS CSSOM tree\nIntro to Browser internals(HTML parser, CSS parser)\nJavaScript V8 engine internals\nIntro to IP, MAC address, Ports\nHTTP Methods\nHow the Server looks at the URL\nThe console on Browser\njs vs. Node js\nData types"
        }
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1QznT1zM4mI6dG0TOx5Xjs1GquMoSHO3xZ1USDnVM-w/preview",
    tags: ["javascript", "browser"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 2,
    title: "Javascript - Day -2 : Request & Response cycle",
    time: "07/10/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Copy by value and Copy by reference\nWindow & document object\nArray and JSON iteration\nMLHttpRequest"
        }
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1lkzy8u0rkW5v2jGvbJJrmVVLjMqN_TmmsHkL41AoIc/preview",
    tags: ["HTTP methods"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 3,
    title: "Javascript - Day -3 : Functions",
    time: "08/10/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Hoisting & scope\nFunction & return keyword\nTypes of function\nArrow functions"
        }
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1cNDeT0CKJwqYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing",
    tags: ["array", "JSON", "objects"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 4,
    title: "JavaScript - Day -4: ES5 vs ES6",
    time: "15/10/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "var vs let vs const\nBlock scoping\nSpread & rest operators\nArray & object destructure\nObject property shorthand\nTemplate literals"
        }
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    activity:
      "https://docs.google.com/document/d/1TPk3wqxDi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit",
    tags: ["hoisting", "scope-block", "functions"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 5,
    title: "JavaScript - Day -5: OOPs in JS",
    time: "21/10/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Understanding the basics of prototype\nWhat are classes in JS?\nConstructor\nUse of 'this' keyword in classes"
        }
      </span>
    ),
    preread:
      "https://aravishack.medium.com/es6-features-a-walk-through-1ffd8eb82f6",
    activity:
      "https://docs.google.com/document/d/1EIpyPItk5xMOQluXm_cPD4KTI9AnkyqDlO26pbG4a8/edit",
    tags: ["es5", "es6", "arrow functions", "array destructure"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 6,
    title: "JavaScript - Day -6: Array Methods",
    time: "28/10/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Map\nReduce\nFilter\nOther array methods practice in session"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1ILi6J1s3tSv8xnXImIuW5jD652BXNHNLNa0ErmRsRk/edit?usp=sharing",
    tags: ["this keyword", "OOPS"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 7,
    title: "HTML- Day -1 : HTML",
    time: "24/04/2023 - Monday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "div vs section vs article\ndiv vs span = inline vs block elements\nHTML Forms\nInput elements and attributes\nForm submit\nPractice task URL: https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/001-HTML.md"
        }
      </span>
    ),
    preread: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    activity:
      "https://docs.google.com/document/d/12wAX28odaaCy4IWdlXQQ3LOrBB3UXLsMD99X1Ve1Uc/edit?usp=sharing",
    tags: ["arrow functions", "array methods"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 8,
    title: "HTML & CSS- Day -2 : HTML recap CSS",
    time: "04/11/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "What is CSS?\nWays to use CSS\nProperty & value\nClass vs ID\nUse of !important\nDisplay property: inline, block"
        }
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/HTML,https://www.w3schools.com/html/, https://html.spec.whatwg.org/multipage/",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 9,
    title: "HTML & CSS- Day -3 : CSS",
    time: "05/11/2023 - Sunday - 4:00 PM : 7:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Box model: padding, margin, border\nFlex - display, direction, wrap, flex-flow, justify-content, align-content\nPosition property: fixed, static, relative, absolute, sticky\nParent inherit\nGradient"
        }
      </span>
    ),
    preread:
      "https://www.w3schools.com/html/default.asp, https://github.com/rvsp/html-CSS/",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 10,
    title: "HTML & CSS- Day -4 : CSS",
    time: "18/11/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Parent inherit\nGradient\nMedia queries\nMin/max width & height\nCSS units: rem, em, vh, vw\nCSS inheritance\nCSS specificity\nCSS cascade"
        }
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries, https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox, https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 11,
    title: "HTML & CSS- Day -5 : Grid layout",
    time: "19/11/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Flex display\nPosition fixed, absolute\nGrid\nTransition and animation\nEvent listener"
        }
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform, https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 12,
    title: "HTML & CSS- Day -6 : Practice HTML & CSS",
    time: "25/11/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Flexible box layout\nGrid layout\nTransform & transition\nAnimation\nPractice of HTML and CSS"
        }
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations, https://www.w3schools.com/css/css3_transitions.asp",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 13,
    title: "JavaScript- Day -7 : Event Propagation",
    time: "26/11/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Event delegation\nCallback queue\nMicrotask queue\nMicrotask vs Macrotask"
        }
      </span>
    ),
    preread: "",
    activity:
      "https://docs.google.com/document/d/1ZTcQzCx2-pSnfX9cw7ntvhfB0b1oRasljPq5Xgt97mE/edit",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 14,
    title: "JavaScript- Day -8 : DOM",
    time: "02/12/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "DOM Manipulation\nQuerySelector\nAdding and removing elements\nEvent propagation"
        }
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
    activity:
      "https://docs.google.com/document/d/1ZnEpjP2H8-jo8pMQ6j6VtudJdABm4hPUrXEqa4JYGM/edit",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 15,
    title: "JavaScript- Day -9 : JS",
    time: "03/12/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"setTimeout & setInterval\nPromise\nCallback\nFetch\nAsync & Await"}
      </span>
    ),
    preread:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
    activity:
      "https://docs.google.com/document/d/1iDaJ-rnZX4fXlQZ46TbG-JTbGZ-Iv1PP7__URfiJME/edit",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 16,
    title: "React JS - Day -1 : Introduction to React",
    time: "09/12/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Component\nVirtual DOM\nElement\nJSX\nProps"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1-H3XAJhTfHJ6i_8zWBnbDfH0E3q5-ny5SsiMH8CBi6Y/edit?usp=sharing",
    tags: ["event-propagation", "DOM"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 17,
    title: "React JS - Day -2 : React Basics",
    time: "10/12/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Hooks\nuseState\nuseEffect\nComponents and props"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1-EaO6wvRnsKKi4T-BYlyPyWCLvwWBXXA9yWUS2uJOn8/edit?usp=sharing",
    tags: ["promise", "callback"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 18,
    title: "React JS - Day -3 : Lifecycle Methods",
    time: "16/12/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Component Lifecycle\nLifecycle Methods\nHandling events"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1-EaO6wvRnsKKi4T-BYlyPyWCLvwWBXXA9yWUS2uJOn8/edit?usp=sharing",
    tags: ["promise", "callback"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 19,
    title: "React JS - Day -4 : Props & State",
    time: "17/12/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Props vs State\nStateful vs Stateless components\nHandling forms"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1-EaO6wvRnsKKi4T-BYlyPyWCLvwWBXXA9yWUS2uJOn8/edit?usp=sharing",
    tags: ["promise", "callback"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 20,
    title: "React JS - Day -5 : React Router",
    time: "23/12/2023 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"React Router\nRoute\nLink\nSwitch\nRedirect"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1-EaO6wvRnsKKi4T-BYlyPyWCLvwWBXXA9yWUS2uJOn8/edit?usp=sharing",
    tags: ["promise", "callback"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 21,
    title: "React JS - Day -6 : Redux",
    time: "24/12/2023 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Introduction to Redux\nActions\nReducers\nStore\nProvider"}
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1-EaO6wvRnsKKi4T-BYlyPyWCLvwWBXXA9yWUS2uJOn8/edit?usp=sharing",
    tags: ["promise", "callback"],
    task: "fs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 22,
    title: "React- Day -4 : React components",
    time: "14/06/2023 - Wednesday - 10:00 AM : 1:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Components - In depth\nComponent life cycle\nStateful and stateless components\nReusable components\nPassing dynamic data to component\nIntroduction to Hook"
        }
      </span>
    ),
    preread: "https://www.npmjs.com/package/react-router-dom",
    activity:
      "Task - https://startbootstrap.com/previews/admin-2 value from component need to show to other component",
    tags: ["react", "frontend"],
    task: "fe",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 23,
    title: "React- Day -5 : react hooks",
    time: "14/01/2024 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "What is hook?\nLifecycle of Hook\nuseState\nuseEffect\nProps drilling\nPassing data from child to parent component"
        }
      </span>
    ),
    preread: "https://www.npmjs.com/package/react-router-dom",
    activity:
      "Design an UI to implement the CRUD // CRUD - Create, Read, Update, Delete // Dashboard // List Users - /users // Create User - /create-user // Edit User - /edit-user/:id // profile - /profile/:id // edit-profile – /edit-profile/:id",
    tags: ["react", "frontend"],
    task: "fe",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 24,
    title: "React- Day -6 : react router",
    time: "20/01/2024 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"react-router-dom\nBrouserRouter\nSwitch\nLink\nRoute\nurl params"}
      </span>
    ),
    preread:
      "session task on admin dashboard, https://startbootstrap.com/previews/sb-admin-2",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 25,
    title: "React- Day -7 : Context API",
    time: "21/01/2024 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Context-API\nWhat is context\nprovide\ncreateContext\nAvoid props drilling\nSession task – profile name changes"
        }
      </span>
    ),
    preread:
      "https://reactjs.org/docs/context.html, https://reactjs.org/docs/hooks-reference.html#usestate",
    activity:
      "Task - same task OF ADMIN DASHBOARD TO IMPLEMENT THE CRUD WITH STUDENT & TEACHER MANAGEMENT",
    tags: ["react", "frontend"],
    task: "fe",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 26,
    title: "React- Day -8 : userRef, useReducer",
    time: "27/01/2024 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "useRef\nuseReducer\nFront end game demonstration - hangman / tictactoe / tile match"
        }
      </span>
    ),
    preread: "https://www.npmjs.com/package/axios",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 27,
    title: "React- Day -9 : Axios",
    time: "28/01/2024 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"Playing around with API\nfetch() or Axios\nImplementing simple CRUD"}
      </span>
    ),
    preread: "https://www.npmjs.com/package/axios",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 28,
    title: "React- Day -10 : Redux",
    time: "03/02/2024 - Saturday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Intro to Redux - to understand the state management with react application"
        }
      </span>
    ),
    preread: "No preread available",
    activity: "",
    tags: "",
    task: "",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 29,
    title: "MySQL- Day -1 : Database - MySQL",
    time: "04/02/2024 - Sunday - 2:00 PM : 5:00 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Introduction to database\nwhat is MySQL?\nintro to MySQL engines\nbasic queries - create db, table, insert, update, alter, select - where clause, distinct, group by, order by, offset, limit"
        }
      </span>
    ),
    preread: "https://dev.mysql.com/doc/",
    activity:
      "IMDB Design a DB for IMDB 1. Movie should have multiple media(Video or Image) 2. Movie can belongs to multiple Genre 3. Movie can have multiple reviews and Review can belongs to a user 4. Artist can have multiple skills 5. Artist can perform multiple role in a single film",
    tags: ["MySQL", "database"],
    task: "bs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 30,
    title: "MySQL- Day -2 : Database - MySQL",
    time: "10/02/2024 - Saturday - 2:30 PM : 5:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "normalization\nselect queries\njoins\nDB model design\nIntro to Mongodb & installation of mongodb"
        }
      </span>
    ),
    preread: "https://dev.mysql.com/doc/",
    activity: "Complete SQL Bolt, And submit the screenshots",
    tags: ["MySQL", "database"],
    task: "bs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 31,
    title: "MongoDB- Day -1 : Database - MongoDB",
    time: "17/02/2024 - Saturday - 2:30 PM : 5:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "intro to mongodb\nwhy mongodb?\nwhat is document?\nwhat is collection?\nMongodb vs MySQL\ninstallation of mongodb\ncreation of database\ncollections\ndocuments\nfind - query & projection"
        }
      </span>
    ),
    preread: "https://docs.mongodb.com/manual/",
    activity: "https://github.com/database/mongodb",
    tags: ["mongodb", "database"],
    task: "bs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 32,
    title: "MongoDB- Day -2 : Database - MongoDB",
    time: "18/02/2024 - Sunday - 2:30 PM : 5:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "use of operators in find()\nbasic cursor methods - map, toArray, pretty, forEach, limit, count, sort\nAggregation"
        }
      </span>
    ),
    preread: "https://docs.mongodb.com/manual/",
    activity:
      "https://github.com/rvsp/database/blob/master/mongodb/day/database-design-zen-class.txt",
    tags: ["mongodb", "database"],
    task: "bs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 33,
    title: "Nodejs- Day -1 : Nodejs",
    time: "10/07/2023 - Monday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"What is nodejs?\nNpm packages - In build, Third party, Custom"}
      </span>
    ),
    preread: "https://nodejs.org/",
    activity:
      "Nodejs file system Task https://docs.google.com/document/d/1c_u6aHv7AQHse45GGcrCRe78liwv90S5aHwBR7tBP0/edit",
    tags: ["nodejs", "backend"],
    task: "bs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 34,
    title: "Nodejs- Day -2 : Nodejs & Expressjs",
    time: "11/07/2023 - Tuesday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "What is express\nAPI methods - GET, POST, PUT, DELETE\nRequest & response objects\nUrl & Query parameters"
        }
      </span>
    ),
    preread: "https://expressjs.com/",
    activity:
      "Nodejs hall booking api task https://docs.google.com/documnt/d/1rPQ2LbHtMZajA_GIZfR-Ko2MFueoT82AmfHTK9V-hM/edit",
    tags: ["nodejs", "backend"],
    task: "be",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 35,
    title: "Nodejs- Day -3 : Node & mongo DB connectivity",
    time: "12/07/2023 - Wednesday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "Connection to MongoDB (local & atlas)\nsimultaneously frontend + backend connectivity"
        }
      </span>
    ),
    preread: "No preread available",
    activity:
      "https://docs.google.com/document/d/1sxHk2QDyK_vjlbwWPklyTXDHHOENKqj-IHS2yNSaHQ/edit?authuser=1",
    tags: ["nodejs", "backend"],
    task: "be",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 36,
    title: "Nodejs- Day -4 : Nodejs deployment",
    time: "13/07/2023 - Thursday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {"dotenv\nDeployment\nsimultaneously frontend + backend connectivity"}
      </span>
    ),
    preread: "https://www.npmjs.com/package/dotenv",
    activity: "Task - Deployment practice",
    tags: ["nodejs", "backend"],
    task: "fb",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 37,
    title: "Database - MongoDB",
    time: "06/07/2023 - Thursday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "intro to mongodb\nwhy mongodb?\nwhat is document?\nwhat is collection?\nMongodb vs MySQL\ninstallation of mongodb\ncreation of database\ncollections\ndocuments\nfind - query & projection"
        }
      </span>
    ),
    preread: "https://docs.mongodb.com/manual/",
    activity: "https://github.com/database/mongodb",
    tags: ["mongodb", "database"],
    task: "bs",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
  {
    day: 38,
    title: "Nodejs- Day -6 : JWT",
    time: "18/07/2023 - Tuesday - 6:30 PM : 9:30 PM",
    content: (
      <span
        style={{ whiteSpace: "pre-line", color: "#7a7a7a", textIndent: "20px" }}
      >
        {
          "JWT\ncustom middleware\nauthorization\nsimultaneously frontend + backend connectivity"
        }
      </span>
    ),
    preread: "https://www.npmjs.com/package/jsonwebtoken",
    activity:
      "https://docs.google.com/document/d/1nD7fzgzw5UmFSpnHK2FVadnp4y7EaND26_AqkZzSTw/edit?authuser=1",
    tags: ["nodejs", "backend"],
    task: "fb",
    link: "https://meet.google.com/cvn-fzsd-toe",
  },
];

export const leaderBoardData = [
  {
    rank: 1,
    name: "Alfina",
    batch: "B52 WE Tamil",
    learning: "89.76",
  },
  {
    rank: 2,
    name: "Hema",
    batch: "B52 WE Tamil",
    learning: "79.14",
  },
  {
    rank: 3,
    name: "Boobathi",
    batch: "B52 WE Tamil",
    learning: "77.34",
  },
  {
    rank: 4,
    name: "Anushree",
    batch: "B52 WE Tamil",
    learning: "76.55",
  },
  {
    rank: 5,
    name: "Indira",
    batch: "B52 WE Tamil",
    learning: "66.03",
  },
  {
    rank: 6,
    name: "Shanthi",
    batch: "B52 WE Tamil",
    learning: "64.66",
  },
  {
    rank: 7,
    name: "Thiveeya",
    batch: "B52 WE Tamil",
    learning: "64.66",
  },
  {
    rank: 8,
    name: "Lalitha",
    batch: "B52 WE Tamil",
    learning: "63.97",
  },
  {
    rank: 9,
    name: "Elilarasi",
    batch: "B52 WE Tamil",
    learning: "60.69",
  },
  {
    rank: 10,
    name: "Abinaya",
    batch: "B52 WE Tamil",
    learning: "57.41",
  },
  {
    rank: 11,
    name: "Santhosh",
    batch: "B52 WE Tamil",
    learning: "55.69",
  },
  {
    rank: 12,
    name: "Lakshmi",
    batch: "B52 WE Tamil",
    learning: "55.17",
  },
  {
    rank: 13,
    name: "Hema",
    batch: "B52 WE Tamil",
    learning: "54.66",
  },
  {
    rank: 14,
    name: "Gokul",
    batch: "B52 WE Tamil",
    learning: "52.93",
  },
  {
    rank: 15,
    name: "Kavi",
    batch: "B52 WE Tamil",
    learning: "52.76",
  },
  {
    rank: 16,
    name: "Saveen",
    batch: "B52 WE Tamil",
    learning: "50.69",
  },
  {
    rank: 17,
    name: "renugadevi",
    batch: "B52 WE Tamil",
    learning: "47.93",
  },
  {
    rank: 18,
    name: "SURYA",
    batch: "B52 WE Tamil",
    learning: "47.59",
  },
  {
    rank: 19,
    name: "Inturi",
    batch: "B52 WE Tamil",
    learning: "45.52",
  },
  {
    rank: 20,
    name: "Ezhil",
    batch: "B52 WE Tamil",
    learning: "45.17",
  },
  {
    rank: 21,
    name: "Mohammed",
    batch: "B52 WE Tamil",
    learning: "42.41",
  },
  {
    rank: 22,
    name: "sakthidhasan",
    batch: "B52 WE Tamil",
    learning: "41.21",
  },
  {
    rank: 23,
    name: "Narmada",
    batch: "B52 WE Tamil",
    learning: "40.86",
  },
  {
    rank: 24,
    name: "SARANRAJ",
    batch: "B52 WE Tamil",
    learning: "34.83",
  },
  {
    rank: 25,
    name: "Manikandan",
    batch: "B52 WE Tamil",
    learning: "33.62",
  },
  {
    rank: 26,
    name: "Sathish",
    batch: "B52 WE Tamil",
    learning: "32.24",
  },
  {
    rank: 27,
    name: "Babu",
    batch: "B52 WE Tamil",
    learning: "30.00",
  },
  {
    rank: 28,
    name: "Pavithran",
    batch: "B52 WE Tamil",
    learning: "29.14",
  },
  {
    rank: 29,
    name: "Ramya",
    batch: "B52 WE Tamil",
    learning: "28.62",
  },
  {
    rank: 30,
    name: "VALLATHAN",
    batch: "B52 WE Tamil",
    learning: "28.28",
  },
  {
    rank: 31,
    name: "pavi",
    batch: "B52 WE Tamil",
    learning: "27.76",
  },
  {
    rank: 32,
    name: "Yadeeswari",
    batch: "B52 WE Tamil",
    learning: "26.03",
  },
  {
    rank: 33,
    name: "vengatesh",
    batch: "B52 WE Tamil",
    learning: "26.03",
  },
  {
    rank: 34,
    name: "spanakar",
    batch: "B52 WE Tamil",
    learning: "25.69",
  },
  {
    rank: 35,
    name: "Elavarasan",
    batch: "B52 WE Tamil",
    learning: "23.10",
  },
  {
    rank: 36,
    name: "Vijay",
    batch: "B52 WE Tamil",
    learning: "22.41",
  },
  {
    rank: 37,
    name: "SATHYA",
    batch: "B52 WE Tamil",
    learning: "21.55",
  },
  {
    rank: 38,
    name: "Poovarasan",
    batch: "B52 WE Tamil",
    learning: "21.38",
  },
  {
    rank: 39,
    name: "Indhira",
    batch: "B52 WE Tamil",
    learning: "17.93",
  },
  {
    rank: 40,
    name: "Vignesh",
    batch: "B52 WE Tamil",
    learning: "17.59",
  },
  {
    rank: 41,
    name: "Suhail",
    batch: "B52 WE Tamil",
    learning: "17.41",
  },
  {
    rank: 42,
    name: "Aravindh",
    batch: "B52 WE Tamil",
    learning: "15.86",
  },
  {
    rank: 43,
    name: "Ajithkumar",
    batch: "B52 WE Tamil",
    learning: "13.62",
  },
  {
    rank: 44,
    name: "Meyazhagan",
    batch: "B52 WE Tamil",
    learning: "8.62",
  },
  {
    rank: 45,
    name: "Maria",
    batch: "B52 WE Tamil",
    learning: "7.93",
  },
  {
    rank: 46,
    name: "anand",
    batch: "B52 WE Tamil",
    learning: "6.90",
  },
  {
    rank: 47,
    name: "DHEEPAK",
    batch: "B52 WE Tamil",
    learning: "6.55",
  },
  {
    rank: 48,
    name: "shathap",
    batch: "B52 WE Tamil",
    learning: "5.86",
  },
  {
    rank: 49,
    name: "Nithya",
    batch: "B52 WE Tamil",
    learning: "5.17",
  },
  {
    rank: 50,
    name: "Micheal",
    batch: "B52 WE Tamil",
    learning: "4.14",
  },
];
