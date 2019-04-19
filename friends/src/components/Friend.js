import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const FriendLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const Friend = (props) => {
    return(
        <div>
        <FriendLayout>            
            <Link to = {`/${props.friend.id}`}>
            <h1>{props.friend.name}</h1>
            </Link>
        </FriendLayout>
        </div>
    )
}

export default Friend;