import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') //class decorators
export class MessagesController {
    @Get() // method decorators
    listMessages() {

    }

    @Post()
    createMessage(@Body() body: CreateMessageDto ) {
        console.log(body);

    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);

    }
}
