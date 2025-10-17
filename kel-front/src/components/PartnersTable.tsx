import React from 'react';

interface Partner {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
}

interface PartnersTableProps {
  partners: Partner[];
  onPartnerSelect?: (partner: Partner) => void;
  className?: string;
}

const PartnersTable: React.FC<PartnersTableProps> = ({ 
  partners, 
  onPartnerSelect, 
  className = '' 
}) => {
  return (
    <div className={`partners-table ${className}`}>
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Parceiros</h2>
        <p className="text-sm text-gray-600 mt-1">{partners.length} parceiros encontrados</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {partners.map((partner) => (
          <div 
            key={partner.id}
            onClick={() => onPartnerSelect?.(partner)}
            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {partner.location}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {partner.category}
                  </span>
                </div>
              </div>
              <div className="ml-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {partners.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p>Nenhum parceiro encontrado</p>
        </div>
      )}
    </div>
  );
};

export default PartnersTable;
