import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, User, Building2, GraduationCap, Award, Code, Monitor, Mail, Phone, Github, Linkedin } from 'lucide-react';

const FormView = ({ record, onBack }) => {
  const getRecordType = () => {
    if (record.company) return 'experience';
    if (record.institution) return 'education';
    if (record.issuer) return 'certification';
    if (record.description && record.technologies) return 'project';
    if (record.category && record.skills) return 'skill';
    if (record.category && record.technologies) return 'technology';
    if (record.email) return 'contact';
    return 'unknown';
  };

  const recordType = getRecordType();

  const renderFormFields = () => {
    const commonLabelClass = "block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2";
    const commonFieldClass = "flex items-center gap-2 p-2 sm:p-3 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base";
    const commonIconClass = "w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0";

    switch (recordType) {
      case 'experience':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Company</label>
                <div className={commonFieldClass}>
                  <Building2 className={commonIconClass} />
                  <span>{record.company}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Role</label>
                <div className={commonFieldClass}>
                  <User className={commonIconClass} />
                  <span>{record.role}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Period</label>
                <div className={commonFieldClass}>
                  <Calendar className={commonIconClass} />
                  <span>{record.period}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Location</label>
                <div className={`${commonFieldClass} border`}>
                  <span>{record.location}</span>
                </div>
              </div>
            </div>
            <div>
              <label className={commonLabelClass}>Work Details</label>
              <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded">
                <ul className="space-y-2">
                  {record.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Institution</label>
                <div className={commonFieldClass}>
                  <GraduationCap className={commonIconClass} />
                  <span>{record.institution}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Degree</label>
                <div className={`${commonFieldClass} border`}>
                  <span>{record.degree}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Period</label>
                <div className={commonFieldClass}>
                  <Calendar className={commonIconClass} />
                  <span>{record.period}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Status</label>
                <div className={`${commonFieldClass} border`}>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {record.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'certification':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Certification Name</label>
                <div className={commonFieldClass}>
                  <Award className={commonIconClass} />
                  <span>{record.name}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Issuer</label>
                <div className={`${commonFieldClass} border`}>
                  <span>{record.issuer}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Category</label>
                <div className={`${commonFieldClass} border`}>
                  <span>{record.category}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Status</label>
                <div className={`${commonFieldClass} border`}>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {record.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className={commonLabelClass}>Project Name</label>
              <div className={commonFieldClass}>
                <Code className={commonIconClass} />
                <span className="font-medium">{record.name}</span>
              </div>
            </div>
            <div>
              <label className={commonLabelClass}>Description</label>
              <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base">
                <p className="text-gray-700">{record.description}</p>
              </div>
            </div>
            <div>
              <label className={commonLabelClass}>Project Details</label>
              <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded">
                <ul className="space-y-2">
                  {record.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Technologies</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <div className="flex flex-wrap gap-2">
                    {record.technologies?.map((tech, idx) => (
                      <span key={idx} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Status</label>
                <div className={`${commonFieldClass} border`}>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {record.status}
                  </span>
                </div>
              </div>
            </div>
            {record.link && record.link !== '#' && (
              <div>
                <label className={commonLabelClass}>Project Link</label>
                <div className={commonFieldClass}>
                  <a 
                    href={record.link} 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>
            )}
          </div>
        );

      case 'skill':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Category</label>
                <div className={commonFieldClass}>
                  <Code className={commonIconClass} />
                  <span className="font-medium">{record.category}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Skill Count</label>
                <div className={`${commonFieldClass} border`}>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {record.count} skills
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label className={commonLabelClass}>Skills</label>
              <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base">
                <p className="text-gray-700 leading-relaxed">{record.skills}</p>
              </div>
            </div>
          </div>
        );

      case 'technology':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Category</label>
                <div className={commonFieldClass}>
                  <Monitor className={commonIconClass} />
                  <span className="font-medium">{record.category}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Technology Count</label>
                <div className={`${commonFieldClass} border`}>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    {record.count} technologies
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label className={commonLabelClass}>Technologies</label>
              <div className="p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded text-sm sm:text-base">
                <p className="text-gray-700 leading-relaxed">{record.technologies}</p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className={commonLabelClass}>Full Name</label>
              <div className={commonFieldClass}>
                <User className={commonIconClass} />
                <span className="font-medium">{record.name}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={commonLabelClass}>Email</label>
                <div className={`${commonFieldClass} truncate`}>
                  <Mail className={commonIconClass} />
                  <a href={`mailto:${record.email}`} className="text-blue-600 hover:text-blue-800 truncate">
                    {record.email}
                  </a>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>Phone</label>
                <div className={commonFieldClass}>
                  <Phone className={commonIconClass} />
                  <span>{record.phone}</span>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>LinkedIn</label>
                <div className={`${commonFieldClass} truncate`}>
                  <Linkedin className={commonIconClass} />
                  <button 
                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 truncate"
                    onClick={() => window.open('https://www.linkedin.com/in/vaibhav-kedarisetti', '_blank')}
                  >
                    https://www.linkedin.com/in/vaibhav-kedarisetti
                  </button>
                </div>
              </div>
              <div>
                <label className={commonLabelClass}>GitHub</label>
                <div className={`${commonFieldClass} truncate`}>
                  <Github className={commonIconClass} />
                  <button 
                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer bg-transparent border-none p-0 truncate"
                    onClick={() => window.open('https://github.com/M10O', '_blank')}
                  >
                    https://github.com/M10O
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8 text-gray-500">
            Unknown record type
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-white text-gray-900 min-h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-2 -ml-2 rounded-md"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Back to List</span>
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
              {record.name || record.company || record.institution || record.category || 'Record Details'}
            </h1>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">
              Record ID: {record.id}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            {renderFormFields()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormView;