import Meteor from 'meteor/meteor';

export const Users = Meteor.users;

if (Meteor.isServer) {
   Meteor.startup(() => {
      Meteor.publish('allUsers', () => Meteor.users.find( {},
         { fields: {
            'username': 1,
            'profile.text': 1,
            'profile.website': 1
            }
         }));
   });
}
