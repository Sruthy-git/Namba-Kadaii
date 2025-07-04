import React from 'react';

const Sidebar = ({ filters = [], setFilters = () => {} }) => {
  const sections = {
    Category: ['All', 'Dress', 'Kitchen', 'Home Decor', 'Shoes'],
    Price: ['All', 'Rs 0 - Rs 50', 'Rs 50 -  Rs 100', 'Rs 100 - Rs 150', 'Over Rs 150'],
    Colors: ['All', 'Black', 'White', 'Blue'],
    Gender: ['All', 'Men', 'Women', 'Babies', 'Girls', 'Boys'],
    Rating:[1,2,3,4,5],
  };

  const handleCheckboxChange = (section, option) => {
    const key = `${section}:${option}`;
    setFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  return (
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
                    className="form-checkbox h-4 w-4 text-black font-bold"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
