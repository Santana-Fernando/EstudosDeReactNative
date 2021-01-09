import React, { Component } from 'react'
import { 
    View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    Platform, 
    Alert } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import commonStyles from '../commonStyles.js'
import TodayImage from '../../assets/imgs/today.jpg'
import TomorrowImage from '../../assets/imgs/tomorrow.jpg'
import WeekImage from '../../assets/imgs/week.jpg'
import MonthImage from '../../assets/imgs/month.jpg'
import Task from '../components/Task'

import Icon from 'react-native-vector-icons/FontAwesome'
import AddTask from './AdicionarTask'

import axios from 'axios'
import { server, showError } from '../common'

import moment from 'moment'
import 'moment/locale/pt-br'

const initialState = { 
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

export default class TaskList extends Component{
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState({
            showDoneTasks: state.showDoneTasks
        }, this.filterTasks)

        this.loadTasks()
    }

    loadTasks = async () => {
        try{
            const maxDate = moment().add({ days: this.props.daysAhead }).format('YYYY-MM-DD 23:59:59')

            const res = await axios.get(`${server}/tasks?date=${maxDate}`)

            this.setState({ tasks: res.data }, this.filterTasks)
        } catch(err) {
            showError(err)
        }
    }

    toggleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks}, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null

        if(this.state.showDoneTasks){
            visibleTasks = [...this.state.tasks]
        }else{
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('tasksState', JSON.stringify({
            showDoneTasks: this.state.showDoneTasks
        }))
    }

    toggleTask = async taskId => {
        try{
            await axios.put(`${server}/tasksToggle/${taskId}`)
            this.loadTasks()
        } catch(err) {
            showError(err)
        }
    }

    AddTask = async newTask => {
        if(!newTask.desc || !newTask.desc.trim()){
            Alert.alert(" Dados inválidos " , " Descrição não informada ")
            return
        }

        try {
            await axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })

            this.setState({ showAddTask: false}, this.loadTasks)

        } catch (err){
            await showError(err)
        }


    }

    deleteTask = async taskId => {
        try {
            await axios.delete(`${server}/tasks/${taskId}`)
            this.loadTasks()
        } catch(error) {
            showError(error)
        }
    }

    getImage = () => {
        switch(this.props.daysAhead){
            case 0: return TodayImage
            case 1: return TomorrowImage
            case 7: return WeekImage
            default: return MonthImage
        }
    }

    getColor = () => {
        switch(this.props.daysAhead){
            case 0: return commonStyles.colors.today
            case 1: return commonStyles.colors.tomorrow
            case 7: return commonStyles.colors.week
            default: return commonStyles.colors.month
        }
    }

    render(){
        const today = moment().locale('pt-br').format('ddd,  D [de] MMMM')
        return(
            <View style={styles.container}>
                <AddTask
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({showAddTask: false})}
                    onSave={this.AddTask}
                />
                <ImageBackground 
                    style={styles.background}
                    source={this.getImage()}
                >
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Icon
                                name='bars'
                                size={20}
                                color={commonStyles.colors.secondary}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon 
                                name={this.state.showDoneTasks ? "eye" : "eye-slash"} 
                                size={20}
                                color={commonStyles.colors.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.TitleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subTitle} >{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.TaskList}>
                    <FlatList 
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} onToggleTask = {this.toggleTask} onDelete={this.deleteTask}/> }
                    />
                </View>
                <TouchableOpacity style={[styles.addButton, {backgroundColor: this.getColor()}]}
                    activeOpacity={0.7}
                    onPress={() => this.setState({showAddTask: true})}
                >
                    <Icon name="plus" size={20} color={commonStyles.colors.secondary} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3,
    },
    TaskList: {
        flex: 7
    },
    TitleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    iconBar:{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: Platform.OS == 'ios'? 30 : 10
    },
    addButton:{
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center'
    }
})