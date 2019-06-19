import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "ng-marquee",
  templateUrl: "./ng-marquee.component.html",
  styleUrls: ["./ng-marquee.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMarqueeComponent implements OnInit {
  @Input() duration: string | number;
  @Input() marqueeId: string;
  animationElem: HTMLDivElement;

  constructor() {}

  updateDuration() {
    if (!this.duration) {
      return;
    }
    this.animationElem.style.animationDuration = `${this.duration}s`;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.animationElem = document.querySelector(
      `.ng-marquee-wrapper#${this.marqueeId} > div`
    ) as HTMLDivElement;
    this.updateDuration();
  }
}
