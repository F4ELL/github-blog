import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <header>
                <h3>Publicações</h3>

                <span>6 publicações</span>
            </header>

            <form action="">
                <input 
                    type="text" 
                    placeholder="Buscar conteúdo"
                />
            </form>
        </SearchFormContainer>
    )
}