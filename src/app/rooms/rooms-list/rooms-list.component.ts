import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { RoomList } from "../rooms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-rooms-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./rooms-list.component.html",
  styleUrl: "./rooms-list.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = "";

  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
