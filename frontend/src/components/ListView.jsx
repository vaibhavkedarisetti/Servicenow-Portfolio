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
            linkedin: 'https://www.linkedin.com/in/vaibhav-kedarisetti',
            github: 'https://github.com/M10O'
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
    <div className="flex-1 bg-white text-gray-900 min-h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
            <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-gray-500">
              <span>Table: {table}</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{data.length} records</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive List View */}
      <div className="p-4 sm:p-0">
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    style={{ width: column.width !== 'auto' ? column.width : undefined }}
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
              {data.map((record) => (
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
                    <td key={column.key} className="px-4 py-4 text-sm whitespace-normal break-words">
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
                        <span className="text-gray-900 whitespace-normal break-words">
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
        </div>

        {/* Mobile Card View */}
        <div className="block sm:hidden space-y-4">
          {data.map((record) => (
            <div 
              key={record.id} 
              className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => onRecordSelect(record, table)}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="font-semibold text-blue-600 font-mono text-sm">
                  {record[columns[0]?.key]}
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    className="text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRecordSelect(record, table);
                    }}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300 h-5 w-5"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
              <div className="space-y-2 text-sm">
                {columns.slice(1).map(col => (
                  <div key={`${record.id}-${col.key}`}>
                    <div className="text-xs text-gray-500 uppercase">{col.label}</div>
                    <div className="text-gray-900 mt-1">
                      {col.key === 'status' ? (
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          record[col.key] === 'Active' || record[col.key] === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {record[col.key]}
                        </span>
                      ) : (
                        <span className="break-words">
                          {record[col.key] || ''}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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