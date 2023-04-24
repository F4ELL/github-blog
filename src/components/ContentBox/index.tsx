import { ReactNode } from "react";
import { ContentBoxContainer } from "./styles";

type Props = {
    variant: 'profile' | 'post'
    children: ReactNode
}

export function ContentBox({ variant, children }: Props) {
    return (
        <ContentBoxContainer
            bgColor={variant}
        >
            { children }
        </ContentBoxContainer>
    )
}