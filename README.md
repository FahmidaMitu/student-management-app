# Student Management App

A clean, responsive Student Management web application built with React and Vite. Users can add, view, search, edit, and delete student records with automatic `localStorage` persistence.

## Features

- **Add Student Form**: Create new student records with Student Name, Email, Phone Number, and Department fields.
- **Student Directory Table**: View all saved students in a structured, responsive table.
- **Live Search**: Filter students in real time by student name.
- **Edit Student**: Load existing student details back into the form to update information.
- **Delete Student**: Remove individual student entries with a single click.
- **Total Student Counter**: Displays the live count of registered students.
- **LocalStorage Persistence**: Automatically saves student data in the browser so records remain after refreshing.

## Tech Stack

- React (Hooks: `useState`, `useEffect`, `useMemo`)
- Vite
- CSS3 (Responsive Grid & Flexbox)

## Project Structure

```text
student-management-app/
├── index.html
├── package.json
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── StudentForm.jsx
        ├── StudentSearch.jsx
        └── StudentTable.jsx
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/student-management-app.git](https://github.com/your-username/student-management-app.git)
   cd student-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Screenshots & Demo Video

- **Project Screenshots & Demo Video (Google Drive)**: [View Screenshots & Demo](https://drive.google.com/your-folder-link-here)