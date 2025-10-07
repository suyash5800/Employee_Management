import React, { useEffect, useState } from 'react';
import "./Dashboard_pages_css/Department.css";

const Leaves = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await fetch('http://localhost:5800/api/auth/leavesGets');
        if (!response.ok) throw new Error('Failed to fetch leave data');
        const data = await response.json();
        setLeaves(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Total Leaves</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Total Days</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map(leave => {
            const totalDays =
              (new Date(leave.leave_to) - new Date(leave.leave_from)) / (1000 * 60 * 60 * 24) + 1;
            return (
              <tr key={leave._id}>
                <td>{leave.emp_name}</td>
                <td>{leave.leave_type}</td>
                <td>{formatDate(leave.leave_from)}</td>
                <td>{formatDate(leave.leave_to)}</td>
                <td>{leave.status}</td>
                <td>{totalDays}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaves;
