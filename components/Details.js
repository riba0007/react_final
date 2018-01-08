import React, {Component} from "react";
import { Text, Body, Card, CardItem, Thumbnail, Left, Icon, H3} from 'native-base';
import * as actions from "../actions";
import { connect } from "react-redux";

class Details extends Component {
    render() {
        
        let thumb = this.props.item.image_url ? <Thumbnail small source={{ uri: this.props.item.image_url }} /> : <Icon name='image' />;
        
        return (
            <Card>
                <CardItem header>
                    <Left>
                        {thumb}
                        <Body>
                            <H3>{this.props.item.name}</H3>
                        </Body>
                    </Left> 
                </CardItem>
                <CardItem cardBody>
                    <Left>
                        <Body>
                            <Text>Phone: {this.props.item.phone}</Text>
                            <Text>Price: {this.props.item.price}</Text>
                            <Text>Rating: {this.props.item.rating}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem footer>
                  <Text note>{(this.props.item.distance / 1000).toFixed(2)} Km</Text>
                </CardItem>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.selectedItem
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps);
    return {
        getDetails : () => dispatch(actions.getDetails(ownProps.id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
