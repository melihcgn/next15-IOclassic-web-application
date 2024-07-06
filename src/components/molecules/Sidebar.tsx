"use client"

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface SidebarProps {
  items: { id: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <label className="text-base font-medium">Sidebar</label>
        <p className="text-sm text-gray-600">Select the items you want to display in the sidebar.</p>
      </div>
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-3">
          <Checkbox
            checked={selectedItems.includes(item.id)}
            onCheckedChange={() => handleCheckboxChange(item.id)}
          />
          <label className="font-normal">{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
