import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "./components/SearchForm";
import { Post, PostList } from "./styles";

export function Blog() {
    return (
        <div>
            <Header />
            <Profile />

            <SearchForm />

            <PostList>
                <Post>
                    <header>
                        <h2>Javascript data types and data structures</h2>

                        <span>Há 1 dia</span>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam modi velit nam? Est ipsum ea maxime. Magni voluptate, accusamus molestiae minus amet asperiores pariatur similique rerum eveniet, doloribus vel!</p>
                </Post>

                <Post>
                    <header>
                        <h2>Javascript data types and data structures</h2>

                        <span>Há 1 dia</span>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam modi velit nam? Est ipsum ea maxime. Magni voluptate, accusamus molestiae minus amet asperiores pariatur similique rerum eveniet, doloribus vel!</p>
                </Post>

                <Post>
                    <header>
                        <h2>Javascript data types and data structures</h2>

                        <span>Há 1 dia</span>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam modi velit nam? Est ipsum ea maxime. Magni voluptate, accusamus molestiae minus amet asperiores pariatur similique rerum eveniet, doloribus vel!</p>
                </Post>

                <Post>
                    <header>
                        <h2>Javascript data types and data structures</h2>

                        <span>Há 1 dia</span>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam modi velit nam? Est ipsum ea maxime. Magni voluptate, accusamus molestiae minus amet asperiores pariatur similique rerum eveniet, doloribus vel!</p>
                </Post>

                <Post>
                    <header>
                        <h2>Javascript data types and data structures</h2>

                        <span>Há 1 dia</span>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam modi velit nam? Est ipsum ea maxime. Magni voluptate, accusamus molestiae minus amet asperiores pariatur similique rerum eveniet, doloribus vel!</p>
                </Post>
                
                <Post>
                    <header>
                        <h2>Javascript data types and data structures</h2>

                        <span>Há 1 dia</span>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam modi velit nam? Est ipsum ea maxime. Magni voluptate, accusamus molestiae minus amet asperiores pariatur similique rerum eveniet, doloribus vel!</p>
                </Post>
                
            </PostList>
        </div>
    )
}