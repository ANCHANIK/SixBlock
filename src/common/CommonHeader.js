import { HeaderStyle } from "../styles/HeaderStyle";

const CommonHeader = () => {

    const Search = (e) => {
        
    }


    return (
        <HeaderStyle>
            <div>
                <span></span>
                <h1>SIX BLOCK</h1>
                <div className="search" onClick={Search}></div>
            </div>
        </HeaderStyle>
    )
}

export default CommonHeader;
