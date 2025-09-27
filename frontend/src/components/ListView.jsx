import React, { useMemo } from 'react';
import { ChevronRight, Eye, Edit, Filter, RefreshCw } from 'lucide-react';
import { experience, education, certifications, projects, skills, technologies, personalInfo } from '../data/mockData';

const ListView = ({ table, onRecordSelect }) => {
  const { data, columns, title } = useMemo(() => {
    switch (table) {
      case 'u_experience':
        return {
          title: 'Work Experience',
          data: experience,
          columns: [
            { key: 'id', label: 'Number', width: '100px' },
            { key: 'company', label: 'Company', width: 'auto' },
            { key: 'role', label: 'Role', width: 'auto' },
            { key: 'period', label: 'Period', width: '200px' },
            { key: 'status', label: 'Status', width: '100px' }
          ]
        };
      
      case 'u_education':
        return {
          title: 'Education',
          data: education,
          columns: [
            { key: 'id', label: 'Number', width: '100px' },
            { key: 'institution', label: 'Institution', width: 'auto' },
            { key: 'degree', label: 'Degree', width: 'auto' },
            { key: 'period', label: 'Period', width: '200px' },
            { key: 'status', label: 'Status', width: '100px' }
          ]
        };
      
      case 'u_certifications':
        return {
          title: 'Certifications',
          data: certifications,
          columns: [
            { key: 'id', label: 'Number', width: '100px' },
            { key: 'name', label: 'Certification Name', width: 'auto' },
            { key: 'issuer', label: 'Issuer', width: '150px' },
            { key: 'category', label: 'Category', width: '200px' },
            { key: 'status', label: 'Status', width: '100px' }
          ]
        };
      
      case 'u_projects_built':
        return {
          title: 'Projects Built',
          data: projects,
          columns: [
            { key: 'id', label: 'Number', width: '100px' },
            { key: 'name', label: 'Project Name', width: 'auto' },
            { key: 'description', label: 'Description', width: 'auto' },
            { key: 'status', label: 'Status', width: '100px' }
          ]
        };
      
      case 'u_snow_skills':
        return {
          title: 'ServiceNow Skills',
          data: Object.entries(skills).map(([category, skillList]) => ({
            id: category.toLowerCase().replace(/\s+/g, '_'),
            category,
            skills: skillList.join(', '),
            count: skillList.length
          })),
          columns: [
            { key: 'id', label: 'Number', width: '100px' },
            { key: 'category', label: 'Category', width: '150px' },
            { key: 'skills', label: 'Skills', width: 'auto' },
            { key: 'count', label: 'Count', width: '100px' }
          ]
        };
      
      case 'u_tech_worked_on':
        return {
          title: 'Technologies Worked On',
          data: Object.entries(technologies).map(([category, techList]) => ({
            id: category.toLowerCase().replace(/\s+/g, '_'),
            category,
            technologies: techList.join(', '),
            count: techList.length
          })),
          columns: [
            { key: 'id', label: 'Number', width: '100px' },
            { key: 'category', label: 'Category', width: '200px' },
            { key: 'technologies', label: 'Technologies', width: 'auto' },
            { key: 'count', label: 'Count', width: '100px' }
          ]
        };
      
      case 'sys_user_has_a_contact':
        return {
          title: 'Contact Information',
          data: [{
            id: 'CONTACT001',
            name: personalInfo.name,
            email: personalInfo.email,
            phone: personalInfo.phone,
            linkedin: 'LinkedIn Profile',
            github: 'GitHub Profile'
          }],
          columns: [
            { key: 'id', label: 'Number', width: '120px' },
            { key: 'name', label: 'Full Name', width: 'auto' },
            { key: 'email', label: 'Email', width: 'auto' },
            { key: 'phone', label: 'Phone', width: '150px' },
            { key: 'linkedin', label: 'LinkedIn', width: '120px' },
            { key: 'github', label: 'GitHub', width: '120px' }
          ]
        };
      
      default:
        return {
          title: 'Dashboard',
          data: [],
          columns: []
        };
    }
  }, [table]);

  return (
    <div className="flex-1 bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <span>Table: {table}</span>
              <ChevronRight className="w-4 h-4" />
              <span>{data.length} records</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* List View */}
      <div className="overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="w-12 px-4 py-3">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
              <th className="w-24 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((record, index) => (
              <tr
                key={record.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onRecordSelect(record, table)}
              >
                <td className="px-4 py-4">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-4 text-sm">
                    {column.key === 'id' ? (
                      <span className="text-blue-600 font-mono">{record[column.key]}</span>
                    ) : column.key === 'status' ? (
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        record[column.key] === 'Active' || record[column.key] === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {record[column.key]}
                      </span>
                    ) : (
                      <span className="text-gray-900">
                        {column.key === 'skills' || column.key === 'technologies' 
                          ? `${String(record[column.key]).substring(0, 100)}...`
                          : String(record[column.key] || '').length > 60
                          ? `${String(record[column.key]).substring(0, 60)}...`
                          : record[column.key] || ''
                        }
                      </span>
                    )}
                  </td>
                ))}
                <td className="px-4 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <button 
                      className="text-blue-600 hover:text-blue-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRecordSelect(record, table);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No records found for {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;