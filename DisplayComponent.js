import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import {styles} from './styles';
import checkbox from './assets/icons/ic_check_box_outline_blank.png';
import checkboxChecked from './assets/icons/ic_check_box.png';

export default class displayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {chosen: [],
      rejected: [],
      textStyles: [],
      anyValueChanged: false,
      selectedCount: 0,
      deselectedCount: 0,
      selectedList: [],
      selectedListTemp: [],
      selectedCandidateList: [],
    };
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }

renderGrid () {
  var children = this.props.children;
  var textStyles = this.props.textStyles;
  var renderedGrid = [];
  for(var i=0; i<children.length; i++){
    var dispName = children[i].name;
    var disp = (<TouchableOpacity key={dispName} onPress={this.showId.bind(this,dispName) } style={styles.gridItem}>
      <View>
      <Image source={this.props.children[i].isChecked?checkboxChecked:checkbox} style={{width: 10, height: 10}}/>
      <Text style={children[i].isChecked?textStyles[0]:textStyles[1]}> {children[i].name}</Text>
      <Image style={styles.itemImage} source={children[i].thumbnail} />
      <Text style={styles.textSecondary}>{children[i].flatNo}</Text>
      </View>
    </TouchableOpacity>);
    renderedGrid.push(disp);
  }
  return (renderedGrid);
}

showId (clickedName){
  for (i=0;i<this.props.children.length;i++){
    var clickedChecked = this.props.children[i].isChecked;
    var clickedCandidate = this.props.children[i].name;
    if (clickedName==clickedCandidate) {
      this.props.children[i].isChecked = !this.props.children[i].isChecked;
      this.setState({anyValueChanged: !this.state.anyValueChanged});
    }
  }
  this.props.callBackFunction(clickedName);
}


render = () => {
    const { textStyles, buttonStyles, children} = this.props;

    return (
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {this.renderGrid()}
          </View>
        </ScrollView>


      </View>
    );
  }
}
