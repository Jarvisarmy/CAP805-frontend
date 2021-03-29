import React from 'react'
import {useContext} from "react";
import ModalContext from "../context/ModalContext";

const PopupModal = () => {
    const {popupModaMessage,hidePopupModal} = useContext(ModalContext);
 
    return (
        <div className={(popupModaMessage.visible=== true ? "" : "hide")} >
        <div className="popUp-Modal" >            
         <div className="popUp-Modal-container">                         
              <div> <p>                            
                {popupModaMessage.msg}
                  </p>                              
                    <button className="button-modal" name="close" onClick={() => {
                      hidePopupModal()
                      }}>Close</button>
               </div>
          </div>                               
        </div>
    </div>
    )
}

export default PopupModal
