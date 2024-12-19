import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from 'lucide-react'

interface NumberInputProps {
  value: number
  onChange: (value: number) => void
  onBlur: () => void
  min?: number
  max?: number
}

export function NumberInput({ value, onChange, onBlur, min = 0, max = Infinity }: NumberInputProps) {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1)
    }
  }

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Button 
        type="button" 
        variant="outline" 
        size="icon" 
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        onBlur={onBlur}
        className="w-16 text-center"
        min={min}
        max={max}
      />
      <Button 
        type="button" 
        variant="outline" 
        size="icon" 
        onClick={handleIncrement}
        disabled={value >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}

