import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface NavLink{
    id: string,
    text: string
}

const ScrollTo = (id: string, offset: number) => {
    console.log(id, offset);
    const section = document.querySelector( '#'+id );
    

    if(section){
        const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({top: y, behavior: 'smooth'});
        //section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
        
}

interface NavBarProps{
    links:  NavLink[]
}

export default (props: NavBarProps) => {
    const [height, setHeight] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState("index");

    useEffect(() => {
        if(ref?.current != null){
            console.log("ref",ref);
            setHeight(ref.current.clientHeight)
        }
    })
    

    useEffect(() => {
        const onScroll = (_e: any) => {
         //console.log("Scrolling");
         const height = window.innerHeight;
         let id = "";
         props.links.forEach(x => {
            const section = document.querySelector( '#'+x.id+"_end" );
            
            if(section){
                const offset = section.getBoundingClientRect().top;
                if(id == ""){
                    if(offset > 200){
                        id = x.id;
                    }
                }
            }
         });
         setActive(id);
         
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [active]);

    return (
        <> 
            <div ref={ref} style={{position: "fixed", top: "1vh", left: "0", width: "100%"}}>
           
                {
                    props.links.map( (x,i) => {
                        return (<button
                        style={{padding: "min(2vw, 20px)", marginLeft: i==0?"":"min(2vw, 30px)", fontSize: "min(3vw, 30px)", fontWeight: x.id == active ? "bold" : "normal"}}
                         key={x.id} 
                         onClick={()=>{ScrollTo(x.id, height);}}>
                             {x.text}
                        </button>)
                    })
                }

            </div>
        </>
     )
}

