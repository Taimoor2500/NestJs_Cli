import { MessagesRepository } from "./messages.repository"

export class MessagesService {

    messageRepo: MessagesRepository;
    constructor() {
        // service creates its own dependencies which we do not need use DI
        this.messageRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messageRepo.findOne(id);
    }

    findAll() {
        return this.messageRepo.findAll();
    }

    create(content: string) {
        return this.messageRepo.create(content);
    }

}