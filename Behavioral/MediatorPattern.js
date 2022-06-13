// Allows to define an object known as  the mediator
// that encapsulate and controls how some set of
// objects interact with each other

// Object send message -> to a mediator, it handles the complex logic
// and routing, to decide where these messages need to go

// A chatroom, it has members, these members need to be able to send
// information and from each other, but they're not going  to send
// the messages directly to each other, they're going to send
// the messages to a chat room object which is going to be the mediator

function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  },
};

function ChatRoom() {
  this.members = {};
}

ChatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  },
};

const chat = new ChatRoom();

const bob = new Member("Bob");
const john = new Member("John");
const tim = new Member("Tim");

chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

bob.send("Hello John!", john);
john.send("What's up, Bob?", bob);
tim.send("John, are you ok?", john);
