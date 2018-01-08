import React, {Component} from "react";
import { Text, Left, Right, Body, ListItem, Icon, Thumbnail } from 'native-base';
import * as actions from "../actions";
import { connect } from "react-redux";

class RestaurantItem extends Component {
    render() {
        
        let thumb = this.props.image_url ? <Thumbnail small source={{ uri: this.props.image_url }} /> : <Icon name='image' />;
        
        return (
            <ListItem avatar id={this.props.id} onPress={this.props.getDetails}>
                <Left>
                    {thumb}
                </Left> 
                <Body>
                    <Text>{this.props.name}</Text>
                    <Text note>{(this.props.distance / 1000).toFixed(2)} Km</Text>
                </Body>
                <Right>
                    <Icon name='ios-arrow-forward' />
                </Right>
                    
            </ListItem>
        )
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps);
    return {
        getDetails : () => dispatch(actions.getDetails(ownProps.id))
    };
}

export default connect(undefined, mapDispatchToProps)(RestaurantItem);
