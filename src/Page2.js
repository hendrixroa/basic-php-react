import React, { Component } from 'react'

class Page2 extends Component {
	constructor(){
      super()
      this.loadInfo = this.loadInfo.bind(this)
	}
  
  loadInfo(){
    $.ajax({
			url : 'api.php',
			type: 'get',
			data: 'data=1',
			success : data => {	 
				alert(data)
			},
			error: err => {
				alert('Error server');
			}
		});
  }

	render() {
		return (
			<div>
				<h1>Hello I'am Page 2</h1>
        <button onClick={this.loadInfo}>Load Info in alert</button>
			</div>   
		)
	}
}
  
export default Page2