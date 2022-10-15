Talk.ready.then(function () {
    var me = new Talk.User({
      id: '123456',
      name: 'Alice',
      email: 'alice@example.com',
      photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
    });
    window.talkSession = new Talk.Session({
      appId: 'tNeG88Ox',
      me: me,
    });
    var other = new Talk.User({
      id: '654321',
      name: 'Marco',
      email: 'Marco@example.com',
      photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
      welcomeMessage: 'Hey, Are you listening to music?',
    });
  
    var conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );
    conversation.setParticipant(me);
    conversation.setParticipant(other);
  
    var inbox = talkSession.createInbox({ selected: conversation });
    inbox.mount(document.getElementById('talkjs-container'));
  });