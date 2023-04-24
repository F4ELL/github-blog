import { Link } from "../../components/Link";
import { ContentBox } from "../../components/ContentBox";
import { BlogContainer, BlogContent, PostContainer, PostsArea, ProfileContainer, ProfileDetails, ProfileHeader, ProfileSocial, PublicationArea } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../components/Input";
import { useTheme } from "styled-components";

export function Blog() {
    const theme = useTheme()

    return (
        <BlogContainer>
            <BlogContent>
                <ContentBox
                    variant="profile"
                >
                    <ProfileContainer>
                        <img src="https://github.com/F4ELL.png" alt="" />

                        <ProfileDetails>
                            <ProfileHeader>
                                <h2>Rafael Peres</h2>
                                <Link
                                    title="Github"
                                    variant="external"
                                />
                            </ProfileHeader>

                            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                            <ul>
                                <ProfileSocial>
                                    <FontAwesomeIcon icon={faGithub} color={theme["base-label"]} />
                                    <span>F4ELL</span>
                                </ProfileSocial>
                                <ProfileSocial>
                                    <FontAwesomeIcon icon={faBuilding} color={theme["base-label"]} />
                                    <span>Puc Minas</span>
                                </ProfileSocial>
                                <ProfileSocial>
                                    <FontAwesomeIcon icon={faUserGroup} color={theme["base-label"]} />
                                    <span>32 seguidores</span>
                                </ProfileSocial>
                            </ul>
                        </ProfileDetails>
                    </ProfileContainer>
                </ContentBox>

                <PublicationArea>
                    <h4>Publicações</h4>

                    <span>6 publicações</span>
                </PublicationArea>

                <Input
                    placeholder="Buscar conteúdo"
                />

                <PostsArea>
                    <ContentBox
                        variant="post"
                    >
                        <PostContainer>
                            <header>
                                <h5>JavaScript data types and data structures</h5>
                                <span>Há 1 dia</span>
                            </header>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                                Dynamic typing
                                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                                let foo = 42; // foo is now a number
                                foo = 'bar'; // foo is now a string
                                foo = true; // foo is now a boolean</p>
                        </PostContainer>
                    </ContentBox>
                    <ContentBox
                        variant="post"
                    >
                        <PostContainer>
                            <header>
                                <h5>JavaScript data types and data structures</h5>
                                <span>Há 1 dia</span>
                            </header>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                                Dynamic typing
                                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                                let foo = 42; // foo is now a number
                                foo = 'bar'; // foo is now a string
                                foo = true; // foo is now a boolean</p>
                        </PostContainer>
                    </ContentBox>
                    <ContentBox
                        variant="post"
                    >
                        <PostContainer>
                            <header>
                                <h5>JavaScript data types and data structures</h5>
                                <span>Há 1 dia</span>
                            </header>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                                Dynamic typing
                                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                                let foo = 42; // foo is now a number
                                foo = 'bar'; // foo is now a string
                                foo = true; // foo is now a boolean</p>
                        </PostContainer>
                    </ContentBox>
                    <ContentBox
                        variant="post"
                    >
                        <PostContainer>
                            <header>
                                <h5>JavaScript data types and data structures</h5>
                                <span>Há 1 dia</span>
                            </header>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                                Dynamic typing
                                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                                let foo = 42; // foo is now a number
                                foo = 'bar'; // foo is now a string
                                foo = true; // foo is now a boolean</p>
                        </PostContainer>
                    </ContentBox>
                    <ContentBox
                        variant="post"
                    >
                        <PostContainer>
                            <header>
                                <h5>JavaScript data types and data structures</h5>
                                <span>Há 1 dia</span>
                            </header>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                                Dynamic typing
                                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                                let foo = 42; // foo is now a number
                                foo = 'bar'; // foo is now a string
                                foo = true; // foo is now a boolean</p>
                        </PostContainer>
                    </ContentBox>
                    <ContentBox
                        variant="post"
                    >
                        <PostContainer>
                            <header>
                                <h5>JavaScript data types and data structures</h5>
                                <span>Há 1 dia</span>
                            </header>
                            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                                Dynamic typing
                                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                                let foo = 42; // foo is now a number
                                foo = 'bar'; // foo is now a string
                                foo = true; // foo is now a boolean</p>
                        </PostContainer>
                    </ContentBox>

                </PostsArea>
            </BlogContent>
        </BlogContainer>
    )
}