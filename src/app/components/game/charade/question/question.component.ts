import { Component, Input, OnInit } from '@angular/core';
import { CharadeAnswerService } from 'src/app/services/charade-answer-service.service';
import { CharadeService } from 'src/app/services/charade-service.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private questionService: CharadeService,
    private answerService: CharadeAnswerService      
  ) { }

  ngOnInit(): void {
  }

  @Input() number: String = '';
  @Input() charade: String = '';
}
