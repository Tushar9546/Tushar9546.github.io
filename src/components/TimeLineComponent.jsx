import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { FaGraduationCap,FaDiceD20 } from "react-icons/fa";


const TimeLineComponent=()=>{

return(
<>
<VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#fefbe9', color: '#183a1d' }}
    contentArrowStyle={{ borderRight: '7px solid #fefbe9' }}
    date="03/2022 - Present"
    iconStyle={{ background: '#f7e99e', color: '#183a1d' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Masai School</h4>
    <p>
      <ul>
        <li>Joined a 30 week, Full Time, Full Stack Web Development bootcamp, to master MERN stack, DSA and Soft Skills.</li>
      </ul>
     
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fefbe9', color: '#183a1d' }}
    contentArrowStyle={{ borderRight: '7px solid #fefbe9' }}
    date="2019 - 2022"
    iconStyle={{ background: '#f6c453', color: '#183a1d' }}
    icon={<MdWork/>}
  >
    <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Micro Turner's - Haridwar, India</h4>
    <p>
     <ul>
       <li>Worked as a Quality Engineer who was responsible for Customer Handling , Mantain PPM, Mantain Audit Documents, NPD. </li>
     </ul>


    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2019"
    iconStyle={{ background: '#f7e99e', color: '#183a1d'}}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">B.Tech - Mechanical Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">AKTU University</h4>
    <p>
       Secured 66%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015"
    iconStyle={{ background: '#f7e99e', color: '#183a1d'}}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Completed Intermidiate</h3>
    <h4 className="vertical-timeline-element-subtitle">Lala Jagdish Prasad Saraswati Vidhya Mandir Inter College</h4>
    <p>
      Secured 74%
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013"
    iconStyle={{ background: '#f7e99e', color: '#183a1d' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Completed High School </h3>
    <h4 className="vertical-timeline-element-subtitle">Kunwar Jagdish Prasad Sanatan Dharma High School</h4>
    <p>
      Secured 72%
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: '#183a1d', color: '#fff' }}
    icon={<FaDiceD20/>}
  />
</VerticalTimeline>

</>
)

}


export {TimeLineComponent}