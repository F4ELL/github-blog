import { InputContainer } from "./styles";

type Props = {
    placeholder: string
}

export function Input({ placeholder }: Props) {
    return (
        <InputContainer 
            type="text"
            placeholder={placeholder}
        />
    )
}