import { useEffect, useState } from 'react'
import API_URL from '../api';

function HomePage() {
  const [courses, setCourses] = useState([]);

  const fetchAllCourses = async () => {
    try {
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}/home`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
        const data = await response.json();
        setCourses(data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return false;
    }
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </>
  )
}

export default HomePage