"use client"
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Upload, BookOpen, DollarSign, Globe, FileText, Tag, User, Hash } from 'lucide-react';

interface BookFormData {
  title: string;
  description: string;
  author: string;
  price: number;
  category: string;
  tags: string[];
  language: string;
  pages: number;
  isPublished: boolean;
  pdfFile: FileList | null;
}

const BookUploadPage: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [tagInput, setTagInput] = useState('');

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<BookFormData>({
    defaultValues: {
      title: '',
      description: '',
      author: '',
      price: 0,
      category: '',
      tags: [],
      language: '',
      pages: 1,
      isPublished: false,
      pdfFile: null
    }
  });

  const watchedTags = watch('tags');
  const watchedPrice = watch('price');

  const categories = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance',
    'Biography', 'History', 'Science', 'Technology', 'Business',
    'Self-Help', 'Health', 'Travel', 'Cooking', 'Art', 'Religion',
    'Philosophy', 'Education', 'Children', 'Young Adult'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi',
    'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish'
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files[0] && files[0].type === 'application/pdf') {
      setUploadedFile(files[0]);
      setValue('pdfFile', files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setUploadedFile(files[0]);
      setValue('pdfFile', files);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !watchedTags.includes(tagInput.trim())) {
      setValue('tags', [...watchedTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue('tags', watchedTags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const onSubmit = async (data: BookFormData) => {
    try {
      // Simulate API call
      console.log('Form submitted:', data);
      console.log('Uploaded file:', uploadedFile);
      
      // Here you would typically send the data to your backend
      // const formData = new FormData();
      // Object.keys(data).forEach(key => {
      //   if (key === 'tags') {
      //     formData.append(key, JSON.stringify(data[key]));
      //   } else if (key === 'pdfFile' && data[key]) {
      //     formData.append('pdf', data[key][0]);
      //   } else {
      //     formData.append(key, data[key].toString());
      //   }
      // });
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate upload
      alert('Book uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="flex items-center gap-3">
              <BookOpen className="text-white" size={32} />
              <h1 className="text-3xl font-bold text-white">Upload Your Book</h1>
            </div>
            <p className="text-blue-100 mt-2">Share your knowledge with the world</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FileText size={16} />
                    Book Title
                  </label>
                  <input
                    {...register('title', { required: 'Title is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter book title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                {/* Author */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} />
                    Author
                  </label>
                  <input
                    {...register('author', { required: 'Author is required' })}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter author name"
                  />
                  {errors.author && (
                    <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <FileText size={16} />
                    Description
                  </label>
                  <textarea
                    {...register('description', { required: 'Description is required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Enter book description"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                {/* Price */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign size={16} />
                    Price {watchedPrice === 0 && <span className="text-green-600 text-xs">(Free)</span>}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      {...register('price', { 
                        required: 'Price is required',
                        min: { value: 0, message: 'Price cannot be negative' }
                      })}
                      type="number"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="0.00"
                    />
                  </div>
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Tag size={16} />
                    Category
                  </label>
                  <select
                    {...register('category', { required: 'Category is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Language */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Globe size={16} />
                    Language
                  </label>
                  <select
                    {...register('language', { required: 'Language is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select language</option>
                    {languages.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                  {errors.language && (
                    <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>
                  )}
                </div>

                {/* Pages */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Hash size={16} />
                    Number of Pages
                  </label>
                  <input
                    {...register('pages', { 
                      required: 'Number of pages is required',
                      min: { value: 1, message: 'Must have at least 1 page' }
                    })}
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g., 250"
                  />
                  {errors.pages && (
                    <p className="text-red-500 text-sm mt-1">{errors.pages.message}</p>
                  )}
                </div>

                {/* Tags */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Tag size={16} />
                    Tags
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Add a tag"
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  {watchedTags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {watchedTags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="hover:text-blue-900 transition-colors"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Published Status */}
                <div>
                  <label className="flex items-center gap-3">
                    <input
                      {...register('isPublished')}
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Publish immediately
                    </span>
                  </label>
                  <p className="text-sm text-gray-500 mt-1">
                    Uncheck to save as draft
                  </p>
                </div>

                {/* PDF Upload */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Upload size={16} />
                    PDF File
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      isDragOver
                        ? 'border-blue-400 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {uploadedFile ? (
                      <div className="space-y-2">
                        <Upload className="mx-auto text-green-600" size={24} />
                        <p className="text-sm font-semibold text-green-600">
                          {uploadedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="mx-auto text-gray-400" size={24} />
                        <p className="text-sm text-gray-600">
                          Drop your PDF here or{' '}
                          <label className="text-blue-600 hover:text-blue-700 cursor-pointer underline">
                            browse
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </p>
                        <p className="text-xs text-gray-500">PDF files only</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Uploading...
                  </span>
                ) : (
                  'Upload Book'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookUploadPage;