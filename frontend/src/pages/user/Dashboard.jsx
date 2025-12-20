import React, { useEffect, useState } from 'react';
import {
  BookOpen, Users, Settings, Search, Filter, Clock,
  User, Mail, Phone, MapPin, Edit2
} from 'lucide-react';
import axios from 'axios';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all-courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // ✅ Track enrolled courses

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // =========================
  // FETCH USER PROFILE
  // =========================
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get('http://localhost:5000/api/users/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        setProfileData({
          name: res.data.user?.name || '',
          email: res.data.user?.email || '',
          phone: res.data.user?.phone || '',
          address: res.data.user?.address || '',
        });
      })
      .catch(err => console.error('Profile fetch error', err));
  }, []);

  // =========================
  // FETCH COURSES & ENROLLMENTS
  // =========================
  useEffect(() => {
    if (activeTab !== 'all-courses') return;

    const token = localStorage.getItem('token');
    if (!token) return;

    const fetchCourses = async () => {
      try {
        setLoadingCourses(true);
        const resCourses = await axios.get('http://localhost:5000/api/courses');
        setCourses(resCourses.data);

        // ✅ Fetch user's enrolled courses
        const resEnrollments = await axios.get('http://localhost:5000/api/enrollments', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const enrolledIds = resEnrollments.data.map(e => e.course);
        setEnrolledCourses(enrolledIds);

      } catch (error) {
        console.error('Error fetching courses or enrollments:', error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, [activeTab]);

  const filteredCourses = courses.filter(course =>
    course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* HEADER */}
      <header className="bg-white shadow-md">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">Student Portal</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-medium">{profileData.name}</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
              {profileData.name
                ?.split(' ')
                .map(n => n[0])
                .join('')}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="w-64 bg-white shadow-lg min-h-screen p-4 space-y-2">
          {[
            { id: 'all-courses', label: 'All Courses', icon: BookOpen },
            { id: 'my-batches', label: 'My Batches', icon: Users },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8">

          {/* ALL COURSES */}
          {activeTab === 'all-courses' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Browse All Courses</h2>
                <div className="flex space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search courses..."
                      className="pl-10 pr-4 py-2 border rounded-lg"
                    />
                  </div>
                  <button className="p-2 border rounded-lg">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {loadingCourses && <p>Loading courses...</p>}
              {!loadingCourses && filteredCourses.length === 0 && <p>No courses found</p>}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard
                    key={course._id}
                    course={course}
                    enrolledCourses={enrolledCourses}
                    setEnrolledCourses={setEnrolledCourses}
                  />
                ))}
              </div>
            </>
          )}

          {/* SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-3xl bg-white rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Profile Settings</h2>
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="flex items-center space-x-2 text-blue-600"
                >
                  <Edit2 />
                  <span>Edit</span>
                </button>
              </div>

              <div className="space-y-5">
                <ProfileField icon={User} label="Full Name" value={profileData.name} />
                <ProfileField icon={Mail} label="Email" value={profileData.email} />
                <ProfileField icon={Phone} label="Phone" value={profileData.phone} />
                <ProfileField icon={MapPin} label="Address" value={profileData.address} />
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

// =========================
// COURSE CARD COMPONENT
// =========================
const CourseCard = ({ course, enrolledCourses, setEnrolledCourses }) => {
  const isAlreadyEnrolled = enrolledCourses.includes(course._id);

  const handleEnroll = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('You must be logged in to enroll.');

    try {
      await axios.post(
        'http://localhost:5000/api/enroll',
        { courseId: course._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setEnrolledCourses(prev => [...prev, course._id]);
    } catch (error) {
      console.error('Enrollment error', error);
      alert(error.response?.data?.message || 'Enrollment failed');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl">
        📘
      </div>

      <div className="p-6">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {course.level || 'Beginner'}
          </span>
          <span className="font-bold text-blue-600">{course.price || 'Free'}</span>
        </div>

        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="text-sm text-gray-600 space-y-2 mb-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" /> {course.instructor || 'Instructor'}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" /> {course.duration || 'Self paced'}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" /> {course.students || 0} students
            </div>
          </div>
        </div>

        <button
          onClick={handleEnroll}
          disabled={isAlreadyEnrolled}
          className={`w-full py-2 rounded-lg text-white ${
            isAlreadyEnrolled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}
        >
          {isAlreadyEnrolled ? 'Enrolled' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

// =========================
// PROFILE FIELD COMPONENT
// =========================
const ProfileField = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-4">
    <Icon className="w-5 h-5 text-blue-600" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value || '—'}</p>
    </div>
  </div>
);

export default Dashboard;
