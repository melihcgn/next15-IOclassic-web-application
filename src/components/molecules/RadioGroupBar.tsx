"use client"

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupBarProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroupBar: React.FC<RadioGroupBarProps> = ({ options, value, onChange }) => {
  // Internal state to manage the value if not provided externally
  const [internalValue, setInternalValue] = useState(value || options[0]?.value);

  // Handle change event
  const handleChange = (val: string) => {
    if (onChange) {
      onChange(val);
    } else {
      setInternalValue(val);
    }
  };

  return (
    <RadioGroup value={value || internalValue} onValueChange={handleChange}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupBar;
