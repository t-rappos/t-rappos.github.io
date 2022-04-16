import React, { ReactNode, useRef } from 'react';


interface props {
    buttonLabel: string[],
    element: ReactNode[],
}

interface ButtonDef{
    id: string,
    text: string
}

const ScrollTo = (id: string) => {
    const section = document.querySelector( '#'+id );
    if(section)
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}


interface Props2{
    buttons:  ButtonDef[]
}

const ScrollButtons = (props: Props2) => {
    
    return (
        <> 
            <div style={{position: "fixed", top: "0", left: "0", marginBottom: "10px", width: "100%"}}>
           
                {
                    props.buttons.map( x => {
                        return (<button
                        style={{padding: "10px", marginLeft: "10px"}}
                         key={x.id} 
                         onClick={()=>{ScrollTo(x.id);}}>
                             {x.text}
                        </button>)
                    })
                }

            </div>
        </>
     )
}

const ScrollContainer = (props: props) => {
    const myRef1 = useRef<HTMLDivElement>(null)
    const myRef2 = useRef<HTMLDivElement>(null)
    const myRef3 = useRef<HTMLDivElement>(null)
    const myRef4 = useRef<HTMLDivElement>(null)
    const myRef5 = useRef<HTMLDivElement>(null)
    const myRef6 = useRef<HTMLDivElement>(null)
    const myRef7 = useRef<HTMLDivElement>(null)
    const myRef8 = useRef<HTMLDivElement>(null)
    const myRef9 = useRef<HTMLDivElement>(null)
    const myRef10 = useRef<HTMLDivElement>(null)

    const refs = [myRef1, myRef2, myRef3,
        myRef4,
        myRef5,
        myRef6,
        myRef7,
        myRef8,
        myRef9,
        myRef10];

    const executeScroll = (index: number) => {if(refs[index]?.current != null) refs[index]?.current?.scrollIntoView({behavior: "smooth"});    }
  

    return (
        <> {/*
            <div style={{position: "fixed", top: "0", left: "0"}}>
                {props.buttonLabel.forEach((x, index) => {
                    <button onClick={executeScroll.b}>{props.buttonLabel[index]}</button> 
                })}
                
                <button onClick={executeScroll2}>{props.buttonLabel[1]}</button> 
                <button onClick={executeScroll3}>{props.buttonLabel[2]}</button> 
                <button onClick={executeScroll4}>{props.buttonLabel[3]}</button> 
            </div>
           <div ref={myRef1}>{props.element[0]}</div> 
           <div ref={myRef2}>{props.element[1]}</div> 
           <div ref={myRef3}>{props.element[2]}</div> 
           <div ref={myRef4}>{props.element[3]}</div> 
            */
            }
        </>
     )
}


function Section(props: {text:string, id: string, isLeft: boolean}) {
  return (
    <div id={props.id} style={{marginBottom: "100px"}}>
        <div style={{paddingTop: "30px", textAlign: props.isLeft?"left":"right"}}>
        {props.text}
        </div>
    </div>
  );
}

export {
    Section,
    ScrollContainer,
    ScrollButtons,
};

