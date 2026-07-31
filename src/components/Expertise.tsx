import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "Provider",
    "Material Design",
    "Android Studio",
];

const labelsSecond = [
    "Python",
    "Django",
    "SQL",
    "PostgreSQL",
    "Supabase",
    "REST APIs",
];

const labelsThird = [
    "TensorRT",
    "Jetson Nano",
    "Java",
    "C++",
    "Computer Vision",
    "Deep Learning",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile App Development</h3>
                    <p>I build full-featured, cross-platform mobile applications with Flutter and Dart, covering everything from responsive UI and state management to authentication and clean, reusable architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Backend & Database Engineering</h3>
                    <p>I design and integrate full-stack data layers with Django, PostgreSQL, and Supabase, building secure authentication, role-based access control, and scalable REST APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>AI & Embedded Systems</h3>
                    <p>I develop AI-integrated software for embedded and edge devices, optimizing computer vision and deep learning inference pipelines for real-time diagnostic and monitoring applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;