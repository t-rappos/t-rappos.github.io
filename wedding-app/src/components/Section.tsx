import React from 'react';


interface SectionProps  {text:string, id: string, isLeft: boolean, textBelow: boolean|null }

export default function Section(props: React.PropsWithChildren<SectionProps>) {

  const textDiv = ( 
    <div style={{paddingTop: "30px", textAlign: props.isLeft?"left":"right"}}>
      {props.text}
    </div>
  );

  return (
    <div id={props.id} style={{marginBottom: "100px", padding: "5px"}}>
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