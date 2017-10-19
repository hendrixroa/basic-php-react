import React, { Component } from 'react'

class Page extends Component {
	constructor(){
      super()
      this.state = {
        data: null
      }
      this.sendInfo = this.sendInfo.bind(this)
	}
  
  sendInfo(){
    $.ajax({
			url : 'api.php',
			type: 'post',
			data: 'data=1&data2=2',
			success : data => {	 
        this.setState({
          data: data
        })
			},
			error: err => {
				alert('Error server');
			}
		});
  }

	render() {
		return (
			<div>
				<h1>Hello I'am Page</h1>
        <button onClick={this.sendInfo}>Send Post to server</button>
        <p> { this.state.data ? this.state.data : 'Press button to load data' } </p>
        <a href="#/page2">Link to PAGE 2</a>
			</div>   
		)
	}
}
  
export default Page