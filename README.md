# React Project Assignment

## Overview
This project is a React-based web application featuring a counter, user data form, and rich text editors. It utilizes various modern libraries such as Shadcn UI, React Spring, TypeScript, React Charts, and React Router.

## Functional Requirements

### 1. Counter Component
- Buttons for increment, decrement, and reset.
- Maintains count across re-renders.
- The background color level increases linearly (preferably using a Bezier curve).
- Reset should revert the background color level to zero.

### 2. User Data Form
- Form fields: Name, Address, Email, Phone.
- Auto-generates a User ID.
- Saves data to local storage or RTK on form submission.
- Displays an unsaved changes warning if the user tries to close the browser with unsaved form data.

### 3. Rich Text Editors
- Visualizes user data in a rich text editor.
- Supports formatting options (bold, italic, underline, lists).
- Ensures data persistence.

### 4. Additional Features (Optional)
- **User Authentication:** Google Sign-In with private and public route protection.
- **Mock authentication for validation.**
- **Dashboard Visualization:**
  - Displays counter and user profile visuals.
  - Uses React Charts for user profile trends visualization.

## Tech Stack
- **Frontend:** React.js (TypeScript), React Router, React Spring
- **State Management:** Redux Toolkit (RTK) / Local Storage
- **Styling:** Material UI / Chakra UI / Next UI, Tailwind CSS
- **Rich Text Editing:** React Quill
- **Data Visualization:** Recharts
- **Authentication:** Firebase (Google Sign-In)

## Project Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>=16.0)
- npm or yarn

### Installation
```sh
# Clone the repository
git clone https://github.com/liegen47/react-assignment-vansh-kapoor

# Navigate into the project directory
cd react-assignment

# Install dependencies
npm install  # or bun install
```

### Running the Application
```sh
npm start  # or bun run start
```

### Building the Application
```sh
npm run build  # or bun run build
```

## Project Structure
```
📦 react-assignment
├── 📂 src
│   ├── 📂 components  # Reusable components
│   ├── 📂 contexts    # Context API providers
│   ├── 📂 hooks       # Custom hooks
│   ├── 📂 lib         # Utility functions and libraries
│   ├── 📂 middleware  # Middleware functions
│   ├── 📂 pages       # Page components
│   ├── 📂 types       # TypeScript types
│   ├── App.css       # Global styles
│   ├── App.tsx       # Main application component
│   ├── App.test.tsx  # Test file
│   ├── index.css     # Global styles
│   ├── index.tsx     # Entry point
│   ├── routes.tsx    # Application routing
│   ├── reportWebVitals.ts  # Performance measuring
│   ├── setupTests.ts # Test setup
│   ├── react-app-env.d.ts # TypeScript environment variables
└── .env.example      # Sample environment variables


```

## Dependencies
```json
"dependencies": {
  "@react-spring/web": "^9.7.5",
  "firebase": "^11.2.0",
  "clsx": "^2.1.1",
  "lucide-react": "^0.474.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-icons": "^5.4.0",
  "react-quill-new": "^3.3.3",
  "react-router-dom": "^7.1.5",
  "recharts": "^2.15.1",
  "tailwindcss": "^3.0.1",
  "typescript": "^4.9.5"
}
```

## Deliverables
- **Source Code:** GitHub repository with meaningful commit history.
- **Report:** Document explaining component structure and state management choices.

## License
This project is for educational purposes only.

---
**Author:** Vansh Kapoor  
**Submission Date:** 2025-02-05

