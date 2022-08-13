import styled from "styled-components";

export const Item = styled.div`
 display: flex;
 gap: 16px;
 align-items: center;
`;

export const Info = styled.p`
display: inline-block; 
margin-right: ${p => p.theme.space[3]}px;
min-width: 300px;
`;

export const Button = styled.button`
padding-top:  ${p => p.theme.space[1]}px;
padding-bottom: ${p => p.theme.space[1]}px;
padding-left:  ${p => p.theme.space[3]}px;
padding-right:  ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.radii.md};

:hover, :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.white};
    };
`;