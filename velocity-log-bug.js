if (Meteor.isClient) {
    Template.hello.events({
        'click button': function () {
            Meteor.call('foobar');
        }
    });
}

if (Meteor.isServer) {
    Meteor.methods({
        foobar: function () {
            throw new Error("narv!");
        }
    })
}
