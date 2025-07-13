import React from "react";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-15 py-14 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-5">
                Jewelify Web Application
              </h2>
              <h4 className="font-medium text-gray-600 title-font mb-3">
                Technologies: HTML, CSS, Javascript, PHP
              </h4>
              <p className="leading-relaxed">
                {" "}
                Developed a fully functional e-commerce website for a jewelry
                business as part of a group project in the Web Application
                Development module. The platform features secure user
                registration, product browsing by category, shopping cart
                functionality, and a customization feature for personalized
                jewelry. An admin panel was also implemented, enabling
                authorized users to manage products, customers, and orders with
                full CRUD operations. This project enhanced my skills in web
                development, database integration, and building complete user
                and admin-side interfaces.
              </p>
              <a
                className="text-blue-500 inline-flex items-center mt-4"
                href="https://github.com/Gimhani03/Jewelify-Web"
              >
                Github Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-5">
                Food Inspector Web Application
              </h2>
              <h4 className="font-medium text-gray-600 title-font mb-3">
                Technologies: C#, Windows Forms, SQL Server
              </h4>
              <p className="leading-relaxed">
                Designed and developed a multi-tiered desktop application to
                streamline food inspection and compliance tracking for Public
                Health Inspectors (PHIs). The system supports secure
                admin-controlled PHI registration, shop inspections, compliance
                categorization , and centralized data management. Real-time
                dashboards and reporting tools enable authorities to monitor
                food safety compliance efficiently
              </p>
              <a
                className="text-blue-500 inline-flex items-center mt-4"
                href="https://github.com/Gimhani03/Food-Inspector-Web-Application"
              >
                Github Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-5">
                Medicine Delivery Mobile Application
              </h2>
              <h4 className="font-medium text-gray-600 title-font mb-3">
                Technologies: Flutter, Dart, Firebase
              </h4>
              <p className="leading-relaxed">
                Developed a cross-platform mobile application enabling patients
                to securely upload prescriptions, browse available medications,
                and communicate directly with pharmacists. Contributed to the
                design and implementation of the user interface, database
                schema, and UI/UX elements, ensuring intuitive navigation and
                accessibility. Implemented real-time prescription status updates
                and medication availability checks to streamline pharmacy
                workflows. Assisted in developing a responsive admin panel for
                managing prescriptions, medication stock, and user feedback.
                Integrated robust authentication, secure data storage, and
                automated notification systems using Firebase services.
                Collaborated with a team following Agile methodologies to
                deliver a reliable, user-centered healthcare solution that meets
                industry standards for privacy and security.
              </p>
              <a
                className="text-blue-500 inline-flex items-center mt-4"
                href="https://github.com/MINUKAz/Medicine-Ordering-app"
              >
                Github Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-5">
                Movie Discovery Mobile Application
              </h2>
              <h4 className="font-medium text-gray-600 title-font mb-3">
                Technologies: React Native, Tailwind CSS, Appwrite, TMDB API, Expo, TypeScript, NativeWind
              </h4>
              <p className="leading-relaxed">
                Designed and developed a cross-platform movie discovery mobile
                application using React Native, Expo, and TypeScript to provide
                users with seamless access to comprehensive movie information.
                The system integrates The Movie Database (TMDB) API v3 for
                real-time movie data retrieval, advanced search functionality
                with debounced input optimization, and trending movie rankings
                with gradient overlay visualizations. Implemented modern UI
                architecture using NativeWind (TailwindCSS) with custom
                components including responsive movie cards, interactive search
                interfaces, and masked view elements for enhanced user
                experience. Built robust navigation system using Expo Router
                with file-based routing and integrated Appwrite backend services
                for search analytics and user interaction tracking across iOS,
                Android, and Web platforms.
              </p>
              <a
                className="text-blue-500 inline-flex items-center mt-4"
                href="https://github.com/Gimhani03/Movie-App"
              >
                Github Link
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
