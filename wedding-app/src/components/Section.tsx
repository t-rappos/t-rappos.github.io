import React from 'react';
import '../App.css';

interface SectionProps  {id: string }

export default function Section(props: React.PropsWithChildren<SectionProps>) {

  return (
    <div className="card" id={props.id} >
       {
         <>{props.children}</>
       }
        
        <div id={props.id + "_end"}></div>
    </div>
  );
}