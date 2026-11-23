import { useEffect, useMemo, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentSearch from "./components/StudentSearch";
import StudentTable from "./components/StudentTable";

const STORAGE_KEY = "ostad_student_management_students_v1";

function loadInitialStudents() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return [];
    const parsed = JSON.parse(savedData);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to read students from localStorage:", error);
    return [];
  }
}

function App() {
  const [students, setStudents] = useState(loadInitialStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  // Sync student list with localStorage on every update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch (error) {
      console.error("Failed to save students to localStorage:", error);
    }
  }, [students]);

  const handleSaveStudent = (studentData) => {
    if (editingStudent) {
      setStudents((prev) =>
        prev.map((item) =>
          item.id === editingStudent.id ? { ...item, ...studentData } : item
        )
      );
      setEditingStudent(null);
      return;
    }

    const newStudent = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ...studentData,
    };

    setStudents((prev) => [newStudent, ...prev]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
    if (editingStudent?.id === id) {
      setEditingStudent(null);
    }
  };

  const handleStartEdit = (student) => {
    setEditingStudent(student);
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const filteredStudents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return students;
    return students.filter((student) =>
      student.name.toLowerCase().includes(query)
    );
  }, [students, searchQuery]);

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1>Student Management App</h1>
          <p>Add, view, search, edit, and manage student records</p>
        </div>

        <div className="stats-badge" aria-live="polite">
          <span>Total Students</span>
          <span className="stats-count">{students.length}</span>
        </div>
      </header>

      <main className="main-grid">
        <StudentForm
          onSaveStudent={handleSaveStudent}
          editingStudent={editingStudent}
          onCancelEdit={handleCancelEdit}
        />

        <section className="card list-panel" aria-label="Student Directory">
          <h2 className="card-title" style={{ marginBottom: 0 }}>
            Student List
          </h2>

          <StudentSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={students.length}
            filteredCount={filteredStudents.length}
          />

          <StudentTable
            students={filteredStudents}
            onEditStudent={handleStartEdit}
            onDeleteStudent={handleDeleteStudent}
            searchQuery={searchQuery}
          />
        </section>
      </main>
    </div>
  );
}

export default App;