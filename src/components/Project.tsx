import React from "react";
import freshMartThumbnail from '../assets/images/freshmart-thumbnail.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import stayEaseThumbnail from '../assets/images/stayease-thumbnail.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={freshMartThumbnail} className="zoom" alt="thumbnail" width="100%"/>
                <h2>FreshMart: Cross-Platform Shopping Application</h2>
                <p>Engineered a full-featured e-commerce application covering product browsing, search, wishlist, cart, checkout, order history, and profile/address management. Implemented state management and custom UI components with Flutter, Dart, and Provider to deliver a responsive, maintainable codebase following Material Design principles.</p>
            </div>
            <div className="project">
                <img src={stayEaseThumbnail} className="zoom" alt="thumbnail" width="100%"/>
                <h2>StayEase: Full-Stack Booking Platform</h2>
                <p>Built a full-stack booking application with authentication, reservation management, and role-based access control for multiple user types (customers, managers, administrators). Designed and integrated a PostgreSQL-backed data layer with Supabase Authentication and cloud storage, delivering payment verification workflows.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>OphthoCARE: AI-Assisted Diagnostic Software</h2>
                <p>Developed backend and desktop software modules integrating computer vision, deep learning inference, and edge computing for real-time medical diagnostics. Optimized inference pipelines and designed user interfaces for data management and visualization using Python, Django, PyQt, and TensorRT. Awarded 1st Position (Software Category) at COMPPEC.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Search Engine & Web Connectivity Analyzer</h2>
                <p>Built a GUI-based search engine implementing document indexing, Boolean search, hyperlink graph analysis, caching, and shortest-path algorithms in C++. Applied graph traversal, hashing, and indexing techniques to improve search efficiency.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;