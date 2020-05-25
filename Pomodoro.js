import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './utils/component.style';
import Time from './utils/Time';

import Status from './utils/Status';
import {
    tick,
    clickDecreaseWorkTime,
    clickIncreaseWorkTime,
    clickDecreaseBreakTime,
    clickIncreaseBreakTime,
  } from './utils/actions';

//import ClickableTimer from './ClickableTimer';
//import EditableTimer from './EditableTimer';

const defaultWorkTime = 25 * 60;
const defaultBreakTime = 5 * 60;

//<Text style={styles.statusLine}>Work Time</Text>

class Pomodoro extends Component {
    constructor() {
        super();
        this.state = {
            status: 'stoppedWork',
            workTime: defaultWorkTime,
            breakTime: defaultBreakTime,
            timeLeft: defaultWorkTime,
            isStarted: false,
        };
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            if (this.state.isStarted){
                this.setState(tick);
            }
            
        }, 1000);
    }

    
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    handleClickTimer = () => {
        const { status } = this.state;
    
        if (status === 'work') {
          this.setState({
            status: 'stoppedWork',
            isStarted: false,    
          });
        } else if (status === 'stoppedWork') {
          this.setState({
            status: 'work',
            isStarted: true,
          });
        } else if (status === 'break') {
          this.setState({
            status: 'stoppedBreak',
            isStarted: false,
          });
        } else if (status === 'stoppedBreak') {
          this.setState({
            status: 'break',
            isStarted: true,
          });
        }
    }

    handleClickDecreaseWorkTime = () => {
        this.setState(clickDecreaseWorkTime);
    }

    handleClickIncreaseWorkTime = () => {
        this.setState(clickIncreaseWorkTime);
    }

    handleClickDecreaseBreakTime = () => {
        this.setState(clickDecreaseBreakTime);
    }

    handleClickIncreaseBreakTime = () => {
        this.setState(clickIncreaseBreakTime);
    }

    resetTimer = () => {
        //clearInterval(this.interval);
        
        this.setState({
            status: 'stoppedWork',
            workTime: defaultWorkTime,
            breakTime: defaultBreakTime,
            timeLeft: defaultWorkTime,
            isStarted: false,
        });
    }

    render() {
        const { status, workTime, breakTime, timeLeft, isStarted } = this.state;
        return (
            <View style={styles.container}>
                <Status status={status} />
                <View style={styles.bgTimer}>
                    <Text style={styles.timer}><Time time={timeLeft} /></Text>
                </View>
                <View style={styles.lineButton}>
                    <Button titleStyle={styles.titleButton} buttonStyle={styles.appButton} title={isStarted ? "Stop" : "Start" } onPress={this.handleClickTimer}/>
                    <Button titleStyle={styles.titleButton} buttonStyle={styles.appButton} title='Reset' onPress={this.resetTimer}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Session length</Text>
                    <View style={styles.inputTime}>
                    <Button titleStyle={styles.editTitle} buttonStyle={styles.editButton} title="-" onPress={this.handleClickDecreaseWorkTime}/>
                    <Text style={styles.editTimer}><Time time={workTime}/></Text>
                    <Button titleStyle={styles.editTitle} buttonStyle={styles.editButton} title="+" onPress={this.handleClickIncreaseWorkTime}/>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Break length</Text>
                    <View style={styles.inputTime}>
                    <Button titleStyle={styles.editTitle} buttonStyle={styles.editButton} title="-" onPress={this.handleClickDecreaseBreakTime}/>
                    <Text style={styles.editTimer}><Time time={breakTime}/></Text>
                    <Button titleStyle={styles.editTitle} buttonStyle={styles.editButton} title="+" onPress={this.handleClickIncreaseBreakTime}/>
                    </View>
                </View>
            </View>
        )
    }
}
export default Pomodoro;
