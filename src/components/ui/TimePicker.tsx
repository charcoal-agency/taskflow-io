"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TimePickerProps {
  value?: string;
  onChange: (value: string) => void;
  label: string;
  id: string;
}

const TimePicker = ({ value, onChange, label, id }: TimePickerProps) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TimePicker;