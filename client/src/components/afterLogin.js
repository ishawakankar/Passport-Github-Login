import React from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: [],
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/profile')
            .then(data => this.setState({
                profile: data.data.profile,
            }))
    }
    
    render() {
        return (
            (this.state.profile==undefined)?<div>{"Go to url - localhost:5000/auth"}</div>:
            <Grid style={{ background: '#d1d5da', border: '#f6f8fa', margin: '30px' }}>
                <Card style={{ width: '50%', marginLeft: '30%', padding: '10px' }}>
                    <Row start="xs" >
                        <Col xs={3} >
                            <Avatar src={this.state.profile.avatar_url} alt="Profile Photo" 
                                style={{margin: '5px'}}/>
                        </Col>
                        <Col xs={9} >
                            <h3>Welcome {this.state.profile.name}</h3>
                        </Col>
                    </Row>
                </Card>
            </Grid>
        
        );
    }
}
