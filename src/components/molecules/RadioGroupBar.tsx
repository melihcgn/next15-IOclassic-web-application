import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupBarProps {
  options: RadioOption[];
  defaultValue?: string;
}

const RadioGroupBar: React.FC<RadioGroupBarProps> = ({ options, defaultValue = "option-1" }) => {
  return (
    <RadioGroup defaultValue={defaultValue}>
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
