import { useEffect, useState } from "react";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  department: "",
};

const DEPARTMENTS = [
  "CSE",
  "EEE",
  "BBA",
  "English",
  "Economics",
  "Civil Engineering",
];

function StudentForm({ onSaveStudent, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  // Populate form inputs when a student is selected for editing
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        email: editingStudent.email,
        phone: editingStudent.phone,
        department: editingStudent.department,
      });
      setError("");
    } else {
      setFormData(INITIAL_FORM_STATE);
      setError("");
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedDepartment = formData.department.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedDepartment) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    onSaveStudent({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      department: trimmedDepartment,
    });

    if (!editingStudent) {
      setFormData(INITIAL_FORM_STATE);
    }
    setError("");
  };

  return (
    <section className="card" aria-label="Student Form">
      <h2 className="card-title">
        {editingStudent ? "Edit Student" : "Add New Student"}
      </h2>

      <form onSubmit={handleSubmit} className="student-form" noValidate>
        {error && <p className="form-error">{error}</p>}

        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="student@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="017XXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select a department</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingStudent ? "Update Student" : "Submit"}
          </button>

          {editingStudent && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default StudentForm;