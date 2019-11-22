import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Header from './components/header/index';
import Headline from './components/headline/index';
import Button from './components/button/index';
import ListItem from './components/listItem/index';
import {fetchPost} from './redux/actions'

const App=({posts,fetchPost})=>{
  return (
    <div >
    <Header/>
    <Headline title="Title" subtitle="Aca estan los Posteos"/>
    <Button text="Buscar" handleClick={fetchPost}/>
    {
      posts.map(post=><ListItem title={post.title} description={post.body}/>)
    }
    </div>
  );
}
const mapStateToProps=(state)=>({
posts:state.posts
})

const mapDispatchToProps=(dispatch)=>({
fetchPost:()=>dispatch(fetchPost())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
