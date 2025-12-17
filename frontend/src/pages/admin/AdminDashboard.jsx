import React, { useState } from 'react';
import { Users, BookOpen, Settings, Search, Mail, Phone, Calendar, Award, TrendingUp, DollarSign } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');

  // Sample student data
  const students = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '+1 234-567-8901', course: 'Web Development', enrollment: '2024-01-15', status: 'Active', progress: 75 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '+1 234-567-8902', course: 'Data Science', enrollment: '2024-02-20', status: 'Active', progress: 60 },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', phone: '+1 234-567-8903', course: 'Mobile Development', enrollment: '2024-01-10', status: 'Active', progress: 90 },
    { id: 4, name: 'David Wilson', email: 'david@example.com', phone: '+1 234-567-8904', course: 'UI/UX Design', enrollment: '2024-03-05', status: 'Inactive', progress: 30 },
    { id: 5, name: 'Eva Martinez', email: 'eva@example.com', phone: '+1 234-567-8905', course: 'Web Development', enrollment: '2024-02-01', status: 'Active', progress: 85 },
  ];

  // Sample course data
  const courses = [
    { id: 1, name: 'Web Development', instructor: 'Prof. John Doe', students: 45, duration: '12 weeks', price: '$499', rating: 4.8 },
    { id: 2, name: 'Data Science', instructor: 'Dr. Jane Smith', students: 38, duration: '16 weeks', price: '$599', rating: 4.9 },
    { id: 3, name: 'Mobile Development', instructor: 'Prof. Mike Johnson', students: 32, duration: '14 weeks', price: '$549', rating: 4.7 },
    { id: 4, name: 'UI/UX Design', instructor: 'Sarah Williams', students: 28, duration: '10 weeks', price: '$449', rating: 4.6 },
    { id: 5, name: 'Cloud Computing', instructor: 'Dr. Robert Brown', students: 25, duration: '12 weeks', price: '$529', rating: 4.8 },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStudents = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Student Management</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Students</p>
              <p className="text-3xl font-bold mt-2">{students.length}</p>
            </div>
            <Users className="h-12 w-12 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Active Students</p>
              <p className="text-3xl font-bold mt-2">{students.filter(s => s.status === 'Active').length}</p>
            </div>
            <TrendingUp className="h-12 w-12 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Avg Progress</p>
              <p className="text-3xl font-bold mt-2">{Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%</p>
            </div>
            <Award className="h-12 w-12 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Total Courses</p>
              <p className="text-3xl font-bold mt-2">{courses.length}</p>
            </div>
            <BookOpen className="h-12 w-12 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-2" />
                      {student.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="h-4 w-4 mr-2" />
                      {student.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.course}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {student.enrollment}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{student.progress}%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Course Management</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Students
                  </span>
                  <span className="font-semibold text-gray-800">{course.students}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Duration
                  </span>
                  <span className="font-semibold text-gray-800">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Price
                  </span>
                  <span className="font-semibold text-gray-800">{course.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    Rating
                  </span>
                  <span className="font-semibold text-gray-800">{course.rating} ⭐</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Tech Academy" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="admin@techacademy.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-6 (Central Time)</option>
              <option>UTC-7 (Mountain Time)</option>
              <option>UTC-8 (Pacific Time)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h3>
        <div className="space-y-3">
          {['Email Notifications', 'New Student Enrollment Alerts', 'Course Completion Alerts', 'Payment Notifications'].map((setting, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="text-gray-700">{setting}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={idx < 2} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Change Password
          </button>
          <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Enable Two-Factor Authentication
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-gray-400 text-sm mt-1">Tech Academy</p>
        </div>
        
        <nav className="mt-6">
          <button
            onClick={() => setActiveTab('students')}
            className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
              activeTab === 'students' 
                ? 'bg-blue-600 text-white border-l-4 border-blue-400' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Users className="h-5 w-5 mr-3" />
            Students
          </button>
          
          <button
            onClick={() => setActiveTab('courses')}
            className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
              activeTab === 'courses' 
                ? 'bg-blue-600 text-white border-l-4 border-blue-400' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-3" />
            Courses
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
              activeTab === 'settings' 
                ? 'bg-blue-600 text-white border-l-4 border-blue-400' 
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === 'students' && renderStudents()}
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
