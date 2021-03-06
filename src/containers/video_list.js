import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 
import { addToPlaylist } from '../actions/index';

class VideoList extends Component{

  showVideoList(video){

    const id =video.id.videoId;
    const etag =video.etag
    const thumb =video.snippet.thumbnails.medium.url;
    var {channelTitle, title} = video.snippet	;
         
    title =title.length > 90 ? title.substr(0,90).concat('. . .') : title

    return (
      <li className="searched-list-item"
              key = {etag} 
              onClick ={ this.onVideoClick.bind( this,{ id, etag, thumb } ) }>
        <div className="row">
          <div className="col-sm-6">
             <i className="fa fa-plus-square" ></i>
            <img className='thumbnails'  src={thumb} /> 
          </div>  
          <div className="col-sm-6 description">
              <div className= 'video-title' > {title} </div>
              <div className= 'channel-title'>  {channelTitle}</div>
          </div>
        </div>
      </li>
          ) 
  }

  onVideoClick(videoData){
   this.props.addToPlaylist(videoData)
  }

  render(){
    return(
        <ul className='searched-list'>{
              this.props.videos.map( (video) =>{
                return  this.showVideoList( video )  })
        }</ul>
    )
  }
}

function mapStateToProps(state){
    return { videos: state.videoList  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ addToPlaylist },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoList)