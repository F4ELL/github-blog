import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "styled-components";
import { MediaCard, MediaContainer, ProfileContainer, ProfileInfos, ProfilePicture } from "./styles";


export function Profile() {
    const theme = useTheme() 

    return (
        <ProfileContainer>
            <ProfilePicture 
                src='https://avatars.githubusercontent.com/u/50505424?s=400&u=e2fbce787a503dcf5a1d87fb6f14e65589a24421&v=4' 
            />

            <ProfileInfos>
                <header>
                    <h1>Rafael Peres</h1>

                    <a href="">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </header>

                <main>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed earum dignissimos amet ab pariatur officiis in reprehenderit.</p>
                </main>

                <MediaContainer>
                    <MediaCard>
                        <FontAwesomeIcon icon={faGithub} color={theme["base-label"]} />
                        <span>F4ELLLLL</span>
                    </MediaCard>
                    <MediaCard>
                        <FontAwesomeIcon icon={faBuilding} color={theme["base-label"]} />
                        <span>Puc Minas</span>
                    </MediaCard>
                    <MediaCard>
                        <FontAwesomeIcon icon={faUserGroup} color={theme["base-label"]} />
                        <span>5 Followers</span>
                    </MediaCard>
                </MediaContainer>
            </ProfileInfos>
        </ProfileContainer>
    )
}

