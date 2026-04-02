import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput = '';
  messages: Message[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    const content = this.userInput.trim();
    if (!content) return;

    this.messages.push({ sender: 'user', content });
    this.userInput = '';

    this.chatService.sendMessage(content).subscribe((reply) => {
      this.messages.push({ sender: 'bot', content: reply.reply });
    });
  }
}
