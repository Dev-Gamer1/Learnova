import { useState } from 'react';
import { BookOpen, Users, Settings, Search, Filter, Clock, Calendar, User, Mail, Phone, MapPin, Edit2, Save } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all-courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Shreya Ghosh',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St, New York, NY 10001',
    enrollmentDate: 'January 15, 2024'
  });

  // Static data for all courses
  const allCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      duration: '12 weeks',
      students: 245,
      level: 'Beginner',
      image: '🌐',
      description: 'Learn HTML, CSS, and JavaScript basics',
      price: '$299'
    },
    {
      id: 2,
      title: 'Advanced React & Node.js',
      instructor: 'Michael Chen',
      duration: '16 weeks',
      students: 189,
      level: 'Advanced',
      image: '⚛️',
      description: 'Master full-stack development',
      price: '$499'
    },
    {
      id: 3,
      title: 'UI/UX Design Mastery',
      instructor: 'Emily Rodriguez',
      duration: '10 weeks',
      students: 312,
      level: 'Intermediate',
      image: '🎨',
      description: 'Create stunning user interfaces',
      price: '$349'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      instructor: 'David Kumar',
      duration: '14 weeks',
      students: 198,
      level: 'Intermediate',
      image: '📊',
      description: 'Analyze data and build ML models',
      price: '$449'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Lisa Anderson',
      duration: '12 weeks',
      students: 156,
      level: 'Intermediate',
      image: '📱',
      description: 'Build iOS and Android apps',
      price: '$399'
    },
    {
      id: 6,
      title: 'DevOps & Cloud Computing',
      instructor: 'Robert Taylor',
      duration: '10 weeks',
      students: 143,
      level: 'Advanced',
      image: '☁️',
      description: 'Master AWS, Docker, and Kubernetes',
      price: '$529'
    }
  ];

  // Static data for enrolled batches
  const myBatches = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      batch: 'Batch A - Morning',
      progress: 65,
      nextClass: '2024-12-18 09:00 AM',
      status: 'Active',
      enrolledDate: '2024-11-01'
    },
    {
      id: 2,
      title: 'Advanced React & Node.js',
      instructor: 'Michael Chen',
      batch: 'Batch B - Evening',
      progress: 42,
      nextClass: '2024-12-19 06:00 PM',
      status: 'Active',
      enrolledDate: '2024-11-15'
    },
    {
      id: 3,
      title: 'UI/UX Design Mastery',
      instructor: 'Emily Rodriguez',
      batch: 'Batch C - Weekend',
      progress: 88,
      nextClass: '2024-12-21 10:00 AM',
      status: 'Active',
      enrolledDate: '2024-10-10'
    }
  ];

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const filteredCourses = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{profileData.name}</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('all-courses')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'all-courses'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">All Courses</span>
            </button>
            
            <button
              onClick={() => setActiveTab('my-batches')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'my-batches'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">My Batches</span>
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'settings'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {/* All Courses Tab */}
          {activeTab === 'all-courses' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Browse All Courses</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-32 flex items-center justify-center text-6xl">
                      {course.image}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.level}
                        </span>
                        <span className="text-lg font-bold text-blue-600">{course.price}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {course.instructor}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {course.students} students
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Batches Tab */}
          {activeTab === 'my-batches' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Enrolled Batches</h2>
                <p className="text-gray-600 mt-1">Track your progress and upcoming classes</p>
              </div>

              <div className="space-y-6">
                {myBatches.map((batch) => (
                  <div key={batch.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{batch.title}</h3>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            {batch.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">Instructor: {batch.instructor}</p>
                        <p className="text-sm text-gray-500">{batch.batch}</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Continue Learning
                      </button>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Course Progress</span>
                        <span className="text-sm font-semibold text-blue-600">{batch.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all"
                          style={{ width: `${batch.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <p className="text-gray-500">Next Class</p>
                          <p className="font-medium text-gray-900">{batch.nextClass}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-5 h-5 text-gray-400 mr-2" />
                        <div>
                          <p className="text-gray-500">Enrolled On</p>
                          <p className="font-medium text-gray-900">{batch.enrolledDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                <p className="text-gray-600 mt-1">Manage your personal information</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{profileData.name}</h3>
                      <p className="text-gray-600">Student Account</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {isEditingProfile ? (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Save</span>
                      </>
                    ) : (
                      <>
                        <Edit2 className="w-4 h-4" />
                        <span>Edit</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                      disabled={!isEditingProfile}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      disabled={!isEditingProfile}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      disabled={!isEditingProfile}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      Address
                    </label>
                    <input
                      type="text"
                      value={profileData.address}
                      onChange={(e) => handleProfileChange('address', e.target.value)}
                      disabled={!isEditingProfile}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">Member since:</span> {profileData.enrollmentDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;