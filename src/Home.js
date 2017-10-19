import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Page from './Page'
import Page2 from './Page2'

class Home extends Component {
  
	constructor(){
		super()
	}
  
	render() {
		return (
			<HashRouter>
				<div>
						<Route exact path="/" component={Page} />
            <Route path="/page2" component={Page2} />
				</div>
			</HashRouter>   
		)
	}
}
  
export default Home