import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './App.css';

class SecondHeader extends Component {
  render() {
    return (
        <div>
            <Image src="Images/Main.jpg" className="photoHead" fluid />
            
        </div>
        );
      }
    }
    
export default SecondHeader;
    