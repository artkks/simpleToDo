import React from "react";     
import PropTypes from 'prop-types';  

class Back extends React.Component {

    render(){
        return(
            <div style={{zIndex:1,fontSize:100,opacity:0.4,position:'absolute',display:'flex',left:320,top:10}}>
               <b>Simple toDO list</b> 
            </div>
        );
    }
}
Back.propTypes = { 
    style: PropTypes.object
}
    export default Back;