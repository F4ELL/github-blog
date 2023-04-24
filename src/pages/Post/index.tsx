import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentBox } from "../../components/ContentBox";
import { Link } from "../../components/Link";
import { PostContainer, PostContent, PostContentArea, PostInfo, PostInteration } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";

export function Post() {
    const theme = useTheme()

    return (
        <PostContainer>
            <PostContent>
                <ContentBox
                    variant="profile"
                >
                    <PostInfo>
                        <header>
                            <Link
                                variant="back"
                                title="Voltar"
                            />
                            <Link
                                variant="external"
                                title="Ver no Github"
                            />
                        </header>
                        <h1>JavaScript data types and data structures</h1>
                        <ul>
                            <PostInteration>
                                <FontAwesomeIcon icon={faGithub} color={theme["base-label"]} />
                                <span>F4ELL</span>
                            </PostInteration>
                            <PostInteration>
                                <FontAwesomeIcon icon={faCalendarDay} color={theme["base-label"]} />
                                <span>Há 1 dia</span>
                            </PostInteration>
                            <PostInteration>
                                <FontAwesomeIcon icon={faComment} color={theme["base-label"]} />
                                <span>5 comentários</span>
                            </PostInteration>
                        </ul>
                    </PostInfo>
                </ContentBox>

                <PostContentArea>
                    <p><strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                    </p>
                </PostContentArea>
            </PostContent>
        </PostContainer>
    )
}