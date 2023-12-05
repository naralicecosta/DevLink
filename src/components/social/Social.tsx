import {ReactNode} from 'react'

interface SocialProps{
    url: string;
    children: ReactNode
}

export function Social({ url, children }: SocialProps){
    return(
        <a
        href={url}
        rel="noopener noreferrer" /**esta dizendo que é uma url externa */
        target="_blank"> 
            {children}
        </a>
    )
}

