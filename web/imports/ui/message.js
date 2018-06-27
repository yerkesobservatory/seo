import './message.html'

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import $ from 'jquery';

//chatbox
import {SimpleChat} from 'meteor/cesarve:simple-chat/config'


//SimpleChat.helpers()

SimpleChat.configure ({
    texts:{
        loadMore: 'Load More',
        placeholder: 'Type message ...',
        button: 'send',
        join: 'joined the',
        left: 'left',
        room: 'room at'

    },
    roomId: 'First Room!',//A function that returns the user id
    username: Meteor.userId(),//Get user first name and last name
    name: Meteor.userId(),//Get user first name and last name
    limit: 10,
    beep: true, 
    showViewed: true,
    showReceived: true,
    showJoined: true,
    /*
    publishChats: function(roomId, limi){ //server
       //here the context is the same for a Publications, that mean you have access to this.userId who are asking for subscribe.
       // for example
       //return isLoggedAndHasAccessToSeeMessage(this.userId)
    },
    allow: function(message, roomId, username, avatar, name){
       //here the context is the same for a Methods, thats mean you hace access to this.userId also
       // for example
       //return isLoggedAndHasAccessSendMessages(this.userId)
        return true
    },
    onNewMessage:function(msg){  //both
    },
    onReceiveMessage:function(id, message, room){ //server
        
    },
    onJoin:function(roomId, username, name,date){  //server
    },
    onLeft:function(roomId, username, name,date) { //server
    },
    height: '300px', // Configure the height of the chat
    inputTemplate: 'SimpleChatInput', // In case you want to overwrite the template
    loadMoreTemplate: 'LoadMore', // In case you want to overwrite the template*/
});