import PropTypes from 'prop-types';  
import React from "react";  
import '../styles/cardStyle.css';
import Icon from 'react-geomicons'; 
 
var tarih=new Date();
 class Card extends React.Component {
   constructor(){
    super();       
      this.state={ 
        allow:false,
        trash:false, 
        description : "Birşeyler yaz..", 
        _opacity:1,
        trash_Color:"#f0f8ff",
        check_Color:"#f0f8ff",
        _color:"#ffffffc4", 
      } 
      this.check=this.check.bind(this);
      this.trash=this.trash.bind(this);
      this.mouseOver=this.mouseOver.bind(this);
      this.mouseLeave=this.mouseLeave.bind(this);  

     this.time=  {yil:0,
                   ay:0,
                    gun:0,
                     saat:0,
                      dakika:0,
                        saniye:0}  ;

      }  
      componentWillMount(){
        if(this.props.item.done===true && this.state.allow==false ){
        this.time.yil=this.props.time.yil,
        this.time.ay=this.props.time.ay,
        this.time.gun=this.props.time.gun,
        this.time.saat=this.props.time.saat,
        this.time.dakika=this.props.time.dakika,
        this.time.aniye=this.props.time.saniye
        }
      }
  
  check(){  
      this.props.item.done=!this.props.item.done;    
      this.setState({allow:true});
     this.time.yil=tarih.getUTCFullYear();
     this.time.ay=tarih.getHours();
     this.time.gun=tarih.getDate();
     this.time.saat=tarih.getHours();
     this.time.dakika=tarih.getMinutes();
     this.time.saniye=tarih.getSeconds();
 
    localStorage.setItem(this.props.item.description ,
      JSON.stringify({id:this.props.item.description,
                      description:this.props.item.description,
                      done:this.props.item.done,
                       time:{yil:this.time.yil,
                        ay:this.time.ay,
                         gun:this.time.gun,
                          saat:this.time.saat,
                           dakika:this.time.dakika,
                            saniye:this.time.saniye} }));
   
  }
  trash(){   
     this.props.items.splice(this.props.index,1);
     localStorage.clear(this.props.item.description );
      this.props.close();    
   }  
  mouseOver(){
    this.setState({_opacity:0.7 , trash_Color:"#db112c",check_Color:"#3caa4e"});
  }
  mouseLeave(){
    this.setState({_opacity:1 ,trash_Color:"#f0f8ff", check_Color:"#f0f8ff"}); 
  }
  timer(){ 
    return(
      <div className='date' >
          <div color={"white"}><b>Done</b></div> 
          <div >
          {this.time.saat}.{this.time.dakika}.{this.time.saniye}
          </div>
          <div  >
          {this.time.gun}.{this.time.ay}.{this.time.yil}
          </div>
      </div>
    );
  }

  render() {
    return (
       <div  className="main" 
            ref={this.props.ref} 
            onMouseOver={this.mouseOver}
            onMouseLeave={this.mouseLeave}
            style={{ opacity:this.state._opacity,
                     backgroundColor:this.props.item.done?  "#418647c4" :"#ffffffc4" }}>    
                { this.props.item.done &&( 
                      <div>
                        {this.timer()} 
                      </div>
                 )}
                  { !this.props.item.done &&(
               <div  onClick={this.check}
                className="check">  
                 <Icon name="check" color={this.state.check_Color}/>            
               </div> 
               )}
                <h>{this.props.item.description}</h>    
               <div onClick={this.trash}
               className="trashh">  
                 <Icon name="trash"  color={this.state.trash_Color} />            
              
               </div>
      </div>
    );
  }
}   
Card.propTypes = {
     ref: PropTypes.string,
     done: PropTypes.bool, 
     description : PropTypes.string, 
     items:PropTypes.array,
     close:PropTypes.func,
     item:PropTypes.object,
     time:PropTypes.object,
 }

export default Card;