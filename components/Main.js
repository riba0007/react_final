import React, {Component} from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Body, Text, Left, Icon, Right, Spinner} from 'native-base';
import RestaurantList from "./RestaurantList";
import Details from "./Details";
import * as actions from "../actions";
import { connect } from "react-redux";
import {PAGE_LIST, PAGE_DETAILS, PAGE_LOAD} from '../pages';

class Main extends Component {
    render() {
        
        let header;
        let body;
        
        switch (this.props.page) {
            case PAGE_DETAILS:
                
                header = (
                    <Button transparent onPress={this.props.returnToList}>
                        <Icon name='arrow-back' />
                    </Button>
                );

                body = <Details/>;
                
                break;
            case PAGE_LIST:
                
                body = (
                    <Content>
                        <Button full primary onPress={this.props.fetchData}>
                            <Text>Find restaurants nearby</Text>
                        </Button>

                        <RestaurantList/>
                    </Content>
                );
                
                break;
            case PAGE_LOAD:
                body = <Spinner />;
                break;
            default:
                body = <Text>Error loading the app.</Text>
            
        }
        
        return (
            <Container>
                <Header>
                    <Left>
                        {header}
                    </Left>
                    <Body>
                        <Title>{this.props.selectedItem ? this.props.selectedItem.name : 'Restaurants'}</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    
                    {body}
        
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>&copy; Priscila Ribas da Costa</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        page: state.page,
        selectedItem: state.selectedItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData : () => dispatch(actions.getGeolocalizedList()),
        returnToList: () => dispatch(actions.returnToList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
