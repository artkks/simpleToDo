import React from "react";     
import PropTypes from 'prop-types';  
import '../styles/indexStyle.css';

class Check extends React.Component {

    render(){
        return(
            <div className="cBox" style={{  flexDirection:'row',display:'flex',justifyContent:' space-between'}}>
               You must select ... 
             <b>Done <input onClick={this.props.done} className="checkBox" type="checkbox" id="1"  /></b>
             <b> toDo <input onClick={this.props.todo} className="checkBox" type="checkbox" id="2"/> </b>.
            </div>
        );
    }
}
Check.propTypes = {  
done:PropTypes.func,
todo:PropTypes.func,
}
    export default Check;