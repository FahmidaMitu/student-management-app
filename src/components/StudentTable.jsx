function StudentTable({ students, onEditStudent, onDeleteStudent, searchQuery }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        {searchQuery
          ? `No students found matching "${searchQuery}".`
          : "No students added yet. Use the form to add a student."}
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td data-label="#">{index + 1}</td>
              <td data-label="Name">
                <strong>{student.name}</strong>
              </td>
              <td data-label="Email" className="cell-wrap">
                {student.email}
              </td>
              <td data-label="Phone">{student.phone}</td>
              <td data-label="Department">
                <span className="dept-badge">{student.department}</span>
              </td>
              <td data-label="Actions" className="actions-cell">
                <div className="action-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-edit"
                    onClick={() => onEditStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-delete"
                    onClick={() => onDeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;