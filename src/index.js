import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Card  from  "./component/card";   
import Back from './component/background';
import Check from './component/checkSide'; 
import './styles/indexStyle.css' ;

class App extends Component {
    constructor(){
        super();
    this.state = {
        item: " Birşeyler yazınız..", 
        trash : false , 
        _done :false,
        _todo :false,
    } 
     this.checkTodo=this.checkTodo.bind(this);
     this.checkDone=this.checkDone.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);    
    this.items=[{id:"1" ,description:"example" ,done:false }];

}
    componentWillMount(){    // sayfa yenilenirse tekrar arrayimize nesneleri alıyor.
       var keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
       this.items.push(JSON.parse(localStorage.getItem(keys[i])));
    } }
     
    handleChange(event) { 
    this.setState({item: event.target.value}); 
     }    
    countItem1 =(i)=>{ 
       return i.length;
    }   
    handleOutsideClick(e) {this.setState({item: this.state.item});}  
   
     addItem=(e)=>{  

    if(this.state.item!==""){

        localStorage.setItem(this.state.item ,JSON.stringify({id:this.state.item,
                                                              description:this.state.item,
                                                              done:false,
                                                              time: {yıl:0,ay:0,gün:0,saat:0,dakika:0,saniye:0}}));
        this.items.push(JSON.parse(localStorage.getItem(this.state.item)));    
        this.setState({item:""})  

        }else{
            alert("Birşeyler yazman gerekiyor");
        }  
        e.preventDefault();
    }
    checkDone(e){
      this.setState({_done:!this.state._done});
      
    }
    checkTodo(e){
        this.setState({_todo:!this.state._todo}); 
      }
    render() { 
          return (   
            <div > 
                <div className='inputBox'> 
                    <form className='form' onSubmit={this.addItem}  >  
                      
                       <label  > 
                                <textarea  className="textArea" value={this.state.item} 
                                       onChange={this.handleChange} />  
                       </label>  
                 <input className='inputButton'  type="submit" value="+" />
                        </form>
                 </div>      
                        <Check done={this.checkDone} todo={this.checkTodo}/>
                            {this.items.map((item,index )=> (  
                           <div>
                           { this.state._done && item.done &&(
                              <Card
                              index={index}
                              items={ this.items } 
                              ref={ item.id }  
                              done={ false } 
                              item={ item }  
                              time={item.time}
                              close={ this.handleOutsideClick } 
                              /> )}
                              { this.state._todo && !item.done &&(
                              <Card
                              index={index}
                              items={ this.items } 
                              ref={ item.id }  
                              done={ false } 
                              item={ item }  
                              time={item.time}
                              close={ this.handleOutsideClick } 
                              /> )}
                            </div>  
                            ))} 
             <Back  />
            </div>  
        );
    }
} 

  


ReactDOM.render(<App />, document.getElementById('root'));
