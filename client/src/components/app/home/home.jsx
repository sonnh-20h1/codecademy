import React, { Component } from 'react';
import { Row, Col, Layout, Icon, Button } from 'antd';
import API from "../../../config/config";
class HomeComponent extends Component {
    state= {
      data:""
    }
    async componentDidMount(){
      const posts = await API.getPosts();
      if(posts){
        this.setState({
          data: posts.data
        })
      }
      console.log(posts);
    }
    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default HomeComponent;