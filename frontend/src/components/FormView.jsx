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
    switch (recordType) {
      case 'experience':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <span>{record.company}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <User className="w-5 h-5 text-gray-400" />
                  <span>{record.role}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>{record.period}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span>{record.location}</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Details</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                <ul className="space-y-2">
                  {record.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <GraduationCap className="w-5 h-5 text-gray-400" />
                  <span>{record.institution}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span>{record.degree}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>{record.period}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
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
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Certification Name</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span>{record.name}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Issuer</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span>{record.issuer}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span>{record.category}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
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
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                <Code className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{record.name}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-gray-700">{record.description}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                <ul className="space-y-2">
                  {record.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {record.status}
                  </span>
                </div>
              </div>
            </div>
            {record.link && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Link</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
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
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Code className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{record.category}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skill Count</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {record.count} skills
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-gray-700">{record.skills}</p>
              </div>
            </div>
          </div>
        );

      case 'technology':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Monitor className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{record.category}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Technology Count</label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    {record.count} technologies
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-gray-700">{record.technologies}</p>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                <User className="w-5 h-5 text-gray-400" />
                <span className="font-medium">{record.name}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href={`mailto:${record.email}`} className="text-blue-600 hover:text-blue-800">
                    {record.email}
                  </a>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>{record.phone}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                  <span>{record.linkedin}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded">
                  <Github className="w-5 h-5 text-gray-400" />
                  <span>{record.github}</span>
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
    <div className="flex-1 bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to List
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {record.name || record.company || record.institution || record.category || 'Record Details'}
            </h1>
            <div className="text-sm text-gray-500 mt-1">
              Record ID: {record.id}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {renderFormFields()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormView;