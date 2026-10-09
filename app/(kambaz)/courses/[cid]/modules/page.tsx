import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button> <button>View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button>+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2 - HTML">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Structure pages with headings, lists, and tables
            </li>
            <li className="wd-content-item">
              Create forms with accessible labels
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Chapter 1 - Building Next.js User Interfaces with HTML
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">HTML Elements and Forms</li>
          </Lesson>
        </Module>
        <Module title="Week 3 - CSS">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Style pages with CSS</li>
            <li className="wd-content-item">Practice the box model</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">Chapter 2 - CSS and Tailwind</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
