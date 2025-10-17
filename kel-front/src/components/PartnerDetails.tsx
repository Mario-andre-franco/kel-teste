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

interface PartnerDetailsProps {
  partner?: Partner;
  className?: string;
}

const PartnerDetails: React.FC<PartnerDetailsProps> = ({ partner, className = '' }) => {
  if (!partner) {
    return (
      <div className={`partner-details ${className}`}>
        <div className="p-6">
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Selecione um parceiro</h3>
            <p className="text-sm text-gray-500">
              Clique em um parceiro da lista para ver os detalhes
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`partner-details ${className}`}>
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Detalhes do Parceiro</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {partner.category}
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Descrição</h4>
            <p className="text-gray-900">{partner.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Localização</h4>
            <div className="flex items-center text-gray-900">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {partner.location}
            </div>
          </div>

          {partner.phone && (
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Telefone</h4>
              <div className="flex items-center text-gray-900">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {partner.phone}
              </div>
            </div>
          )}

          {partner.email && (
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">E-mail</h4>
              <div className="flex items-center text-gray-900">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {partner.email}
              </div>
            </div>
          )}

          {partner.website && (
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Website</h4>
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visitar site
              </a>
            </div>
          )}
        </div>

        <div className="mt-6 pt-6 border-t">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
