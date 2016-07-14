class ChatsController {
  constructor(ChatsService, $scope) {
    this._ChatsService = ChatsService;
    this.chats = ChatsService.all();
  }

  remove(chat) {
    this._ChatsService.remove(chat);
  }

}

export default ChatsController;
