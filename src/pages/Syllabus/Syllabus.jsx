import "./Syllabus.css";
import syllabusPdf from "../../documents/mernSyllabus.pdf";
import { FaDownload } from "react-icons/fa";

const Syllabus = () => {
  return (
    <section className="syllabus">
      <div className="syllabus__container col-10 col-lg-6">
        <div className="doc">
          <div className="doc__title">Course</div>
          <div>FSD-MERN</div>
        </div>
        <div>
          <div className="doc__title">Syllabus</div>
          <div>
            <a href={syllabusPdf} download="" className="download__syllabus">
              Download <FaDownload />
            </a>
          </div>
        </div>
        <div className="pdf__viewer">
          <iframe
            src={syllabusPdf}
            width="100%"
            height="500px"
            title="Syllabus PDF"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
