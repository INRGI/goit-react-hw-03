import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PhoneTitle = styled.h1`
    font-size: 4.5rem;
    font-weight: 300;
    color: hsl(230, 100%, 95%);
    animation: lights 5s 750ms linear infinite;
    margin-bottom: 30px;
    @keyframes lights {
    0% {
        color: hsl(230, 40%, 80%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
    
    30% { 
        color: hsl(230, 80%, 90%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }
    
    40% { 
        color: hsl(230, 100%, 95%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }
    
    70% {
        color: hsl(230, 80%, 90%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }
    
    100% {
        color: hsl(230, 40%, 80%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
    
    }
`;

export const ContactTitle = styled.h2`
    font-size: 3.5rem;
    font-weight: 300;
    color: hsl(230, 100%, 95%);
    animation: lights 5s 750ms linear infinite;
    margin-bottom: 15px;
    @keyframes lights {
    0% {
        color: hsl(230, 40%, 80%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
    
    30% { 
        color: hsl(230, 80%, 90%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }
    
    40% { 
        color: hsl(230, 100%, 95%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }
    
    70% {
        color: hsl(230, 80%, 90%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }
    
    100% {
        color: hsl(230, 40%, 80%);
        text-shadow:
        0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
    
    }
`;

export const EmptyTitle = styled.h2`
    color: hsl(230, 80%, 90%);
    font-size: 2rem;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    width:346px;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    @keyframes typing {
    from {
        width: 0
    }
    }
        
    @keyframes blink {
    50% {
        border-color: transparent
    }
    }
`;