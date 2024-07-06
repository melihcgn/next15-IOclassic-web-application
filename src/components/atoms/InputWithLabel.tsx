import { Label } from "../ui/label"
import { Input } from "../ui/input"

export default function InputWithLabel({label = "dummy", inputValue = ""}: any) {
    return (
        <div>
            <Label htmlFor="email">{label}</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    )
}