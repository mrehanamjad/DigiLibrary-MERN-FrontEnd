"use client"
import React, { useState } from 'react';
import { Upload, FileText, DollarSign, Users, Star } from 'lucide-react';

const UploadSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'free' | 'paid'>('free');

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Share Your Knowledge
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Upload your books and reach thousands of readers worldwide. Whether you want to share for free or monetize your content, we've got you covered.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-gray-600 text-sm">Access to millions of readers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Earn Money</h4>
                  <p className="text-gray-600 text-sm">Set your own pricing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Get Reviews</h4>
                  <p className="text-gray-600 text-sm">Build your reputation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Upload</h4>
                  <p className="text-gray-600 text-sm">Simple PDF upload process</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Start Uploading</span>
            </button>
          </div>

          {/* Upload Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Your Book</h3>
            
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setActiveTab('free')}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  activeTab === 'free'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Free Book
              </button>
              <button
                onClick={() => setActiveTab('paid')}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  activeTab === 'paid'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Premium Book
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
                <input
                  type="text"
                  placeholder="Enter your book title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a category</option>
                  <option value="programming">Programming</option>
                  <option value="business">Business</option>
                  <option value="design">Design</option>
                  <option value="self-help">Self-Help</option>
                  <option value="science">Science</option>
                  <option value="literature">Literature</option>
                </select>
              </div>

              {activeTab === 'paid' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload PDF</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Drop your PDF here or click to browse</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Upload Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;