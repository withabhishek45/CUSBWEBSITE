import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
            <FaTools className="text-5xl text-yellow-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
          <p className="text-gray-500 mb-8">Central University of South Bihar</p>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8 mb-6">
            <div className="animate-pulse">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚧</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">Under Construction</h2>
            <p className="text-yellow-600">
              This page is currently under development. 
              <br />
              Please check back later.
            </p>
          </div>
          
          <div className="text-sm text-gray-500 mb-6">
            <p>For administrative access, please contact:</p>
            <p className="font-medium text-gray-700">IT Department</p>
            <p>Email: itadmin@cusb.ac.in</p>
          </div>
          
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition font-medium"
          >
            ← Back to Home
          </Link>
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-6">
          © 2026 Central University of South Bihar. All rights reserved.
        </p>
      </div>
    </div>
  );
}
