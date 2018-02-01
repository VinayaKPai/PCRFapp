import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';
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
      // renderedGrid: this.renderGrid(),
      renderedGrid: this.renderGrid(),
    };

    // var selectedListTemp = [];
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
  // alert("renderGrid");
  var children = this.props.children;
  var textStyles = this.props.textStyles;
  console.log("Funct Start");
  console.log(children);
  var renderedGrid = [];
  for(var i=0; i<children.length; i++){

    console.log(children[i]);
    //   renderedGrid.push(<TouchableOpacity key={i} onPress={this.showId = this.showId.bind(this, children[i])
    //   } style={styles.gridItem}>
    //     <View>
    //     <Image source={children[i].isChecked=='T'?checkboxChecked:checkbox} />
    //     <Text style={children[i].isChecked=='T'?textStyles[0]:textStyles[1]}> {children[i].name}</Text>
    //     <Image style={{width: 42, height: 42}} source={children[i].thumbnail} />
    //     <Text>{children[i].flatNo}</Text>
    //     </View>
    //   </TouchableOpacity>
    // );

    //ABOVE RENDERGRID GIVES AN ALERT OF [object OBJECT] for showid
    //WORKING ON THE RENDERGRID WITH MY ORIGINAL IDEA OF PUSHING A KEY VALUE PAIR INSTEAD OF ONLY A VIEW
    // CHANGES PLANNED #1 SAVE THE VIEW IN A VARIABLE FIRST, WHICH WILL BECOME THE VALUE FOR A KEY CALLED DISP
    //#2 INTRODUCE A KEY CALLED NAME, WHICH WILL INITIALLY BE HARDCODED BUT WILL LATER BE THE SAME AS THE NAME KEY IN THE ITEM PASSED FROM THE TESTPAGE
    var dispName = children[i].name;
    var disp = (<TouchableOpacity key={i} onPress={this.showId = this.showId.bind(this, children[i])
    } style={styles.gridItem}>
      <View>
      <Image source={children[i].isChecked=='T'?checkboxChecked:checkbox} />
      <Text style={children[i].isChecked=='T'?textStyles[0]:textStyles[1]}> {children[i].name}</Text>
      <Image style={{width: 42, height: 42}} source={children[i].thumbnail} />
      <Text>{children[i].flatNo}</Text>
      </View>
    </TouchableOpacity>);
    renderedGrid.push({disp,dispName});
    console.log(renderedGrid[i]);
    // alert("done");
    // this.setState({renderedGrid: renderedGrid});
  }
  return ([renderedGrid]);
}

//   showId (child){
// console.log("Before");
// console.log(child);
//     if (child.isChecked=='F'){
//       child.isChecked = 'T';
//       this.setState({anyValueChanged: true});
//       this.setState({ selectedCount: this.state.selectedCount + 1 });
//       var temp = this.state.selectedList;
//       temp.push(child.name);
//       this.setState({selectedList: temp});
//     }
//     else if (child.isChecked=='T'){
//       child.isChecked = 'F';
//       this.setState({anyValueChanged: false});
//       var removeIndex = this.state.selectedList.indexOf(child.name);
//       var temp = this.state.selectedList;
//       temp.splice(removeIndex, 1);
//       console.log(""+temp);
//       }
//       console.log("After");
//       console.log(child);
//     return child;
//   }

//ORIGINAL SHOWID ABOVE
//REFACTORED SHOWID FOR THE renderedGrid RENDERING below
//IF
showId (child){//child now holds renderedgrid i
console.log("Before");
console.log(child);
alert (child);
  // if (child.isChecked=='F'){
  //   child.isChecked = 'T';
  //   this.setState({anyValueChanged: true});
  //   this.setState({ selectedCount: this.state.selectedCount + 1 });
  //   var temp = this.state.selectedList;
  //   temp.push(child.name);
  //   this.setState({selectedList: temp});
  // }
  // else if (child.isChecked=='T'){
  //   child.isChecked = 'F';
  //   this.setState({anyValueChanged: false});
  //   var removeIndex = this.state.selectedList.indexOf(child.name);
  //   var temp = this.state.selectedList;
  //   temp.splice(removeIndex, 1);
  //   console.log(""+temp);
  //   }
  //   console.log("After");
  //   console.log(child);
  // return child;
}
  onSubmit(childrenTemp) {
    var selectedCandidateList = [];
    for(var i=0; i<childrenTemp.length; i++){
      if (childrenTemp[i].isChecked=='T') {
        selectedCandidateList.push(childrenTemp[i]);
      }
    }
    this.setState({selectedCandidateList: selectedCandidateList});
    console.log(selectedCandidateList);
  }

render = () => {
    const { textStyles, buttonStyles, children} = this.props;

    return (
      <View>
        <Text>Total Selected = {this.state.selectedCount-this.state.deselectedCount}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>

            <TouchableOpacity onPress={() => children[0] = this.showId(children[0])} style={styles.gridItem}>
              <View>
                <Image source={children[0].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[0].isChecked=='T'?textStyles[0]:textStyles[1]}> {children[0].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[0].thumbnail} />
                <Text>{children[0].name}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => children[1] = this.showId(children[1])} style={styles.gridItem}>
              <View>
                <Image source={children[1].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[1].isChecked=='T'?textStyles[0]:textStyles[1]}>{children[1].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[1].thumbnail} />
                <Text>{children[1].name}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => children[2] = this.showId(children[2])} style={styles.gridItem}>
              <View>
                <Image source={children[2].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[2].isChecked=='T'?textStyles[0]:textStyles[1]}> {children[2].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[2].thumbnail} />
                <Text>{children[2].name}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => children[3] = this.showId(children[3])} style={styles.gridItem}>
              <View>
                <Image source={children[3].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[3].isChecked=='T'?textStyles[0]:textStyles[1]}>{children[3].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[3].thumbnail} />
                <Text>{children[3].name}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => children[4] = this.showId(children[4])} style={styles.gridItem}>
              <View>
                <Image source={children[4].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[4].isChecked=='T'?textStyles[0]:textStyles[1]}>{children[4].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[4].thumbnail} />
                <Text>{children[4].name}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => children[5] = this.showId(children[5])} style={styles.gridItem}>
              <View>
                <Image source={children[5].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[5].isChecked=='T'?textStyles[0]:textStyles[1]}>{children[5].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[5].thumbnail} />
                <Text>{children[5].name}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => children[6] = this.showId(children[6])} style={styles.gridItem}>
              <View>
                <Image source={children[6].isChecked=='T'?checkboxChecked:checkbox} />
                <Text style={children[6].isChecked=='T'?textStyles[0]:textStyles[1]}>{children[6].name}</Text>
                <Image style={{width: 42, height: 42}} source={children[6].thumbnail} />
                <Text>{children[6].name}</Text>
              </View>
            </TouchableOpacity>
            <Button
              onPress={() => this.onSubmit(children)}
              title="Submit selected Candidates"
            />
            <Text>My Voted Candidates =     {""+this.state.selectedList}
            </Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>

          {this.state.renderedGrid}
          <Text>Last Textbox</Text>
        </View>
      </View>
    );
  }
}
