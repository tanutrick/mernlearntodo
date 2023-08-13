import React, {Component} from 'react';
export default class CreateTodo extends Component{

    constructor(props){
        super(props);
       

        this.state={
            todo_description:'',
            todo_responsibe:'',          
            todo_priority:'',
            todo_completed:false
        }
        this.onChageTodoDescription=this.onChageTodoDescription.bind(this);
        this.onChangeTodoResponsible=this.onChangeTodoResponsible.bind(this);
        this.onChageTodoPriority=this.onChageTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.state);
    }
    onChageTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        });
        console.log(this.state.todo_description);
    }
    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }
    onChageTodoPriority(e){
        this.setState({
            todo_priority:e.target.value
        });
    
    }

    onSubmit(e){
            console.log('tttt submitted')
            e.preventDefault();
            console.log('sss');

        //console.log(this.state.todo_description);
        console.log('Form Submitted' );
        console.log(`todo Description: ${this.state.todo_description}` );
        console.log(`todo priority: ${this.state.todo_priority}`);
        console.log(`todo responsibe: ${this.state.todo_responsible}`);
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })

    }
    

    render() {
        return(

            <div style={{marginTop:10}}>
                <h3>Create New Tool</h3>
                <form onSubmit={this.onSubmit}>

                    
                <div className='form-group'>
                        <label>Resposible:</label>
                        <input type='text' className='form-control' id='responsible' value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible}/>
                        
                    </div>
                    <div className ='form-group'>
                        <label>Description:</label>
                        <input type='text' className='form-control' id='description' value={this.state.todo_description} onChange={this.onChageTodoDescription}/>
                        
                       
                    </div>
                    
                    
                    

                    <div className='form-group'>
                        <div className='form-check form-check-inline'>
                        
                        <input type='radio' name='priorityOption' id='priorityLow' value='Low' checked={this.state.todo_priority==='Low'}  onChange={this.onChageTodoPriority}/>
                        <label className="form-check-label">Low</label>
                        </div>
                        <div className='form-check form-check-inline'>
                        
                        <input type='radio' name='priorityOption' id='priorityMedium' value='Medium' checked={this.state.todo_priority==='Medium'}  onChange={this.onChageTodoPriority}/>
                        <label className="form-check-label">Medium</label>
                        </div>
                        <div className='form-check form-check-inline'>
                        
                        <input type='radio' name='priorityOption' id='priorityHigh' value='High' checked={this.state.todo_priority==='High'}  onChange={this.onChageTodoPriority}/>
                        <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>

            
           </div>
        )
          
    }
}

