import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';




class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"red"}
                 poster={require("./img/doctor-sleep.jpg")}/>
            <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"red"}
                   poster={require("./img/midway.jpg")}/>
            <Movie title={"Avengers Endgame"} year={2014} icon_name={"thumbs-up"} icon_color={"red"}
                   poster={{uri:"https://static2.tribute.ca/poster/660x980/avengers-endgame-encore-135915.jpg"}}/>

        </ScrollView>
    )
  }
}

export default AllMovies;

