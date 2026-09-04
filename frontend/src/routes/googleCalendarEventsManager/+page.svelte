<svelte:head>
    <title>Events Manager</title>
</svelte:head>

<h2>Description</h2>
<p>The goal of this platform is to streamline the creation, management, and synchronization of university events while maintaining secure access control across multiple user roles. The system integrates directly with Google Calendar and centralizes event workflows in a structured and scalable way. 
Some of the elements we are using for the system so far include
· FastAPI for backend API development, 
· Firebase Authentication for secure identity verification
· Cloud Firestore for persistent data storage
· Role-Based Access Control (RBAC) for permission enforcement
· Google Calendar API for automated event synchronization
The backend follows a modular, service-oriented format to separate business logic from data access and eliminate redundant permission checks.
As for my contributions so far, I have implemented several features on both the back end and front end as needed. On the backend team, I have:
· Developed event CRUD APIs using FastAPI with RBAC-secured access control
· Developed and refined service logic using Test Driven Development and the RGR method – Red, Green, Refactor
· Built pytest-based test suites to validate permission logic and prevent regression
· Diagnosed and resolved authentication and authorization inconsistencies across endpoints
On the frontend team, I have:
· Implemented and refined a home webpage for the application giving the user a complete and comprehensive overview of the platform’s capabilities and functionalities
· Developed the user sign-in webpage and functionality
· Implemented the user information update feature where the user can update either their display name or email address in the system
    <br><br><br><br>
    <a href="/">Home</a></p>

