import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
           {/*Left Side*/}
           <div className="v-left">
              <div className="image-container">
                   <img src="./value.png" alt="" />
               </div> 
           </div>

           {/*Right Side*/}
           <div className="flexColStart v-right">
               <span className="orangeText"> Our Value </span >
               <span className="primaryText">Value We Give You </span>
               <span className="secoundaryText">
                   Always ready to provide you the best service.
                   <br/>
                   We believe in Good Service.
               </span>

               <Accordion
               className='accordion'
               allowMultipleExpanded = {false}
               preExpanded={[0]}
               >
                   {
                       data.map((item,i)=>{
                           return (
                               <AccordionItem className="accordionItem" key={i} uuid={i}>
                                   <AccordionItemHeading>
                                       <AccordionItemButton>
                                           <div className="flexCenter icon">
                                               {item.icon}
                                           </div>
                                           <span className="primaryText">
                                               {item.heading}
                                           </span>
                                           <div className="flexCenter icon">
                                               <MdOutlineArrowDropDown size={20}/>
                                           </div>
                                       </AccordionItemButton>
                                   </AccordionItemHeading>

                                   <AccordionItemPanel>
                                       <p className="secoundaryText">{item.detail}</p>
                                   </AccordionItemPanel>
                               </AccordionItem>
                           )
                       })
                   }

               </Accordion>
           </div>
       </div>
    </section>
  )
}

export default Value
