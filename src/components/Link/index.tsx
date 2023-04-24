import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "./styles";
import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";

type Props = {
    title: string
    variant: 'back' | 'external'
}

export function Link({ title, variant }: Props) {
    const theme = useTheme()

    return (
        <LinkContainer href="#">
            {variant === 'back' &&
                <FontAwesomeIcon icon={faChevronLeft} size="xs" color={theme.blue} />
            }

            {title}

            {variant === 'external' &&
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" color={theme.blue} />
            }            
        </LinkContainer>
    )
}