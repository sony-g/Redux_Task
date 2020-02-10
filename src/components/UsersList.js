import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { Button,Modal,Form } from "react-bootstrap";
import JwModal from 'jw-react-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/useractions';


 
class UsersList extends Component {


  constructor(props){
    super(props);
    this.state={
          showInfo:false,disabled: false,selectedUserInfo:{
              id:"",name:"",username:"",email:"",
              address:{street:"",suite:"", city:"",zipcode:""}, 
              phone:"", website:"",
              company:{ name:"", catchPhrase:"", bs:""}
            }
    }
  }

  componentDidMount() {
     this.props.userActions.fetchUserList(); 
  } 
  
  popUpFun=(info)=>{
       let newObj = Object.assign({},this.state.selectedUserInfo,info,{address:Object.assign({},info.address)},{company:Object.assign({},info.company)}) 
        this.setState({selectedUserInfo:newObj  ,showInfo:true, disabled: !this.state.disabled}) 
        //this.setState({selectedUserInfo:Object.assign(this.state.selectedUserInfo,info),showInfo:true})
        console.log(this.state.selectedUserInfo)
  }

  updateUser = () =>{ 
   // console.log(this.state.selectedUserInfo)
    this.setState({showInfo:false})
   // console.log(this.state.selectedUserInfo)
    this.props.userActions.updateUser(this.state.selectedUserInfo)

  }

  render() {

    return (

      <div>
        {
          this.props.usersList.map((data)=>{
            return (
              <div className="card mb-3"  key={data.id} onDoubleClick={()=>this.popUpFun(data)}>
    
                <div className="card-header">
                  <h5>{data.name}</h5>
    
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.email}</li>
                    <li className="list-group-item">{data.address.city}</li>
                    <li className="list-group-item">{data.phone}</li>
                    <li className="list-group-item">{data.website}</li>
                    <li className="list-group-item">{data.company.name}</li>
                  </ul>
                </div>
              </div>  
            )

          })}
        <Modal
            show={this.state.showInfo}
            onHide={()=>this.setState({showInfo:false})}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                    User Info
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col xs={9} md={6}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                              value={this.state.selectedUserInfo.name}
                              onChange={(e)=>this.setState({selectedUserInfo:Object.assign(this.state.selectedUserInfo,{name:e.target.value})})}
                              type="text" 
                              placeholder="Enter Name" 
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                              value={this.state.selectedUserInfo.username}
                              onChange={(e)=>this.setState({selectedUserInfo:Object.assign(this.state.selectedUserInfo,{username:e.target.value})})}
                              type="text" 
                              placeholder="Enter Username" 
                              disabled = {(this.state.disabled)? "disabled" : ""}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                              value={this.state.selectedUserInfo.email}
                              onChange={(e)=>this.setState({selectedUserInfo:Object.assign(this.state.selectedUserInfo,{email:e.target.value})})}
                              type="text" 
                              placeholder="Enter Email" 
                        />
                      </Form.Group>
                      
                    </Form>
                  </Col>
                  <Col xs={9} md={6}>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                              type="text" 
                              value={this.state.selectedUserInfo.phone}
                              onChange={(e)=>this.setState({selectedUserInfo:Object.assign(this.state.selectedUserInfo,{phone:e.target.value})})}
                              placeholder="Enter Phone" 
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Website</Form.Label>
                        <Form.Control 
                              type="text" 
                              value={this.state.selectedUserInfo.website}
                              onChange={(e)=>this.setState({selectedUserInfo:Object.assign(this.state.selectedUserInfo,{website:e.target.value})})}
                              placeholder="Enter Website" 
                        />
                      </Form.Group>
                      
                      
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col xs={9} md={6}>
                    <h5>Address :</h5>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Street</Form.Label>
                          <Form.Control 
                                type="text" 
                                value={this.state.selectedUserInfo.address.street}
                                onChange={(e)=>this.setState({address:Object.assign(this.state.selectedUserInfo.address,{street:e.target.value})},()=>{console.log(this.state.selectedUserInfo)})}
                                placeholder="Enter Street"
                                disabled = {(this.state.disabled)? "disabled" : ""}
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Suite</Form.Label>
                            <Form.Control 
                                  type="text" 
                                  value={this.state.selectedUserInfo.address.suite}
                                  onChange={(e)=>this.setState({address:Object.assign(this.state.selectedUserInfo.address,{suite:e.target.value})})}
                                  placeholder="Enter Suite" 
                                  disabled = {(this.state.disabled)? "disabled" : ""}
                            />
                          </Form.Group>
                      </Form>
                  </Col>
                  <Col  xs={9} md={6}>
                    <h5 style={{color:"white"}}>pp</h5>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                              type="text" 
                              value={this.state.selectedUserInfo.address.city}
                              onChange={(e)=>this.setState({address:Object.assign(this.state.selectedUserInfo.address,{city:e.target.value})})}
                              placeholder="Enter City" 
                              
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control 
                              type="text" 
                              value={this.state.selectedUserInfo.address.zipcode}
                              onChange={(e)=>this.setState({address:Object.assign(this.state.selectedUserInfo.address,{zipcode:e.target.value})})}
                              placeholder="Enter Zipcode" 
                              disabled = {(this.state.disabled)? "disabled" : ""}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col xs={9} md={6}>
                    <h5>Company</h5>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control 
                                type="text" 
                                value={this.state.selectedUserInfo.company.name}
                                onChange={(e)=>this.setState({company:Object.assign(this.state.selectedUserInfo.company,{name:e.target.value})})}
                                placeholder="Enter Name" 
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Catch Phrase</Form.Label>
                            <Form.Control 
                                  type="text" 
                                  value={this.state.selectedUserInfo.company.catchPhrase}
                                  onChange={(e)=>this.setState({company:Object.assign(this.state.selectedUserInfo.company,{catchPhrase:e.target.value})})}
                                  placeholder="Enter Catch Phrase" 
                                  disabled = {(this.state.disabled)? "disabled" : ""}
                            />
                          </Form.Group>
                      </Form>
                  </Col>
                  <Col xs={9} md={6}>
                    <h5 style={{color:"white"}}>pp</h5>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>BS</Form.Label>
                          <Form.Control 
                                type="text" 
                                value={this.state.selectedUserInfo.company.bs}
                                onChange={(e)=>this.setState({company:Object.assign(this.state.selectedUserInfo.company,{bs:e.target.value})})}
                                placeholder="Enter BS" 
                          />
                        </Form.Group>
                      </Form>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>this.setState({showInfo:false})}>Close</Button>
              <Button onClick={this.updateUser} variant="success">Save</Button>
            </Modal.Footer>
          </Modal>
      </div>
      )}
}

function mapStateToProps(state){
  return {
    usersList:state
  }
}

function mapDispatchToProps(dispatch){
  return {
    userActions: bindActionCreators(userActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (UsersList);


