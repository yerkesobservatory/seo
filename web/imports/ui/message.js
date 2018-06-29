import './message.html'

import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';

import $ from 'jquery';

//chatbox
import {SimpleChat} from 'meteor/cesarve:simple-chat/config'

Template.message.onCreated(function onCreated() {
    Meteor.subscribe('users');
    Meteor.subscribe('groups');
    
});

Template.message.helpers({
    'roomId':function () {
        return Router.current().params.roomId
    },
    'username': function () {
        return Meteor.userId()
    },
    'name': function () {
        return Meteor.user().profile.firstName
    },
    'othername': function () {
        return Router.current().params.othername
    },
    'room': function () {
        return 'conversation'
    },
});


SimpleChat.configure ({
    texts: {
            loadMore: 'Load More',
            placeholder: 'Type message ...',
            button: 'send',
            join: 'joined the',
            left: 'left',
            room: 'room at',

        },
        limit: 50,
        beep: true,
        showViewed: false,
        showReceived: false,
        showJoined: false,
        publishChats: function (roomId, limit) {
            return true;
        },
        allow: function (message, roomId, username, avatar, name) {
            return true;
        },
        onNewMessage: function (msg) {
            var otherId = Router.current().params.otherId;
            console.log(otherId);
            console.log(this._id);
            Meteor.users.update(this._id, {'$addToSet': {newMessageTo: otherId}});
            console.log(msg);
        },
        onReceiveMessage: function () {
            //add new message button
        },
        onJoin: function (roomId, username, name,date) {
            //server
        },
        onLeft: function (roomId, username, name,date) {
            //server
            //clear new message
        },
        height: '600px',
        inputTemplate: 'SimpleChatInput',
        loadMoreTemplate: 'LoadMore',
    
})




