import Meteor from 'meteor/meteor';

if (Meteor.isServer) {
   Meteor.publish('allUsers', function usersPublication() {
      return Meteor.users.find({}, {fields: {username: 1});
   });
}
