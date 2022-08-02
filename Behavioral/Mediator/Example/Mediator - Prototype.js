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