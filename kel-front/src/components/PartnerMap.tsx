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

interface PartnerMapProps {
  partners: Partner[];
  className?: string;
}

const PartnerMap: React.FC<PartnerMapProps> = ({ partners = [], className = '' }) => {
  return (
    <div className={`partner-map ${className}`}>
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Mapa de Parceiros</h2>
        <p className="text-sm text-gray-600 mt-1">{partners.length} parceiros no mapa</p>
      </div>
      
      <div className="relative h-96 bg-gray-100">
        {/* Placeholder for map - you can integrate with Google Maps, Leaflet, etc. */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Mapa Interativo</h3>
            <p className="text-sm text-gray-500 mb-4">
              Visualize a localização dos parceiros no mapa
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {partners.slice(0, 3).map((partner) => (
                <span 
                  key={partner.id}
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {partner.name}
                </span>
              ))}
              {partners.length > 3 && (
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{partners.length - 3} mais
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Map controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m16 0l-4-4m4 4l-4 4M4 12l4-4m-4 4l4 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerMap;
