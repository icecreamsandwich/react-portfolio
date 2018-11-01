import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
         <table className="wsite-multicol-table">
        <tbody className="wsite-multicol-tbody">
          <tr className="wsite-multicol-tr">
            <td className="wsite-multicol-col" style={{width: '50%', padding: '0 20px'}}>
              <div><div className="wsite-image wsite-image-border-none " style={{paddingTop: 10, paddingBottom: 10, marginLeft: 0, marginRight: 0, textAlign: 'center'}}>
                    <img src="https://spreadpeaceworld.weebly.com/uploads/4/2/3/3/42330715/20180120-122447.jpg" alt="Picture" style={{width: 415, maxWidth: '100%'}} />
                  <div style={{display: 'block', fontSize: '90%'}} />
                </div></div>
            </td>				<td className="wsite-multicol-col" style={{width: '50%', padding: '0 20px'}}>
              <h2 className="wsite-content-title" style={{textAlign: 'left'}}><font size={6}>About Me</font></h2>
              <div className="paragraph" style={{textAlign: 'left'}}><font size={4}>​</font>I am a php developer with more than 4 years of experience . My area of expertise include web development using frameworks such as codeIgniter, Zend,wordpress,Joomla etc .. I am also an expert in front development using technologies such as Ajax , Jquery and Extjs ,NodeJs technologies . I used Magneto and Prestashop for setting up online merchant stores . Below are some of works i have done in past&nbsp;.</div>
            </td>			</tr>
        </tbody>
      </table>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;
