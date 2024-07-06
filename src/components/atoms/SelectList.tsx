import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

interface SelectListProps {
    label?: string;
    selectLabel?: string;
    selectItems?: { value: string; label: string }[];
}

const SelectList: React.FC<SelectListProps> = ({ label, selectLabel, selectItems }) => {
    return (
        <Select>
            <div className="flex flex-col space-y-2">
                {label && <Label>{label}</Label>}
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={`${selectLabel}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}
                        {selectItems &&
                            selectItems.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                    </SelectGroup>
                </SelectContent>
            </div>
        </Select>
    );
};

export default SelectList;
