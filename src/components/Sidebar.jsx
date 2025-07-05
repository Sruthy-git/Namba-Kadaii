import React, { useState } from "react";

const Sidebar = ({ filters = [], setFilters = () => {} }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sections = {
    Category: ["All", "Dress", "Kitchen", "Home Decor", "Shoes"],
    Price: ["All", "Rs 0 - Rs 50", "Rs 50 -  Rs 100", "Rs 100 - Rs 150", "Over Rs 150"],
    Colors: ["All", "Black", "White", "Blue"],
    Gender: ["All", "Men", "Women", "Babies", "Girls", "Boys"],
    Rating: [1, 2, 3, 4, 5],
  };

  const handleCheckboxChange = (section, option) => {
    const key = `${section}:${option}`;
    setFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-2">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-2 bg-gray-200 rounded-full shadow-md"
          aria-label="Toggle Filters"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      {(showSidebar || window.innerWidth >= 768) && (
        <aside className="w-full md:w-64 p-4 bg-[#F0F0F0] text-black border-r border-gray-200">
          {Object.entries(sections).map(([section, options]) => (
            <div key={section} className="mb-6">
              <h2 className="text-lg font-bold mb-4">{section}</h2>
              <div className="space-y-2">
                {options.map((option) => {
                  const key = `${section}:${option}`;
                  return (
                    <label key={key} className="flex items-center space-x-2 text-sm">
                      <input
                        type="checkbox"
                        checked={filters.includes(key)}
                        onChange={() => handleCheckboxChange(section, option)}
                        className="h-4 w-4 text-black"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </aside>
      )}
    </>
  );
};

export default Sidebar;
