import React,{ Component }from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
class App extends Component 
{
	constructor()
	{
		super()
		this.state ={
			robots: [],
			searchFields:''
		}	
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(users => this.setState({robots: users}));
		
		//console.log("component did mount");
	} 	
	onSearchChange = (event) => {
		
		this.setState({searchFields : event.target.value})
		
	
	}
	render()
		{
			const {searchFields,robots} = this.state;
			const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchFields.toLowerCase());
			})
			
				return !robots.length ?
				 <h1>loading..</h1> :
			
			(
			<div className = 'tc'>
			<h1>Robotic Friends</h1>
			<SearchBox searchchange = {this.onSearchChange}/>
			<Scroll> 
			<ErrorBoundary>
			<CardList robots = { filteredRobots } />
			</ErrorBoundary>
			</Scroll>
			</div>
			);
			
		
		
		
	}

}

export default App;