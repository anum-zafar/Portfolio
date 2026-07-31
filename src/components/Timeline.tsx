import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern (AI & Embedded Systems)</h3>
            <h4 className="vertical-timeline-element-subtitle">RiseTech</h4>
            <p>
              Developed and optimized software components for an AI-assisted retinal disease screening system, integrating computer vision and deep learning workflows for deployment on edge devices. Collaborated cross-functionally on data preprocessing, model evaluation, and inference optimization using Python.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">1st Position, Software Category</h3>
            <h4 className="vertical-timeline-element-subtitle">COMPPEC 2026</h4>
            <p>
              Awarded for OphthoCARE, an AI-assisted retinal disease screening system integrating computer vision and edge computing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering in Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">National University of Sciences and Technology (NUST)</h4>
            <p>
              Built a strong foundation in object-oriented programming, data structures & algorithms, and REST API design through coursework and hands-on projects spanning mobile, backend, and AI-integrated systems.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;