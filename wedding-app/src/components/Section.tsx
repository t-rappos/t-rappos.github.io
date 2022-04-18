import React, { ReactNode, useEffect, useRef, useState } from 'react';


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
    //console.log(section);
    if(section)
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
}


interface Props2{
    buttons:  ButtonDef[]
}

const ScrollButtons = (props: Props2) => {
    
    const [active, setActive] = useState("index");

    useEffect(() => {
        const onScroll = (_e: any) => {
         //console.log("Scrolling");
         const height = window.innerHeight;
         let id = "";
         props.buttons.forEach(x => {
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
            <div style={{position: "fixed", top: "1vh", left: "0", width: "100%"}}>
           
                {
                    props.buttons.map( (x,i) => {
                        return (<button
                        style={{padding: "min(2vw, 20px)", marginLeft: i==0?"":"min(2vw, 30px)", fontSize: "min(3vw, 30px)", fontWeight: x.id == active ? "bold" : "normal"}}
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

const ScrollContainer = (_props: props) => {
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

interface MyProps  {text:string, id: string, isLeft: boolean, textBelow: boolean|null }

function Section(props: React.PropsWithChildren<MyProps>) {

    const textDiv = ( <div style={{paddingTop: "30px", textAlign: props.isLeft?"left":"right"}}>
    {props.text}
    </div>);

  return (
    <div id={props.id} style={{marginBottom: "100px"}}>
       {
           props.textBelow ? (
                <>
                    <>{props.children}</>
                    <>{textDiv}</>
                </>
           ) : (
                <>
                    <>{textDiv}</>
                    <>{props.children}</>
                </>
           )
       }
        
        <div id={props.id + "_end"}></div>
    </div>
  );
}

export {
    Section,
    ScrollContainer,
    ScrollButtons,
};

