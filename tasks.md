Master Prompt for AUCHS Society Management System

Project Overview:
Create a fully dynamic Society Management System named AUCHS using Next.js. The system must follow industry best practices, be fully scalable, and use reusable components wherever possible. The UI should use the ShadCN component library for consistency, with styling handled globally through global.css or style.css. Every component, from buttons to complex forms, should be dynamic and configurable via props. The folder structure should follow modern standards suitable for a large-scale project.

Modules

1) Users Module
Roles:

Super Admin

Society Admin

Resident (Can login)

Member (Cannot login — apply check)

Operator

Fields:

Full Name

Mobile Number

Whatsapp Number

CNIC Number

Avatar

Role

Account Status

Email

2) Plots Module
Fields:

Plot Number

Plot Size

Plot Division

Plot Phase

Plot Status

Assigned To

Requirements / Rules

Dynamic & Reusable Components

Every UI element (buttons, inputs, forms, tables, modals) must be reusable and dynamic via props.

Prefer ShadCN pre-built components over custom components wherever possible.

Components must be designed to scale with future modules and roles.

Best Folder Structure

Each module (Users, Plots) should have its own folder containing pages, components, and API logic.

Components should have their own subfolders with proper naming conventions.

Maintain a clear separation between UI components, forms, modals, and API logic.

Styling

Use global.css or style.css for shared styles and theming.

Avoid inline styling except for very specific dynamic cases.

Support theming or dynamic color schemes via CSS variables or Tailwind configuration.

Dynamic Data Handling

All tables, forms, and displays must fetch data dynamically from API routes.

Forms must generate inputs dynamically based on field configuration objects where possible.

Implement role-based access control dynamically — each page and action should check the user’s role.

API and Backend Integration

Use Next.js API routes for handling all backend operations (CRUD) for Users and Plots modules.

Support validation and error handling for all API endpoints.

Prepare the system for possible future integration with external databases or microservices.

Scalability & Maintainability

Every module and component must be written to allow easy expansion.

Ensure folder and file naming follow industry standards and make sense in large projects.

Use global state management (e.g., React Context, Zustand) where needed for shared state.

Separate business logic from presentation logic in components.

Authentication & Role-Based Access

Implement login functionality for roles that can access the system.

Apply dynamic checks for roles that cannot log in (e.g., Members).

Ensure secure handling of sensitive data such as CNIC, mobile numbers, etc.

General

Always follow industry best practices for Next.js and React development.

Code must be clean, readable, and maintainable.

Optimize performance for large datasets and multiple users.

Deliverables

Fully functional Next.js project with dynamic Users and Plots modules.

ShadCN-powered UI components for all forms, tables, buttons, and modals.

Reusable, scalable component system.

Global styling for consistent theming.

Role-based access control fully implemented.

Clean folder structure ready for future expansion.