import * as React from 'react';
import Countdown from '../../components/countdown/countdown';
import Course from '../../components/course/course';
import Details from '../../components/details/details';
import SocialMedia from '../../components/socialMedia/socialMedia';
import Story from '../../components/story/story';
import Technology from '../../components/technology/technology';
import Trainers from '../../components/trainers/trainers';

class Home extends React.Component {
  public render() {
    return (
    <div className="">
    <Countdown/>
    <Details/>
    <Course/>
    <Trainers/>
    <Technology/>
    <Story/>
    <SocialMedia/>
    </div>
    );
  }
}

export default Home;
