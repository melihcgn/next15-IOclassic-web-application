import React from 'react'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
export const NamedTextarea = ({label, placeholder}: any) => {
  return (
    <div>            
        <Label htmlFor={label}>{label}</Label>
        <Textarea className='overflow-hidden' placeholder={placeholder}></Textarea>
    </div>
  )
}
