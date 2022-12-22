import styled from "styled-components"

export default function NavBar({children}){
    return(
        <NavStyle>
            {children}
        </NavStyle>
    )
}

const NavStyle = styled.div`
    display:flex;
    color: #9C9C9C;
    justify-content:flex-end;
    margin: 70px 171px;
    a{
        margin-left:10px;
    }
`